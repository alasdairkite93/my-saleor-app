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
exports.PasswordPreferences = void 0;
const react_1 = __importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const react_intl_1 = require("react-intl");
const api_1 = require("@/saleor/api");
const translations_1 = require("../translations");
function PasswordPreferences() {
  const t = (0, react_intl_1.useIntl)();
  const [passwordChangeMutation] = (0, api_1.usePasswordChangeMutation)({});
  const [successMessage, setSuccessMessage] = react_1.default.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = (0, react_hook_form_1.useForm)();
  const onPasswordPreferenceSubmit = handleSubmit((formData) =>
    __awaiter(this, void 0, void 0, function* () {
      var _a, _b, _c, _d;
      if (formData.newPassword !== formData.newPasswordRepeat) {
        setError("newPasswordRepeat", { message: "Passwords have to match." });
      } else {
        const result = yield passwordChangeMutation({
          variables: {
            newPassword: formData.newPassword,
            oldPassword: formData.oldPassword,
          },
        });
        const mutationErrors =
          ((_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.passwordChange) ===
            null || _b === void 0
            ? void 0
            : _b.errors) || [];
        if (mutationErrors.length > 0) {
          mutationErrors.forEach((e) =>
            setError(e.field, {
              message: e.message || "",
            })
          );
        } else if (
          (_d = (_c = result.data) === null || _c === void 0 ? void 0 : _c.passwordChange) ===
            null || _d === void 0
            ? void 0
            : _d.user
        ) {
          setSuccessMessage("Password changed successfully.");
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
        }
      }
    })
  );
  return (
    <div className="mt-4 mb-4">
      <h2 className="checkout-section-header-active mb-2">
        {t.formatMessage(translations_1.messages.changePasswordHeader)}
      </h2>
      <form method="post" onSubmit={onPasswordPreferenceSubmit}>
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-full">
            <label htmlFor="oldPassword" className="block pl-1 text-sm font-medium text-gray-700">
              {t.formatMessage(translations_1.messages.oldPasswordFieldLabel)}
            </label>
            <input
              className="px-4 py-2 rounded-md text-sm outline-none w-full"
              type="password"
              placeholder="Old password"
              id="oldPassword"
              spellCheck={false}
              {...register("oldPassword", {
                required: true,
              })}
            />
            {!!errors.oldPassword && (
              <p className="mt-2 text-sm text-red-600">{errors.oldPassword.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 w-full mt-2">
          <div className="col-span-full">
            <label htmlFor="newPassword" className="block pl-1 text-sm font-medium text-gray-700">
              {t.formatMessage(translations_1.messages.newPasswordFieldLabel)}
            </label>
            <input
              className="px-4 py-2 rounded-md text-sm outline-none w-full"
              type="password"
              placeholder="New password"
              id="newPassword"
              spellCheck={false}
              {...register("newPassword", {
                required: true,
              })}
            />
            {!!errors.newPassword && (
              <p className="mt-2 text-sm text-red-600">{errors.newPassword.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 w-full mt-2">
          <div className="col-span-full">
            <label htmlFor="password" className="block pl-1 text-sm font-medium text-gray-700">
              {t.formatMessage(translations_1.messages.newPasswordRepeatedFieldLabel)}
            </label>
            <input
              className="px-4 py-2 rounded-md text-sm outline-none w-full"
              type="password"
              placeholder="Repeat new password"
              id="password"
              spellCheck={false}
              {...register("newPasswordRepeat", {
                required: true,
              })}
            />
            {!!errors.newPasswordRepeat && (
              <p className="mt-2 text-sm text-red-600">{errors.newPasswordRepeat.message}</p>
            )}
          </div>
        </div>
        {!!successMessage && <p className="mt-2 text-sm text-green-600">{successMessage}</p>}
        <div>
          <button
            className="mt-2 w-40 bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
            onClick={() => onPasswordPreferenceSubmit()}
            type="submit"
          >
            {t.formatMessage(translations_1.messages.saveButton)}
          </button>
        </div>
      </form>
    </div>
  );
}
exports.PasswordPreferences = PasswordPreferences;
exports.default = PasswordPreferences;
