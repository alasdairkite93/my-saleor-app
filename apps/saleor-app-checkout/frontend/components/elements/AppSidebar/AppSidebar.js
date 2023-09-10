"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const Skeleton_1 = __importDefault(require("@material-ui/lab/Skeleton"));
const macaw_ui_1 = require("@saleor/macaw-ui");
const clsx_1 = __importDefault(require("clsx"));
const styles_1 = require("./styles");
const AppSidebar = ({ items, selectedItem, loading, onItemClick }) => {
  const classes = (0, styles_1.useStyles)();
  return (
    <macaw_ui_1.OffsettedList gridTemplate={["1fr"]} className={classes.itemList}>
      <macaw_ui_1.OffsettedListBody>
        {loading ? (
          <macaw_ui_1.OffsettedListItem className={classes.itemListItem}>
            <Skeleton_1.default className={classes.itemListItemSkeleton} />
          </macaw_ui_1.OffsettedListItem>
        ) : items === null || items === void 0 ? (
          void 0
        ) : (
          items.map((item) => (
            <macaw_ui_1.OffsettedListItem
              key={item.id}
              className={(0, clsx_1.default)(classes.itemListItem, {
                [classes.itemListItemActive]:
                  item.id ===
                  (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.id),
              })}
              onClick={() => onItemClick(item)}
            >
              <macaw_ui_1.OffsettedListItemCell>
                {item.logo ? <item.logo className={classes.itemListItemLogo} /> : item.label}
              </macaw_ui_1.OffsettedListItemCell>
            </macaw_ui_1.OffsettedListItem>
          ))
        )}
      </macaw_ui_1.OffsettedListBody>
    </macaw_ui_1.OffsettedList>
  );
};
exports.default = AppSidebar;
