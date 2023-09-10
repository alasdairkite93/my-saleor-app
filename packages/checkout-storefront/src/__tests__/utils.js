"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockProviders = void 0;
const regions_1 = require("@/checkout-storefront/lib/regions");
const react_intl_1 = require("react-intl");
const urql_1 = require("urql");
const getMockProviders = ({ mockedResponseState } = {}) => {
  const MockIntlProvider = ({ children }) => (
    <react_intl_1.IntlProvider
      defaultLocale={regions_1.DEFAULT_LOCALE}
      locale={regions_1.DEFAULT_LOCALE}
    >
      {children}
    </react_intl_1.IntlProvider>
  );
  const MockProvider = ({ children }) => {
    if (mockedResponseState) {
      return (
        <MockIntlProvider>
          <urql_1.Provider value={mockedResponseState}>{children}</urql_1.Provider>
        </MockIntlProvider>
      );
    } else {
      return <MockIntlProvider>{children}</MockIntlProvider>;
    }
  };
  return MockProvider;
};
exports.getMockProviders = getMockProviders;
