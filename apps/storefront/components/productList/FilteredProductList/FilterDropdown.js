"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterDropdown = void 0;
const react_1 = require("@headlessui/react");
const solid_1 = require("@heroicons/react/solid");
const clsx_1 = __importDefault(require("clsx"));
const react_2 = require("react");
function FilterDropdown({ label, attributeSlug, optionToggle, options }) {
  return (
    <react_1.Menu as="div" className="relative inline-block text-left">
      <div>
        <react_1.Menu.Button
          className="inline-flex w-full justify-left px-2 py-2 text-base font-medium  hover:bg-opacity-30 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          data-testid={`filterAttribute${label}`}
        >
          {label}
          <solid_1.ChevronDownIcon className="ml-2 -mr-1 h-5 w-5 " aria-hidden="true" />
        </react_1.Menu.Button>
      </div>
      <react_1.Transition
        as={react_2.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <react_1.Menu.Items className="focus:outline-none absolute left-0 w-56 origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          {options === null || options === void 0
            ? void 0
            : options.map((option) => (
                <react_1.Menu.Item key={option.id}>
                  {({ active }) => (
                    <button
                      type="button"
                      onClick={() => optionToggle(attributeSlug, option.slug)}
                      className={(0, clsx_1.default)(
                        active ? "border-brand text-brand" : "border-transparent text-gray-900",
                        "group flex w-full items-center px-2 py-2 text-base border-2"
                      )}
                      data-testid={`filterAttributeValue${option.label}`}
                    >
                      <div className="flex-grow text-left">{option.label}</div>
                      {option.chosen && (
                        <solid_1.CheckIcon className="ml-2 -mr-1 h-5 w-3 " aria-hidden="true" />
                      )}
                    </button>
                  )}
                </react_1.Menu.Item>
              ))}
        </react_1.Menu.Items>
      </react_1.Transition>
    </react_1.Menu>
  );
}
exports.FilterDropdown = FilterDropdown;
exports.default = FilterDropdown;
