"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.alertsContainerProps = void 0;
const clsx_1 = __importDefault(require("clsx"));
exports.alertsContainerProps = {
  toastClassName: "alert-container",
  bodyClassName: (data) =>
    (0, clsx_1.default)("alert", {
      ["alert-error"]: (data === null || data === void 0 ? void 0 : data.type) === "error",
      ["alert-success"]: (data === null || data === void 0 ? void 0 : data.type) === "success",
    }),
  autoClose: 4000,
  hideProgressBar: true,
  closeButton: () => null,
  closeOnClick: false,
};
