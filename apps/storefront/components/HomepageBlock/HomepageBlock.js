"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomepageBlock = void 0;
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const react_intl_1 = require("react-intl");
const paths_1 = require("@/lib/paths");
const translations_1 = require("@/lib/translations");
const ProductCollection_1 = require("../ProductCollection");
const RichText_1 = require("../RichText");
const translations_2 = require("../translations");
function HomepageBlock({ menuItem }) {
  var _a, _b, _c, _d, _e;
  const paths = (0, paths_1.usePaths)();
  const t = (0, react_intl_1.useIntl)();
  const filter = {};
  if ((_a = menuItem.page) === null || _a === void 0 ? void 0 : _a.id) {
    const content = (0, translations_1.translate)(menuItem.page, "content");
    return (
      <div className="pb-10">{content && <RichText_1.RichText jsonStringData={content} />}</div>
    );
  }
  let link = {};
  if ((_b = menuItem.category) === null || _b === void 0 ? void 0 : _b.id) {
    filter.categories = [(_c = menuItem.category) === null || _c === void 0 ? void 0 : _c.id];
    link = paths.category._slug(menuItem.category.slug).$url();
  }
  if ((_d = menuItem.collection) === null || _d === void 0 ? void 0 : _d.id) {
    filter.collections = [(_e = menuItem.collection) === null || _e === void 0 ? void 0 : _e.id];
    link = paths.collection._slug(menuItem.collection.slug).$url();
  }
  return (
    <div className="pb-8" data-testid="category">
      <h1
        className="text-3xl font-extrabold tracking-tight text-gray-900 pb-4"
        data-testid={`categoryName${menuItem.name}`}
      >
        {(0, translations_1.translate)(menuItem, "name")}
      </h1>
      <ProductCollection_1.ProductCollection filter={filter} allowMore={false} />
      <div className="flex flex-row-reverse p-4">
        <link_1.default href={link} passHref legacyBehavior>
          <a href="pass">
            <p className="text-base">{t.formatMessage(translations_2.messages.more)}</p>
          </a>
        </link_1.default>
      </div>
    </div>
  );
}
exports.HomepageBlock = HomepageBlock;
exports.default = HomepageBlock;
