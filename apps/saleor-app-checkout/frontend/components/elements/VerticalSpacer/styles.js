"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const macaw_ui_1 = require("@saleor/macaw-ui");
exports.useStyles = (0, macaw_ui_1.makeStyles)(
  (theme) => ({
    container: ({ spacing }) => ({
      height: theme.spacing(spacing || 0),
    }),
  }),
  { name: "VerticalSpacer" }
);
