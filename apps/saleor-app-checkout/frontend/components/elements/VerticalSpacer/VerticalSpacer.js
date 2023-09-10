"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const VerticalSpacer = ({ spacing = 2 }) => {
  const classes = (0, styles_1.useStyles)({ spacing });
  return <div className={classes.container} />;
};
exports.default = VerticalSpacer;
