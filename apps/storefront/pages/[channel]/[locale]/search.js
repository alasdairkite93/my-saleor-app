"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const next_usequerystate_1 = require("next-usequerystate");
const react_1 = __importDefault(require("react"));
const react_intl_1 = require("react-intl");
const react_use_1 = require("react-use");
const components_1 = require("@/components");
const translations_1 = require("@/components/translations");
function SearchPage() {
  const t = (0, react_intl_1.useIntl)();
  const [searchQuery, setSearchQuery] = (0, next_usequerystate_1.useQueryState)("q");
  const [debouncedFilter, setDebouncedFilter] = react_1.default.useState({});
  (0, react_use_1.useDebounce)(
    () => {
      if (searchQuery) {
        setDebouncedFilter({ search: searchQuery });
      } else {
        setDebouncedFilter({});
      }
    },
    1000,
    [searchQuery]
  );
  return (
    <main className="container w-full px-8 mt-5">
      <p className="font-semibold text-xl mb-5">
        {t.formatMessage(translations_1.messages.searchHeader)}
      </p>
      <input
        className="w-full md:w-96 mb-10 block border-gray-300 rounded-md shadow-sm text-md"
        type="text"
        value={searchQuery || ""}
        placeholder={t.formatMessage(translations_1.messages.searchFieldPlaceholder)}
        onChange={(e) => setSearchQuery(e.target.value, { scroll: false, shallow: true })}
        data-testid="searchInput"
      />
      <components_1.ProductCollection filter={debouncedFilter} />
    </main>
  );
}
SearchPage.getLayout = function getLayout(page) {
  return <components_1.Layout>{page}</components_1.Layout>;
};
exports.default = SearchPage;
