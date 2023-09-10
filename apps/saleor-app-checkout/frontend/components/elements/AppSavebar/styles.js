"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const macaw_ui_1 = require("@saleor/macaw-ui");
exports.useStyles = (0, macaw_ui_1.makeStyles)(
  () => ({
    savebar: {
      position: "fixed",
      bottom: 0,
      width: "100%",
    },
  }),
  { name: "AppSavebar" }
);
