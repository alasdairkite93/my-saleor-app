"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockToggle = void 0;
const react_1 = require("@headlessui/react");
const clsx_1 = __importDefault(require("clsx"));
function StockToggle({ enabled, onChange }) {
  return (
    <div className="inline-block py-2 px-2">
      <react_1.Switch.Group>
        <react_1.Switch
          checked={enabled}
          onChange={onChange}
          className="bg-transparent relative inline-flex items-center h-4 rounded-3xl w-[2.7rem] transition-colors border-[1.5px] border-gray-200 bg-white"
          data-testid="stockToggle"
        >
          <span
            className={(0, clsx_1.default)(
              enabled ? "translate-x-3 bg-gray-400" : "translate-x-1 bg-gray-200",
              "inline-block w-2 h-2 transform rounded-full transition-transform"
            )}
          />
        </react_1.Switch>
        <react_1.Switch.Label className="ml-2 text-base">In stock</react_1.Switch.Label>
      </react_1.Switch.Group>
    </div>
  );
}
exports.StockToggle = StockToggle;
exports.default = StockToggle;
