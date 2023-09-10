"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const api_library_1 = require("@adyen/api-library");
const api_client_1 = require("@mollie/api-client");
const utils_1 = require("@/saleor-app-checkout/backend/utils");
const getOrderPaymentDetails_1 = require("@/saleor-app-checkout/backend/payments/getOrderPaymentDetails");
const verifySession_1 = require("@/saleor-app-checkout/backend/payments/providers/adyen/verifySession");
const verifySession_2 = require("@/saleor-app-checkout/backend/payments/providers/mollie/verifySession");
const auth_1 = require("@/saleor-app-checkout/backend/auth");
const unpackErrors_1 = require("@/saleor-app-checkout/utils/unpackErrors");
const adyenHandler = ({ saleorApiUrl, sessionId }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const session = yield (0, verifySession_1.verifyAdyenSession)(saleorApiUrl, sessionId);
    const StatusEnum = api_library_1.Types.checkout.PaymentLinkResponse.StatusEnum;
    if (session.status === StatusEnum.Active) {
      // Session was previously generated but has not been completed
      return {
        status: "UNPAID",
        sessionLink: session.url,
      };
    } else if ([StatusEnum.Completed, StatusEnum.PaymentPending].includes(session.status)) {
      // Session was successfully completed but Saleor has not yet registered the payment
      return {
        status: "PENDING",
      };
    } else if (session.status === StatusEnum.Expired) {
      return {
        status: "UNPAID",
      };
    } else {
      throw new Error("Session status unknown");
    }
  });
const mollieHandler = ({ saleorApiUrl, sessionId }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const session = yield (0, verifySession_2.verifyMollieSession)({
      saleorApiUrl,
      session: sessionId,
    });
    if (session.status === api_client_1.OrderStatus.created) {
      // Session was previously generated but has not been completed
      return {
        status: "UNPAID",
        sessionLink: session.url,
      };
    } else if (
      [
        api_client_1.OrderStatus.authorized,
        api_client_1.OrderStatus.completed,
        api_client_1.OrderStatus.paid,
        api_client_1.OrderStatus.pending,
        api_client_1.OrderStatus.shipping,
      ].includes(session.status)
    ) {
      // Session was successfully completed but Saleor has not yet registered the payment
      return {
        status: "PENDING",
      };
    } else if (
      [api_client_1.OrderStatus.expired, api_client_1.OrderStatus.canceled].includes(session.status)
    ) {
      return {
        status: "UNPAID",
      };
    } else {
      throw new Error("Session status unknown");
    }
  });
const handler = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    if (req.method !== "GET") {
      res.status(405).send({ message: "Only GET requests allowed" });
      return;
    }
    const [saleorApiUrlError, saleorApiUrl] = (0, unpackErrors_1.unpackThrowable)(() =>
      (0, auth_1.getSaleorApiUrlFromRequest)(req)
    );
    if (saleorApiUrlError) {
      res.status(400).json({ message: saleorApiUrlError.message });
      return;
    }
    const orderId = req.query.orderId;
    const order = yield (0, getOrderPaymentDetails_1.getOrderPaymentDetails)(saleorApiUrl, {
      id: orderId,
    });
    if ("errors" in order) {
      return res.status(400).json({
        ok: false,
        errors: order.errors,
      });
    }
    let response = {
      status: "UNPAID",
    };
    // INFO: This logic needs to be revisited for multi-payment flow
    if (
      order.data.isPaid ||
      order.data.authorizeStatus === "FULL" ||
      order.data.chargeStatus === "FULL"
    ) {
      response.status = "PAID";
    } else if (order.data.privateMetafield) {
      const data = JSON.parse(order.data.privateMetafield);
      if (data.provider === "adyen") {
        response = yield adyenHandler({ saleorApiUrl, sessionId: data.session });
      } else if (data.provider === "mollie") {
        response = yield mollieHandler({ saleorApiUrl, sessionId: data.session });
      }
    }
    res.status(200).json(response);
  });
exports.default = (0, utils_1.allowCors)(handler);
