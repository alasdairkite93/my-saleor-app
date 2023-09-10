"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRegionsDropdown = void 0;
const react_1 = require("@headlessui/react");
const outline_1 = require("@heroicons/react/outline");
const clsx_1 = __importDefault(require("clsx"));
const react_2 = __importDefault(require("react"));
function BaseRegionsDropdown({ label, children, horizontalAlignment = "left" }) {
  return (
    <react_1.Menu as="div" className="relative inline-block text-left">
      <div>
        <react_1.Menu.Button className="inline-flex w-full justify-left py-2 text-md font-extrabold text-gray-400  hover:bg-opacity-30 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {label}
          <outline_1.ChevronDownIcon className="ml-2 -mr-1 h-5 w-5 " aria-hidden="true" />
        </react_1.Menu.Button>
      </div>
      <react_1.Transition
        as={react_2.default.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <react_1.Menu.Items
          className={(0, clsx_1.default)(
            horizontalAlignment === "left" ? "left-0" : "right-0",
            "focus:outline-none absolute -translate-y-full origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10"
          )}
        >
          {children}
        </react_1.Menu.Items>
      </react_1.Transition>
    </react_1.Menu>
  );
}
exports.BaseRegionsDropdown = BaseRegionsDropdown;
exports.default = BaseRegionsDropdown;
