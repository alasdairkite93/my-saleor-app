"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const macaw_ui_1 = require("@saleor/macaw-ui");
exports.useStyles = (0, macaw_ui_1.makeStyles)(
  (theme) => ({
    settings: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      gap: theme.spacing(2),
    },
    settingsDescription: {
      color: theme.palette.text.hint,
    },
    skeleton: {
      width: "100%",
    },
    formLine: {
      width: "100%",
      display: "flex",
      gap: theme.spacing(2),
    },
  }),
  { name: "PaymentProviderDetails" }
);
