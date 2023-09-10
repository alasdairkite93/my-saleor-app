"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const macaw_ui_1 = require("@saleor/macaw-ui");
const AppHeader_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/AppHeader")
);
const AppSidebar_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/AppSidebar")
);
const styles_1 = require("./styles");
const AppLayout = ({
  title,
  items,
  selectedItem,
  loading,
  onBackClick,
  onSettingsClick,
  onItemClick,
  children,
}) => {
  const classes = (0, styles_1.useStyles)();
  return (
    <>
      <AppHeader_1.default
        onBack={onBackClick}
        menu={
          onSettingsClick && (
            <macaw_ui_1.IconButton onClick={onSettingsClick}>
              <macaw_ui_1.SettingsIcon />
            </macaw_ui_1.IconButton>
          )
        }
      >
        {title}
      </AppHeader_1.default>
      <div className={classes.root}>
        <AppSidebar_1.default
          items={items}
          selectedItem={selectedItem}
          loading={loading}
          onItemClick={onItemClick}
        />
        <div className={classes.content}>{children}</div>
      </div>
    </>
  );
};
exports.default = AppLayout;
