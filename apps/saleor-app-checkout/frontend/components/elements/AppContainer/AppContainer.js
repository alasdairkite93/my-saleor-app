"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("next/router");
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const AppContainer = (props) => {
  const classes = (0, styles_1.useStyles)();
  const router = (0, router_1.useRouter)();
  if (router.pathname === "/checkout-spa") {
    return <div {...props} />;
  }
  return <div className={classes.root} {...props} />;
};
exports.default = AppContainer;
