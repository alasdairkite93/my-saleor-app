"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const macaw_ui_1 = require("@saleor/macaw-ui");
exports.useStyles = (0, macaw_ui_1.makeStyles)(
  (theme) => ({
    header: {
      display: "flex",
      gap: "1rem",
      marginBottom: theme.spacing(2),
    },
    title: {
      margin: 0,
      width: "100%",
    },
    backArrow: {
      fontSize: 30,
      transform: "rotate(180deg)",
    },
  }),
  { name: "AppHeader" }
);
