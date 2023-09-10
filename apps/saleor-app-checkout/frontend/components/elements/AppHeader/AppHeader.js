"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const macaw_ui_1 = require("@saleor/macaw-ui");
const styles_1 = require("./styles");
const AppHeader = ({ children, menu, onBack }) => {
  const classes = (0, styles_1.useStyles)();
  return (
    <header className={classes.header}>
      {onBack && (
        <macaw_ui_1.IconButton onClick={onBack}>
          <macaw_ui_1.ArrowRightIcon className={classes.backArrow} />
        </macaw_ui_1.IconButton>
      )}
      <h1 className={classes.title}>{children}</h1>
      {menu}
    </header>
  );
};
exports.default = AppHeader;
