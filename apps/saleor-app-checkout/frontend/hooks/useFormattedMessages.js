"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormattedMessages = void 0;
const router_1 = require("next/router");
const react_1 = require("react");
const en_json_1 = __importDefault(require("../../content/compiled-locales/en.json"));
const pl_json_1 = __importDefault(require("../../content/compiled-locales/pl.json"));
const useFormattedMessages = () => {
  const { locale } = (0, router_1.useRouter)();
  const [shortLocale] = locale ? locale.split("-") : ["en"];
  const messages = (0, react_1.useMemo)(() => {
    switch (shortLocale) {
      case "pl":
        return pl_json_1.default;
      case "en":
        return en_json_1.default;
      default:
        return en_json_1.default;
    }
  }, [shortLocale]);
  return {
    locale: shortLocale,
    messages,
  };
};
exports.useFormattedMessages = useFormattedMessages;
