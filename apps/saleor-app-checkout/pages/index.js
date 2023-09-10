"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("next/router");
const react_1 = require("react");
// @todo figure out why the apps/saleor-app-checkout/next.config.js
// redirect doesn't work in demo
function IndexPage() {
  const router = (0, router_1.useRouter)();
  (0, react_1.useEffect)(() => {
    void router.replace("/channels/");
  }, [router]);
  return null;
}
exports.default = IndexPage;
