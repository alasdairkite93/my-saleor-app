"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const macaw_ui_1 = require("@saleor/macaw-ui");
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const AppSavebar = (_a) => {
  var { labels = {} } = _a,
    rest = __rest(_a, ["labels"]);
  const defaultLabels = {
    cancel: "Back",
    confirm: "Save",
    delete: "Delete",
    error: "Error",
  };
  const componentLabels = Object.assign(Object.assign({}, defaultLabels), labels);
  const classes = (0, styles_1.useStyles)();
  return (
    <core_1.NoSsr>
      <macaw_ui_1.Savebar labels={componentLabels} className={classes.savebar} {...rest} />
    </core_1.NoSsr>
  );
};
exports.default = AppSavebar;
