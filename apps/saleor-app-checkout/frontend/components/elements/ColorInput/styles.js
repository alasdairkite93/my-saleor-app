"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const macaw_ui_1 = require("@saleor/macaw-ui");
exports.useStyles = (0, macaw_ui_1.makeStyles)(
  (theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      width: "80px",
    },
    label: {
      width: "100%",
    },
    input: {
      padding: theme.spacing(0.25, 0.5),
      cursor: "pointer",
    },
    colorBox: {
      width: "60px",
      height: "30px",
      padding: 0,
      cursor: "pointer",
    },
  }),
  { name: "ColorInput" }
);
