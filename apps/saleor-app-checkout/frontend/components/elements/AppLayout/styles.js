"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const macaw_ui_1 = require("@saleor/macaw-ui");
exports.useStyles = (0, macaw_ui_1.makeStyles)(
  (theme) => ({
    root: {
      display: "flex",
      gap: "2rem",
    },
    content: {
      flex: "2",
      marginTop: theme.spacing(1),
    },
    settings: {
      display: "flex",
      flexWrap: "wrap",
      gap: theme.spacing(2),
      width: "100%",
    },
  }),
  { name: "AppLayout" }
);
