"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("@headlessui/react");
const Switch_module_css_1 = __importDefault(require("./Switch.module.css"));
const Label_module_css_1 = __importDefault(require("../Label/Label.module.css"));
const Switch = ({ checked = false, label, classNames, onChange }) => (
  <div className={classNames === null || classNames === void 0 ? void 0 : classNames.container}>
    <react_1.Switch.Group>
      <react_1.Switch
        checked={checked}
        onChange={onChange}
        className={(0, clsx_1.default)(
          Switch_module_css_1.default.toggle,
          {
            [Switch_module_css_1.default["toggle-active"]]: checked,
          },
          classNames === null || classNames === void 0 ? void 0 : classNames.toggle
        )}
      >
        <span
          aria-hidden="true"
          className={(0, clsx_1.default)(Switch_module_css_1.default.dot, {
            [Switch_module_css_1.default["dot-active"]]: checked,
          })}
        />
      </react_1.Switch>
      {label && (
        <react_1.Switch.Label
          className={(0, clsx_1.default)(
            Label_module_css_1.default.label,
            Switch_module_css_1.default.label,
            classNames === null || classNames === void 0 ? void 0 : classNames.label
          )}
        >
          {label}
        </react_1.Switch.Label>
      )}
    </react_1.Switch.Group>
  </div>
);
exports.Switch = Switch;
