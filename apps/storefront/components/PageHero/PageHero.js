"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHero = void 0;
const ui_kit_1 = require("@saleor/ui-kit");
const react_1 = __importDefault(require("react"));
const Box_1 = require("../Box");
const RichText_1 = require("../RichText");
function PageHero({ title, description, pills = [] }) {
  return (
    <Box_1.Box>
      <div className="sm:ml-20 sm:text-left">
        <h1 className="text-5xl font-bold mb-4" data-testid={`titleOf${title}`}>
          {title}
        </h1>

        {description && (
          <div className="text-lg inline-block sm:block my-6 text-main-1">
            <RichText_1.RichText jsonStringData={description} />
          </div>
        )}
        {pills.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {pills.map((pill) => (
              <ui_kit_1.ChipButton key={pill.label} label={pill.label} onClick={pill.onClick} />
            ))}
          </div>
        )}
      </div>
    </Box_1.Box>
  );
}
exports.PageHero = PageHero;
exports.default = PageHero;
