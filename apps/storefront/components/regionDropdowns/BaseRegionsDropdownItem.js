"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRegionsDropdownItem = void 0;
const react_1 = require("@headlessui/react");
const outline_1 = require("@heroicons/react/outline");
const clsx_1 = __importDefault(require("clsx"));
const react_2 = __importDefault(require("react"));
function BaseRegionsDropdownItem({ label, chosen, onClick }) {
  return (
    <react_1.Menu.Item>
      {({ active }) => (
        <button
          type="button"
          onClick={onClick}
          className={(0, clsx_1.default)(
            active ? "border-brand text-brand" : "border-transparent text-gray-900",
            "group px-2 py-2 text-sm border-2 w-full"
          )}
        >
          <div className="flex gap-2">
            <div className="grow w-max text-left">{label}</div>

            <div className="h-5 w-3">
              {chosen && <outline_1.CheckIcon className="ml-2 -mr-1  h-5 w-3" aria-hidden="true" />}
            </div>
          </div>
        </button>
      )}
    </react_1.Menu.Item>
  );
}
exports.BaseRegionsDropdownItem = BaseRegionsDropdownItem;
exports.default = BaseRegionsDropdownItem;
