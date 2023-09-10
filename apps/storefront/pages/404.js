"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const Navbar_1 = require("@/components/Navbar");
const NotFoundSeo_1 = require("@/components/seo/NotFoundSeo");
const paths_1 = require("@/lib/paths");
function Custom404() {
  const paths = (0, paths_1.usePaths)();
  return (
    <>
      <NotFoundSeo_1.NotFoundSeo />
      <div className="min-h-screen bg-gray-100">
        <Navbar_1.Navbar />

        <div className="py-10">
          <header className="mb-4">
            <div className="container px-8">Page not found</div>
          </header>
          <main>
            <div className="container px-8">
              <link_1.default href={paths.$url()}>Go back home</link_1.default>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
exports.default = Custom404;
