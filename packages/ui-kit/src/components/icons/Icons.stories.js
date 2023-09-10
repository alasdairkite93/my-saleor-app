"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOfIcons = exports.Colored = exports.Basic = void 0;
const Text_1 = require("../Text");
const DiscountIcon_1 = require("./DiscountIcon");
const exportedIcons = __importStar(require("."));
exports.default = {
  title: "Components/Icons",
};
const icons = Object.entries(exportedIcons);
const IconWrapper = (props) => (
  <div className="flex items-center	justify-center flex-col p-8 bg-[#ffffff]" {...props} />
);
const Template = (args) => <DiscountIcon_1.DiscountIcon {...args} />;
exports.Basic = Template.bind({});
exports.Colored = Template.bind({});
exports.Colored.args = {
  color: "magenta",
};
const ListTemplate = () => (
  <div className="grid grid-cols-4 gap-4 p-4 bg-button-tertiary">
    {icons.map(([key, icon]) => {
      const Icon = icon;
      return (
        <IconWrapper key={key}>
          <div className="mb-4">
            <Icon />
          </div>
          <Text_1.Text size="sm" weight="semibold">
            {`<${key} />`}
          </Text_1.Text>
        </IconWrapper>
      );
    })}
  </div>
);
exports.ListOfIcons = ListTemplate.bind({});
