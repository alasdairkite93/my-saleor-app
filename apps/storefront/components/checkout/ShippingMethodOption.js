"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodOption = void 0;
const react_1 = require("@headlessui/react");
const clsx_1 = __importDefault(require("clsx"));
const translations_1 = require("@/lib/translations");
const RegionsProvider_1 = require("../RegionsProvider");
function ShippingMethodOption({ method }) {
  const { formatPrice } = (0, RegionsProvider_1.useRegions)();
  return (
    <react_1.RadioGroup.Option
      key={method.id}
      value={method}
      className={({ checked, active }) =>
        (0, clsx_1.default)(
          checked ? "border-transparent" : "border-gray-300",
          active ? "ring-1 ring-blue-500" : "",
          "bg-white border rounded shadow-sm p-4 flex cursor-pointer"
        )
      }
    >
      {({ checked, active }) => (
        <>
          <div className="flex-1 flex">
            <div className="flex flex-col">
              <react_1.RadioGroup.Label
                as="span"
                className="block text-base font-medium text-gray-900"
              >
                {(0, translations_1.translate)(method, "name")}
              </react_1.RadioGroup.Label>
              <react_1.RadioGroup.Description
                as="span"
                className="mt-1 flex items-center text-sm text-gray-500"
              >
                {method.minimumDeliveryDays || 2}-{method.maximumDeliveryDays || 14} business days
              </react_1.RadioGroup.Description>
              <react_1.RadioGroup.Description
                as="span"
                className="mt-6 text-sm font-medium text-gray-900"
              >
                {formatPrice(method.price)}
              </react_1.RadioGroup.Description>
            </div>
          </div>
          <div
            className={(0, clsx_1.default)(
              active ? "border" : "border-2",
              checked ? "border-blue-500" : "border-transparent",
              "absolute -inset-px rounded pointer-events-none"
            )}
            aria-hidden="true"
          />
        </>
      )}
    </react_1.RadioGroup.Option>
  );
}
exports.ShippingMethodOption = ShippingMethodOption;
