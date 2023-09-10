"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeDetails = void 0;
const react_intl_1 = require("react-intl");
const product_1 = require("@/lib/product");
const translations_1 = require("@/lib/translations");
const translations_2 = require("../translations");
function AttributeDetails({ product, selectedVariant }) {
  const t = (0, react_intl_1.useIntl)();
  const attributes = (0, product_1.getProductAttributes)(product, selectedVariant);
  if (attributes.length === 0) {
    return null;
  }
  return (
    <div>
      <p className="text-lg mt-2 font-medium text-gray-500">
        {t.formatMessage(translations_2.messages.attributes)}
      </p>
      <div>
        {attributes.map((attribute) => (
          <div key={attribute.attribute.id} className="grid grid-cols-2">
            <div>
              <p className="text-base">
                {(0, translations_1.translate)(attribute.attribute, "name")}
              </p>
            </div>
            <div>
              {attribute.values.map((value, index) => {
                if (!value) {
                  return null;
                }
                return (
                  <div key={value.id}>
                    <p className="text-base">
                      {(0, translations_1.translate)(value, "name")}
                      {attribute.values.length !== index + 1 && <div>{" | "}</div>}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
exports.AttributeDetails = AttributeDetails;
