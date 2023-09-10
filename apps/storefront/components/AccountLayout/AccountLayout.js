"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountLayout = void 0;
const router_1 = require("next/router");
const react_1 = __importDefault(require("react"));
const components_1 = require("@/components");
const NavigationPanel_1 = require("@/components/NavigationPanel");
const paths_1 = require("@/lib/paths");
const useUser_1 = require("@/lib/useUser");
const auth_1 = require("@/lib/auth");
function AccountLayout({ children }) {
  const router = (0, router_1.useRouter)();
  const paths = (0, paths_1.usePaths)();
  const { authenticated } = (0, useUser_1.useUser)();
  const { isAuthenticating } = (0, auth_1.useSaleorAuthContext)();
  if (isAuthenticating) {
    return (
      <components_1.Layout>
        <components_1.Spinner />
      </components_1.Layout>
    );
  }
  if (!authenticated) {
    if (router.isReady && typeof window !== "undefined") {
      void router.replace(
        paths.account.login.$url({
          query: { next: router === null || router === void 0 ? void 0 : router.asPath },
        })
      );
    }
    return null;
  }
  return (
    <components_1.Layout>
      <div className="py-10">
        <main className="flex flex-col md:flex-row container px-8">
          <div className="mb-2 flex-initial md:w-3/5">
            <NavigationPanel_1.NavigationPanel />
          </div>
          <div className="flex flex-initial w-full flex-col overflow-y-auto md:px-4 space-y-4">
            {children}
          </div>
        </main>
      </div>
    </components_1.Layout>
  );
}
exports.AccountLayout = AccountLayout;
