"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const styles_1 = require("./styles");
const ColorInput = ({ name, label, value, onChange, onBlur }) => {
  const classes = (0, styles_1.useStyles)();
  return (
    <div className={classes.root}>
      <core_1.Typography variant="body2" className={classes.label}>
        {label}
      </core_1.Typography>
      <core_1.OutlinedInput
        name={name}
        className={classes.input}
        type="color"
        value={value}
        inputProps={{
          className: classes.colorBox,
        }}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};
exports.default = ColorInput;
