"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const outline_1 = require("@heroicons/react/outline");
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const components_1 = require("@/components");
const paths_1 = require("@/lib/paths");
function OrderCompletedPage() {
  const paths = (0, paths_1.usePaths)();
  return (
    <main className="container pt-8 px-8">
      <outline_1.CheckIcon className="text-green-700" />
      <div className="font-semibold text-3xl">Your order is completed!</div>
      <p className="mt-2">
        <link_1.default href={paths.$url()}>Go back to homepage</link_1.default>
      </p>
    </main>
  );
}
exports.default = OrderCompletedPage;
OrderCompletedPage.getLayout = function getLayout(page) {
  return <components_1.Layout>{page}</components_1.Layout>;
};
