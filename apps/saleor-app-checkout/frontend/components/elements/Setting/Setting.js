"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const ColorInput_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/ColorInput")
);
const FileInput_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/FileInput")
);
const core_1 = require("@material-ui/core");
const Setting = ({
  name,
  type,
  label,
  value,
  onChange,
  onFileChange,
  onBlur,
  clearValue,
  resetValue,
  encrypted,
  defaultValue,
}) => {
  const handleFocus = () => {
    if (encrypted && value === defaultValue && clearValue) {
      clearValue();
    }
  };
  const handleBlur = (event) => {
    if (encrypted && value === "" && resetValue) {
      resetValue();
    }
    if (onBlur) {
      onBlur(event);
    }
  };
  const handleChange = (event) => {
    onChange(event);
    if (type === "image") {
      onFileChange && onFileChange(event);
    }
  };
  const commonProps = {
    name,
    label,
    value,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
  };
  if (type === "string") {
    return <core_1.TextField {...commonProps} fullWidth />;
  }
  if (type === "color") {
    return <ColorInput_1.default {...commonProps} />;
  }
  if (type === "image") {
    return <FileInput_1.default {...commonProps} alt={label} />;
  }
  return null;
};
exports.default = Setting;
