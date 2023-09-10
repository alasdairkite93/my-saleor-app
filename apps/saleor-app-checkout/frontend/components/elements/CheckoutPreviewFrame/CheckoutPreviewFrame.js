"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const styles_1 = require("./styles");
const CheckoutPreviewFrame = ({ settings, className, checkoutUrl }) => {
  const iframeRef = (0, react_1.useRef)(null);
  const [appMounted, setAppMounted] = (0, react_1.useState)(false);
  const classes = (0, styles_1.useStyles)();
  const parsedCheckoutUrl = new URL(checkoutUrl);
  const checkoutOrigin = parsedCheckoutUrl.origin;
  const sendMessage = () => {
    var _a;
    if (iframeRef.current) {
      (_a = iframeRef.current.contentWindow) === null || _a === void 0
        ? void 0
        : _a.postMessage(settings, checkoutOrigin);
    }
  };
  const mountListener = (event) => {
    if (event.origin === checkoutOrigin && event.data === "mounted") {
      setAppMounted(true);
    }
  };
  (0, react_1.useEffect)(() => {
    if (!appMounted) {
      window.addEventListener("message", mountListener);
    }
    sendMessage();
    return () => {
      window.removeEventListener("message", mountListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings, checkoutUrl, iframeRef.current]);
  (0, react_1.useEffect)(() => {
    if (appMounted) {
      sendMessage();
      window.removeEventListener("message", mountListener);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appMounted]);
  return (
    <iframe
      ref={iframeRef}
      src={parsedCheckoutUrl.toString()}
      className={(0, clsx_1.default)(classes.iframe, className)}
    />
  );
};
exports.default = CheckoutPreviewFrame;
