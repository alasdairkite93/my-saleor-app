"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaults_1 = require("@/saleor-app-checkout/config/defaults");
const mapPrivateSettingsToMetadata_1 = require("@/saleor-app-checkout/backend/configuration/mapPrivateSettingsToMetadata");
const mapPublicSettingsToMetadata_1 = require("@/saleor-app-checkout/frontend/misc/mapPublicSettingsToMetadata");
describe("/utils/frontend/misc/mapSettingsToMetadata", () => {
  it("maps settings to public metadata", () => {
    const settingsValues = Object.assign(Object.assign({}, defaults_1.defaultPublicSettings), {
      customizations: Object.assign(
        Object.assign({}, defaults_1.defaultPublicSettings.customizations),
        {
          branding: Object.assign(
            Object.assign({}, defaults_1.defaultPublicSettings.customizations.branding),
            { buttonBgColorPrimary: "#fff", buttonBgColorHover: "#fff" }
          ),
        }
      ),
    });
    const mappedMetadata = (0, mapPublicSettingsToMetadata_1.mapPublicSettingsToMetadata)(
      settingsValues
    );
    const expectedMetadata = [
      {
        key: "customizations",
        value:
          '{"branding":{"buttonBgColorPrimary":"#fff","buttonBgColorHover":"#fff","borderColorPrimary":"#394052","errorColor":"#B65757","successColor":"#2C9B2A","buttonTextColor":"#ffffff","textColor":"#000000","logoUrl":""},"productSettings":{"lowStockThreshold":""}}',
      },
      {
        key: "channelActivePaymentProviders",
        value: "{}",
      },
    ];
    expect(mappedMetadata).toEqual(expectedMetadata);
  });
  it("maps settings to private metadata", () => {
    var _a;
    const settingsValues = Object.assign(Object.assign({}, defaults_1.defaultPrivateSettings), {
      paymentProviders: Object.assign(
        Object.assign({}, defaults_1.defaultPrivateSettings.paymentProviders),
        {
          adyen: {
            clientKey: "adyen_unencrypted_key",
            merchantAccount: "adyen_unencrypted_value",
            supportedCurrencies: "USD,EUR",
            apiKey: "api_unecrypted_value",
          },
        }
      ),
    });
    const mappedMetadata = (0, mapPrivateSettingsToMetadata_1.mapPrivateSettingsToMetadata)(
      settingsValues
    );
    const providersMetadata =
      (_a = mappedMetadata.find((metadata) => metadata.key === "paymentProviders")) === null ||
      _a === void 0
        ? void 0
        : _a.value;
    // These metadata are private and encrypted
    expect(providersMetadata).not.toContain(settingsValues.paymentProviders.adyen.apiKey);
    // These metadata are public and unencrypted
    expect(providersMetadata).toContain(settingsValues.paymentProviders.adyen.clientKey);
    expect(providersMetadata).toContain(settingsValues.paymentProviders.adyen.merchantAccount);
    expect(providersMetadata).toContain(settingsValues.paymentProviders.adyen.supportedCurrencies);
  });
});
