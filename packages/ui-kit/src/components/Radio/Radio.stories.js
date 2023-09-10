"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLook = void 0;
const react_1 = require("react");
const Radio_1 = require("./Radio");
exports.default = {
  title: "Components/Radio",
  component: Radio_1.Radio,
};
const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
];
const Template = ({ customOptions = [] }) => {
  const [selected, setSelected] = (0, react_1.useState)(null);
  const radioOptions = [...options, ...customOptions];
  return (
    <div role="radiogroup" aria-label="radios" className="radio-box-group">
      {radioOptions.map((option) => (
        <Radio_1.Radio
          {...option}
          key={option.value}
          checked={option.value === selected}
          onChange={(event) => {
            setSelected(event.target.value);
          }}
        />
      ))}
    </div>
  );
};
exports.CustomLook = Template.bind({});
exports.CustomLook.args = {
  customOptions: [
    {
      classNames: {
        container: "flex !flex-col px-[15px] py-[21px] border hover:border-border-active",
        radio: "!border-sky-500",
      },
      value: "extended",
      label: (
        <>
          <span>Extended label</span>
          <br />
          <span className="text-text-secondary">very extended description</span>
        </>
      ),
    },
  ],
};
