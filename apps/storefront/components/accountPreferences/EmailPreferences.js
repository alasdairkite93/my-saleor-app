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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailPreferences = void 0;
const react_1 = __importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const react_intl_1 = require("react-intl");
const api_1 = require("@/saleor/api");
const translations_1 = require("../translations");
function EmailPreferences() {
  const t = (0, react_intl_1.useIntl)();
  const [requestEmailChange] = (0, api_1.useRequestEmailChangeMutation)({});
  const [successMessage, setSuccessMessage] = react_1.default.useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = (0, react_hook_form_1.useForm)();
  const onEmailPreferenceSubmit = handleSubmit((formData) =>
    __awaiter(this, void 0, void 0, function* () {
      var _a, _b, _c, _d;
      const result = yield requestEmailChange({
        variables: {
          newEmail: formData.newEmail,
          password: formData.password,
          redirectUrl: `https://${window.location.host}/account/preferences`,
        },
      });
      const mutationErrors =
        ((_b =
          (_a = result === null || result === void 0 ? void 0 : result.data) === null ||
          _a === void 0
            ? void 0
            : _a.requestEmailChange) === null || _b === void 0
          ? void 0
          : _b.errors) || [];
      if (mutationErrors.length > 0) {
        mutationErrors.forEach((e) =>
          setError(e.field, {
            message: e.message || "",
          })
        );
      } else if (
        (_d = (_c = result.data) === null || _c === void 0 ? void 0 : _c.requestEmailChange) ===
          null || _d === void 0
          ? void 0
          : _d.user
      ) {
        setSuccessMessage("Email changed successfully. Check your mailbox for confirmation email.");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      }
    })
  );
  return (
    <div className="mt-4 mb-4">
      <h2 className="checkout-section-header-active mb-2">Change email</h2>
      <form method="post" onSubmit={onEmailPreferenceSubmit}>
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-full">
            <label htmlFor="newEmail" className="block pl-1 text-sm font-medium text-gray-700">
              {t.formatMessage(translations_1.messages.loginEmailFieldLabel)}
            </label>
            <input
              className="px-4 py-2 rounded-md text-sm outline-none w-full"
              type="email"
              id="newEmail"
              spellCheck={false}
              {...register("newEmail", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            {!!errors.newEmail && (
              <p className="mt-2 text-sm text-red-600">{errors.newEmail.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 w-full mt-2">
          <div className="col-span-full">
            <label htmlFor="password" className="block pl-1 text-sm font-medium text-gray-700">
              {t.formatMessage(translations_1.messages.loginPasswordFieldLabel)}
            </label>
            <input
              className="px-4 py-2 rounded-md text-sm outline-none w-full"
              type="password"
              id="password"
              spellCheck={false}
              {...register("password", {
                required: true,
              })}
            />
            {!!errors.password && (
              <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>
        </div>
        {!!successMessage && <p className="mt-2 text-sm text-green-600">{successMessage}</p>}
        <div>
          <button
            className="mt-2 w-40 bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
            onClick={() => onEmailPreferenceSubmit()}
            type="submit"
          >
            {t.formatMessage(translations_1.messages.saveButton)}
          </button>
        </div>
      </form>
    </div>
  );
}
exports.EmailPreferences = EmailPreferences;
exports.default = EmailPreferences;
