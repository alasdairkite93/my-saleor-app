"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateWithOnChangeHandler = void 0;
const react_1 = require("react");
// used for stories
const useStateWithOnChangeHandler = (initialValue = "") => {
  const [value, setValue] = (0, react_1.useState)(initialValue);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return [value, handleChange];
};
exports.useStateWithOnChangeHandler = useStateWithOnChangeHandler;
