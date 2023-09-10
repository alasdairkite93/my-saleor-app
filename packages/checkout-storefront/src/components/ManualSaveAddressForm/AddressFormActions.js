"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressFormActions = void 0;
const Button_1 = require("@/checkout-storefront/components/Button");
const IconButton_1 = require("@/checkout-storefront/components/IconButton");
const messages_1 = require("./messages");
const icons_1 = require("@/checkout-storefront/icons");
const commonMessages_1 = require("@/checkout-storefront/lib/commonMessages");
const svgSrc_1 = require("@/checkout-storefront/lib/svgSrc");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const AddressFormActions = ({ onSubmit, onDelete, onCancel, loading }) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  return (
    <div className="flex flex-row justify-end">
      {onDelete && (
        <IconButton_1.IconButton
          className="mr-2"
          ariaLabel={formatMessage(messages_1.manualSaveAddressFormLabels.delete)}
          onClick={onDelete}
          icon={<img src={(0, svgSrc_1.getSvgSrc)(icons_1.TrashIcon)} alt="" />}
        />
      )}

      <Button_1.Button
        className="mr-2"
        ariaLabel={formatMessage(messages_1.manualSaveAddressFormLabels.cancel)}
        variant="secondary"
        onClick={onCancel}
        label={formatMessage(messages_1.manualSaveAddressFormMessages.cancel)}
      />
      {loading ? (
        <Button_1.Button
          disabled
          ariaLabel={formatMessage(messages_1.manualSaveAddressFormLabels.save)}
          onClick={onSubmit}
          label={formatMessage(commonMessages_1.commonMessages.processing)}
        />
      ) : (
        <Button_1.Button
          ariaLabel={formatMessage(messages_1.manualSaveAddressFormLabels.save)}
          onClick={onSubmit}
          label={formatMessage(messages_1.manualSaveAddressFormMessages.save)}
        />
      )}
    </div>
  );
};
exports.AddressFormActions = AddressFormActions;
