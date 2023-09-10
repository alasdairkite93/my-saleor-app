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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRegions =
  exports.RegionsProvider =
  exports.importMessages =
  exports.Provider =
  exports.useContext =
    void 0;
const router_1 = require("next/router");
const react_1 = __importStar(require("react"));
const react_intl_1 = require("react-intl");
const CheckoutProvider_1 = require("@/lib/providers/CheckoutProvider");
const regions_1 = require("@/lib/regions");
const useSafeContext_1 = __importDefault(require("@/lib/useSafeContext"));
const util_1 = require("@/lib/util");
const sourceOfTruth = __importStar(require("../../locale/en-US.json"));
const fr = __importStar(require("../../locale/fr-FR.json"));
const pl = __importStar(require("../../locale/pl-PL.json"));
const vi = __importStar(require("../../locale/vi-VN.json"));
const ae = __importStar(require("../../locale/ar-AE.json"));
const client_1 = require("@apollo/client");
(_a = (0, useSafeContext_1.default)()), (exports.useContext = _a[0]), (exports.Provider = _a[1]);
function importMessages(locale) {
  switch (locale) {
    case "en-US":
      return sourceOfTruth;
    case "pl-PL":
      return pl;
    case "fr-FR":
      return fr;
    case "vi-VN":
      return vi;
    case "ar-AE":
      return ae;
    default:
      return sourceOfTruth;
  }
}
exports.importMessages = importMessages;
function RegionsProvider({ children }) {
  var _a;
  const router = (0, router_1.useRouter)();
  const apolloClient = (0, client_1.useApolloClient)();
  const { resetCheckoutToken } = (0, CheckoutProvider_1.useCheckout)();
  const [currentChannelSlug, setCurrentChannelSlug] = (0, react_1.useState)(router.query.channel);
  const setCurrentChannel = (channel) =>
    __awaiter(this, void 0, void 0, function* () {
      resetCheckoutToken();
      setCurrentChannelSlug(channel);
      yield apolloClient.resetStore();
    });
  const locale =
    ((_a = router.query.locale) === null || _a === void 0 ? void 0 : _a.toString()) ||
    regions_1.DEFAULT_LOCALE;
  const currentChannel =
    regions_1.CHANNELS.find(({ slug }) => slug === currentChannelSlug) || regions_1.DEFAULT_CHANNEL;
  const formatPrice = (price) =>
    (0, util_1.formatAsMoney)(
      (price === null || price === void 0 ? void 0 : price.amount) || 0,
      (price === null || price === void 0 ? void 0 : price.currency) || currentChannel.currencyCode,
      locale
    );
  const providerValues = {
    channels: regions_1.CHANNELS,
    defaultChannel: regions_1.DEFAULT_CHANNEL,
    currentChannel,
    setCurrentChannel,
    currentLocale: locale,
    query: {
      channel: currentChannel.slug,
      locale: (0, regions_1.localeToEnum)(locale),
    },
    formatPrice,
  };
  const msgs = importMessages(locale);
  return (
    <exports.Provider value={providerValues}>
      <react_intl_1.IntlProvider
        messages={msgs}
        locale={locale}
        defaultLocale={regions_1.DEFAULT_LOCALE}
      >
        {children}
      </react_intl_1.IntlProvider>
    </exports.Provider>
  );
}
exports.RegionsProvider = RegionsProvider;
exports.useRegions = exports.useContext;
exports.default = RegionsProvider;
