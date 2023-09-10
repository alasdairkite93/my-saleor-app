"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const AppNavigation_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/AppNavigation")
);
const VerticalSpacer_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/VerticalSpacer")
);
const core_1 = require("@material-ui/core");
const macaw_ui_1 = require("@saleor/macaw-ui");
const react_intl_1 = require("react-intl");
const messages_1 = require("./messages");
const ErrorDetails = ({ error }) => {
  const intl = (0, react_intl_1.useIntl)();
  return (
    <>
      <AppNavigation_1.default />
      <VerticalSpacer_1.default />
      <macaw_ui_1.Alert
        title={intl.formatMessage(messages_1.messages.somethingWentWrong)}
        variant="error"
        close={false}
      >
        <core_1.Typography>{error}</core_1.Typography>
      </macaw_ui_1.Alert>
    </>
  );
};
exports.default = ErrorDetails;
