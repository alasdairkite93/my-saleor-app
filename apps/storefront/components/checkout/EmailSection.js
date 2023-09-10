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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSection = void 0;
const react_1 = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const react_intl_1 = require("react-intl");
const api_1 = require("@/saleor/api");
const Button_1 = require("../Button");
const RegionsProvider_1 = require("../RegionsProvider");
const translations_1 = require("../translations");
function EmailSection({ checkout }) {
  var _a;
  const t = (0, react_intl_1.useIntl)();
  const { query } = (0, RegionsProvider_1.useRegions)();
  const [modifyEmail, setModifyEmail] = (0, react_1.useState)(
    !(checkout === null || checkout === void 0 ? void 0 : checkout.email)
  );
  const [checkoutEmailUpdate] = (0, api_1.useCheckoutEmailUpdateMutation)({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = (0, react_hook_form_1.useForm)({
    defaultValues: {
      email: (checkout === null || checkout === void 0 ? void 0 : checkout.email) || "",
    },
  });
  const onEmailFormSubmit = handleSubmit((formData) =>
    __awaiter(this, void 0, void 0, function* () {
      var _b, _c;
      const result = yield checkoutEmailUpdate({
        variables: {
          email: formData.email,
          token: checkout === null || checkout === void 0 ? void 0 : checkout.token,
          locale: query.locale,
        },
      });
      const mutationErrors =
        ((_c = (_b = result.data) === null || _b === void 0 ? void 0 : _b.checkoutEmailUpdate) ===
          null || _c === void 0
          ? void 0
          : _c.errors) || [];
      if (mutationErrors.length > 0) {
        mutationErrors.forEach((e) => setError("email", { message: e.message || "" }));
        return;
      }
      setModifyEmail(false);
    })
  );
  return (
    <>
      <div className="mt-4 mb-4">
        <h2 className="checkout-section-header-active">
          {t.formatMessage(translations_1.messages.emailAddressCardHeader)}
        </h2>
      </div>
      {!modifyEmail ? (
        <div className="flex justify-between items-center">
          <p className="text-base">
            {checkout === null || checkout === void 0 ? void 0 : checkout.email}
          </p>
          <Button_1.Button onClick={() => setModifyEmail(true)}>
            {t.formatMessage(translations_1.messages.changeButton)}
          </Button_1.Button>
        </div>
      ) : (
        <form method="post" onSubmit={onEmailFormSubmit}>
          <div className="grid grid-cols-12 gap-4 w-full">
            <div className="col-span-full">
              <input
                type="text"
                autoComplete="email"
                className="w-full border-gray-300 rounded-lg shadow-sm text-base"
                spellCheck={false}
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <p>{(_a = errors.email) === null || _a === void 0 ? void 0 : _a.message}</p>
            </div>
            <div className="col-span-full">
              <button type="submit" className="btn-checkout-section">
                {t.formatMessage(translations_1.messages.saveButton)}
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
exports.EmailSection = EmailSection;
exports.default = EmailSection;
