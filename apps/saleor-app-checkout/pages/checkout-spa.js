"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const dynamic_1 = __importDefault(require("next/dynamic"));
const react_1 = require("react");
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const url_join_1 = __importDefault(require("url-join"));
const CheckoutStoreFront = (0, dynamic_1.default)(
  () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const { Root } = yield Promise.resolve().then(() =>
        __importStar(require("@saleor/checkout-storefront"))
      );
      return Root;
    }),
  {
    ssr: false,
    loading: () => null,
  }
);
function CheckoutSpa() {
  const [isClient, setIsClient] = (0, react_1.useState)(false);
  (0, react_1.useEffect)(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  const checkoutAppUrl = (0, url_join_1.default)(
    window.location.origin,
    "saleor-app-checkout",
    "/"
  );
  const allowedSaleorApiRegex = process.env.NEXT_PUBLIC_ALLOWED_SALEOR_API_REGEX;
  (0, ts_invariant_1.default)(
    allowedSaleorApiRegex,
    `Missing NEXT_PUBLIC_ALLOWED_SALEOR_API_REGEX`
  );
  return (
    <CheckoutStoreFront
      env={{
        checkoutApiUrl: (0, url_join_1.default)(checkoutAppUrl, "api", "/"),
        checkoutAppUrl,
      }}
      saleorApiUrlRegex={new RegExp(allowedSaleorApiRegex)}
    />
  );
}
exports.default = CheckoutSpa;
