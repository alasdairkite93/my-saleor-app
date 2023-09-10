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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const head_1 = __importDefault(require("next/head"));
const macaw_ui_1 = require("@saleor/macaw-ui");
const react_intl_1 = require("react-intl");
const useFormattedMessages_1 = require("@/saleor-app-checkout/frontend/hooks/useFormattedMessages");
const AppContainer_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/AppContainer")
);
const AppProvider_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/AppProvider")
);
const PrivateSettingsProvider_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/PrivateSettingsProvider")
);
require("@saleor/checkout-storefront/dist/index.css");
const react_1 = require("react");
const next_1 = require("@saleor/app-sdk/app-bridge/next");
function App(props) {
  const { Component, pageProps } = props;
  const { locale, messages } = (0, useFormattedMessages_1.useFormattedMessages)();
  const version = [
    process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || "(unknown_env)",
    process.env.NEXT_PUBLIC_GIT_BRANCH || "(unknown_branch)",
    process.env.NEXT_PUBLIC_SENTRY_RELEASE || "(unknown_release)",
  ].join("-");
  (0, react_1.useEffect)(() => {
    globalThis.__SALEOR_CHECKOUT_ENV__ = version;
  }, [version]);
  return (
    <>
      <head_1.default>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <style>
          {`
            html,
            body {
              height: 100%;
              width: 100%;
            }
            *,
            *:after,
            *:before {
              box-sizing: border-box;
            }
            body {
              font-size: 1rem;
              margin: 0;
              background: transparent !important;
            }
          `}
        </style>
      </head_1.default>
      <AppProvider_1.default>
        <PrivateSettingsProvider_1.default>
          <react_intl_1.IntlProvider
            locale={locale}
            messages={messages}
            onError={() => null} // Hide missing translation warnings
          >
            {/* @ts-expect-error React 17 <-> 18 types mismatch */}
            <macaw_ui_1.ThemeProvider ssr={true}>
              <next_1.RoutePropagator />
              <AppContainer_1.default>
                <Component {...pageProps} />
              </AppContainer_1.default>
              <footer
                style={{
                  fontSize: "0.8em",
                  textAlign: "center",
                  color: "#777",
                  transform: "translateY(-100%)",
                  height: "1.7rem",
                  marginTop: "-1.7rem",
                }}
              >
                <small>{version}</small>
              </footer>
            </macaw_ui_1.ThemeProvider>
          </react_intl_1.IntlProvider>
        </PrivateSettingsProvider_1.default>
      </AppProvider_1.default>
    </>
  );
}
exports.default = App;
