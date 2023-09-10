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
const const_1 = require("@/lib/const");
const paths_1 = require("@/lib/paths");
const auth_1 = require("@/lib/auth");
function LoginPage() {
  var _a, _b;
  const router = (0, router_1.useRouter)();
  const paths = (0, paths_1.usePaths)();
  const t = (0, react_intl_1.useIntl)();
  const { signIn } = (0, auth_1.useSaleorAuthContext)();
  const defaultValues = const_1.DEMO_MODE
    ? {
        email: "admin@example.com",
        password: "admin",
      }
    : {};
  const {
    register: registerForm,
    handleSubmit: handleSubmitForm,
    formState: { errors: errorsForm },
    setError: setErrorForm,
  } = (0, react_hook_form_1.useForm)({ defaultValues });
  const routerQueryNext =
    ((_a = router.query.next) === null || _a === void 0 ? void 0 : _a.toString()) || "";
  const handleLogin = handleSubmitForm((formData) =>
    __awaiter(this, void 0, void 0, function* () {
      var _c, _d;
      const { data } = yield signIn({
        email: formData.email,
        password: formData.password,
      });
      if (
        (_d =
          (_c = data === null || data === void 0 ? void 0 : data.tokenCreate) === null ||
          _c === void 0
            ? void 0
            : _c.errors) === null || _d === void 0
          ? void 0
          : _d.length
      ) {
        setErrorForm("email", { message: "Invalid credentials" });
        return;
      }
      const redirectURL =
        (routerQueryNext && new URL(routerQueryNext, window.location.toString()).pathname) ||
        paths.$url();
      void router.push(redirectURL);
    })
  );
  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center bg-gradient-to-r from-blue-100 to-blue-500">
      <div className="flex justify-end">
        <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">
          <div>
            <form method="post" onSubmit={handleLogin}>
              <div>
                <span className="text-sm text-gray-900">
                  {t.formatMessage(translations_1.messages.loginWelcomeMessage)}
                </span>
                <h1 className="text-2xl font-bold">
                  {t.formatMessage(translations_1.messages.loginHeader)}
                </h1>
              </div>

              <div className="my-3">
                <label htmlFor="email" className="block text-md mb-2">
                  {t.formatMessage(translations_1.messages.loginEmailFieldLabel)}
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
              </div>
              <div className="mt-5">
                <label htmlFor="password" className="block text-md mb-2">
                  {t.formatMessage(translations_1.messages.loginPasswordFieldLabel)}
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
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-blue-700 hover:underline cursor-pointer pt-2">
                  {t.formatMessage(translations_1.messages.loginRemindPasswordButtonLabel)}
                </span>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
                >
                  {t.formatMessage(translations_1.messages.logIn)}
                </button>
                {!!errorsForm.email && (
                  <p className="text-sm text-red-500 pt-2">
                    {(_b = errorsForm.email) === null || _b === void 0 ? void 0 : _b.message}
                  </p>
                )}
              </div>
            </form>
            <p className="mt-8">
              <link_1.default href={paths.account.register.$url()}>
                {t.formatMessage(translations_1.messages.createAccount)}
              </link_1.default>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
exports.default = LoginPage;
