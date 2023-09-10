"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterPills = void 0;
const ui_kit_1 = require("@saleor/ui-kit");
function FilterPills({ pills, onRemoveAttribute, onClearFilters }) {
  return (
    <div className="flex pt-4">
      <div className="flex-grow flex gap-2">
        {typeof window !== "undefined" &&
          pills.map(({ label, attributeSlug, choiceSlug }) => (
            <ui_kit_1.Chip
              key={`${attributeSlug}-${choiceSlug}`}
              label={label}
              data-testid={`filterPill${choiceSlug}`}
              onClick={() => {
                onRemoveAttribute(attributeSlug, choiceSlug);
              }}
            />
          ))}
      </div>
      <div>
        <button
          onClick={onClearFilters}
          className="text-main-2 text-base"
          type="button"
          data-testid="clearFilters"
        >
          Clear all
        </button>
      </div>
    </div>
  );
}
exports.FilterPills = FilterPills;
exports.default = FilterPills;
