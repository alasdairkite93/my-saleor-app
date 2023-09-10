"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaults_1 = require("@/saleor-app-checkout/config/defaults");
const mapPrivateMetafieldsToSettings_1 = require("@/saleor-app-checkout/backend/configuration/mapPrivateMetafieldsToSettings");
const mapPublicMetafieldsToSettings_1 = require("@/saleor-app-checkout/frontend/misc/mapPublicMetafieldsToSettings");
describe("/utils/frontend/misc/mapMetadataToSettings", () => {
  it("maps public metadata to settings", () => {
    const metafields = {
      customizations: '{"branding":{"buttonBgColorPrimary":"#fff","buttonBgColorHover":"#fff"}}',
    };
    const mergedSettings = (0, mapPublicMetafieldsToSettings_1.mapPublicMetafieldsToSettings)(
      metafields
    );
    const expectedSettings = Object.assign(Object.assign({}, defaults_1.defaultPublicSettings), {
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
    expect(mergedSettings).toEqual(expectedSettings);
  });
  it("maps private metadata to settings", () => {
    const metafields = {
      paymentProviders:
        '{"mollie":{"partnerId":{"encrypted":false,"value":"some_not_encrypted_id"},"liveApiKey":{"encrypted":true,"value":"U2FsdGVkX18zfzUyZy2f00/5BoS3s3WtAOo7wY0yELlwuW6hX0R/zCn/ppPnsBRk"}}}',
    };
    const mergedSettings = (0, mapPrivateMetafieldsToSettings_1.mapPrivateMetafieldsToSettings)(
      metafields,
      false
    );
    const expectedSettings = Object.assign(Object.assign({}, defaults_1.defaultPrivateSettings), {
      paymentProviders: {
        adyen: {},
        mollie: {
          partnerId: "some_not_encrypted_id",
          liveApiKey: "some_decrypted_key",
        },
        stripe: {},
        dummy: {},
      },
    });
    expect(mergedSettings).toEqual(expectedSettings);
  });
  it("maps private metadata to settings with obfuscated data", () => {
    const metafields = {
      paymentProviders:
        '{"mollie":{"partnerId":{"encrypted":false,"value":"some_not_encrypted_id"},"liveApiKey":{"encrypted":true,"value":"U2FsdGVkX18zfzUyZy2f00/5BoS3s3WtAOo7wY0yELlwuW6hX0R/zCn/ppPnsBRk"}}}',
    };
    const mergedSettings = (0, mapPrivateMetafieldsToSettings_1.mapPrivateMetafieldsToSettings)(
      metafields,
      true
    );
    const expectedSettings = Object.assign(Object.assign({}, defaults_1.defaultPrivateSettings), {
      paymentProviders: {
        adyen: {},
        mollie: {
          partnerId: "some_not_encrypted_id",
          liveApiKey: "•••• _key",
        },
        stripe: {},
        dummy: {},
      },
    });
    expect(mergedSettings).toEqual(expectedSettings);
  });
});
