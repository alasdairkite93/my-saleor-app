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
const macaw_ui_1 = require("@saleor/macaw-ui");
const router_1 = require("next/router");
const routes_1 = require("routes");
const styles_1 = require("./styles");
const react_intl_1 = require("react-intl");
const messages_1 = require("./messages");
const Skeleton_1 = __importDefault(require("@material-ui/lab/Skeleton"));
const ChannelList = ({ channels, loading }) => {
  const router = (0, router_1.useRouter)();
  const classes = (0, styles_1.useStyles)();
  const onChannelClick = (channel) => {
    void router.push({
      pathname: routes_1.channelPath,
      query: { channelId: channel.id },
    });
  };
  return (
    <>
      <AppNavigation_1.default />
      <macaw_ui_1.OffsettedList gridTemplate={["1fr"]}>
        <macaw_ui_1.OffsettedListHeader>
          <macaw_ui_1.OffsettedListItem>
            <macaw_ui_1.OffsettedListItemCell>
              <react_intl_1.FormattedMessage {...messages_1.messages.channelName} />
            </macaw_ui_1.OffsettedListItemCell>
          </macaw_ui_1.OffsettedListItem>
        </macaw_ui_1.OffsettedListHeader>
        <macaw_ui_1.OffsettedListBody>
          {loading ? (
            <macaw_ui_1.OffsettedListItem className={classes.listItem}>
              <Skeleton_1.default className={classes.listItemSkeleton} />
            </macaw_ui_1.OffsettedListItem>
          ) : (
            channels.map((channel) => (
              <macaw_ui_1.OffsettedListItem
                key={channel.id}
                className={classes.listItem}
                onClick={() => onChannelClick(channel)}
              >
                <macaw_ui_1.OffsettedListItemCell>{channel.name}</macaw_ui_1.OffsettedListItemCell>
              </macaw_ui_1.OffsettedListItem>
            ))
          )}
        </macaw_ui_1.OffsettedListBody>
      </macaw_ui_1.OffsettedList>
    </>
  );
};
exports.default = ChannelList;
