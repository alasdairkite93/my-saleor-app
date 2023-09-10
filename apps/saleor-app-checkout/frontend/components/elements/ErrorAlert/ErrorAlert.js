"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMessages_1 = require("@/saleor-app-checkout/frontend/misc/errorMessages");
const core_1 = require("@material-ui/core");
const macaw_ui_1 = require("@saleor/macaw-ui");
const react_intl_1 = require("react-intl");
const styles_1 = require("./styles");
const ErrorAlert = ({ errors, getErrorMessage }) => {
  const intl = (0, react_intl_1.useIntl)();
  const classes = (0, styles_1.useStyles)();
  if (!(errors === null || errors === void 0 ? void 0 : errors.length)) {
    return null;
  }
  return (
    <>
      <macaw_ui_1.Alert
        variant="error"
        title={intl.formatMessage(errorMessages_1.commonErrorMessages.somethingWentWrong)}
        className={classes.root}
      >
        {errors.map((error, idx) => (
          <core_1.Typography key={idx}>
            {getErrorMessage(error, intl) ||
              intl.formatMessage(errorMessages_1.commonErrorMessages.unknownError)}
          </core_1.Typography>
        ))}
      </macaw_ui_1.Alert>
    </>
  );
};
exports.default = ErrorAlert;
