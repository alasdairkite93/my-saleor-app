"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const react_intl_1 = require("react-intl");
const translations_1 = require("../translations");
function Pagination({ pageInfo, onLoadMore, itemsCount, totalCount }) {
  const t = (0, react_intl_1.useIntl)();
  if (!pageInfo || !(pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasNextPage)) {
    return null;
  }
  return (
    <nav className="mt-8 p-4 ">
      <div className="flex justify-center flex-col items-center">
        <button
          type="button"
          onClick={onLoadMore}
          className="relative inline-flex  items-center px-4 py-2 border text-base font-medium rounded-md text-gray-700 bg-gray-50 hover:border-blue-300 cursor-pointer"
        >
          {t.formatMessage(translations_1.messages.loadMoreButton)}
        </button>
        {itemsCount && totalCount && (
          <div className="text-sm text-gray-500 mt-2">
            {t.formatMessage(translations_1.messages.paginationProductCounter, {
              totalItemsCount: totalCount,
              currentItemsCount: itemsCount,
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
exports.Pagination = Pagination;
