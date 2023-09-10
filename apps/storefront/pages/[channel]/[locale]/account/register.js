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
const link_1 = __importDefault(require("next/link"));
const router_1 = require("next/router");
const react_1 = __importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const react_intl_1 = require("react-intl");
const translations_1 = require("@/components/translations");
const paths_1 = require("@/lib/paths");
const api_1 = require("@/saleor/api");
const RegionsProvider_1 = require("@/components/RegionsProvider");
function RegisterPage() {
  var _a, _b;
  const router = (0, router_1.useRouter)();
  const paths = (0, paths_1.usePaths)();
  const [register] = (0, api_1.useRegisterMutation)();
  const { currentChannel } = (0, RegionsProvider_1.useRegions)();
  const t = (0, react_intl_1.useIntl)();
  const {
    register: registerForm,
    handleSubmit: handleSubmitForm,
    formState: { errors: errorsForm },
    setError: setErrorForm,
  } = (0, react_hook_form_1.useForm)({});
  const handleRegister = handleSubmitForm((formData) =>
    __awaiter(this, void 0, void 0, function* () {
      var _c, _d;
      const { data } = yield register({
        variables: {
          input: {
            email: formData.email,
            password: formData.password,
            redirectUrl: `${window.location.origin}/account/confirm`,
            channel: currentChannel.slug,
          },
        },
      });
      if (
        (_c = data === null || data === void 0 ? void 0 : data.accountRegister) === null ||
        _c === void 0
          ? void 0
          : _c.errors.length
      ) {
        // Unable to sign in.
        (_d = data === null || data === void 0 ? void 0 : data.accountRegister) === null ||
        _d === void 0
          ? void 0
          : _d.errors.forEach((e) => {
              if (e.field === "email") {
                setErrorForm("email", {
                  message: (e === null || e === void 0 ? void 0 : e.message) || undefined,
                });
              } else if (e.field === "password") {
                setErrorForm("password", {
                  message: (e === null || e === void 0 ? void 0 : e.message) || undefined,
                });
              } else {
                console.error("Registration error:", e);
              }
            });
        return;
      }
      // User signed in successfully.
      void router.push(paths.$url());
    })
  );
  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center bg-gradient-to-r from-blue-100 to-blue-500">
      <div className="flex justify-end">
        <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">
          <div>
            <form method="post" onSubmit={handleRegister}>
              <div>
                <h1 className="text-2xl font-bold">
                  {t.formatMessage(translations_1.messages.registerHeader)}
                </h1>
              </div>

              <div className="my-3">
                <label htmlFor="email" className="block text-md mb-2">
                  {t.formatMessage(translations_1.messages.registerEmailFieldLabel)}
                </label>
                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="email"
                  id="email"
                  spellCheck={false}
                  {...registerForm("email", {
                    required: true,
                  })}
                />
                {!!errorsForm.email && (
                  <p className="text-sm text-red-500 pt-2">
                    {(_a = errorsForm.email) === null || _a === void 0 ? void 0 : _a.message}
                  </p>
                )}
              </div>
              <div className="mt-5">
                <label htmlFor="password" className="block text-md mb-2">
                  {t.formatMessage(translations_1.messages.registerPasswordFieldLabel)}
                </label>
                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="password"
                  id="password"
                  spellCheck={false}
                  {...registerForm("password", {
                    required: true,
                  })}
                />
                {!!errorsForm.password && (
                  <p className="text-sm text-red-500 pt-2">
                    {(_b = errorsForm.password) === null || _b === void 0 ? void 0 : _b.message}
                  </p>
                )}
              </div>

              <div className="">
                <button
                  type="submit"
                  className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
                >
                  {t.formatMessage(translations_1.messages.registerButton)}
                </button>
              </div>
            </form>
            <p className="mt-8">
              <link_1.default href={paths.account.login.$url()}>
                {t.formatMessage(translations_1.messages.backToLogin)}
              </link_1.default>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
exports.default = RegisterPage;
