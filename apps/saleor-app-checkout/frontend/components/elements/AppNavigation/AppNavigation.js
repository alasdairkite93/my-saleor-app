"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const macaw_ui_1 = require("@saleor/macaw-ui");
const router_1 = require("next/router");
const routes_1 = require("@/saleor-app-checkout/routes");
const react_intl_1 = require("react-intl");
const commonMessages_1 = require("@/saleor-app-checkout/frontend/misc/commonMessages");
const styles_1 = require("./styles");
const AppNavigation = () => {
  const router = (0, router_1.useRouter)();
  const intl = (0, react_intl_1.useIntl)();
  const classes = (0, styles_1.useStyles)();
  return (
    <macaw_ui_1.PageTabs
      onChange={(route) => {
        void router.push(route);
      }}
      value={router.pathname}
      className={classes.tabs}
    >
      <macaw_ui_1.PageTab
        data-testid="channels-tab"
        value={routes_1.channelListPath}
        label={intl.formatMessage(commonMessages_1.sectionMessages.channels)}
      />
      <macaw_ui_1.PageTab
        data-testid="customization-tab"
        value={routes_1.customizationPath}
        label={intl.formatMessage(commonMessages_1.sectionMessages.customization)}
      />
    </macaw_ui_1.PageTabs>
  );
};
exports.default = AppNavigation;
