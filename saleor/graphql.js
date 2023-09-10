"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftCardErrorCode =
  exports.FulfillmentStatus =
  exports.FileTypesEnum =
  exports.ExternalNotificationErrorCodes =
  exports.ExportScope =
  exports.ExportFileSortField =
  exports.ExportEventsEnum =
  exports.ExportErrorCode =
  exports.EventDeliveryStatusEnum =
  exports.EventDeliverySortField =
  exports.EventDeliveryAttemptSortField =
  exports.ErrorPolicyEnum =
  exports.DistanceUnitsEnum =
  exports.DiscountValueTypeEnum =
  exports.DiscountStatusEnum =
  exports.DiscountErrorCode =
  exports.CustomerEventsEnum =
  exports.CustomerBulkUpdateErrorCode =
  exports.CountryCode =
  exports.ConfigurationTypeFieldEnum =
  exports.CollectionSortField =
  exports.CollectionPublished =
  exports.CollectionErrorCode =
  exports.CheckoutSortField =
  exports.CheckoutErrorCode =
  exports.CheckoutCreateFromOrderUnavailableVariantErrorCode =
  exports.CheckoutCreateFromOrderErrorCode =
  exports.CheckoutChargeStatusEnum =
  exports.CheckoutAuthorizeStatusEnum =
  exports.ChannelErrorCode =
  exports.CategorySortField =
  exports.AttributeValueTranslateErrorCode =
  exports.AttributeTypeEnum =
  exports.AttributeTranslateErrorCode =
  exports.AttributeSortField =
  exports.AttributeInputTypeEnum =
  exports.AttributeErrorCode =
  exports.AttributeEntityTypeEnum =
  exports.AttributeChoicesSortField =
  exports.AttributeBulkUpdateErrorCode =
  exports.AttributeBulkCreateErrorCode =
  exports.AreaUnitsEnum =
  exports.AppTypeEnum =
  exports.AppSortField =
  exports.AppExtensionTargetEnum =
  exports.AppExtensionMountEnum =
  exports.AppErrorCode =
  exports.AllocationStrategyEnum =
  exports.AddressTypeEnum =
  exports.AccountErrorCode =
    void 0;
exports.PluginSortField =
  exports.PluginErrorCode =
  exports.PluginConfigurationType =
  exports.PermissionGroupSortField =
  exports.PermissionGroupErrorCode =
  exports.PermissionEnum =
  exports.PaymentGatewayInitializeErrorCode =
  exports.PaymentGatewayConfigErrorCode =
  exports.PaymentErrorCode =
  exports.PaymentChargeStatusEnum =
  exports.PageTypeSortField =
  exports.PageSortField =
  exports.PageErrorCode =
  exports.OrderStatusFilter =
  exports.OrderStatus =
  exports.OrderSortField =
  exports.OrderSettingsErrorCode =
  exports.OrderOriginEnum =
  exports.OrderNoteUpdateErrorCode =
  exports.OrderNoteAddErrorCode =
  exports.OrderGrantRefundUpdateLineErrorCode =
  exports.OrderGrantRefundUpdateErrorCode =
  exports.OrderGrantRefundCreateLineErrorCode =
  exports.OrderGrantRefundCreateErrorCode =
  exports.OrderEventsEnum =
  exports.OrderEventsEmailsEnum =
  exports.OrderErrorCode =
  exports.OrderDiscountType =
  exports.OrderDirection =
  exports.OrderCreateFromCheckoutErrorCode =
  exports.OrderChargeStatusEnum =
  exports.OrderBulkCreateErrorCode =
  exports.OrderAuthorizeStatusEnum =
  exports.OrderAction =
  exports.NavigationType =
  exports.MetadataErrorCode =
  exports.MenuSortField =
  exports.MenuItemsSortField =
  exports.MenuErrorCode =
  exports.MediaChoicesSortField =
  exports.MeasurementUnitsEnum =
  exports.MarkAsPaidStrategyEnum =
  exports.LanguageCodeEnum =
  exports.JobStatusEnum =
  exports.InvoiceErrorCode =
  exports.IconThumbnailFormatEnum =
  exports.GiftCardSortField =
  exports.GiftCardSettingsExpiryTypeEnum =
  exports.GiftCardSettingsErrorCode =
  exports.GiftCardEventsEnum =
    void 0;
exports.TransactionRequestRefundForGrantedRefundErrorCode =
  exports.TransactionRequestActionErrorCode =
  exports.TransactionProcessErrorCode =
  exports.TransactionKind =
  exports.TransactionInitializeErrorCode =
  exports.TransactionFlowStrategyEnum =
  exports.TransactionEventTypeEnum =
  exports.TransactionEventReportErrorCode =
  exports.TransactionCreateErrorCode =
  exports.TransactionActionEnum =
  exports.TokenizedPaymentFlowEnum =
  exports.TimePeriodTypeEnum =
  exports.ThumbnailFormatEnum =
  exports.TaxExemptionManageErrorCode =
  exports.TaxCountryConfigurationUpdateErrorCode =
  exports.TaxCountryConfigurationDeleteErrorCode =
  exports.TaxConfigurationUpdateErrorCode =
  exports.TaxClassUpdateErrorCode =
  exports.TaxClassSortField =
  exports.TaxClassDeleteErrorCode =
  exports.TaxClassCreateErrorCode =
  exports.TaxCalculationStrategy =
  exports.StorePaymentMethodEnum =
  exports.StockUpdatePolicyEnum =
  exports.StockErrorCode =
  exports.StockBulkUpdateErrorCode =
  exports.StockAvailability =
  exports.StaffMemberStatus =
  exports.ShopErrorCode =
  exports.ShippingMethodTypeEnum =
  exports.ShippingErrorCode =
  exports.SendConfirmationEmailErrorCode =
  exports.SaleType =
  exports.SaleSortField =
  exports.ReportingPeriod =
  exports.ProductVariantTranslateErrorCode =
  exports.ProductVariantSortField =
  exports.ProductVariantBulkErrorCode =
  exports.ProductTypeSortField =
  exports.ProductTypeKindEnum =
  exports.ProductTypeEnum =
  exports.ProductTypeConfigurable =
  exports.ProductTranslateErrorCode =
  exports.ProductOrderField =
  exports.ProductMediaType =
  exports.ProductFieldEnum =
  exports.ProductErrorCode =
  exports.ProductBulkCreateErrorCode =
  exports.ProductAttributeType =
  exports.PostalCodeRuleInclusionTypeEnum =
    void 0;
exports.ProductGetThreeElementsDocument =
  exports.WeightUnitsEnum =
  exports.WebhookTriggerErrorCode =
  exports.WebhookSampleEventTypeEnum =
  exports.WebhookEventTypeSyncEnum =
  exports.WebhookEventTypeEnum =
  exports.WebhookEventTypeAsyncEnum =
  exports.WebhookErrorCode =
  exports.WebhookDryRunErrorCode =
  exports.WarehouseSortField =
  exports.WarehouseErrorCode =
  exports.WarehouseClickAndCollectOptionEnum =
  exports.VoucherTypeEnum =
  exports.VoucherSortField =
  exports.VoucherDiscountType =
  exports.VolumeUnitsEnum =
  exports.VariantAttributeScope =
  exports.UserSortField =
  exports.UploadErrorCode =
  exports.TranslationErrorCode =
  exports.TranslatableKinds =
  exports.TransactionUpdateErrorCode =
    void 0;
/** An enumeration. */
var AccountErrorCode;
(function (AccountErrorCode) {
  AccountErrorCode["AccountNotConfirmed"] = "ACCOUNT_NOT_CONFIRMED";
  AccountErrorCode["ActivateOwnAccount"] = "ACTIVATE_OWN_ACCOUNT";
  AccountErrorCode["ActivateSuperuserAccount"] = "ACTIVATE_SUPERUSER_ACCOUNT";
  AccountErrorCode["ChannelInactive"] = "CHANNEL_INACTIVE";
  AccountErrorCode["DeactivateOwnAccount"] = "DEACTIVATE_OWN_ACCOUNT";
  AccountErrorCode["DeactivateSuperuserAccount"] = "DEACTIVATE_SUPERUSER_ACCOUNT";
  AccountErrorCode["DeleteNonStaffUser"] = "DELETE_NON_STAFF_USER";
  AccountErrorCode["DeleteOwnAccount"] = "DELETE_OWN_ACCOUNT";
  AccountErrorCode["DeleteStaffAccount"] = "DELETE_STAFF_ACCOUNT";
  AccountErrorCode["DeleteSuperuserAccount"] = "DELETE_SUPERUSER_ACCOUNT";
  AccountErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  AccountErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  AccountErrorCode["Inactive"] = "INACTIVE";
  AccountErrorCode["Invalid"] = "INVALID";
  AccountErrorCode["InvalidCredentials"] = "INVALID_CREDENTIALS";
  AccountErrorCode["InvalidPassword"] = "INVALID_PASSWORD";
  AccountErrorCode["JwtDecodeError"] = "JWT_DECODE_ERROR";
  AccountErrorCode["JwtInvalidCsrfToken"] = "JWT_INVALID_CSRF_TOKEN";
  AccountErrorCode["JwtInvalidToken"] = "JWT_INVALID_TOKEN";
  AccountErrorCode["JwtMissingToken"] = "JWT_MISSING_TOKEN";
  AccountErrorCode["JwtSignatureExpired"] = "JWT_SIGNATURE_EXPIRED";
  AccountErrorCode["LeftNotManageablePermission"] = "LEFT_NOT_MANAGEABLE_PERMISSION";
  AccountErrorCode["MissingChannelSlug"] = "MISSING_CHANNEL_SLUG";
  AccountErrorCode["NotFound"] = "NOT_FOUND";
  AccountErrorCode["OutOfScopeGroup"] = "OUT_OF_SCOPE_GROUP";
  AccountErrorCode["OutOfScopePermission"] = "OUT_OF_SCOPE_PERMISSION";
  AccountErrorCode["OutOfScopeUser"] = "OUT_OF_SCOPE_USER";
  AccountErrorCode["PasswordEntirelyNumeric"] = "PASSWORD_ENTIRELY_NUMERIC";
  AccountErrorCode["PasswordResetAlreadyRequested"] = "PASSWORD_RESET_ALREADY_REQUESTED";
  AccountErrorCode["PasswordTooCommon"] = "PASSWORD_TOO_COMMON";
  AccountErrorCode["PasswordTooShort"] = "PASSWORD_TOO_SHORT";
  AccountErrorCode["PasswordTooSimilar"] = "PASSWORD_TOO_SIMILAR";
  AccountErrorCode["Required"] = "REQUIRED";
  AccountErrorCode["Unique"] = "UNIQUE";
})((AccountErrorCode = exports.AccountErrorCode || (exports.AccountErrorCode = {})));
/** An enumeration. */
var AddressTypeEnum;
(function (AddressTypeEnum) {
  AddressTypeEnum["Billing"] = "BILLING";
  AddressTypeEnum["Shipping"] = "SHIPPING";
})((AddressTypeEnum = exports.AddressTypeEnum || (exports.AddressTypeEnum = {})));
/**
 * Determine the allocation strategy for the channel.
 *
 *     PRIORITIZE_SORTING_ORDER - allocate stocks according to the warehouses' order
 *     within the channel
 *
 *     PRIORITIZE_HIGH_STOCK - allocate stock in a warehouse with the most stock
 *
 */
var AllocationStrategyEnum;
(function (AllocationStrategyEnum) {
  AllocationStrategyEnum["PrioritizeHighStock"] = "PRIORITIZE_HIGH_STOCK";
  AllocationStrategyEnum["PrioritizeSortingOrder"] = "PRIORITIZE_SORTING_ORDER";
})(
  (AllocationStrategyEnum = exports.AllocationStrategyEnum || (exports.AllocationStrategyEnum = {}))
);
/** An enumeration. */
var AppErrorCode;
(function (AppErrorCode) {
  AppErrorCode["Forbidden"] = "FORBIDDEN";
  AppErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  AppErrorCode["Invalid"] = "INVALID";
  AppErrorCode["InvalidCustomHeaders"] = "INVALID_CUSTOM_HEADERS";
  AppErrorCode["InvalidManifestFormat"] = "INVALID_MANIFEST_FORMAT";
  AppErrorCode["InvalidPermission"] = "INVALID_PERMISSION";
  AppErrorCode["InvalidStatus"] = "INVALID_STATUS";
  AppErrorCode["InvalidUrlFormat"] = "INVALID_URL_FORMAT";
  AppErrorCode["ManifestUrlCantConnect"] = "MANIFEST_URL_CANT_CONNECT";
  AppErrorCode["NotFound"] = "NOT_FOUND";
  AppErrorCode["OutOfScopeApp"] = "OUT_OF_SCOPE_APP";
  AppErrorCode["OutOfScopePermission"] = "OUT_OF_SCOPE_PERMISSION";
  AppErrorCode["Required"] = "REQUIRED";
  AppErrorCode["Unique"] = "UNIQUE";
  AppErrorCode["UnsupportedSaleorVersion"] = "UNSUPPORTED_SALEOR_VERSION";
})((AppErrorCode = exports.AppErrorCode || (exports.AppErrorCode = {})));
/** All places where app extension can be mounted. */
var AppExtensionMountEnum;
(function (AppExtensionMountEnum) {
  AppExtensionMountEnum["CustomerDetailsMoreActions"] = "CUSTOMER_DETAILS_MORE_ACTIONS";
  AppExtensionMountEnum["CustomerOverviewCreate"] = "CUSTOMER_OVERVIEW_CREATE";
  AppExtensionMountEnum["CustomerOverviewMoreActions"] = "CUSTOMER_OVERVIEW_MORE_ACTIONS";
  AppExtensionMountEnum["NavigationCatalog"] = "NAVIGATION_CATALOG";
  AppExtensionMountEnum["NavigationCustomers"] = "NAVIGATION_CUSTOMERS";
  AppExtensionMountEnum["NavigationDiscounts"] = "NAVIGATION_DISCOUNTS";
  AppExtensionMountEnum["NavigationOrders"] = "NAVIGATION_ORDERS";
  AppExtensionMountEnum["NavigationPages"] = "NAVIGATION_PAGES";
  AppExtensionMountEnum["NavigationTranslations"] = "NAVIGATION_TRANSLATIONS";
  AppExtensionMountEnum["OrderDetailsMoreActions"] = "ORDER_DETAILS_MORE_ACTIONS";
  AppExtensionMountEnum["OrderOverviewCreate"] = "ORDER_OVERVIEW_CREATE";
  AppExtensionMountEnum["OrderOverviewMoreActions"] = "ORDER_OVERVIEW_MORE_ACTIONS";
  AppExtensionMountEnum["ProductDetailsMoreActions"] = "PRODUCT_DETAILS_MORE_ACTIONS";
  AppExtensionMountEnum["ProductOverviewCreate"] = "PRODUCT_OVERVIEW_CREATE";
  AppExtensionMountEnum["ProductOverviewMoreActions"] = "PRODUCT_OVERVIEW_MORE_ACTIONS";
})((AppExtensionMountEnum = exports.AppExtensionMountEnum || (exports.AppExtensionMountEnum = {})));
/**
 * All available ways of opening an app extension.
 *
 *     POPUP - app's extension will be mounted as a popup window
 *     APP_PAGE - redirect to app's page
 *
 */
var AppExtensionTargetEnum;
(function (AppExtensionTargetEnum) {
  AppExtensionTargetEnum["AppPage"] = "APP_PAGE";
  AppExtensionTargetEnum["Popup"] = "POPUP";
})(
  (AppExtensionTargetEnum = exports.AppExtensionTargetEnum || (exports.AppExtensionTargetEnum = {}))
);
var AppSortField;
(function (AppSortField) {
  /** Sort apps by creation date. */
  AppSortField["CreationDate"] = "CREATION_DATE";
  /** Sort apps by name. */
  AppSortField["Name"] = "NAME";
})((AppSortField = exports.AppSortField || (exports.AppSortField = {})));
/** Enum determining type of your App. */
var AppTypeEnum;
(function (AppTypeEnum) {
  /** Local Saleor App. The app is fully manageable from dashboard. You can change assigned permissions, add webhooks, or authentication token */
  AppTypeEnum["Local"] = "LOCAL";
  /** Third party external App. Installation is fully automated. Saleor uses a defined App manifest to gather all required information. */
  AppTypeEnum["Thirdparty"] = "THIRDPARTY";
})((AppTypeEnum = exports.AppTypeEnum || (exports.AppTypeEnum = {})));
/** An enumeration. */
var AreaUnitsEnum;
(function (AreaUnitsEnum) {
  AreaUnitsEnum["SqCm"] = "SQ_CM";
  AreaUnitsEnum["SqDm"] = "SQ_DM";
  AreaUnitsEnum["SqFt"] = "SQ_FT";
  AreaUnitsEnum["SqInch"] = "SQ_INCH";
  AreaUnitsEnum["SqKm"] = "SQ_KM";
  AreaUnitsEnum["SqM"] = "SQ_M";
  AreaUnitsEnum["SqMm"] = "SQ_MM";
  AreaUnitsEnum["SqYd"] = "SQ_YD";
})((AreaUnitsEnum = exports.AreaUnitsEnum || (exports.AreaUnitsEnum = {})));
/** An enumeration. */
var AttributeBulkCreateErrorCode;
(function (AttributeBulkCreateErrorCode) {
  AttributeBulkCreateErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
  AttributeBulkCreateErrorCode["Blank"] = "BLANK";
  AttributeBulkCreateErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  AttributeBulkCreateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  AttributeBulkCreateErrorCode["Invalid"] = "INVALID";
  AttributeBulkCreateErrorCode["MaxLength"] = "MAX_LENGTH";
  AttributeBulkCreateErrorCode["NotFound"] = "NOT_FOUND";
  AttributeBulkCreateErrorCode["Required"] = "REQUIRED";
  AttributeBulkCreateErrorCode["Unique"] = "UNIQUE";
})(
  (AttributeBulkCreateErrorCode =
    exports.AttributeBulkCreateErrorCode || (exports.AttributeBulkCreateErrorCode = {}))
);
/** An enumeration. */
var AttributeBulkUpdateErrorCode;
(function (AttributeBulkUpdateErrorCode) {
  AttributeBulkUpdateErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
  AttributeBulkUpdateErrorCode["Blank"] = "BLANK";
  AttributeBulkUpdateErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  AttributeBulkUpdateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  AttributeBulkUpdateErrorCode["Invalid"] = "INVALID";
  AttributeBulkUpdateErrorCode["MaxLength"] = "MAX_LENGTH";
  AttributeBulkUpdateErrorCode["NotFound"] = "NOT_FOUND";
  AttributeBulkUpdateErrorCode["Required"] = "REQUIRED";
  AttributeBulkUpdateErrorCode["Unique"] = "UNIQUE";
})(
  (AttributeBulkUpdateErrorCode =
    exports.AttributeBulkUpdateErrorCode || (exports.AttributeBulkUpdateErrorCode = {}))
);
var AttributeChoicesSortField;
(function (AttributeChoicesSortField) {
  /** Sort attribute choice by name. */
  AttributeChoicesSortField["Name"] = "NAME";
  /** Sort attribute choice by slug. */
  AttributeChoicesSortField["Slug"] = "SLUG";
})(
  (AttributeChoicesSortField =
    exports.AttributeChoicesSortField || (exports.AttributeChoicesSortField = {}))
);
/** An enumeration. */
var AttributeEntityTypeEnum;
(function (AttributeEntityTypeEnum) {
  AttributeEntityTypeEnum["Page"] = "PAGE";
  AttributeEntityTypeEnum["Product"] = "PRODUCT";
  AttributeEntityTypeEnum["ProductVariant"] = "PRODUCT_VARIANT";
})(
  (AttributeEntityTypeEnum =
    exports.AttributeEntityTypeEnum || (exports.AttributeEntityTypeEnum = {}))
);
/** An enumeration. */
var AttributeErrorCode;
(function (AttributeErrorCode) {
  AttributeErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
  AttributeErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  AttributeErrorCode["Invalid"] = "INVALID";
  AttributeErrorCode["NotFound"] = "NOT_FOUND";
  AttributeErrorCode["Required"] = "REQUIRED";
  AttributeErrorCode["Unique"] = "UNIQUE";
})((AttributeErrorCode = exports.AttributeErrorCode || (exports.AttributeErrorCode = {})));
/** An enumeration. */
var AttributeInputTypeEnum;
(function (AttributeInputTypeEnum) {
  AttributeInputTypeEnum["Boolean"] = "BOOLEAN";
  AttributeInputTypeEnum["Date"] = "DATE";
  AttributeInputTypeEnum["DateTime"] = "DATE_TIME";
  AttributeInputTypeEnum["Dropdown"] = "DROPDOWN";
  AttributeInputTypeEnum["File"] = "FILE";
  AttributeInputTypeEnum["Multiselect"] = "MULTISELECT";
  AttributeInputTypeEnum["Numeric"] = "NUMERIC";
  AttributeInputTypeEnum["PlainText"] = "PLAIN_TEXT";
  AttributeInputTypeEnum["Reference"] = "REFERENCE";
  AttributeInputTypeEnum["RichText"] = "RICH_TEXT";
  AttributeInputTypeEnum["Swatch"] = "SWATCH";
})(
  (AttributeInputTypeEnum = exports.AttributeInputTypeEnum || (exports.AttributeInputTypeEnum = {}))
);
var AttributeSortField;
(function (AttributeSortField) {
  /** Sort attributes based on whether they can be displayed or not in a product grid. */
  AttributeSortField["AvailableInGrid"] = "AVAILABLE_IN_GRID";
  /** Sort attributes by the filterable in dashboard flag */
  AttributeSortField["FilterableInDashboard"] = "FILTERABLE_IN_DASHBOARD";
  /** Sort attributes by the filterable in storefront flag */
  AttributeSortField["FilterableInStorefront"] = "FILTERABLE_IN_STOREFRONT";
  /** Sort attributes by the variant only flag */
  AttributeSortField["IsVariantOnly"] = "IS_VARIANT_ONLY";
  /** Sort attributes by name */
  AttributeSortField["Name"] = "NAME";
  /** Sort attributes by slug */
  AttributeSortField["Slug"] = "SLUG";
  /** Sort attributes by their position in storefront */
  AttributeSortField["StorefrontSearchPosition"] = "STOREFRONT_SEARCH_POSITION";
  /** Sort attributes by the value required flag */
  AttributeSortField["ValueRequired"] = "VALUE_REQUIRED";
  /** Sort attributes by visibility in the storefront */
  AttributeSortField["VisibleInStorefront"] = "VISIBLE_IN_STOREFRONT";
})((AttributeSortField = exports.AttributeSortField || (exports.AttributeSortField = {})));
/** An enumeration. */
var AttributeTranslateErrorCode;
(function (AttributeTranslateErrorCode) {
  AttributeTranslateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  AttributeTranslateErrorCode["Invalid"] = "INVALID";
  AttributeTranslateErrorCode["NotFound"] = "NOT_FOUND";
  AttributeTranslateErrorCode["Required"] = "REQUIRED";
})(
  (AttributeTranslateErrorCode =
    exports.AttributeTranslateErrorCode || (exports.AttributeTranslateErrorCode = {}))
);
/** An enumeration. */
var AttributeTypeEnum;
(function (AttributeTypeEnum) {
  AttributeTypeEnum["PageType"] = "PAGE_TYPE";
  AttributeTypeEnum["ProductType"] = "PRODUCT_TYPE";
})((AttributeTypeEnum = exports.AttributeTypeEnum || (exports.AttributeTypeEnum = {})));
/** An enumeration. */
var AttributeValueTranslateErrorCode;
(function (AttributeValueTranslateErrorCode) {
  AttributeValueTranslateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  AttributeValueTranslateErrorCode["Invalid"] = "INVALID";
  AttributeValueTranslateErrorCode["NotFound"] = "NOT_FOUND";
  AttributeValueTranslateErrorCode["Required"] = "REQUIRED";
})(
  (AttributeValueTranslateErrorCode =
    exports.AttributeValueTranslateErrorCode || (exports.AttributeValueTranslateErrorCode = {}))
);
var CategorySortField;
(function (CategorySortField) {
  /** Sort categories by name. */
  CategorySortField["Name"] = "NAME";
  /** Sort categories by product count. */
  CategorySortField["ProductCount"] = "PRODUCT_COUNT";
  /** Sort categories by subcategory count. */
  CategorySortField["SubcategoryCount"] = "SUBCATEGORY_COUNT";
})((CategorySortField = exports.CategorySortField || (exports.CategorySortField = {})));
/** An enumeration. */
var ChannelErrorCode;
(function (ChannelErrorCode) {
  ChannelErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
  ChannelErrorCode["ChannelsCurrencyMustBeTheSame"] = "CHANNELS_CURRENCY_MUST_BE_THE_SAME";
  ChannelErrorCode["ChannelWithOrders"] = "CHANNEL_WITH_ORDERS";
  ChannelErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  ChannelErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  ChannelErrorCode["Invalid"] = "INVALID";
  ChannelErrorCode["NotFound"] = "NOT_FOUND";
  ChannelErrorCode["Required"] = "REQUIRED";
  ChannelErrorCode["Unique"] = "UNIQUE";
})((ChannelErrorCode = exports.ChannelErrorCode || (exports.ChannelErrorCode = {})));
/**
 * Determine a current authorize status for checkout.
 *
 *     We treat the checkout as fully authorized when the sum of authorized and charged
 *     funds cover the checkout.total.
 *     We treat the checkout as partially authorized when the sum of authorized and charged
 *     funds covers only part of the checkout.total
 *     We treat the checkout as not authorized when the sum of authorized and charged funds
 *     is 0.
 *
 *     NONE - the funds are not authorized
 *     PARTIAL - the cover funds don't cover fully the checkout's total
 *     FULL - the cover funds covers the checkout's total
 *
 */
var CheckoutAuthorizeStatusEnum;
(function (CheckoutAuthorizeStatusEnum) {
  CheckoutAuthorizeStatusEnum["Full"] = "FULL";
  CheckoutAuthorizeStatusEnum["None"] = "NONE";
  CheckoutAuthorizeStatusEnum["Partial"] = "PARTIAL";
})(
  (CheckoutAuthorizeStatusEnum =
    exports.CheckoutAuthorizeStatusEnum || (exports.CheckoutAuthorizeStatusEnum = {}))
);
/**
 * Determine the current charge status for the checkout.
 *
 *     The checkout is considered overcharged when the sum of the transactionItem's charge
 *     amounts exceeds the value of `checkout.total`.
 *     If the sum of the transactionItem's charge amounts equals
 *     `checkout.total`, we consider the checkout to be fully charged.
 *     If the sum of the transactionItem's charge amounts covers a part of the
 *     `checkout.total`, we treat the checkout as partially charged.
 *
 *
 *     NONE - the funds are not charged.
 *     PARTIAL - the funds that are charged don't cover the checkout's total
 *     FULL - the funds that are charged fully cover the checkout's total
 *     OVERCHARGED - the charged funds are bigger than checkout's total
 *
 */
var CheckoutChargeStatusEnum;
(function (CheckoutChargeStatusEnum) {
  CheckoutChargeStatusEnum["Full"] = "FULL";
  CheckoutChargeStatusEnum["None"] = "NONE";
  CheckoutChargeStatusEnum["Overcharged"] = "OVERCHARGED";
  CheckoutChargeStatusEnum["Partial"] = "PARTIAL";
})(
  (CheckoutChargeStatusEnum =
    exports.CheckoutChargeStatusEnum || (exports.CheckoutChargeStatusEnum = {}))
);
/** An enumeration. */
var CheckoutCreateFromOrderErrorCode;
(function (CheckoutCreateFromOrderErrorCode) {
  CheckoutCreateFromOrderErrorCode["ChannelInactive"] = "CHANNEL_INACTIVE";
  CheckoutCreateFromOrderErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  CheckoutCreateFromOrderErrorCode["Invalid"] = "INVALID";
  CheckoutCreateFromOrderErrorCode["OrderNotFound"] = "ORDER_NOT_FOUND";
  CheckoutCreateFromOrderErrorCode["TaxError"] = "TAX_ERROR";
})(
  (CheckoutCreateFromOrderErrorCode =
    exports.CheckoutCreateFromOrderErrorCode || (exports.CheckoutCreateFromOrderErrorCode = {}))
);
/** An enumeration. */
var CheckoutCreateFromOrderUnavailableVariantErrorCode;
(function (CheckoutCreateFromOrderUnavailableVariantErrorCode) {
  CheckoutCreateFromOrderUnavailableVariantErrorCode["InsufficientStock"] = "INSUFFICIENT_STOCK";
  CheckoutCreateFromOrderUnavailableVariantErrorCode["NotFound"] = "NOT_FOUND";
  CheckoutCreateFromOrderUnavailableVariantErrorCode["ProductNotPublished"] =
    "PRODUCT_NOT_PUBLISHED";
  CheckoutCreateFromOrderUnavailableVariantErrorCode["ProductUnavailableForPurchase"] =
    "PRODUCT_UNAVAILABLE_FOR_PURCHASE";
  CheckoutCreateFromOrderUnavailableVariantErrorCode["QuantityGreaterThanLimit"] =
    "QUANTITY_GREATER_THAN_LIMIT";
  CheckoutCreateFromOrderUnavailableVariantErrorCode["UnavailableVariantInChannel"] =
    "UNAVAILABLE_VARIANT_IN_CHANNEL";
})(
  (CheckoutCreateFromOrderUnavailableVariantErrorCode =
    exports.CheckoutCreateFromOrderUnavailableVariantErrorCode ||
    (exports.CheckoutCreateFromOrderUnavailableVariantErrorCode = {}))
);
/** An enumeration. */
var CheckoutErrorCode;
(function (CheckoutErrorCode) {
  CheckoutErrorCode["BillingAddressNotSet"] = "BILLING_ADDRESS_NOT_SET";
  CheckoutErrorCode["ChannelInactive"] = "CHANNEL_INACTIVE";
  CheckoutErrorCode["CheckoutNotFullyPaid"] = "CHECKOUT_NOT_FULLY_PAID";
  CheckoutErrorCode["DeliveryMethodNotApplicable"] = "DELIVERY_METHOD_NOT_APPLICABLE";
  CheckoutErrorCode["EmailNotSet"] = "EMAIL_NOT_SET";
  CheckoutErrorCode["GiftCardNotApplicable"] = "GIFT_CARD_NOT_APPLICABLE";
  CheckoutErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  CheckoutErrorCode["InactivePayment"] = "INACTIVE_PAYMENT";
  CheckoutErrorCode["InsufficientStock"] = "INSUFFICIENT_STOCK";
  CheckoutErrorCode["Invalid"] = "INVALID";
  CheckoutErrorCode["InvalidShippingMethod"] = "INVALID_SHIPPING_METHOD";
  CheckoutErrorCode["MissingChannelSlug"] = "MISSING_CHANNEL_SLUG";
  CheckoutErrorCode["NotFound"] = "NOT_FOUND";
  CheckoutErrorCode["NoLines"] = "NO_LINES";
  CheckoutErrorCode["PaymentError"] = "PAYMENT_ERROR";
  CheckoutErrorCode["ProductNotPublished"] = "PRODUCT_NOT_PUBLISHED";
  CheckoutErrorCode["ProductUnavailableForPurchase"] = "PRODUCT_UNAVAILABLE_FOR_PURCHASE";
  CheckoutErrorCode["QuantityGreaterThanLimit"] = "QUANTITY_GREATER_THAN_LIMIT";
  CheckoutErrorCode["Required"] = "REQUIRED";
  CheckoutErrorCode["ShippingAddressNotSet"] = "SHIPPING_ADDRESS_NOT_SET";
  CheckoutErrorCode["ShippingMethodNotApplicable"] = "SHIPPING_METHOD_NOT_APPLICABLE";
  CheckoutErrorCode["ShippingMethodNotSet"] = "SHIPPING_METHOD_NOT_SET";
  CheckoutErrorCode["ShippingNotRequired"] = "SHIPPING_NOT_REQUIRED";
  CheckoutErrorCode["TaxError"] = "TAX_ERROR";
  CheckoutErrorCode["UnavailableVariantInChannel"] = "UNAVAILABLE_VARIANT_IN_CHANNEL";
  CheckoutErrorCode["Unique"] = "UNIQUE";
  CheckoutErrorCode["VoucherNotApplicable"] = "VOUCHER_NOT_APPLICABLE";
  CheckoutErrorCode["ZeroQuantity"] = "ZERO_QUANTITY";
})((CheckoutErrorCode = exports.CheckoutErrorCode || (exports.CheckoutErrorCode = {})));
var CheckoutSortField;
(function (CheckoutSortField) {
  /** Sort checkouts by creation date. */
  CheckoutSortField["CreationDate"] = "CREATION_DATE";
  /** Sort checkouts by customer. */
  CheckoutSortField["Customer"] = "CUSTOMER";
  /** Sort checkouts by payment. */
  CheckoutSortField["Payment"] = "PAYMENT";
})((CheckoutSortField = exports.CheckoutSortField || (exports.CheckoutSortField = {})));
/** An enumeration. */
var CollectionErrorCode;
(function (CollectionErrorCode) {
  CollectionErrorCode["CannotManageProductWithoutVariant"] =
    "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT";
  CollectionErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  CollectionErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  CollectionErrorCode["Invalid"] = "INVALID";
  CollectionErrorCode["NotFound"] = "NOT_FOUND";
  CollectionErrorCode["Required"] = "REQUIRED";
  CollectionErrorCode["Unique"] = "UNIQUE";
})((CollectionErrorCode = exports.CollectionErrorCode || (exports.CollectionErrorCode = {})));
var CollectionPublished;
(function (CollectionPublished) {
  CollectionPublished["Hidden"] = "HIDDEN";
  CollectionPublished["Published"] = "PUBLISHED";
})((CollectionPublished = exports.CollectionPublished || (exports.CollectionPublished = {})));
var CollectionSortField;
(function (CollectionSortField) {
  /**
   * Sort collections by availability.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  CollectionSortField["Availability"] = "AVAILABILITY";
  /** Sort collections by name. */
  CollectionSortField["Name"] = "NAME";
  /** Sort collections by product count. */
  CollectionSortField["ProductCount"] = "PRODUCT_COUNT";
  /**
   * Sort collections by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  CollectionSortField["PublicationDate"] = "PUBLICATION_DATE";
  /**
   * Sort collections by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  CollectionSortField["PublishedAt"] = "PUBLISHED_AT";
})((CollectionSortField = exports.CollectionSortField || (exports.CollectionSortField = {})));
/** An enumeration. */
var ConfigurationTypeFieldEnum;
(function (ConfigurationTypeFieldEnum) {
  ConfigurationTypeFieldEnum["Boolean"] = "BOOLEAN";
  ConfigurationTypeFieldEnum["Multiline"] = "MULTILINE";
  ConfigurationTypeFieldEnum["Output"] = "OUTPUT";
  ConfigurationTypeFieldEnum["Password"] = "PASSWORD";
  ConfigurationTypeFieldEnum["Secret"] = "SECRET";
  ConfigurationTypeFieldEnum["Secretmultiline"] = "SECRETMULTILINE";
  ConfigurationTypeFieldEnum["String"] = "STRING";
})(
  (ConfigurationTypeFieldEnum =
    exports.ConfigurationTypeFieldEnum || (exports.ConfigurationTypeFieldEnum = {}))
);
/** An enumeration. */
var CountryCode;
(function (CountryCode) {
  CountryCode["Ad"] = "AD";
  CountryCode["Ae"] = "AE";
  CountryCode["Af"] = "AF";
  CountryCode["Ag"] = "AG";
  CountryCode["Ai"] = "AI";
  CountryCode["Al"] = "AL";
  CountryCode["Am"] = "AM";
  CountryCode["Ao"] = "AO";
  CountryCode["Aq"] = "AQ";
  CountryCode["Ar"] = "AR";
  CountryCode["As"] = "AS";
  CountryCode["At"] = "AT";
  CountryCode["Au"] = "AU";
  CountryCode["Aw"] = "AW";
  CountryCode["Ax"] = "AX";
  CountryCode["Az"] = "AZ";
  CountryCode["Ba"] = "BA";
  CountryCode["Bb"] = "BB";
  CountryCode["Bd"] = "BD";
  CountryCode["Be"] = "BE";
  CountryCode["Bf"] = "BF";
  CountryCode["Bg"] = "BG";
  CountryCode["Bh"] = "BH";
  CountryCode["Bi"] = "BI";
  CountryCode["Bj"] = "BJ";
  CountryCode["Bl"] = "BL";
  CountryCode["Bm"] = "BM";
  CountryCode["Bn"] = "BN";
  CountryCode["Bo"] = "BO";
  CountryCode["Bq"] = "BQ";
  CountryCode["Br"] = "BR";
  CountryCode["Bs"] = "BS";
  CountryCode["Bt"] = "BT";
  CountryCode["Bv"] = "BV";
  CountryCode["Bw"] = "BW";
  CountryCode["By"] = "BY";
  CountryCode["Bz"] = "BZ";
  CountryCode["Ca"] = "CA";
  CountryCode["Cc"] = "CC";
  CountryCode["Cd"] = "CD";
  CountryCode["Cf"] = "CF";
  CountryCode["Cg"] = "CG";
  CountryCode["Ch"] = "CH";
  CountryCode["Ci"] = "CI";
  CountryCode["Ck"] = "CK";
  CountryCode["Cl"] = "CL";
  CountryCode["Cm"] = "CM";
  CountryCode["Cn"] = "CN";
  CountryCode["Co"] = "CO";
  CountryCode["Cr"] = "CR";
  CountryCode["Cu"] = "CU";
  CountryCode["Cv"] = "CV";
  CountryCode["Cw"] = "CW";
  CountryCode["Cx"] = "CX";
  CountryCode["Cy"] = "CY";
  CountryCode["Cz"] = "CZ";
  CountryCode["De"] = "DE";
  CountryCode["Dj"] = "DJ";
  CountryCode["Dk"] = "DK";
  CountryCode["Dm"] = "DM";
  CountryCode["Do"] = "DO";
  CountryCode["Dz"] = "DZ";
  CountryCode["Ec"] = "EC";
  CountryCode["Ee"] = "EE";
  CountryCode["Eg"] = "EG";
  CountryCode["Eh"] = "EH";
  CountryCode["Er"] = "ER";
  CountryCode["Es"] = "ES";
  CountryCode["Et"] = "ET";
  CountryCode["Eu"] = "EU";
  CountryCode["Fi"] = "FI";
  CountryCode["Fj"] = "FJ";
  CountryCode["Fk"] = "FK";
  CountryCode["Fm"] = "FM";
  CountryCode["Fo"] = "FO";
  CountryCode["Fr"] = "FR";
  CountryCode["Ga"] = "GA";
  CountryCode["Gb"] = "GB";
  CountryCode["Gd"] = "GD";
  CountryCode["Ge"] = "GE";
  CountryCode["Gf"] = "GF";
  CountryCode["Gg"] = "GG";
  CountryCode["Gh"] = "GH";
  CountryCode["Gi"] = "GI";
  CountryCode["Gl"] = "GL";
  CountryCode["Gm"] = "GM";
  CountryCode["Gn"] = "GN";
  CountryCode["Gp"] = "GP";
  CountryCode["Gq"] = "GQ";
  CountryCode["Gr"] = "GR";
  CountryCode["Gs"] = "GS";
  CountryCode["Gt"] = "GT";
  CountryCode["Gu"] = "GU";
  CountryCode["Gw"] = "GW";
  CountryCode["Gy"] = "GY";
  CountryCode["Hk"] = "HK";
  CountryCode["Hm"] = "HM";
  CountryCode["Hn"] = "HN";
  CountryCode["Hr"] = "HR";
  CountryCode["Ht"] = "HT";
  CountryCode["Hu"] = "HU";
  CountryCode["Id"] = "ID";
  CountryCode["Ie"] = "IE";
  CountryCode["Il"] = "IL";
  CountryCode["Im"] = "IM";
  CountryCode["In"] = "IN";
  CountryCode["Io"] = "IO";
  CountryCode["Iq"] = "IQ";
  CountryCode["Ir"] = "IR";
  CountryCode["Is"] = "IS";
  CountryCode["It"] = "IT";
  CountryCode["Je"] = "JE";
  CountryCode["Jm"] = "JM";
  CountryCode["Jo"] = "JO";
  CountryCode["Jp"] = "JP";
  CountryCode["Ke"] = "KE";
  CountryCode["Kg"] = "KG";
  CountryCode["Kh"] = "KH";
  CountryCode["Ki"] = "KI";
  CountryCode["Km"] = "KM";
  CountryCode["Kn"] = "KN";
  CountryCode["Kp"] = "KP";
  CountryCode["Kr"] = "KR";
  CountryCode["Kw"] = "KW";
  CountryCode["Ky"] = "KY";
  CountryCode["Kz"] = "KZ";
  CountryCode["La"] = "LA";
  CountryCode["Lb"] = "LB";
  CountryCode["Lc"] = "LC";
  CountryCode["Li"] = "LI";
  CountryCode["Lk"] = "LK";
  CountryCode["Lr"] = "LR";
  CountryCode["Ls"] = "LS";
  CountryCode["Lt"] = "LT";
  CountryCode["Lu"] = "LU";
  CountryCode["Lv"] = "LV";
  CountryCode["Ly"] = "LY";
  CountryCode["Ma"] = "MA";
  CountryCode["Mc"] = "MC";
  CountryCode["Md"] = "MD";
  CountryCode["Me"] = "ME";
  CountryCode["Mf"] = "MF";
  CountryCode["Mg"] = "MG";
  CountryCode["Mh"] = "MH";
  CountryCode["Mk"] = "MK";
  CountryCode["Ml"] = "ML";
  CountryCode["Mm"] = "MM";
  CountryCode["Mn"] = "MN";
  CountryCode["Mo"] = "MO";
  CountryCode["Mp"] = "MP";
  CountryCode["Mq"] = "MQ";
  CountryCode["Mr"] = "MR";
  CountryCode["Ms"] = "MS";
  CountryCode["Mt"] = "MT";
  CountryCode["Mu"] = "MU";
  CountryCode["Mv"] = "MV";
  CountryCode["Mw"] = "MW";
  CountryCode["Mx"] = "MX";
  CountryCode["My"] = "MY";
  CountryCode["Mz"] = "MZ";
  CountryCode["Na"] = "NA";
  CountryCode["Nc"] = "NC";
  CountryCode["Ne"] = "NE";
  CountryCode["Nf"] = "NF";
  CountryCode["Ng"] = "NG";
  CountryCode["Ni"] = "NI";
  CountryCode["Nl"] = "NL";
  CountryCode["No"] = "NO";
  CountryCode["Np"] = "NP";
  CountryCode["Nr"] = "NR";
  CountryCode["Nu"] = "NU";
  CountryCode["Nz"] = "NZ";
  CountryCode["Om"] = "OM";
  CountryCode["Pa"] = "PA";
  CountryCode["Pe"] = "PE";
  CountryCode["Pf"] = "PF";
  CountryCode["Pg"] = "PG";
  CountryCode["Ph"] = "PH";
  CountryCode["Pk"] = "PK";
  CountryCode["Pl"] = "PL";
  CountryCode["Pm"] = "PM";
  CountryCode["Pn"] = "PN";
  CountryCode["Pr"] = "PR";
  CountryCode["Ps"] = "PS";
  CountryCode["Pt"] = "PT";
  CountryCode["Pw"] = "PW";
  CountryCode["Py"] = "PY";
  CountryCode["Qa"] = "QA";
  CountryCode["Re"] = "RE";
  CountryCode["Ro"] = "RO";
  CountryCode["Rs"] = "RS";
  CountryCode["Ru"] = "RU";
  CountryCode["Rw"] = "RW";
  CountryCode["Sa"] = "SA";
  CountryCode["Sb"] = "SB";
  CountryCode["Sc"] = "SC";
  CountryCode["Sd"] = "SD";
  CountryCode["Se"] = "SE";
  CountryCode["Sg"] = "SG";
  CountryCode["Sh"] = "SH";
  CountryCode["Si"] = "SI";
  CountryCode["Sj"] = "SJ";
  CountryCode["Sk"] = "SK";
  CountryCode["Sl"] = "SL";
  CountryCode["Sm"] = "SM";
  CountryCode["Sn"] = "SN";
  CountryCode["So"] = "SO";
  CountryCode["Sr"] = "SR";
  CountryCode["Ss"] = "SS";
  CountryCode["St"] = "ST";
  CountryCode["Sv"] = "SV";
  CountryCode["Sx"] = "SX";
  CountryCode["Sy"] = "SY";
  CountryCode["Sz"] = "SZ";
  CountryCode["Tc"] = "TC";
  CountryCode["Td"] = "TD";
  CountryCode["Tf"] = "TF";
  CountryCode["Tg"] = "TG";
  CountryCode["Th"] = "TH";
  CountryCode["Tj"] = "TJ";
  CountryCode["Tk"] = "TK";
  CountryCode["Tl"] = "TL";
  CountryCode["Tm"] = "TM";
  CountryCode["Tn"] = "TN";
  CountryCode["To"] = "TO";
  CountryCode["Tr"] = "TR";
  CountryCode["Tt"] = "TT";
  CountryCode["Tv"] = "TV";
  CountryCode["Tw"] = "TW";
  CountryCode["Tz"] = "TZ";
  CountryCode["Ua"] = "UA";
  CountryCode["Ug"] = "UG";
  CountryCode["Um"] = "UM";
  CountryCode["Us"] = "US";
  CountryCode["Uy"] = "UY";
  CountryCode["Uz"] = "UZ";
  CountryCode["Va"] = "VA";
  CountryCode["Vc"] = "VC";
  CountryCode["Ve"] = "VE";
  CountryCode["Vg"] = "VG";
  CountryCode["Vi"] = "VI";
  CountryCode["Vn"] = "VN";
  CountryCode["Vu"] = "VU";
  CountryCode["Wf"] = "WF";
  CountryCode["Ws"] = "WS";
  CountryCode["Ye"] = "YE";
  CountryCode["Yt"] = "YT";
  CountryCode["Za"] = "ZA";
  CountryCode["Zm"] = "ZM";
  CountryCode["Zw"] = "ZW";
})((CountryCode = exports.CountryCode || (exports.CountryCode = {})));
/** An enumeration. */
var CustomerBulkUpdateErrorCode;
(function (CustomerBulkUpdateErrorCode) {
  CustomerBulkUpdateErrorCode["Blank"] = "BLANK";
  CustomerBulkUpdateErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  CustomerBulkUpdateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  CustomerBulkUpdateErrorCode["Invalid"] = "INVALID";
  CustomerBulkUpdateErrorCode["MaxLength"] = "MAX_LENGTH";
  CustomerBulkUpdateErrorCode["NotFound"] = "NOT_FOUND";
  CustomerBulkUpdateErrorCode["Required"] = "REQUIRED";
  CustomerBulkUpdateErrorCode["Unique"] = "UNIQUE";
})(
  (CustomerBulkUpdateErrorCode =
    exports.CustomerBulkUpdateErrorCode || (exports.CustomerBulkUpdateErrorCode = {}))
);
/** An enumeration. */
var CustomerEventsEnum;
(function (CustomerEventsEnum) {
  CustomerEventsEnum["AccountActivated"] = "ACCOUNT_ACTIVATED";
  CustomerEventsEnum["AccountCreated"] = "ACCOUNT_CREATED";
  CustomerEventsEnum["AccountDeactivated"] = "ACCOUNT_DEACTIVATED";
  CustomerEventsEnum["CustomerDeleted"] = "CUSTOMER_DELETED";
  CustomerEventsEnum["DigitalLinkDownloaded"] = "DIGITAL_LINK_DOWNLOADED";
  CustomerEventsEnum["EmailAssigned"] = "EMAIL_ASSIGNED";
  CustomerEventsEnum["EmailChanged"] = "EMAIL_CHANGED";
  CustomerEventsEnum["EmailChangedRequest"] = "EMAIL_CHANGED_REQUEST";
  CustomerEventsEnum["NameAssigned"] = "NAME_ASSIGNED";
  CustomerEventsEnum["NoteAdded"] = "NOTE_ADDED";
  CustomerEventsEnum["NoteAddedToOrder"] = "NOTE_ADDED_TO_ORDER";
  CustomerEventsEnum["PasswordChanged"] = "PASSWORD_CHANGED";
  CustomerEventsEnum["PasswordReset"] = "PASSWORD_RESET";
  CustomerEventsEnum["PasswordResetLinkSent"] = "PASSWORD_RESET_LINK_SENT";
  CustomerEventsEnum["PlacedOrder"] = "PLACED_ORDER";
})((CustomerEventsEnum = exports.CustomerEventsEnum || (exports.CustomerEventsEnum = {})));
/** An enumeration. */
var DiscountErrorCode;
(function (DiscountErrorCode) {
  DiscountErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
  DiscountErrorCode["CannotManageProductWithoutVariant"] = "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT";
  DiscountErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  DiscountErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  DiscountErrorCode["Invalid"] = "INVALID";
  DiscountErrorCode["NotFound"] = "NOT_FOUND";
  DiscountErrorCode["Required"] = "REQUIRED";
  DiscountErrorCode["Unique"] = "UNIQUE";
})((DiscountErrorCode = exports.DiscountErrorCode || (exports.DiscountErrorCode = {})));
var DiscountStatusEnum;
(function (DiscountStatusEnum) {
  DiscountStatusEnum["Active"] = "ACTIVE";
  DiscountStatusEnum["Expired"] = "EXPIRED";
  DiscountStatusEnum["Scheduled"] = "SCHEDULED";
})((DiscountStatusEnum = exports.DiscountStatusEnum || (exports.DiscountStatusEnum = {})));
var DiscountValueTypeEnum;
(function (DiscountValueTypeEnum) {
  DiscountValueTypeEnum["Fixed"] = "FIXED";
  DiscountValueTypeEnum["Percentage"] = "PERCENTAGE";
})((DiscountValueTypeEnum = exports.DiscountValueTypeEnum || (exports.DiscountValueTypeEnum = {})));
/** An enumeration. */
var DistanceUnitsEnum;
(function (DistanceUnitsEnum) {
  DistanceUnitsEnum["Cm"] = "CM";
  DistanceUnitsEnum["Dm"] = "DM";
  DistanceUnitsEnum["Ft"] = "FT";
  DistanceUnitsEnum["Inch"] = "INCH";
  DistanceUnitsEnum["Km"] = "KM";
  DistanceUnitsEnum["M"] = "M";
  DistanceUnitsEnum["Mm"] = "MM";
  DistanceUnitsEnum["Yd"] = "YD";
})((DistanceUnitsEnum = exports.DistanceUnitsEnum || (exports.DistanceUnitsEnum = {})));
var ErrorPolicyEnum;
(function (ErrorPolicyEnum) {
  /** Save what is possible within a single row. If there are errors in an input data row, try to save it partially and skip the invalid part. */
  ErrorPolicyEnum["IgnoreFailed"] = "IGNORE_FAILED";
  /** Reject all rows if there is at least one error in any of them. */
  ErrorPolicyEnum["RejectEverything"] = "REJECT_EVERYTHING";
  /** Reject rows with errors. */
  ErrorPolicyEnum["RejectFailedRows"] = "REJECT_FAILED_ROWS";
})((ErrorPolicyEnum = exports.ErrorPolicyEnum || (exports.ErrorPolicyEnum = {})));
var EventDeliveryAttemptSortField;
(function (EventDeliveryAttemptSortField) {
  /** Sort event delivery attempts by created at. */
  EventDeliveryAttemptSortField["CreatedAt"] = "CREATED_AT";
})(
  (EventDeliveryAttemptSortField =
    exports.EventDeliveryAttemptSortField || (exports.EventDeliveryAttemptSortField = {}))
);
var EventDeliverySortField;
(function (EventDeliverySortField) {
  /** Sort event deliveries by created at. */
  EventDeliverySortField["CreatedAt"] = "CREATED_AT";
})(
  (EventDeliverySortField = exports.EventDeliverySortField || (exports.EventDeliverySortField = {}))
);
var EventDeliveryStatusEnum;
(function (EventDeliveryStatusEnum) {
  EventDeliveryStatusEnum["Failed"] = "FAILED";
  EventDeliveryStatusEnum["Pending"] = "PENDING";
  EventDeliveryStatusEnum["Success"] = "SUCCESS";
})(
  (EventDeliveryStatusEnum =
    exports.EventDeliveryStatusEnum || (exports.EventDeliveryStatusEnum = {}))
);
/** An enumeration. */
var ExportErrorCode;
(function (ExportErrorCode) {
  ExportErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  ExportErrorCode["Invalid"] = "INVALID";
  ExportErrorCode["NotFound"] = "NOT_FOUND";
  ExportErrorCode["Required"] = "REQUIRED";
})((ExportErrorCode = exports.ExportErrorCode || (exports.ExportErrorCode = {})));
/** An enumeration. */
var ExportEventsEnum;
(function (ExportEventsEnum) {
  ExportEventsEnum["ExportedFileSent"] = "EXPORTED_FILE_SENT";
  ExportEventsEnum["ExportDeleted"] = "EXPORT_DELETED";
  ExportEventsEnum["ExportFailed"] = "EXPORT_FAILED";
  ExportEventsEnum["ExportFailedInfoSent"] = "EXPORT_FAILED_INFO_SENT";
  ExportEventsEnum["ExportPending"] = "EXPORT_PENDING";
  ExportEventsEnum["ExportSuccess"] = "EXPORT_SUCCESS";
})((ExportEventsEnum = exports.ExportEventsEnum || (exports.ExportEventsEnum = {})));
var ExportFileSortField;
(function (ExportFileSortField) {
  ExportFileSortField["CreatedAt"] = "CREATED_AT";
  ExportFileSortField["LastModifiedAt"] = "LAST_MODIFIED_AT";
  ExportFileSortField["Status"] = "STATUS";
  ExportFileSortField["UpdatedAt"] = "UPDATED_AT";
})((ExportFileSortField = exports.ExportFileSortField || (exports.ExportFileSortField = {})));
var ExportScope;
(function (ExportScope) {
  /** Export all products. */
  ExportScope["All"] = "ALL";
  /** Export the filtered products. */
  ExportScope["Filter"] = "FILTER";
  /** Export products with given ids. */
  ExportScope["Ids"] = "IDS";
})((ExportScope = exports.ExportScope || (exports.ExportScope = {})));
/** An enumeration. */
var ExternalNotificationErrorCodes;
(function (ExternalNotificationErrorCodes) {
  ExternalNotificationErrorCodes["ChannelInactive"] = "CHANNEL_INACTIVE";
  ExternalNotificationErrorCodes["InvalidModelType"] = "INVALID_MODEL_TYPE";
  ExternalNotificationErrorCodes["NotFound"] = "NOT_FOUND";
  ExternalNotificationErrorCodes["Required"] = "REQUIRED";
})(
  (ExternalNotificationErrorCodes =
    exports.ExternalNotificationErrorCodes || (exports.ExternalNotificationErrorCodes = {}))
);
/** An enumeration. */
var FileTypesEnum;
(function (FileTypesEnum) {
  FileTypesEnum["Csv"] = "CSV";
  FileTypesEnum["Xlsx"] = "XLSX";
})((FileTypesEnum = exports.FileTypesEnum || (exports.FileTypesEnum = {})));
/** An enumeration. */
var FulfillmentStatus;
(function (FulfillmentStatus) {
  FulfillmentStatus["Canceled"] = "CANCELED";
  FulfillmentStatus["Fulfilled"] = "FULFILLED";
  FulfillmentStatus["Refunded"] = "REFUNDED";
  FulfillmentStatus["RefundedAndReturned"] = "REFUNDED_AND_RETURNED";
  FulfillmentStatus["Replaced"] = "REPLACED";
  FulfillmentStatus["Returned"] = "RETURNED";
  FulfillmentStatus["WaitingForApproval"] = "WAITING_FOR_APPROVAL";
})((FulfillmentStatus = exports.FulfillmentStatus || (exports.FulfillmentStatus = {})));
/** An enumeration. */
var GiftCardErrorCode;
(function (GiftCardErrorCode) {
  GiftCardErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
  GiftCardErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  GiftCardErrorCode["ExpiredGiftCard"] = "EXPIRED_GIFT_CARD";
  GiftCardErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  GiftCardErrorCode["Invalid"] = "INVALID";
  GiftCardErrorCode["NotFound"] = "NOT_FOUND";
  GiftCardErrorCode["Required"] = "REQUIRED";
  GiftCardErrorCode["Unique"] = "UNIQUE";
})((GiftCardErrorCode = exports.GiftCardErrorCode || (exports.GiftCardErrorCode = {})));
/** An enumeration. */
var GiftCardEventsEnum;
(function (GiftCardEventsEnum) {
  GiftCardEventsEnum["Activated"] = "ACTIVATED";
  GiftCardEventsEnum["BalanceReset"] = "BALANCE_RESET";
  GiftCardEventsEnum["Bought"] = "BOUGHT";
  GiftCardEventsEnum["Deactivated"] = "DEACTIVATED";
  GiftCardEventsEnum["ExpiryDateUpdated"] = "EXPIRY_DATE_UPDATED";
  GiftCardEventsEnum["Issued"] = "ISSUED";
  GiftCardEventsEnum["NoteAdded"] = "NOTE_ADDED";
  GiftCardEventsEnum["Resent"] = "RESENT";
  GiftCardEventsEnum["SentToCustomer"] = "SENT_TO_CUSTOMER";
  GiftCardEventsEnum["TagsUpdated"] = "TAGS_UPDATED";
  GiftCardEventsEnum["Updated"] = "UPDATED";
  GiftCardEventsEnum["UsedInOrder"] = "USED_IN_ORDER";
})((GiftCardEventsEnum = exports.GiftCardEventsEnum || (exports.GiftCardEventsEnum = {})));
/** An enumeration. */
var GiftCardSettingsErrorCode;
(function (GiftCardSettingsErrorCode) {
  GiftCardSettingsErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  GiftCardSettingsErrorCode["Invalid"] = "INVALID";
  GiftCardSettingsErrorCode["Required"] = "REQUIRED";
})(
  (GiftCardSettingsErrorCode =
    exports.GiftCardSettingsErrorCode || (exports.GiftCardSettingsErrorCode = {}))
);
/** An enumeration. */
var GiftCardSettingsExpiryTypeEnum;
(function (GiftCardSettingsExpiryTypeEnum) {
  GiftCardSettingsExpiryTypeEnum["ExpiryPeriod"] = "EXPIRY_PERIOD";
  GiftCardSettingsExpiryTypeEnum["NeverExpire"] = "NEVER_EXPIRE";
})(
  (GiftCardSettingsExpiryTypeEnum =
    exports.GiftCardSettingsExpiryTypeEnum || (exports.GiftCardSettingsExpiryTypeEnum = {}))
);
var GiftCardSortField;
(function (GiftCardSortField) {
  /**
   * Sort gift cards by created at.
   *
   * Added in Saleor 3.8.
   */
  GiftCardSortField["CreatedAt"] = "CREATED_AT";
  /** Sort gift cards by current balance. */
  GiftCardSortField["CurrentBalance"] = "CURRENT_BALANCE";
  /** Sort gift cards by product. */
  GiftCardSortField["Product"] = "PRODUCT";
  /** Sort gift cards by used by. */
  GiftCardSortField["UsedBy"] = "USED_BY";
})((GiftCardSortField = exports.GiftCardSortField || (exports.GiftCardSortField = {})));
/** Thumbnail formats for icon images. */
var IconThumbnailFormatEnum;
(function (IconThumbnailFormatEnum) {
  IconThumbnailFormatEnum["Original"] = "ORIGINAL";
  IconThumbnailFormatEnum["Webp"] = "WEBP";
})(
  (IconThumbnailFormatEnum =
    exports.IconThumbnailFormatEnum || (exports.IconThumbnailFormatEnum = {}))
);
/** An enumeration. */
var InvoiceErrorCode;
(function (InvoiceErrorCode) {
  InvoiceErrorCode["EmailNotSet"] = "EMAIL_NOT_SET";
  InvoiceErrorCode["InvalidStatus"] = "INVALID_STATUS";
  InvoiceErrorCode["NotFound"] = "NOT_FOUND";
  InvoiceErrorCode["NotReady"] = "NOT_READY";
  InvoiceErrorCode["NoInvoicePlugin"] = "NO_INVOICE_PLUGIN";
  InvoiceErrorCode["NumberNotSet"] = "NUMBER_NOT_SET";
  InvoiceErrorCode["Required"] = "REQUIRED";
  InvoiceErrorCode["UrlNotSet"] = "URL_NOT_SET";
})((InvoiceErrorCode = exports.InvoiceErrorCode || (exports.InvoiceErrorCode = {})));
/** An enumeration. */
var JobStatusEnum;
(function (JobStatusEnum) {
  JobStatusEnum["Deleted"] = "DELETED";
  JobStatusEnum["Failed"] = "FAILED";
  JobStatusEnum["Pending"] = "PENDING";
  JobStatusEnum["Success"] = "SUCCESS";
})((JobStatusEnum = exports.JobStatusEnum || (exports.JobStatusEnum = {})));
/** An enumeration. */
var LanguageCodeEnum;
(function (LanguageCodeEnum) {
  LanguageCodeEnum["Af"] = "AF";
  LanguageCodeEnum["AfNa"] = "AF_NA";
  LanguageCodeEnum["AfZa"] = "AF_ZA";
  LanguageCodeEnum["Agq"] = "AGQ";
  LanguageCodeEnum["AgqCm"] = "AGQ_CM";
  LanguageCodeEnum["Ak"] = "AK";
  LanguageCodeEnum["AkGh"] = "AK_GH";
  LanguageCodeEnum["Am"] = "AM";
  LanguageCodeEnum["AmEt"] = "AM_ET";
  LanguageCodeEnum["Ar"] = "AR";
  LanguageCodeEnum["ArAe"] = "AR_AE";
  LanguageCodeEnum["ArBh"] = "AR_BH";
  LanguageCodeEnum["ArDj"] = "AR_DJ";
  LanguageCodeEnum["ArDz"] = "AR_DZ";
  LanguageCodeEnum["ArEg"] = "AR_EG";
  LanguageCodeEnum["ArEh"] = "AR_EH";
  LanguageCodeEnum["ArEr"] = "AR_ER";
  LanguageCodeEnum["ArIl"] = "AR_IL";
  LanguageCodeEnum["ArIq"] = "AR_IQ";
  LanguageCodeEnum["ArJo"] = "AR_JO";
  LanguageCodeEnum["ArKm"] = "AR_KM";
  LanguageCodeEnum["ArKw"] = "AR_KW";
  LanguageCodeEnum["ArLb"] = "AR_LB";
  LanguageCodeEnum["ArLy"] = "AR_LY";
  LanguageCodeEnum["ArMa"] = "AR_MA";
  LanguageCodeEnum["ArMr"] = "AR_MR";
  LanguageCodeEnum["ArOm"] = "AR_OM";
  LanguageCodeEnum["ArPs"] = "AR_PS";
  LanguageCodeEnum["ArQa"] = "AR_QA";
  LanguageCodeEnum["ArSa"] = "AR_SA";
  LanguageCodeEnum["ArSd"] = "AR_SD";
  LanguageCodeEnum["ArSo"] = "AR_SO";
  LanguageCodeEnum["ArSs"] = "AR_SS";
  LanguageCodeEnum["ArSy"] = "AR_SY";
  LanguageCodeEnum["ArTd"] = "AR_TD";
  LanguageCodeEnum["ArTn"] = "AR_TN";
  LanguageCodeEnum["ArYe"] = "AR_YE";
  LanguageCodeEnum["As"] = "AS";
  LanguageCodeEnum["Asa"] = "ASA";
  LanguageCodeEnum["AsaTz"] = "ASA_TZ";
  LanguageCodeEnum["Ast"] = "AST";
  LanguageCodeEnum["AstEs"] = "AST_ES";
  LanguageCodeEnum["AsIn"] = "AS_IN";
  LanguageCodeEnum["Az"] = "AZ";
  LanguageCodeEnum["AzCyrl"] = "AZ_CYRL";
  LanguageCodeEnum["AzCyrlAz"] = "AZ_CYRL_AZ";
  LanguageCodeEnum["AzLatn"] = "AZ_LATN";
  LanguageCodeEnum["AzLatnAz"] = "AZ_LATN_AZ";
  LanguageCodeEnum["Bas"] = "BAS";
  LanguageCodeEnum["BasCm"] = "BAS_CM";
  LanguageCodeEnum["Be"] = "BE";
  LanguageCodeEnum["Bem"] = "BEM";
  LanguageCodeEnum["BemZm"] = "BEM_ZM";
  LanguageCodeEnum["Bez"] = "BEZ";
  LanguageCodeEnum["BezTz"] = "BEZ_TZ";
  LanguageCodeEnum["BeBy"] = "BE_BY";
  LanguageCodeEnum["Bg"] = "BG";
  LanguageCodeEnum["BgBg"] = "BG_BG";
  LanguageCodeEnum["Bm"] = "BM";
  LanguageCodeEnum["BmMl"] = "BM_ML";
  LanguageCodeEnum["Bn"] = "BN";
  LanguageCodeEnum["BnBd"] = "BN_BD";
  LanguageCodeEnum["BnIn"] = "BN_IN";
  LanguageCodeEnum["Bo"] = "BO";
  LanguageCodeEnum["BoCn"] = "BO_CN";
  LanguageCodeEnum["BoIn"] = "BO_IN";
  LanguageCodeEnum["Br"] = "BR";
  LanguageCodeEnum["Brx"] = "BRX";
  LanguageCodeEnum["BrxIn"] = "BRX_IN";
  LanguageCodeEnum["BrFr"] = "BR_FR";
  LanguageCodeEnum["Bs"] = "BS";
  LanguageCodeEnum["BsCyrl"] = "BS_CYRL";
  LanguageCodeEnum["BsCyrlBa"] = "BS_CYRL_BA";
  LanguageCodeEnum["BsLatn"] = "BS_LATN";
  LanguageCodeEnum["BsLatnBa"] = "BS_LATN_BA";
  LanguageCodeEnum["Ca"] = "CA";
  LanguageCodeEnum["CaAd"] = "CA_AD";
  LanguageCodeEnum["CaEs"] = "CA_ES";
  LanguageCodeEnum["CaEsValencia"] = "CA_ES_VALENCIA";
  LanguageCodeEnum["CaFr"] = "CA_FR";
  LanguageCodeEnum["CaIt"] = "CA_IT";
  LanguageCodeEnum["Ccp"] = "CCP";
  LanguageCodeEnum["CcpBd"] = "CCP_BD";
  LanguageCodeEnum["CcpIn"] = "CCP_IN";
  LanguageCodeEnum["Ce"] = "CE";
  LanguageCodeEnum["Ceb"] = "CEB";
  LanguageCodeEnum["CebPh"] = "CEB_PH";
  LanguageCodeEnum["CeRu"] = "CE_RU";
  LanguageCodeEnum["Cgg"] = "CGG";
  LanguageCodeEnum["CggUg"] = "CGG_UG";
  LanguageCodeEnum["Chr"] = "CHR";
  LanguageCodeEnum["ChrUs"] = "CHR_US";
  LanguageCodeEnum["Ckb"] = "CKB";
  LanguageCodeEnum["CkbIq"] = "CKB_IQ";
  LanguageCodeEnum["CkbIr"] = "CKB_IR";
  LanguageCodeEnum["Cs"] = "CS";
  LanguageCodeEnum["CsCz"] = "CS_CZ";
  LanguageCodeEnum["Cu"] = "CU";
  LanguageCodeEnum["CuRu"] = "CU_RU";
  LanguageCodeEnum["Cy"] = "CY";
  LanguageCodeEnum["CyGb"] = "CY_GB";
  LanguageCodeEnum["Da"] = "DA";
  LanguageCodeEnum["Dav"] = "DAV";
  LanguageCodeEnum["DavKe"] = "DAV_KE";
  LanguageCodeEnum["DaDk"] = "DA_DK";
  LanguageCodeEnum["DaGl"] = "DA_GL";
  LanguageCodeEnum["De"] = "DE";
  LanguageCodeEnum["DeAt"] = "DE_AT";
  LanguageCodeEnum["DeBe"] = "DE_BE";
  LanguageCodeEnum["DeCh"] = "DE_CH";
  LanguageCodeEnum["DeDe"] = "DE_DE";
  LanguageCodeEnum["DeIt"] = "DE_IT";
  LanguageCodeEnum["DeLi"] = "DE_LI";
  LanguageCodeEnum["DeLu"] = "DE_LU";
  LanguageCodeEnum["Dje"] = "DJE";
  LanguageCodeEnum["DjeNe"] = "DJE_NE";
  LanguageCodeEnum["Dsb"] = "DSB";
  LanguageCodeEnum["DsbDe"] = "DSB_DE";
  LanguageCodeEnum["Dua"] = "DUA";
  LanguageCodeEnum["DuaCm"] = "DUA_CM";
  LanguageCodeEnum["Dyo"] = "DYO";
  LanguageCodeEnum["DyoSn"] = "DYO_SN";
  LanguageCodeEnum["Dz"] = "DZ";
  LanguageCodeEnum["DzBt"] = "DZ_BT";
  LanguageCodeEnum["Ebu"] = "EBU";
  LanguageCodeEnum["EbuKe"] = "EBU_KE";
  LanguageCodeEnum["Ee"] = "EE";
  LanguageCodeEnum["EeGh"] = "EE_GH";
  LanguageCodeEnum["EeTg"] = "EE_TG";
  LanguageCodeEnum["El"] = "EL";
  LanguageCodeEnum["ElCy"] = "EL_CY";
  LanguageCodeEnum["ElGr"] = "EL_GR";
  LanguageCodeEnum["En"] = "EN";
  LanguageCodeEnum["EnAe"] = "EN_AE";
  LanguageCodeEnum["EnAg"] = "EN_AG";
  LanguageCodeEnum["EnAi"] = "EN_AI";
  LanguageCodeEnum["EnAs"] = "EN_AS";
  LanguageCodeEnum["EnAt"] = "EN_AT";
  LanguageCodeEnum["EnAu"] = "EN_AU";
  LanguageCodeEnum["EnBb"] = "EN_BB";
  LanguageCodeEnum["EnBe"] = "EN_BE";
  LanguageCodeEnum["EnBi"] = "EN_BI";
  LanguageCodeEnum["EnBm"] = "EN_BM";
  LanguageCodeEnum["EnBs"] = "EN_BS";
  LanguageCodeEnum["EnBw"] = "EN_BW";
  LanguageCodeEnum["EnBz"] = "EN_BZ";
  LanguageCodeEnum["EnCa"] = "EN_CA";
  LanguageCodeEnum["EnCc"] = "EN_CC";
  LanguageCodeEnum["EnCh"] = "EN_CH";
  LanguageCodeEnum["EnCk"] = "EN_CK";
  LanguageCodeEnum["EnCm"] = "EN_CM";
  LanguageCodeEnum["EnCx"] = "EN_CX";
  LanguageCodeEnum["EnCy"] = "EN_CY";
  LanguageCodeEnum["EnDe"] = "EN_DE";
  LanguageCodeEnum["EnDg"] = "EN_DG";
  LanguageCodeEnum["EnDk"] = "EN_DK";
  LanguageCodeEnum["EnDm"] = "EN_DM";
  LanguageCodeEnum["EnEr"] = "EN_ER";
  LanguageCodeEnum["EnFi"] = "EN_FI";
  LanguageCodeEnum["EnFj"] = "EN_FJ";
  LanguageCodeEnum["EnFk"] = "EN_FK";
  LanguageCodeEnum["EnFm"] = "EN_FM";
  LanguageCodeEnum["EnGb"] = "EN_GB";
  LanguageCodeEnum["EnGd"] = "EN_GD";
  LanguageCodeEnum["EnGg"] = "EN_GG";
  LanguageCodeEnum["EnGh"] = "EN_GH";
  LanguageCodeEnum["EnGi"] = "EN_GI";
  LanguageCodeEnum["EnGm"] = "EN_GM";
  LanguageCodeEnum["EnGu"] = "EN_GU";
  LanguageCodeEnum["EnGy"] = "EN_GY";
  LanguageCodeEnum["EnHk"] = "EN_HK";
  LanguageCodeEnum["EnIe"] = "EN_IE";
  LanguageCodeEnum["EnIl"] = "EN_IL";
  LanguageCodeEnum["EnIm"] = "EN_IM";
  LanguageCodeEnum["EnIn"] = "EN_IN";
  LanguageCodeEnum["EnIo"] = "EN_IO";
  LanguageCodeEnum["EnJe"] = "EN_JE";
  LanguageCodeEnum["EnJm"] = "EN_JM";
  LanguageCodeEnum["EnKe"] = "EN_KE";
  LanguageCodeEnum["EnKi"] = "EN_KI";
  LanguageCodeEnum["EnKn"] = "EN_KN";
  LanguageCodeEnum["EnKy"] = "EN_KY";
  LanguageCodeEnum["EnLc"] = "EN_LC";
  LanguageCodeEnum["EnLr"] = "EN_LR";
  LanguageCodeEnum["EnLs"] = "EN_LS";
  LanguageCodeEnum["EnMg"] = "EN_MG";
  LanguageCodeEnum["EnMh"] = "EN_MH";
  LanguageCodeEnum["EnMo"] = "EN_MO";
  LanguageCodeEnum["EnMp"] = "EN_MP";
  LanguageCodeEnum["EnMs"] = "EN_MS";
  LanguageCodeEnum["EnMt"] = "EN_MT";
  LanguageCodeEnum["EnMu"] = "EN_MU";
  LanguageCodeEnum["EnMw"] = "EN_MW";
  LanguageCodeEnum["EnMy"] = "EN_MY";
  LanguageCodeEnum["EnNa"] = "EN_NA";
  LanguageCodeEnum["EnNf"] = "EN_NF";
  LanguageCodeEnum["EnNg"] = "EN_NG";
  LanguageCodeEnum["EnNl"] = "EN_NL";
  LanguageCodeEnum["EnNr"] = "EN_NR";
  LanguageCodeEnum["EnNu"] = "EN_NU";
  LanguageCodeEnum["EnNz"] = "EN_NZ";
  LanguageCodeEnum["EnPg"] = "EN_PG";
  LanguageCodeEnum["EnPh"] = "EN_PH";
  LanguageCodeEnum["EnPk"] = "EN_PK";
  LanguageCodeEnum["EnPn"] = "EN_PN";
  LanguageCodeEnum["EnPr"] = "EN_PR";
  LanguageCodeEnum["EnPw"] = "EN_PW";
  LanguageCodeEnum["EnRw"] = "EN_RW";
  LanguageCodeEnum["EnSb"] = "EN_SB";
  LanguageCodeEnum["EnSc"] = "EN_SC";
  LanguageCodeEnum["EnSd"] = "EN_SD";
  LanguageCodeEnum["EnSe"] = "EN_SE";
  LanguageCodeEnum["EnSg"] = "EN_SG";
  LanguageCodeEnum["EnSh"] = "EN_SH";
  LanguageCodeEnum["EnSi"] = "EN_SI";
  LanguageCodeEnum["EnSl"] = "EN_SL";
  LanguageCodeEnum["EnSs"] = "EN_SS";
  LanguageCodeEnum["EnSx"] = "EN_SX";
  LanguageCodeEnum["EnSz"] = "EN_SZ";
  LanguageCodeEnum["EnTc"] = "EN_TC";
  LanguageCodeEnum["EnTk"] = "EN_TK";
  LanguageCodeEnum["EnTo"] = "EN_TO";
  LanguageCodeEnum["EnTt"] = "EN_TT";
  LanguageCodeEnum["EnTv"] = "EN_TV";
  LanguageCodeEnum["EnTz"] = "EN_TZ";
  LanguageCodeEnum["EnUg"] = "EN_UG";
  LanguageCodeEnum["EnUm"] = "EN_UM";
  LanguageCodeEnum["EnUs"] = "EN_US";
  LanguageCodeEnum["EnVc"] = "EN_VC";
  LanguageCodeEnum["EnVg"] = "EN_VG";
  LanguageCodeEnum["EnVi"] = "EN_VI";
  LanguageCodeEnum["EnVu"] = "EN_VU";
  LanguageCodeEnum["EnWs"] = "EN_WS";
  LanguageCodeEnum["EnZa"] = "EN_ZA";
  LanguageCodeEnum["EnZm"] = "EN_ZM";
  LanguageCodeEnum["EnZw"] = "EN_ZW";
  LanguageCodeEnum["Eo"] = "EO";
  LanguageCodeEnum["Es"] = "ES";
  LanguageCodeEnum["EsAr"] = "ES_AR";
  LanguageCodeEnum["EsBo"] = "ES_BO";
  LanguageCodeEnum["EsBr"] = "ES_BR";
  LanguageCodeEnum["EsBz"] = "ES_BZ";
  LanguageCodeEnum["EsCl"] = "ES_CL";
  LanguageCodeEnum["EsCo"] = "ES_CO";
  LanguageCodeEnum["EsCr"] = "ES_CR";
  LanguageCodeEnum["EsCu"] = "ES_CU";
  LanguageCodeEnum["EsDo"] = "ES_DO";
  LanguageCodeEnum["EsEa"] = "ES_EA";
  LanguageCodeEnum["EsEc"] = "ES_EC";
  LanguageCodeEnum["EsEs"] = "ES_ES";
  LanguageCodeEnum["EsGq"] = "ES_GQ";
  LanguageCodeEnum["EsGt"] = "ES_GT";
  LanguageCodeEnum["EsHn"] = "ES_HN";
  LanguageCodeEnum["EsIc"] = "ES_IC";
  LanguageCodeEnum["EsMx"] = "ES_MX";
  LanguageCodeEnum["EsNi"] = "ES_NI";
  LanguageCodeEnum["EsPa"] = "ES_PA";
  LanguageCodeEnum["EsPe"] = "ES_PE";
  LanguageCodeEnum["EsPh"] = "ES_PH";
  LanguageCodeEnum["EsPr"] = "ES_PR";
  LanguageCodeEnum["EsPy"] = "ES_PY";
  LanguageCodeEnum["EsSv"] = "ES_SV";
  LanguageCodeEnum["EsUs"] = "ES_US";
  LanguageCodeEnum["EsUy"] = "ES_UY";
  LanguageCodeEnum["EsVe"] = "ES_VE";
  LanguageCodeEnum["Et"] = "ET";
  LanguageCodeEnum["EtEe"] = "ET_EE";
  LanguageCodeEnum["Eu"] = "EU";
  LanguageCodeEnum["EuEs"] = "EU_ES";
  LanguageCodeEnum["Ewo"] = "EWO";
  LanguageCodeEnum["EwoCm"] = "EWO_CM";
  LanguageCodeEnum["Fa"] = "FA";
  LanguageCodeEnum["FaAf"] = "FA_AF";
  LanguageCodeEnum["FaIr"] = "FA_IR";
  LanguageCodeEnum["Ff"] = "FF";
  LanguageCodeEnum["FfAdlm"] = "FF_ADLM";
  LanguageCodeEnum["FfAdlmBf"] = "FF_ADLM_BF";
  LanguageCodeEnum["FfAdlmCm"] = "FF_ADLM_CM";
  LanguageCodeEnum["FfAdlmGh"] = "FF_ADLM_GH";
  LanguageCodeEnum["FfAdlmGm"] = "FF_ADLM_GM";
  LanguageCodeEnum["FfAdlmGn"] = "FF_ADLM_GN";
  LanguageCodeEnum["FfAdlmGw"] = "FF_ADLM_GW";
  LanguageCodeEnum["FfAdlmLr"] = "FF_ADLM_LR";
  LanguageCodeEnum["FfAdlmMr"] = "FF_ADLM_MR";
  LanguageCodeEnum["FfAdlmNe"] = "FF_ADLM_NE";
  LanguageCodeEnum["FfAdlmNg"] = "FF_ADLM_NG";
  LanguageCodeEnum["FfAdlmSl"] = "FF_ADLM_SL";
  LanguageCodeEnum["FfAdlmSn"] = "FF_ADLM_SN";
  LanguageCodeEnum["FfLatn"] = "FF_LATN";
  LanguageCodeEnum["FfLatnBf"] = "FF_LATN_BF";
  LanguageCodeEnum["FfLatnCm"] = "FF_LATN_CM";
  LanguageCodeEnum["FfLatnGh"] = "FF_LATN_GH";
  LanguageCodeEnum["FfLatnGm"] = "FF_LATN_GM";
  LanguageCodeEnum["FfLatnGn"] = "FF_LATN_GN";
  LanguageCodeEnum["FfLatnGw"] = "FF_LATN_GW";
  LanguageCodeEnum["FfLatnLr"] = "FF_LATN_LR";
  LanguageCodeEnum["FfLatnMr"] = "FF_LATN_MR";
  LanguageCodeEnum["FfLatnNe"] = "FF_LATN_NE";
  LanguageCodeEnum["FfLatnNg"] = "FF_LATN_NG";
  LanguageCodeEnum["FfLatnSl"] = "FF_LATN_SL";
  LanguageCodeEnum["FfLatnSn"] = "FF_LATN_SN";
  LanguageCodeEnum["Fi"] = "FI";
  LanguageCodeEnum["Fil"] = "FIL";
  LanguageCodeEnum["FilPh"] = "FIL_PH";
  LanguageCodeEnum["FiFi"] = "FI_FI";
  LanguageCodeEnum["Fo"] = "FO";
  LanguageCodeEnum["FoDk"] = "FO_DK";
  LanguageCodeEnum["FoFo"] = "FO_FO";
  LanguageCodeEnum["Fr"] = "FR";
  LanguageCodeEnum["FrBe"] = "FR_BE";
  LanguageCodeEnum["FrBf"] = "FR_BF";
  LanguageCodeEnum["FrBi"] = "FR_BI";
  LanguageCodeEnum["FrBj"] = "FR_BJ";
  LanguageCodeEnum["FrBl"] = "FR_BL";
  LanguageCodeEnum["FrCa"] = "FR_CA";
  LanguageCodeEnum["FrCd"] = "FR_CD";
  LanguageCodeEnum["FrCf"] = "FR_CF";
  LanguageCodeEnum["FrCg"] = "FR_CG";
  LanguageCodeEnum["FrCh"] = "FR_CH";
  LanguageCodeEnum["FrCi"] = "FR_CI";
  LanguageCodeEnum["FrCm"] = "FR_CM";
  LanguageCodeEnum["FrDj"] = "FR_DJ";
  LanguageCodeEnum["FrDz"] = "FR_DZ";
  LanguageCodeEnum["FrFr"] = "FR_FR";
  LanguageCodeEnum["FrGa"] = "FR_GA";
  LanguageCodeEnum["FrGf"] = "FR_GF";
  LanguageCodeEnum["FrGn"] = "FR_GN";
  LanguageCodeEnum["FrGp"] = "FR_GP";
  LanguageCodeEnum["FrGq"] = "FR_GQ";
  LanguageCodeEnum["FrHt"] = "FR_HT";
  LanguageCodeEnum["FrKm"] = "FR_KM";
  LanguageCodeEnum["FrLu"] = "FR_LU";
  LanguageCodeEnum["FrMa"] = "FR_MA";
  LanguageCodeEnum["FrMc"] = "FR_MC";
  LanguageCodeEnum["FrMf"] = "FR_MF";
  LanguageCodeEnum["FrMg"] = "FR_MG";
  LanguageCodeEnum["FrMl"] = "FR_ML";
  LanguageCodeEnum["FrMq"] = "FR_MQ";
  LanguageCodeEnum["FrMr"] = "FR_MR";
  LanguageCodeEnum["FrMu"] = "FR_MU";
  LanguageCodeEnum["FrNc"] = "FR_NC";
  LanguageCodeEnum["FrNe"] = "FR_NE";
  LanguageCodeEnum["FrPf"] = "FR_PF";
  LanguageCodeEnum["FrPm"] = "FR_PM";
  LanguageCodeEnum["FrRe"] = "FR_RE";
  LanguageCodeEnum["FrRw"] = "FR_RW";
  LanguageCodeEnum["FrSc"] = "FR_SC";
  LanguageCodeEnum["FrSn"] = "FR_SN";
  LanguageCodeEnum["FrSy"] = "FR_SY";
  LanguageCodeEnum["FrTd"] = "FR_TD";
  LanguageCodeEnum["FrTg"] = "FR_TG";
  LanguageCodeEnum["FrTn"] = "FR_TN";
  LanguageCodeEnum["FrVu"] = "FR_VU";
  LanguageCodeEnum["FrWf"] = "FR_WF";
  LanguageCodeEnum["FrYt"] = "FR_YT";
  LanguageCodeEnum["Fur"] = "FUR";
  LanguageCodeEnum["FurIt"] = "FUR_IT";
  LanguageCodeEnum["Fy"] = "FY";
  LanguageCodeEnum["FyNl"] = "FY_NL";
  LanguageCodeEnum["Ga"] = "GA";
  LanguageCodeEnum["GaGb"] = "GA_GB";
  LanguageCodeEnum["GaIe"] = "GA_IE";
  LanguageCodeEnum["Gd"] = "GD";
  LanguageCodeEnum["GdGb"] = "GD_GB";
  LanguageCodeEnum["Gl"] = "GL";
  LanguageCodeEnum["GlEs"] = "GL_ES";
  LanguageCodeEnum["Gsw"] = "GSW";
  LanguageCodeEnum["GswCh"] = "GSW_CH";
  LanguageCodeEnum["GswFr"] = "GSW_FR";
  LanguageCodeEnum["GswLi"] = "GSW_LI";
  LanguageCodeEnum["Gu"] = "GU";
  LanguageCodeEnum["Guz"] = "GUZ";
  LanguageCodeEnum["GuzKe"] = "GUZ_KE";
  LanguageCodeEnum["GuIn"] = "GU_IN";
  LanguageCodeEnum["Gv"] = "GV";
  LanguageCodeEnum["GvIm"] = "GV_IM";
  LanguageCodeEnum["Ha"] = "HA";
  LanguageCodeEnum["Haw"] = "HAW";
  LanguageCodeEnum["HawUs"] = "HAW_US";
  LanguageCodeEnum["HaGh"] = "HA_GH";
  LanguageCodeEnum["HaNe"] = "HA_NE";
  LanguageCodeEnum["HaNg"] = "HA_NG";
  LanguageCodeEnum["He"] = "HE";
  LanguageCodeEnum["HeIl"] = "HE_IL";
  LanguageCodeEnum["Hi"] = "HI";
  LanguageCodeEnum["HiIn"] = "HI_IN";
  LanguageCodeEnum["Hr"] = "HR";
  LanguageCodeEnum["HrBa"] = "HR_BA";
  LanguageCodeEnum["HrHr"] = "HR_HR";
  LanguageCodeEnum["Hsb"] = "HSB";
  LanguageCodeEnum["HsbDe"] = "HSB_DE";
  LanguageCodeEnum["Hu"] = "HU";
  LanguageCodeEnum["HuHu"] = "HU_HU";
  LanguageCodeEnum["Hy"] = "HY";
  LanguageCodeEnum["HyAm"] = "HY_AM";
  LanguageCodeEnum["Ia"] = "IA";
  LanguageCodeEnum["Id"] = "ID";
  LanguageCodeEnum["IdId"] = "ID_ID";
  LanguageCodeEnum["Ig"] = "IG";
  LanguageCodeEnum["IgNg"] = "IG_NG";
  LanguageCodeEnum["Ii"] = "II";
  LanguageCodeEnum["IiCn"] = "II_CN";
  LanguageCodeEnum["Is"] = "IS";
  LanguageCodeEnum["IsIs"] = "IS_IS";
  LanguageCodeEnum["It"] = "IT";
  LanguageCodeEnum["ItCh"] = "IT_CH";
  LanguageCodeEnum["ItIt"] = "IT_IT";
  LanguageCodeEnum["ItSm"] = "IT_SM";
  LanguageCodeEnum["ItVa"] = "IT_VA";
  LanguageCodeEnum["Ja"] = "JA";
  LanguageCodeEnum["JaJp"] = "JA_JP";
  LanguageCodeEnum["Jgo"] = "JGO";
  LanguageCodeEnum["JgoCm"] = "JGO_CM";
  LanguageCodeEnum["Jmc"] = "JMC";
  LanguageCodeEnum["JmcTz"] = "JMC_TZ";
  LanguageCodeEnum["Jv"] = "JV";
  LanguageCodeEnum["JvId"] = "JV_ID";
  LanguageCodeEnum["Ka"] = "KA";
  LanguageCodeEnum["Kab"] = "KAB";
  LanguageCodeEnum["KabDz"] = "KAB_DZ";
  LanguageCodeEnum["Kam"] = "KAM";
  LanguageCodeEnum["KamKe"] = "KAM_KE";
  LanguageCodeEnum["KaGe"] = "KA_GE";
  LanguageCodeEnum["Kde"] = "KDE";
  LanguageCodeEnum["KdeTz"] = "KDE_TZ";
  LanguageCodeEnum["Kea"] = "KEA";
  LanguageCodeEnum["KeaCv"] = "KEA_CV";
  LanguageCodeEnum["Khq"] = "KHQ";
  LanguageCodeEnum["KhqMl"] = "KHQ_ML";
  LanguageCodeEnum["Ki"] = "KI";
  LanguageCodeEnum["KiKe"] = "KI_KE";
  LanguageCodeEnum["Kk"] = "KK";
  LanguageCodeEnum["Kkj"] = "KKJ";
  LanguageCodeEnum["KkjCm"] = "KKJ_CM";
  LanguageCodeEnum["KkKz"] = "KK_KZ";
  LanguageCodeEnum["Kl"] = "KL";
  LanguageCodeEnum["Kln"] = "KLN";
  LanguageCodeEnum["KlnKe"] = "KLN_KE";
  LanguageCodeEnum["KlGl"] = "KL_GL";
  LanguageCodeEnum["Km"] = "KM";
  LanguageCodeEnum["KmKh"] = "KM_KH";
  LanguageCodeEnum["Kn"] = "KN";
  LanguageCodeEnum["KnIn"] = "KN_IN";
  LanguageCodeEnum["Ko"] = "KO";
  LanguageCodeEnum["Kok"] = "KOK";
  LanguageCodeEnum["KokIn"] = "KOK_IN";
  LanguageCodeEnum["KoKp"] = "KO_KP";
  LanguageCodeEnum["KoKr"] = "KO_KR";
  LanguageCodeEnum["Ks"] = "KS";
  LanguageCodeEnum["Ksb"] = "KSB";
  LanguageCodeEnum["KsbTz"] = "KSB_TZ";
  LanguageCodeEnum["Ksf"] = "KSF";
  LanguageCodeEnum["KsfCm"] = "KSF_CM";
  LanguageCodeEnum["Ksh"] = "KSH";
  LanguageCodeEnum["KshDe"] = "KSH_DE";
  LanguageCodeEnum["KsArab"] = "KS_ARAB";
  LanguageCodeEnum["KsArabIn"] = "KS_ARAB_IN";
  LanguageCodeEnum["Ku"] = "KU";
  LanguageCodeEnum["KuTr"] = "KU_TR";
  LanguageCodeEnum["Kw"] = "KW";
  LanguageCodeEnum["KwGb"] = "KW_GB";
  LanguageCodeEnum["Ky"] = "KY";
  LanguageCodeEnum["KyKg"] = "KY_KG";
  LanguageCodeEnum["Lag"] = "LAG";
  LanguageCodeEnum["LagTz"] = "LAG_TZ";
  LanguageCodeEnum["Lb"] = "LB";
  LanguageCodeEnum["LbLu"] = "LB_LU";
  LanguageCodeEnum["Lg"] = "LG";
  LanguageCodeEnum["LgUg"] = "LG_UG";
  LanguageCodeEnum["Lkt"] = "LKT";
  LanguageCodeEnum["LktUs"] = "LKT_US";
  LanguageCodeEnum["Ln"] = "LN";
  LanguageCodeEnum["LnAo"] = "LN_AO";
  LanguageCodeEnum["LnCd"] = "LN_CD";
  LanguageCodeEnum["LnCf"] = "LN_CF";
  LanguageCodeEnum["LnCg"] = "LN_CG";
  LanguageCodeEnum["Lo"] = "LO";
  LanguageCodeEnum["LoLa"] = "LO_LA";
  LanguageCodeEnum["Lrc"] = "LRC";
  LanguageCodeEnum["LrcIq"] = "LRC_IQ";
  LanguageCodeEnum["LrcIr"] = "LRC_IR";
  LanguageCodeEnum["Lt"] = "LT";
  LanguageCodeEnum["LtLt"] = "LT_LT";
  LanguageCodeEnum["Lu"] = "LU";
  LanguageCodeEnum["Luo"] = "LUO";
  LanguageCodeEnum["LuoKe"] = "LUO_KE";
  LanguageCodeEnum["Luy"] = "LUY";
  LanguageCodeEnum["LuyKe"] = "LUY_KE";
  LanguageCodeEnum["LuCd"] = "LU_CD";
  LanguageCodeEnum["Lv"] = "LV";
  LanguageCodeEnum["LvLv"] = "LV_LV";
  LanguageCodeEnum["Mai"] = "MAI";
  LanguageCodeEnum["MaiIn"] = "MAI_IN";
  LanguageCodeEnum["Mas"] = "MAS";
  LanguageCodeEnum["MasKe"] = "MAS_KE";
  LanguageCodeEnum["MasTz"] = "MAS_TZ";
  LanguageCodeEnum["Mer"] = "MER";
  LanguageCodeEnum["MerKe"] = "MER_KE";
  LanguageCodeEnum["Mfe"] = "MFE";
  LanguageCodeEnum["MfeMu"] = "MFE_MU";
  LanguageCodeEnum["Mg"] = "MG";
  LanguageCodeEnum["Mgh"] = "MGH";
  LanguageCodeEnum["MghMz"] = "MGH_MZ";
  LanguageCodeEnum["Mgo"] = "MGO";
  LanguageCodeEnum["MgoCm"] = "MGO_CM";
  LanguageCodeEnum["MgMg"] = "MG_MG";
  LanguageCodeEnum["Mi"] = "MI";
  LanguageCodeEnum["MiNz"] = "MI_NZ";
  LanguageCodeEnum["Mk"] = "MK";
  LanguageCodeEnum["MkMk"] = "MK_MK";
  LanguageCodeEnum["Ml"] = "ML";
  LanguageCodeEnum["MlIn"] = "ML_IN";
  LanguageCodeEnum["Mn"] = "MN";
  LanguageCodeEnum["Mni"] = "MNI";
  LanguageCodeEnum["MniBeng"] = "MNI_BENG";
  LanguageCodeEnum["MniBengIn"] = "MNI_BENG_IN";
  LanguageCodeEnum["MnMn"] = "MN_MN";
  LanguageCodeEnum["Mr"] = "MR";
  LanguageCodeEnum["MrIn"] = "MR_IN";
  LanguageCodeEnum["Ms"] = "MS";
  LanguageCodeEnum["MsBn"] = "MS_BN";
  LanguageCodeEnum["MsId"] = "MS_ID";
  LanguageCodeEnum["MsMy"] = "MS_MY";
  LanguageCodeEnum["MsSg"] = "MS_SG";
  LanguageCodeEnum["Mt"] = "MT";
  LanguageCodeEnum["MtMt"] = "MT_MT";
  LanguageCodeEnum["Mua"] = "MUA";
  LanguageCodeEnum["MuaCm"] = "MUA_CM";
  LanguageCodeEnum["My"] = "MY";
  LanguageCodeEnum["MyMm"] = "MY_MM";
  LanguageCodeEnum["Mzn"] = "MZN";
  LanguageCodeEnum["MznIr"] = "MZN_IR";
  LanguageCodeEnum["Naq"] = "NAQ";
  LanguageCodeEnum["NaqNa"] = "NAQ_NA";
  LanguageCodeEnum["Nb"] = "NB";
  LanguageCodeEnum["NbNo"] = "NB_NO";
  LanguageCodeEnum["NbSj"] = "NB_SJ";
  LanguageCodeEnum["Nd"] = "ND";
  LanguageCodeEnum["Nds"] = "NDS";
  LanguageCodeEnum["NdsDe"] = "NDS_DE";
  LanguageCodeEnum["NdsNl"] = "NDS_NL";
  LanguageCodeEnum["NdZw"] = "ND_ZW";
  LanguageCodeEnum["Ne"] = "NE";
  LanguageCodeEnum["NeIn"] = "NE_IN";
  LanguageCodeEnum["NeNp"] = "NE_NP";
  LanguageCodeEnum["Nl"] = "NL";
  LanguageCodeEnum["NlAw"] = "NL_AW";
  LanguageCodeEnum["NlBe"] = "NL_BE";
  LanguageCodeEnum["NlBq"] = "NL_BQ";
  LanguageCodeEnum["NlCw"] = "NL_CW";
  LanguageCodeEnum["NlNl"] = "NL_NL";
  LanguageCodeEnum["NlSr"] = "NL_SR";
  LanguageCodeEnum["NlSx"] = "NL_SX";
  LanguageCodeEnum["Nmg"] = "NMG";
  LanguageCodeEnum["NmgCm"] = "NMG_CM";
  LanguageCodeEnum["Nn"] = "NN";
  LanguageCodeEnum["Nnh"] = "NNH";
  LanguageCodeEnum["NnhCm"] = "NNH_CM";
  LanguageCodeEnum["NnNo"] = "NN_NO";
  LanguageCodeEnum["Nus"] = "NUS";
  LanguageCodeEnum["NusSs"] = "NUS_SS";
  LanguageCodeEnum["Nyn"] = "NYN";
  LanguageCodeEnum["NynUg"] = "NYN_UG";
  LanguageCodeEnum["Om"] = "OM";
  LanguageCodeEnum["OmEt"] = "OM_ET";
  LanguageCodeEnum["OmKe"] = "OM_KE";
  LanguageCodeEnum["Or"] = "OR";
  LanguageCodeEnum["OrIn"] = "OR_IN";
  LanguageCodeEnum["Os"] = "OS";
  LanguageCodeEnum["OsGe"] = "OS_GE";
  LanguageCodeEnum["OsRu"] = "OS_RU";
  LanguageCodeEnum["Pa"] = "PA";
  LanguageCodeEnum["PaArab"] = "PA_ARAB";
  LanguageCodeEnum["PaArabPk"] = "PA_ARAB_PK";
  LanguageCodeEnum["PaGuru"] = "PA_GURU";
  LanguageCodeEnum["PaGuruIn"] = "PA_GURU_IN";
  LanguageCodeEnum["Pcm"] = "PCM";
  LanguageCodeEnum["PcmNg"] = "PCM_NG";
  LanguageCodeEnum["Pl"] = "PL";
  LanguageCodeEnum["PlPl"] = "PL_PL";
  LanguageCodeEnum["Prg"] = "PRG";
  LanguageCodeEnum["Ps"] = "PS";
  LanguageCodeEnum["PsAf"] = "PS_AF";
  LanguageCodeEnum["PsPk"] = "PS_PK";
  LanguageCodeEnum["Pt"] = "PT";
  LanguageCodeEnum["PtAo"] = "PT_AO";
  LanguageCodeEnum["PtBr"] = "PT_BR";
  LanguageCodeEnum["PtCh"] = "PT_CH";
  LanguageCodeEnum["PtCv"] = "PT_CV";
  LanguageCodeEnum["PtGq"] = "PT_GQ";
  LanguageCodeEnum["PtGw"] = "PT_GW";
  LanguageCodeEnum["PtLu"] = "PT_LU";
  LanguageCodeEnum["PtMo"] = "PT_MO";
  LanguageCodeEnum["PtMz"] = "PT_MZ";
  LanguageCodeEnum["PtPt"] = "PT_PT";
  LanguageCodeEnum["PtSt"] = "PT_ST";
  LanguageCodeEnum["PtTl"] = "PT_TL";
  LanguageCodeEnum["Qu"] = "QU";
  LanguageCodeEnum["QuBo"] = "QU_BO";
  LanguageCodeEnum["QuEc"] = "QU_EC";
  LanguageCodeEnum["QuPe"] = "QU_PE";
  LanguageCodeEnum["Rm"] = "RM";
  LanguageCodeEnum["RmCh"] = "RM_CH";
  LanguageCodeEnum["Rn"] = "RN";
  LanguageCodeEnum["RnBi"] = "RN_BI";
  LanguageCodeEnum["Ro"] = "RO";
  LanguageCodeEnum["Rof"] = "ROF";
  LanguageCodeEnum["RofTz"] = "ROF_TZ";
  LanguageCodeEnum["RoMd"] = "RO_MD";
  LanguageCodeEnum["RoRo"] = "RO_RO";
  LanguageCodeEnum["Ru"] = "RU";
  LanguageCodeEnum["RuBy"] = "RU_BY";
  LanguageCodeEnum["RuKg"] = "RU_KG";
  LanguageCodeEnum["RuKz"] = "RU_KZ";
  LanguageCodeEnum["RuMd"] = "RU_MD";
  LanguageCodeEnum["RuRu"] = "RU_RU";
  LanguageCodeEnum["RuUa"] = "RU_UA";
  LanguageCodeEnum["Rw"] = "RW";
  LanguageCodeEnum["Rwk"] = "RWK";
  LanguageCodeEnum["RwkTz"] = "RWK_TZ";
  LanguageCodeEnum["RwRw"] = "RW_RW";
  LanguageCodeEnum["Sah"] = "SAH";
  LanguageCodeEnum["SahRu"] = "SAH_RU";
  LanguageCodeEnum["Saq"] = "SAQ";
  LanguageCodeEnum["SaqKe"] = "SAQ_KE";
  LanguageCodeEnum["Sat"] = "SAT";
  LanguageCodeEnum["SatOlck"] = "SAT_OLCK";
  LanguageCodeEnum["SatOlckIn"] = "SAT_OLCK_IN";
  LanguageCodeEnum["Sbp"] = "SBP";
  LanguageCodeEnum["SbpTz"] = "SBP_TZ";
  LanguageCodeEnum["Sd"] = "SD";
  LanguageCodeEnum["SdArab"] = "SD_ARAB";
  LanguageCodeEnum["SdArabPk"] = "SD_ARAB_PK";
  LanguageCodeEnum["SdDeva"] = "SD_DEVA";
  LanguageCodeEnum["SdDevaIn"] = "SD_DEVA_IN";
  LanguageCodeEnum["Se"] = "SE";
  LanguageCodeEnum["Seh"] = "SEH";
  LanguageCodeEnum["SehMz"] = "SEH_MZ";
  LanguageCodeEnum["Ses"] = "SES";
  LanguageCodeEnum["SesMl"] = "SES_ML";
  LanguageCodeEnum["SeFi"] = "SE_FI";
  LanguageCodeEnum["SeNo"] = "SE_NO";
  LanguageCodeEnum["SeSe"] = "SE_SE";
  LanguageCodeEnum["Sg"] = "SG";
  LanguageCodeEnum["SgCf"] = "SG_CF";
  LanguageCodeEnum["Shi"] = "SHI";
  LanguageCodeEnum["ShiLatn"] = "SHI_LATN";
  LanguageCodeEnum["ShiLatnMa"] = "SHI_LATN_MA";
  LanguageCodeEnum["ShiTfng"] = "SHI_TFNG";
  LanguageCodeEnum["ShiTfngMa"] = "SHI_TFNG_MA";
  LanguageCodeEnum["Si"] = "SI";
  LanguageCodeEnum["SiLk"] = "SI_LK";
  LanguageCodeEnum["Sk"] = "SK";
  LanguageCodeEnum["SkSk"] = "SK_SK";
  LanguageCodeEnum["Sl"] = "SL";
  LanguageCodeEnum["SlSi"] = "SL_SI";
  LanguageCodeEnum["Smn"] = "SMN";
  LanguageCodeEnum["SmnFi"] = "SMN_FI";
  LanguageCodeEnum["Sn"] = "SN";
  LanguageCodeEnum["SnZw"] = "SN_ZW";
  LanguageCodeEnum["So"] = "SO";
  LanguageCodeEnum["SoDj"] = "SO_DJ";
  LanguageCodeEnum["SoEt"] = "SO_ET";
  LanguageCodeEnum["SoKe"] = "SO_KE";
  LanguageCodeEnum["SoSo"] = "SO_SO";
  LanguageCodeEnum["Sq"] = "SQ";
  LanguageCodeEnum["SqAl"] = "SQ_AL";
  LanguageCodeEnum["SqMk"] = "SQ_MK";
  LanguageCodeEnum["SqXk"] = "SQ_XK";
  LanguageCodeEnum["Sr"] = "SR";
  LanguageCodeEnum["SrCyrl"] = "SR_CYRL";
  LanguageCodeEnum["SrCyrlBa"] = "SR_CYRL_BA";
  LanguageCodeEnum["SrCyrlMe"] = "SR_CYRL_ME";
  LanguageCodeEnum["SrCyrlRs"] = "SR_CYRL_RS";
  LanguageCodeEnum["SrCyrlXk"] = "SR_CYRL_XK";
  LanguageCodeEnum["SrLatn"] = "SR_LATN";
  LanguageCodeEnum["SrLatnBa"] = "SR_LATN_BA";
  LanguageCodeEnum["SrLatnMe"] = "SR_LATN_ME";
  LanguageCodeEnum["SrLatnRs"] = "SR_LATN_RS";
  LanguageCodeEnum["SrLatnXk"] = "SR_LATN_XK";
  LanguageCodeEnum["Su"] = "SU";
  LanguageCodeEnum["SuLatn"] = "SU_LATN";
  LanguageCodeEnum["SuLatnId"] = "SU_LATN_ID";
  LanguageCodeEnum["Sv"] = "SV";
  LanguageCodeEnum["SvAx"] = "SV_AX";
  LanguageCodeEnum["SvFi"] = "SV_FI";
  LanguageCodeEnum["SvSe"] = "SV_SE";
  LanguageCodeEnum["Sw"] = "SW";
  LanguageCodeEnum["SwCd"] = "SW_CD";
  LanguageCodeEnum["SwKe"] = "SW_KE";
  LanguageCodeEnum["SwTz"] = "SW_TZ";
  LanguageCodeEnum["SwUg"] = "SW_UG";
  LanguageCodeEnum["Ta"] = "TA";
  LanguageCodeEnum["TaIn"] = "TA_IN";
  LanguageCodeEnum["TaLk"] = "TA_LK";
  LanguageCodeEnum["TaMy"] = "TA_MY";
  LanguageCodeEnum["TaSg"] = "TA_SG";
  LanguageCodeEnum["Te"] = "TE";
  LanguageCodeEnum["Teo"] = "TEO";
  LanguageCodeEnum["TeoKe"] = "TEO_KE";
  LanguageCodeEnum["TeoUg"] = "TEO_UG";
  LanguageCodeEnum["TeIn"] = "TE_IN";
  LanguageCodeEnum["Tg"] = "TG";
  LanguageCodeEnum["TgTj"] = "TG_TJ";
  LanguageCodeEnum["Th"] = "TH";
  LanguageCodeEnum["ThTh"] = "TH_TH";
  LanguageCodeEnum["Ti"] = "TI";
  LanguageCodeEnum["TiEr"] = "TI_ER";
  LanguageCodeEnum["TiEt"] = "TI_ET";
  LanguageCodeEnum["Tk"] = "TK";
  LanguageCodeEnum["TkTm"] = "TK_TM";
  LanguageCodeEnum["To"] = "TO";
  LanguageCodeEnum["ToTo"] = "TO_TO";
  LanguageCodeEnum["Tr"] = "TR";
  LanguageCodeEnum["TrCy"] = "TR_CY";
  LanguageCodeEnum["TrTr"] = "TR_TR";
  LanguageCodeEnum["Tt"] = "TT";
  LanguageCodeEnum["TtRu"] = "TT_RU";
  LanguageCodeEnum["Twq"] = "TWQ";
  LanguageCodeEnum["TwqNe"] = "TWQ_NE";
  LanguageCodeEnum["Tzm"] = "TZM";
  LanguageCodeEnum["TzmMa"] = "TZM_MA";
  LanguageCodeEnum["Ug"] = "UG";
  LanguageCodeEnum["UgCn"] = "UG_CN";
  LanguageCodeEnum["Uk"] = "UK";
  LanguageCodeEnum["UkUa"] = "UK_UA";
  LanguageCodeEnum["Ur"] = "UR";
  LanguageCodeEnum["UrIn"] = "UR_IN";
  LanguageCodeEnum["UrPk"] = "UR_PK";
  LanguageCodeEnum["Uz"] = "UZ";
  LanguageCodeEnum["UzArab"] = "UZ_ARAB";
  LanguageCodeEnum["UzArabAf"] = "UZ_ARAB_AF";
  LanguageCodeEnum["UzCyrl"] = "UZ_CYRL";
  LanguageCodeEnum["UzCyrlUz"] = "UZ_CYRL_UZ";
  LanguageCodeEnum["UzLatn"] = "UZ_LATN";
  LanguageCodeEnum["UzLatnUz"] = "UZ_LATN_UZ";
  LanguageCodeEnum["Vai"] = "VAI";
  LanguageCodeEnum["VaiLatn"] = "VAI_LATN";
  LanguageCodeEnum["VaiLatnLr"] = "VAI_LATN_LR";
  LanguageCodeEnum["VaiVaii"] = "VAI_VAII";
  LanguageCodeEnum["VaiVaiiLr"] = "VAI_VAII_LR";
  LanguageCodeEnum["Vi"] = "VI";
  LanguageCodeEnum["ViVn"] = "VI_VN";
  LanguageCodeEnum["Vo"] = "VO";
  LanguageCodeEnum["Vun"] = "VUN";
  LanguageCodeEnum["VunTz"] = "VUN_TZ";
  LanguageCodeEnum["Wae"] = "WAE";
  LanguageCodeEnum["WaeCh"] = "WAE_CH";
  LanguageCodeEnum["Wo"] = "WO";
  LanguageCodeEnum["WoSn"] = "WO_SN";
  LanguageCodeEnum["Xh"] = "XH";
  LanguageCodeEnum["XhZa"] = "XH_ZA";
  LanguageCodeEnum["Xog"] = "XOG";
  LanguageCodeEnum["XogUg"] = "XOG_UG";
  LanguageCodeEnum["Yav"] = "YAV";
  LanguageCodeEnum["YavCm"] = "YAV_CM";
  LanguageCodeEnum["Yi"] = "YI";
  LanguageCodeEnum["Yo"] = "YO";
  LanguageCodeEnum["YoBj"] = "YO_BJ";
  LanguageCodeEnum["YoNg"] = "YO_NG";
  LanguageCodeEnum["Yue"] = "YUE";
  LanguageCodeEnum["YueHans"] = "YUE_HANS";
  LanguageCodeEnum["YueHansCn"] = "YUE_HANS_CN";
  LanguageCodeEnum["YueHant"] = "YUE_HANT";
  LanguageCodeEnum["YueHantHk"] = "YUE_HANT_HK";
  LanguageCodeEnum["Zgh"] = "ZGH";
  LanguageCodeEnum["ZghMa"] = "ZGH_MA";
  LanguageCodeEnum["Zh"] = "ZH";
  LanguageCodeEnum["ZhHans"] = "ZH_HANS";
  LanguageCodeEnum["ZhHansCn"] = "ZH_HANS_CN";
  LanguageCodeEnum["ZhHansHk"] = "ZH_HANS_HK";
  LanguageCodeEnum["ZhHansMo"] = "ZH_HANS_MO";
  LanguageCodeEnum["ZhHansSg"] = "ZH_HANS_SG";
  LanguageCodeEnum["ZhHant"] = "ZH_HANT";
  LanguageCodeEnum["ZhHantHk"] = "ZH_HANT_HK";
  LanguageCodeEnum["ZhHantMo"] = "ZH_HANT_MO";
  LanguageCodeEnum["ZhHantTw"] = "ZH_HANT_TW";
  LanguageCodeEnum["Zu"] = "ZU";
  LanguageCodeEnum["ZuZa"] = "ZU_ZA";
})((LanguageCodeEnum = exports.LanguageCodeEnum || (exports.LanguageCodeEnum = {})));
/**
 * Determine the mark as paid strategy for the channel.
 *
 *     TRANSACTION_FLOW - new orders marked as paid will receive a
 *     `TransactionItem` object, that will cover the `order.total`.
 *
 *     PAYMENT_FLOW - new orders marked as paid will receive a
 *     `Payment` object, that will cover the `order.total`.
 *
 *
 */
var MarkAsPaidStrategyEnum;
(function (MarkAsPaidStrategyEnum) {
  MarkAsPaidStrategyEnum["PaymentFlow"] = "PAYMENT_FLOW";
  MarkAsPaidStrategyEnum["TransactionFlow"] = "TRANSACTION_FLOW";
})(
  (MarkAsPaidStrategyEnum = exports.MarkAsPaidStrategyEnum || (exports.MarkAsPaidStrategyEnum = {}))
);
/** An enumeration. */
var MeasurementUnitsEnum;
(function (MeasurementUnitsEnum) {
  MeasurementUnitsEnum["AcreFt"] = "ACRE_FT";
  MeasurementUnitsEnum["AcreIn"] = "ACRE_IN";
  MeasurementUnitsEnum["Cm"] = "CM";
  MeasurementUnitsEnum["CubicCentimeter"] = "CUBIC_CENTIMETER";
  MeasurementUnitsEnum["CubicDecimeter"] = "CUBIC_DECIMETER";
  MeasurementUnitsEnum["CubicFoot"] = "CUBIC_FOOT";
  MeasurementUnitsEnum["CubicInch"] = "CUBIC_INCH";
  MeasurementUnitsEnum["CubicMeter"] = "CUBIC_METER";
  MeasurementUnitsEnum["CubicMillimeter"] = "CUBIC_MILLIMETER";
  MeasurementUnitsEnum["CubicYard"] = "CUBIC_YARD";
  MeasurementUnitsEnum["Dm"] = "DM";
  MeasurementUnitsEnum["FlOz"] = "FL_OZ";
  MeasurementUnitsEnum["Ft"] = "FT";
  MeasurementUnitsEnum["G"] = "G";
  MeasurementUnitsEnum["Inch"] = "INCH";
  MeasurementUnitsEnum["Kg"] = "KG";
  MeasurementUnitsEnum["Km"] = "KM";
  MeasurementUnitsEnum["Lb"] = "LB";
  MeasurementUnitsEnum["Liter"] = "LITER";
  MeasurementUnitsEnum["M"] = "M";
  MeasurementUnitsEnum["Mm"] = "MM";
  MeasurementUnitsEnum["Oz"] = "OZ";
  MeasurementUnitsEnum["Pint"] = "PINT";
  MeasurementUnitsEnum["Qt"] = "QT";
  MeasurementUnitsEnum["SqCm"] = "SQ_CM";
  MeasurementUnitsEnum["SqDm"] = "SQ_DM";
  MeasurementUnitsEnum["SqFt"] = "SQ_FT";
  MeasurementUnitsEnum["SqInch"] = "SQ_INCH";
  MeasurementUnitsEnum["SqKm"] = "SQ_KM";
  MeasurementUnitsEnum["SqM"] = "SQ_M";
  MeasurementUnitsEnum["SqMm"] = "SQ_MM";
  MeasurementUnitsEnum["SqYd"] = "SQ_YD";
  MeasurementUnitsEnum["Tonne"] = "TONNE";
  MeasurementUnitsEnum["Yd"] = "YD";
})((MeasurementUnitsEnum = exports.MeasurementUnitsEnum || (exports.MeasurementUnitsEnum = {})));
var MediaChoicesSortField;
(function (MediaChoicesSortField) {
  /** Sort media by ID. */
  MediaChoicesSortField["Id"] = "ID";
})((MediaChoicesSortField = exports.MediaChoicesSortField || (exports.MediaChoicesSortField = {})));
/** An enumeration. */
var MenuErrorCode;
(function (MenuErrorCode) {
  MenuErrorCode["CannotAssignNode"] = "CANNOT_ASSIGN_NODE";
  MenuErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  MenuErrorCode["Invalid"] = "INVALID";
  MenuErrorCode["InvalidMenuItem"] = "INVALID_MENU_ITEM";
  MenuErrorCode["NotFound"] = "NOT_FOUND";
  MenuErrorCode["NoMenuItemProvided"] = "NO_MENU_ITEM_PROVIDED";
  MenuErrorCode["Required"] = "REQUIRED";
  MenuErrorCode["TooManyMenuItems"] = "TOO_MANY_MENU_ITEMS";
  MenuErrorCode["Unique"] = "UNIQUE";
})((MenuErrorCode = exports.MenuErrorCode || (exports.MenuErrorCode = {})));
var MenuItemsSortField;
(function (MenuItemsSortField) {
  /** Sort menu items by name. */
  MenuItemsSortField["Name"] = "NAME";
})((MenuItemsSortField = exports.MenuItemsSortField || (exports.MenuItemsSortField = {})));
var MenuSortField;
(function (MenuSortField) {
  /** Sort menus by items count. */
  MenuSortField["ItemsCount"] = "ITEMS_COUNT";
  /** Sort menus by name. */
  MenuSortField["Name"] = "NAME";
})((MenuSortField = exports.MenuSortField || (exports.MenuSortField = {})));
/** An enumeration. */
var MetadataErrorCode;
(function (MetadataErrorCode) {
  MetadataErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  MetadataErrorCode["Invalid"] = "INVALID";
  MetadataErrorCode["NotFound"] = "NOT_FOUND";
  MetadataErrorCode["NotUpdated"] = "NOT_UPDATED";
  MetadataErrorCode["Required"] = "REQUIRED";
})((MetadataErrorCode = exports.MetadataErrorCode || (exports.MetadataErrorCode = {})));
var NavigationType;
(function (NavigationType) {
  /** Main storefront navigation. */
  NavigationType["Main"] = "MAIN";
  /** Secondary storefront navigation. */
  NavigationType["Secondary"] = "SECONDARY";
})((NavigationType = exports.NavigationType || (exports.NavigationType = {})));
var OrderAction;
(function (OrderAction) {
  /** Represents the capture action. */
  OrderAction["Capture"] = "CAPTURE";
  /** Represents a mark-as-paid action. */
  OrderAction["MarkAsPaid"] = "MARK_AS_PAID";
  /** Represents a refund action. */
  OrderAction["Refund"] = "REFUND";
  /** Represents a void action. */
  OrderAction["Void"] = "VOID";
})((OrderAction = exports.OrderAction || (exports.OrderAction = {})));
/**
 * Determine a current authorize status for order.
 *
 *     We treat the order as fully authorized when the sum of authorized and charged funds
 *     cover the `order.total`-`order.totalGrantedRefund`.
 *     We treat the order as partially authorized when the sum of authorized and charged
 *     funds covers only part of the `order.total`-`order.totalGrantedRefund`.
 *     We treat the order as not authorized when the sum of authorized and charged funds is
 *     0.
 *
 *     NONE - the funds are not authorized
 *     PARTIAL - the funds that are authorized and charged don't cover fully the
 *     `order.total`-`order.totalGrantedRefund`
 *     FULL - the funds that are authorized and charged fully cover the
 *     `order.total`-`order.totalGrantedRefund`
 *
 */
var OrderAuthorizeStatusEnum;
(function (OrderAuthorizeStatusEnum) {
  OrderAuthorizeStatusEnum["Full"] = "FULL";
  OrderAuthorizeStatusEnum["None"] = "NONE";
  OrderAuthorizeStatusEnum["Partial"] = "PARTIAL";
})(
  (OrderAuthorizeStatusEnum =
    exports.OrderAuthorizeStatusEnum || (exports.OrderAuthorizeStatusEnum = {}))
);
/** An enumeration. */
var OrderBulkCreateErrorCode;
(function (OrderBulkCreateErrorCode) {
  OrderBulkCreateErrorCode["BulkLimit"] = "BULK_LIMIT";
  OrderBulkCreateErrorCode["FutureDate"] = "FUTURE_DATE";
  OrderBulkCreateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  OrderBulkCreateErrorCode["IncorrectCurrency"] = "INCORRECT_CURRENCY";
  OrderBulkCreateErrorCode["InsufficientStock"] = "INSUFFICIENT_STOCK";
  OrderBulkCreateErrorCode["Invalid"] = "INVALID";
  OrderBulkCreateErrorCode["InvalidQuantity"] = "INVALID_QUANTITY";
  OrderBulkCreateErrorCode["MetadataKeyRequired"] = "METADATA_KEY_REQUIRED";
  OrderBulkCreateErrorCode["NegativeIndex"] = "NEGATIVE_INDEX";
  OrderBulkCreateErrorCode["NonExistingStock"] = "NON_EXISTING_STOCK";
  OrderBulkCreateErrorCode["NoteLength"] = "NOTE_LENGTH";
  OrderBulkCreateErrorCode["NotFound"] = "NOT_FOUND";
  OrderBulkCreateErrorCode["NoRelatedOrderLine"] = "NO_RELATED_ORDER_LINE";
  OrderBulkCreateErrorCode["OrderLineFulfillmentLineMismatch"] =
    "ORDER_LINE_FULFILLMENT_LINE_MISMATCH";
  OrderBulkCreateErrorCode["PriceError"] = "PRICE_ERROR";
  OrderBulkCreateErrorCode["Required"] = "REQUIRED";
  OrderBulkCreateErrorCode["TooManyIdentifiers"] = "TOO_MANY_IDENTIFIERS";
  OrderBulkCreateErrorCode["Unique"] = "UNIQUE";
})(
  (OrderBulkCreateErrorCode =
    exports.OrderBulkCreateErrorCode || (exports.OrderBulkCreateErrorCode = {}))
);
/**
 * Determine the current charge status for the order.
 *
 *     An order is considered overcharged when the sum of the
 *     transactionItem's charge amounts exceeds the value of
 *     `order.total` - `order.totalGrantedRefund`.
 *     If the sum of the transactionItem's charge amounts equals
 *     `order.total` - `order.totalGrantedRefund`, we consider the order to be fully
 *     charged.
 *     If the sum of the transactionItem's charge amounts covers a part of the
 *     `order.total` - `order.totalGrantedRefund`, we treat the order as partially charged.
 *
 *     NONE - the funds are not charged.
 *     PARTIAL - the funds that are charged don't cover the
 *     `order.total`-`order.totalGrantedRefund`
 *     FULL - the funds that are charged fully cover the
 *     `order.total`-`order.totalGrantedRefund`
 *     OVERCHARGED - the charged funds are bigger than the
 *     `order.total`-`order.totalGrantedRefund`
 *
 */
var OrderChargeStatusEnum;
(function (OrderChargeStatusEnum) {
  OrderChargeStatusEnum["Full"] = "FULL";
  OrderChargeStatusEnum["None"] = "NONE";
  OrderChargeStatusEnum["Overcharged"] = "OVERCHARGED";
  OrderChargeStatusEnum["Partial"] = "PARTIAL";
})((OrderChargeStatusEnum = exports.OrderChargeStatusEnum || (exports.OrderChargeStatusEnum = {})));
/** An enumeration. */
var OrderCreateFromCheckoutErrorCode;
(function (OrderCreateFromCheckoutErrorCode) {
  OrderCreateFromCheckoutErrorCode["BillingAddressNotSet"] = "BILLING_ADDRESS_NOT_SET";
  OrderCreateFromCheckoutErrorCode["ChannelInactive"] = "CHANNEL_INACTIVE";
  OrderCreateFromCheckoutErrorCode["CheckoutNotFound"] = "CHECKOUT_NOT_FOUND";
  OrderCreateFromCheckoutErrorCode["EmailNotSet"] = "EMAIL_NOT_SET";
  OrderCreateFromCheckoutErrorCode["GiftCardNotApplicable"] = "GIFT_CARD_NOT_APPLICABLE";
  OrderCreateFromCheckoutErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  OrderCreateFromCheckoutErrorCode["InsufficientStock"] = "INSUFFICIENT_STOCK";
  OrderCreateFromCheckoutErrorCode["InvalidShippingMethod"] = "INVALID_SHIPPING_METHOD";
  OrderCreateFromCheckoutErrorCode["NoLines"] = "NO_LINES";
  OrderCreateFromCheckoutErrorCode["ShippingAddressNotSet"] = "SHIPPING_ADDRESS_NOT_SET";
  OrderCreateFromCheckoutErrorCode["ShippingMethodNotSet"] = "SHIPPING_METHOD_NOT_SET";
  OrderCreateFromCheckoutErrorCode["TaxError"] = "TAX_ERROR";
  OrderCreateFromCheckoutErrorCode["UnavailableVariantInChannel"] =
    "UNAVAILABLE_VARIANT_IN_CHANNEL";
  OrderCreateFromCheckoutErrorCode["VoucherNotApplicable"] = "VOUCHER_NOT_APPLICABLE";
})(
  (OrderCreateFromCheckoutErrorCode =
    exports.OrderCreateFromCheckoutErrorCode || (exports.OrderCreateFromCheckoutErrorCode = {}))
);
var OrderDirection;
(function (OrderDirection) {
  /** Specifies an ascending sort order. */
  OrderDirection["Asc"] = "ASC";
  /** Specifies a descending sort order. */
  OrderDirection["Desc"] = "DESC";
})((OrderDirection = exports.OrderDirection || (exports.OrderDirection = {})));
/** An enumeration. */
var OrderDiscountType;
(function (OrderDiscountType) {
  OrderDiscountType["Manual"] = "MANUAL";
  OrderDiscountType["Sale"] = "SALE";
  OrderDiscountType["Voucher"] = "VOUCHER";
})((OrderDiscountType = exports.OrderDiscountType || (exports.OrderDiscountType = {})));
/** An enumeration. */
var OrderErrorCode;
(function (OrderErrorCode) {
  OrderErrorCode["BillingAddressNotSet"] = "BILLING_ADDRESS_NOT_SET";
  OrderErrorCode["CannotCancelFulfillment"] = "CANNOT_CANCEL_FULFILLMENT";
  OrderErrorCode["CannotCancelOrder"] = "CANNOT_CANCEL_ORDER";
  OrderErrorCode["CannotDelete"] = "CANNOT_DELETE";
  OrderErrorCode["CannotDiscount"] = "CANNOT_DISCOUNT";
  OrderErrorCode["CannotFulfillUnpaidOrder"] = "CANNOT_FULFILL_UNPAID_ORDER";
  OrderErrorCode["CannotRefund"] = "CANNOT_REFUND";
  OrderErrorCode["CaptureInactivePayment"] = "CAPTURE_INACTIVE_PAYMENT";
  OrderErrorCode["ChannelInactive"] = "CHANNEL_INACTIVE";
  OrderErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  OrderErrorCode["FulfillOrderLine"] = "FULFILL_ORDER_LINE";
  OrderErrorCode["GiftCardLine"] = "GIFT_CARD_LINE";
  OrderErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  OrderErrorCode["InsufficientStock"] = "INSUFFICIENT_STOCK";
  OrderErrorCode["Invalid"] = "INVALID";
  OrderErrorCode["InvalidQuantity"] = "INVALID_QUANTITY";
  OrderErrorCode["NotAvailableInChannel"] = "NOT_AVAILABLE_IN_CHANNEL";
  OrderErrorCode["NotEditable"] = "NOT_EDITABLE";
  OrderErrorCode["NotFound"] = "NOT_FOUND";
  OrderErrorCode["OrderNoShippingAddress"] = "ORDER_NO_SHIPPING_ADDRESS";
  OrderErrorCode["PaymentError"] = "PAYMENT_ERROR";
  OrderErrorCode["PaymentMissing"] = "PAYMENT_MISSING";
  OrderErrorCode["ProductNotPublished"] = "PRODUCT_NOT_PUBLISHED";
  OrderErrorCode["ProductUnavailableForPurchase"] = "PRODUCT_UNAVAILABLE_FOR_PURCHASE";
  OrderErrorCode["Required"] = "REQUIRED";
  OrderErrorCode["ShippingMethodNotApplicable"] = "SHIPPING_METHOD_NOT_APPLICABLE";
  OrderErrorCode["ShippingMethodRequired"] = "SHIPPING_METHOD_REQUIRED";
  OrderErrorCode["TaxError"] = "TAX_ERROR";
  OrderErrorCode["TransactionError"] = "TRANSACTION_ERROR";
  OrderErrorCode["Unique"] = "UNIQUE";
  OrderErrorCode["VoidInactivePayment"] = "VOID_INACTIVE_PAYMENT";
  OrderErrorCode["ZeroQuantity"] = "ZERO_QUANTITY";
})((OrderErrorCode = exports.OrderErrorCode || (exports.OrderErrorCode = {})));
/** An enumeration. */
var OrderEventsEmailsEnum;
(function (OrderEventsEmailsEnum) {
  OrderEventsEmailsEnum["Confirmed"] = "CONFIRMED";
  OrderEventsEmailsEnum["DigitalLinks"] = "DIGITAL_LINKS";
  OrderEventsEmailsEnum["FulfillmentConfirmation"] = "FULFILLMENT_CONFIRMATION";
  OrderEventsEmailsEnum["OrderCancel"] = "ORDER_CANCEL";
  OrderEventsEmailsEnum["OrderConfirmation"] = "ORDER_CONFIRMATION";
  OrderEventsEmailsEnum["OrderRefund"] = "ORDER_REFUND";
  OrderEventsEmailsEnum["PaymentConfirmation"] = "PAYMENT_CONFIRMATION";
  OrderEventsEmailsEnum["ShippingConfirmation"] = "SHIPPING_CONFIRMATION";
  OrderEventsEmailsEnum["TrackingUpdated"] = "TRACKING_UPDATED";
})((OrderEventsEmailsEnum = exports.OrderEventsEmailsEnum || (exports.OrderEventsEmailsEnum = {})));
/** The different order event types.  */
var OrderEventsEnum;
(function (OrderEventsEnum) {
  OrderEventsEnum["AddedProducts"] = "ADDED_PRODUCTS";
  OrderEventsEnum["Canceled"] = "CANCELED";
  OrderEventsEnum["Confirmed"] = "CONFIRMED";
  OrderEventsEnum["DraftCreated"] = "DRAFT_CREATED";
  OrderEventsEnum["DraftCreatedFromReplace"] = "DRAFT_CREATED_FROM_REPLACE";
  OrderEventsEnum["EmailSent"] = "EMAIL_SENT";
  OrderEventsEnum["Expired"] = "EXPIRED";
  OrderEventsEnum["ExternalServiceNotification"] = "EXTERNAL_SERVICE_NOTIFICATION";
  OrderEventsEnum["FulfillmentAwaitsApproval"] = "FULFILLMENT_AWAITS_APPROVAL";
  OrderEventsEnum["FulfillmentCanceled"] = "FULFILLMENT_CANCELED";
  OrderEventsEnum["FulfillmentFulfilledItems"] = "FULFILLMENT_FULFILLED_ITEMS";
  OrderEventsEnum["FulfillmentRefunded"] = "FULFILLMENT_REFUNDED";
  OrderEventsEnum["FulfillmentReplaced"] = "FULFILLMENT_REPLACED";
  OrderEventsEnum["FulfillmentRestockedItems"] = "FULFILLMENT_RESTOCKED_ITEMS";
  OrderEventsEnum["FulfillmentReturned"] = "FULFILLMENT_RETURNED";
  OrderEventsEnum["InvoiceGenerated"] = "INVOICE_GENERATED";
  OrderEventsEnum["InvoiceRequested"] = "INVOICE_REQUESTED";
  OrderEventsEnum["InvoiceSent"] = "INVOICE_SENT";
  OrderEventsEnum["InvoiceUpdated"] = "INVOICE_UPDATED";
  OrderEventsEnum["NoteAdded"] = "NOTE_ADDED";
  OrderEventsEnum["NoteUpdated"] = "NOTE_UPDATED";
  OrderEventsEnum["OrderDiscountAdded"] = "ORDER_DISCOUNT_ADDED";
  OrderEventsEnum["OrderDiscountAutomaticallyUpdated"] = "ORDER_DISCOUNT_AUTOMATICALLY_UPDATED";
  OrderEventsEnum["OrderDiscountDeleted"] = "ORDER_DISCOUNT_DELETED";
  OrderEventsEnum["OrderDiscountUpdated"] = "ORDER_DISCOUNT_UPDATED";
  OrderEventsEnum["OrderFullyPaid"] = "ORDER_FULLY_PAID";
  OrderEventsEnum["OrderLineDiscountRemoved"] = "ORDER_LINE_DISCOUNT_REMOVED";
  OrderEventsEnum["OrderLineDiscountUpdated"] = "ORDER_LINE_DISCOUNT_UPDATED";
  OrderEventsEnum["OrderLineProductDeleted"] = "ORDER_LINE_PRODUCT_DELETED";
  OrderEventsEnum["OrderLineVariantDeleted"] = "ORDER_LINE_VARIANT_DELETED";
  OrderEventsEnum["OrderMarkedAsPaid"] = "ORDER_MARKED_AS_PAID";
  OrderEventsEnum["OrderReplacementCreated"] = "ORDER_REPLACEMENT_CREATED";
  OrderEventsEnum["Other"] = "OTHER";
  OrderEventsEnum["OversoldItems"] = "OVERSOLD_ITEMS";
  OrderEventsEnum["PaymentAuthorized"] = "PAYMENT_AUTHORIZED";
  OrderEventsEnum["PaymentCaptured"] = "PAYMENT_CAPTURED";
  OrderEventsEnum["PaymentFailed"] = "PAYMENT_FAILED";
  OrderEventsEnum["PaymentRefunded"] = "PAYMENT_REFUNDED";
  OrderEventsEnum["PaymentVoided"] = "PAYMENT_VOIDED";
  OrderEventsEnum["Placed"] = "PLACED";
  OrderEventsEnum["PlacedFromDraft"] = "PLACED_FROM_DRAFT";
  OrderEventsEnum["RemovedProducts"] = "REMOVED_PRODUCTS";
  OrderEventsEnum["TrackingUpdated"] = "TRACKING_UPDATED";
  OrderEventsEnum["TransactionCancelRequested"] = "TRANSACTION_CANCEL_REQUESTED";
  OrderEventsEnum["TransactionChargeRequested"] = "TRANSACTION_CHARGE_REQUESTED";
  OrderEventsEnum["TransactionEvent"] = "TRANSACTION_EVENT";
  OrderEventsEnum["TransactionMarkAsPaidFailed"] = "TRANSACTION_MARK_AS_PAID_FAILED";
  OrderEventsEnum["TransactionRefundRequested"] = "TRANSACTION_REFUND_REQUESTED";
  OrderEventsEnum["UpdatedAddress"] = "UPDATED_ADDRESS";
})((OrderEventsEnum = exports.OrderEventsEnum || (exports.OrderEventsEnum = {})));
/** An enumeration. */
var OrderGrantRefundCreateErrorCode;
(function (OrderGrantRefundCreateErrorCode) {
  OrderGrantRefundCreateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  OrderGrantRefundCreateErrorCode["Invalid"] = "INVALID";
  OrderGrantRefundCreateErrorCode["NotFound"] = "NOT_FOUND";
  OrderGrantRefundCreateErrorCode["Required"] = "REQUIRED";
  OrderGrantRefundCreateErrorCode["ShippingCostsAlreadyGranted"] = "SHIPPING_COSTS_ALREADY_GRANTED";
})(
  (OrderGrantRefundCreateErrorCode =
    exports.OrderGrantRefundCreateErrorCode || (exports.OrderGrantRefundCreateErrorCode = {}))
);
/** An enumeration. */
var OrderGrantRefundCreateLineErrorCode;
(function (OrderGrantRefundCreateLineErrorCode) {
  OrderGrantRefundCreateLineErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  OrderGrantRefundCreateLineErrorCode["NotFound"] = "NOT_FOUND";
  OrderGrantRefundCreateLineErrorCode["QuantityGreaterThanAvailable"] =
    "QUANTITY_GREATER_THAN_AVAILABLE";
})(
  (OrderGrantRefundCreateLineErrorCode =
    exports.OrderGrantRefundCreateLineErrorCode ||
    (exports.OrderGrantRefundCreateLineErrorCode = {}))
);
/** An enumeration. */
var OrderGrantRefundUpdateErrorCode;
(function (OrderGrantRefundUpdateErrorCode) {
  OrderGrantRefundUpdateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  OrderGrantRefundUpdateErrorCode["Invalid"] = "INVALID";
  OrderGrantRefundUpdateErrorCode["NotFound"] = "NOT_FOUND";
  OrderGrantRefundUpdateErrorCode["Required"] = "REQUIRED";
  OrderGrantRefundUpdateErrorCode["ShippingCostsAlreadyGranted"] = "SHIPPING_COSTS_ALREADY_GRANTED";
})(
  (OrderGrantRefundUpdateErrorCode =
    exports.OrderGrantRefundUpdateErrorCode || (exports.OrderGrantRefundUpdateErrorCode = {}))
);
/** An enumeration. */
var OrderGrantRefundUpdateLineErrorCode;
(function (OrderGrantRefundUpdateLineErrorCode) {
  OrderGrantRefundUpdateLineErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  OrderGrantRefundUpdateLineErrorCode["NotFound"] = "NOT_FOUND";
  OrderGrantRefundUpdateLineErrorCode["QuantityGreaterThanAvailable"] =
    "QUANTITY_GREATER_THAN_AVAILABLE";
})(
  (OrderGrantRefundUpdateLineErrorCode =
    exports.OrderGrantRefundUpdateLineErrorCode ||
    (exports.OrderGrantRefundUpdateLineErrorCode = {}))
);
/** An enumeration. */
var OrderNoteAddErrorCode;
(function (OrderNoteAddErrorCode) {
  OrderNoteAddErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  OrderNoteAddErrorCode["Required"] = "REQUIRED";
})((OrderNoteAddErrorCode = exports.OrderNoteAddErrorCode || (exports.OrderNoteAddErrorCode = {})));
/** An enumeration. */
var OrderNoteUpdateErrorCode;
(function (OrderNoteUpdateErrorCode) {
  OrderNoteUpdateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  OrderNoteUpdateErrorCode["NotFound"] = "NOT_FOUND";
  OrderNoteUpdateErrorCode["Required"] = "REQUIRED";
})(
  (OrderNoteUpdateErrorCode =
    exports.OrderNoteUpdateErrorCode || (exports.OrderNoteUpdateErrorCode = {}))
);
/** An enumeration. */
var OrderOriginEnum;
(function (OrderOriginEnum) {
  OrderOriginEnum["BulkCreate"] = "BULK_CREATE";
  OrderOriginEnum["Checkout"] = "CHECKOUT";
  OrderOriginEnum["Draft"] = "DRAFT";
  OrderOriginEnum["Reissue"] = "REISSUE";
})((OrderOriginEnum = exports.OrderOriginEnum || (exports.OrderOriginEnum = {})));
/** An enumeration. */
var OrderSettingsErrorCode;
(function (OrderSettingsErrorCode) {
  OrderSettingsErrorCode["Invalid"] = "INVALID";
})(
  (OrderSettingsErrorCode = exports.OrderSettingsErrorCode || (exports.OrderSettingsErrorCode = {}))
);
var OrderSortField;
(function (OrderSortField) {
  /**
   * Sort orders by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  OrderSortField["CreatedAt"] = "CREATED_AT";
  /**
   * Sort orders by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  OrderSortField["CreationDate"] = "CREATION_DATE";
  /** Sort orders by customer. */
  OrderSortField["Customer"] = "CUSTOMER";
  /** Sort orders by fulfillment status. */
  OrderSortField["FulfillmentStatus"] = "FULFILLMENT_STATUS";
  /** Sort orders by last modified at. */
  OrderSortField["LastModifiedAt"] = "LAST_MODIFIED_AT";
  /** Sort orders by number. */
  OrderSortField["Number"] = "NUMBER";
  /** Sort orders by payment. */
  OrderSortField["Payment"] = "PAYMENT";
  /** Sort orders by rank. Note: This option is available only with the `search` filter. */
  OrderSortField["Rank"] = "RANK";
})((OrderSortField = exports.OrderSortField || (exports.OrderSortField = {})));
/** An enumeration. */
var OrderStatus;
(function (OrderStatus) {
  OrderStatus["Canceled"] = "CANCELED";
  OrderStatus["Draft"] = "DRAFT";
  OrderStatus["Expired"] = "EXPIRED";
  OrderStatus["Fulfilled"] = "FULFILLED";
  OrderStatus["PartiallyFulfilled"] = "PARTIALLY_FULFILLED";
  OrderStatus["PartiallyReturned"] = "PARTIALLY_RETURNED";
  OrderStatus["Returned"] = "RETURNED";
  OrderStatus["Unconfirmed"] = "UNCONFIRMED";
  OrderStatus["Unfulfilled"] = "UNFULFILLED";
})((OrderStatus = exports.OrderStatus || (exports.OrderStatus = {})));
var OrderStatusFilter;
(function (OrderStatusFilter) {
  OrderStatusFilter["Canceled"] = "CANCELED";
  OrderStatusFilter["Fulfilled"] = "FULFILLED";
  OrderStatusFilter["PartiallyFulfilled"] = "PARTIALLY_FULFILLED";
  OrderStatusFilter["ReadyToCapture"] = "READY_TO_CAPTURE";
  OrderStatusFilter["ReadyToFulfill"] = "READY_TO_FULFILL";
  OrderStatusFilter["Unconfirmed"] = "UNCONFIRMED";
  OrderStatusFilter["Unfulfilled"] = "UNFULFILLED";
})((OrderStatusFilter = exports.OrderStatusFilter || (exports.OrderStatusFilter = {})));
/** An enumeration. */
var PageErrorCode;
(function (PageErrorCode) {
  PageErrorCode["AttributeAlreadyAssigned"] = "ATTRIBUTE_ALREADY_ASSIGNED";
  PageErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  PageErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  PageErrorCode["Invalid"] = "INVALID";
  PageErrorCode["NotFound"] = "NOT_FOUND";
  PageErrorCode["Required"] = "REQUIRED";
  PageErrorCode["Unique"] = "UNIQUE";
})((PageErrorCode = exports.PageErrorCode || (exports.PageErrorCode = {})));
var PageSortField;
(function (PageSortField) {
  /**
   * Sort pages by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  PageSortField["CreatedAt"] = "CREATED_AT";
  /**
   * Sort pages by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  PageSortField["CreationDate"] = "CREATION_DATE";
  /**
   * Sort pages by publication date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  PageSortField["PublicationDate"] = "PUBLICATION_DATE";
  /**
   * Sort pages by publication date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  PageSortField["PublishedAt"] = "PUBLISHED_AT";
  /** Sort pages by slug. */
  PageSortField["Slug"] = "SLUG";
  /** Sort pages by title. */
  PageSortField["Title"] = "TITLE";
  /** Sort pages by visibility. */
  PageSortField["Visibility"] = "VISIBILITY";
})((PageSortField = exports.PageSortField || (exports.PageSortField = {})));
var PageTypeSortField;
(function (PageTypeSortField) {
  /** Sort page types by name. */
  PageTypeSortField["Name"] = "NAME";
  /** Sort page types by slug. */
  PageTypeSortField["Slug"] = "SLUG";
})((PageTypeSortField = exports.PageTypeSortField || (exports.PageTypeSortField = {})));
/** An enumeration. */
var PaymentChargeStatusEnum;
(function (PaymentChargeStatusEnum) {
  PaymentChargeStatusEnum["Cancelled"] = "CANCELLED";
  PaymentChargeStatusEnum["FullyCharged"] = "FULLY_CHARGED";
  PaymentChargeStatusEnum["FullyRefunded"] = "FULLY_REFUNDED";
  PaymentChargeStatusEnum["NotCharged"] = "NOT_CHARGED";
  PaymentChargeStatusEnum["PartiallyCharged"] = "PARTIALLY_CHARGED";
  PaymentChargeStatusEnum["PartiallyRefunded"] = "PARTIALLY_REFUNDED";
  PaymentChargeStatusEnum["Pending"] = "PENDING";
  PaymentChargeStatusEnum["Refused"] = "REFUSED";
})(
  (PaymentChargeStatusEnum =
    exports.PaymentChargeStatusEnum || (exports.PaymentChargeStatusEnum = {}))
);
/** An enumeration. */
var PaymentErrorCode;
(function (PaymentErrorCode) {
  PaymentErrorCode["BalanceCheckError"] = "BALANCE_CHECK_ERROR";
  PaymentErrorCode["BillingAddressNotSet"] = "BILLING_ADDRESS_NOT_SET";
  PaymentErrorCode["ChannelInactive"] = "CHANNEL_INACTIVE";
  PaymentErrorCode["CheckoutEmailNotSet"] = "CHECKOUT_EMAIL_NOT_SET";
  PaymentErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  PaymentErrorCode["Invalid"] = "INVALID";
  PaymentErrorCode["InvalidShippingMethod"] = "INVALID_SHIPPING_METHOD";
  PaymentErrorCode["NotFound"] = "NOT_FOUND";
  PaymentErrorCode["NotSupportedGateway"] = "NOT_SUPPORTED_GATEWAY";
  PaymentErrorCode["NoCheckoutLines"] = "NO_CHECKOUT_LINES";
  PaymentErrorCode["PartialPaymentNotAllowed"] = "PARTIAL_PAYMENT_NOT_ALLOWED";
  PaymentErrorCode["PaymentError"] = "PAYMENT_ERROR";
  PaymentErrorCode["Required"] = "REQUIRED";
  PaymentErrorCode["ShippingAddressNotSet"] = "SHIPPING_ADDRESS_NOT_SET";
  PaymentErrorCode["ShippingMethodNotSet"] = "SHIPPING_METHOD_NOT_SET";
  PaymentErrorCode["UnavailableVariantInChannel"] = "UNAVAILABLE_VARIANT_IN_CHANNEL";
  PaymentErrorCode["Unique"] = "UNIQUE";
})((PaymentErrorCode = exports.PaymentErrorCode || (exports.PaymentErrorCode = {})));
/** An enumeration. */
var PaymentGatewayConfigErrorCode;
(function (PaymentGatewayConfigErrorCode) {
  PaymentGatewayConfigErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  PaymentGatewayConfigErrorCode["Invalid"] = "INVALID";
  PaymentGatewayConfigErrorCode["NotFound"] = "NOT_FOUND";
})(
  (PaymentGatewayConfigErrorCode =
    exports.PaymentGatewayConfigErrorCode || (exports.PaymentGatewayConfigErrorCode = {}))
);
/** An enumeration. */
var PaymentGatewayInitializeErrorCode;
(function (PaymentGatewayInitializeErrorCode) {
  PaymentGatewayInitializeErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  PaymentGatewayInitializeErrorCode["Invalid"] = "INVALID";
  PaymentGatewayInitializeErrorCode["NotFound"] = "NOT_FOUND";
})(
  (PaymentGatewayInitializeErrorCode =
    exports.PaymentGatewayInitializeErrorCode || (exports.PaymentGatewayInitializeErrorCode = {}))
);
/** An enumeration. */
var PermissionEnum;
(function (PermissionEnum) {
  PermissionEnum["HandleCheckouts"] = "HANDLE_CHECKOUTS";
  PermissionEnum["HandlePayments"] = "HANDLE_PAYMENTS";
  PermissionEnum["HandleTaxes"] = "HANDLE_TAXES";
  PermissionEnum["ImpersonateUser"] = "IMPERSONATE_USER";
  PermissionEnum["ManageApps"] = "MANAGE_APPS";
  PermissionEnum["ManageChannels"] = "MANAGE_CHANNELS";
  PermissionEnum["ManageCheckouts"] = "MANAGE_CHECKOUTS";
  PermissionEnum["ManageDiscounts"] = "MANAGE_DISCOUNTS";
  PermissionEnum["ManageGiftCard"] = "MANAGE_GIFT_CARD";
  PermissionEnum["ManageMenus"] = "MANAGE_MENUS";
  PermissionEnum["ManageObservability"] = "MANAGE_OBSERVABILITY";
  PermissionEnum["ManageOrders"] = "MANAGE_ORDERS";
  PermissionEnum["ManageOrdersImport"] = "MANAGE_ORDERS_IMPORT";
  PermissionEnum["ManagePages"] = "MANAGE_PAGES";
  PermissionEnum["ManagePageTypesAndAttributes"] = "MANAGE_PAGE_TYPES_AND_ATTRIBUTES";
  PermissionEnum["ManagePlugins"] = "MANAGE_PLUGINS";
  PermissionEnum["ManageProducts"] = "MANAGE_PRODUCTS";
  PermissionEnum["ManageProductTypesAndAttributes"] = "MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES";
  PermissionEnum["ManageSettings"] = "MANAGE_SETTINGS";
  PermissionEnum["ManageShipping"] = "MANAGE_SHIPPING";
  PermissionEnum["ManageStaff"] = "MANAGE_STAFF";
  PermissionEnum["ManageTaxes"] = "MANAGE_TAXES";
  PermissionEnum["ManageTranslations"] = "MANAGE_TRANSLATIONS";
  PermissionEnum["ManageUsers"] = "MANAGE_USERS";
})((PermissionEnum = exports.PermissionEnum || (exports.PermissionEnum = {})));
/** An enumeration. */
var PermissionGroupErrorCode;
(function (PermissionGroupErrorCode) {
  PermissionGroupErrorCode["AssignNonStaffMember"] = "ASSIGN_NON_STAFF_MEMBER";
  PermissionGroupErrorCode["CannotRemoveFromLastGroup"] = "CANNOT_REMOVE_FROM_LAST_GROUP";
  PermissionGroupErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  PermissionGroupErrorCode["LeftNotManageablePermission"] = "LEFT_NOT_MANAGEABLE_PERMISSION";
  PermissionGroupErrorCode["OutOfScopeChannel"] = "OUT_OF_SCOPE_CHANNEL";
  PermissionGroupErrorCode["OutOfScopePermission"] = "OUT_OF_SCOPE_PERMISSION";
  PermissionGroupErrorCode["OutOfScopeUser"] = "OUT_OF_SCOPE_USER";
  PermissionGroupErrorCode["Required"] = "REQUIRED";
  PermissionGroupErrorCode["Unique"] = "UNIQUE";
})(
  (PermissionGroupErrorCode =
    exports.PermissionGroupErrorCode || (exports.PermissionGroupErrorCode = {}))
);
/** Sorting options for permission groups. */
var PermissionGroupSortField;
(function (PermissionGroupSortField) {
  /** Sort permission group accounts by name. */
  PermissionGroupSortField["Name"] = "NAME";
})(
  (PermissionGroupSortField =
    exports.PermissionGroupSortField || (exports.PermissionGroupSortField = {}))
);
var PluginConfigurationType;
(function (PluginConfigurationType) {
  PluginConfigurationType["Global"] = "GLOBAL";
  PluginConfigurationType["PerChannel"] = "PER_CHANNEL";
})(
  (PluginConfigurationType =
    exports.PluginConfigurationType || (exports.PluginConfigurationType = {}))
);
/** An enumeration. */
var PluginErrorCode;
(function (PluginErrorCode) {
  PluginErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  PluginErrorCode["Invalid"] = "INVALID";
  PluginErrorCode["NotFound"] = "NOT_FOUND";
  PluginErrorCode["PluginMisconfigured"] = "PLUGIN_MISCONFIGURED";
  PluginErrorCode["Required"] = "REQUIRED";
  PluginErrorCode["Unique"] = "UNIQUE";
})((PluginErrorCode = exports.PluginErrorCode || (exports.PluginErrorCode = {})));
var PluginSortField;
(function (PluginSortField) {
  PluginSortField["IsActive"] = "IS_ACTIVE";
  PluginSortField["Name"] = "NAME";
})((PluginSortField = exports.PluginSortField || (exports.PluginSortField = {})));
/** An enumeration. */
var PostalCodeRuleInclusionTypeEnum;
(function (PostalCodeRuleInclusionTypeEnum) {
  PostalCodeRuleInclusionTypeEnum["Exclude"] = "EXCLUDE";
  PostalCodeRuleInclusionTypeEnum["Include"] = "INCLUDE";
})(
  (PostalCodeRuleInclusionTypeEnum =
    exports.PostalCodeRuleInclusionTypeEnum || (exports.PostalCodeRuleInclusionTypeEnum = {}))
);
var ProductAttributeType;
(function (ProductAttributeType) {
  ProductAttributeType["Product"] = "PRODUCT";
  ProductAttributeType["Variant"] = "VARIANT";
})((ProductAttributeType = exports.ProductAttributeType || (exports.ProductAttributeType = {})));
/** An enumeration. */
var ProductBulkCreateErrorCode;
(function (ProductBulkCreateErrorCode) {
  ProductBulkCreateErrorCode["AttributeAlreadyAssigned"] = "ATTRIBUTE_ALREADY_ASSIGNED";
  ProductBulkCreateErrorCode["AttributeCannotBeAssigned"] = "ATTRIBUTE_CANNOT_BE_ASSIGNED";
  ProductBulkCreateErrorCode["AttributeVariantsDisabled"] = "ATTRIBUTE_VARIANTS_DISABLED";
  ProductBulkCreateErrorCode["Blank"] = "BLANK";
  ProductBulkCreateErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  ProductBulkCreateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  ProductBulkCreateErrorCode["Invalid"] = "INVALID";
  ProductBulkCreateErrorCode["InvalidPrice"] = "INVALID_PRICE";
  ProductBulkCreateErrorCode["MaxLength"] = "MAX_LENGTH";
  ProductBulkCreateErrorCode["NotFound"] = "NOT_FOUND";
  ProductBulkCreateErrorCode["ProductNotAssignedToChannel"] = "PRODUCT_NOT_ASSIGNED_TO_CHANNEL";
  ProductBulkCreateErrorCode["ProductWithoutCategory"] = "PRODUCT_WITHOUT_CATEGORY";
  ProductBulkCreateErrorCode["Required"] = "REQUIRED";
  ProductBulkCreateErrorCode["Unique"] = "UNIQUE";
  ProductBulkCreateErrorCode["UnsupportedMediaProvider"] = "UNSUPPORTED_MEDIA_PROVIDER";
})(
  (ProductBulkCreateErrorCode =
    exports.ProductBulkCreateErrorCode || (exports.ProductBulkCreateErrorCode = {}))
);
/** An enumeration. */
var ProductErrorCode;
(function (ProductErrorCode) {
  ProductErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
  ProductErrorCode["AttributeAlreadyAssigned"] = "ATTRIBUTE_ALREADY_ASSIGNED";
  ProductErrorCode["AttributeCannotBeAssigned"] = "ATTRIBUTE_CANNOT_BE_ASSIGNED";
  ProductErrorCode["AttributeVariantsDisabled"] = "ATTRIBUTE_VARIANTS_DISABLED";
  ProductErrorCode["CannotManageProductWithoutVariant"] = "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT";
  ProductErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  ProductErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  ProductErrorCode["Invalid"] = "INVALID";
  ProductErrorCode["InvalidPrice"] = "INVALID_PRICE";
  ProductErrorCode["MediaAlreadyAssigned"] = "MEDIA_ALREADY_ASSIGNED";
  ProductErrorCode["NotFound"] = "NOT_FOUND";
  ProductErrorCode["NotProductsImage"] = "NOT_PRODUCTS_IMAGE";
  ProductErrorCode["NotProductsVariant"] = "NOT_PRODUCTS_VARIANT";
  ProductErrorCode["PreorderVariantCannotBeDeactivated"] = "PREORDER_VARIANT_CANNOT_BE_DEACTIVATED";
  ProductErrorCode["ProductNotAssignedToChannel"] = "PRODUCT_NOT_ASSIGNED_TO_CHANNEL";
  ProductErrorCode["ProductWithoutCategory"] = "PRODUCT_WITHOUT_CATEGORY";
  ProductErrorCode["Required"] = "REQUIRED";
  ProductErrorCode["Unique"] = "UNIQUE";
  ProductErrorCode["UnsupportedMediaProvider"] = "UNSUPPORTED_MEDIA_PROVIDER";
  ProductErrorCode["VariantNoDigitalContent"] = "VARIANT_NO_DIGITAL_CONTENT";
})((ProductErrorCode = exports.ProductErrorCode || (exports.ProductErrorCode = {})));
var ProductFieldEnum;
(function (ProductFieldEnum) {
  ProductFieldEnum["Category"] = "CATEGORY";
  ProductFieldEnum["ChargeTaxes"] = "CHARGE_TAXES";
  ProductFieldEnum["Collections"] = "COLLECTIONS";
  ProductFieldEnum["Description"] = "DESCRIPTION";
  ProductFieldEnum["Name"] = "NAME";
  ProductFieldEnum["ProductMedia"] = "PRODUCT_MEDIA";
  ProductFieldEnum["ProductType"] = "PRODUCT_TYPE";
  ProductFieldEnum["ProductWeight"] = "PRODUCT_WEIGHT";
  ProductFieldEnum["VariantId"] = "VARIANT_ID";
  ProductFieldEnum["VariantMedia"] = "VARIANT_MEDIA";
  ProductFieldEnum["VariantSku"] = "VARIANT_SKU";
  ProductFieldEnum["VariantWeight"] = "VARIANT_WEIGHT";
})((ProductFieldEnum = exports.ProductFieldEnum || (exports.ProductFieldEnum = {})));
/** An enumeration. */
var ProductMediaType;
(function (ProductMediaType) {
  ProductMediaType["Image"] = "IMAGE";
  ProductMediaType["Video"] = "VIDEO";
})((ProductMediaType = exports.ProductMediaType || (exports.ProductMediaType = {})));
var ProductOrderField;
(function (ProductOrderField) {
  /**
   * Sort products by collection. Note: This option is available only for the `Collection.products` query.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  ProductOrderField["Collection"] = "COLLECTION";
  /**
   * Sort products by creation date.
   *
   * Added in Saleor 3.8.
   */
  ProductOrderField["CreatedAt"] = "CREATED_AT";
  /** Sort products by update date. */
  ProductOrderField["Date"] = "DATE";
  /** Sort products by update date. */
  ProductOrderField["LastModified"] = "LAST_MODIFIED";
  /** Sort products by update date. */
  ProductOrderField["LastModifiedAt"] = "LAST_MODIFIED_AT";
  /**
   * Sort products by a minimal price of a product's variant.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  ProductOrderField["MinimalPrice"] = "MINIMAL_PRICE";
  /** Sort products by name. */
  ProductOrderField["Name"] = "NAME";
  /**
   * Sort products by price.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  ProductOrderField["Price"] = "PRICE";
  /**
   * Sort products by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  ProductOrderField["PublicationDate"] = "PUBLICATION_DATE";
  /**
   * Sort products by publication status.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  ProductOrderField["Published"] = "PUBLISHED";
  /**
   * Sort products by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  ProductOrderField["PublishedAt"] = "PUBLISHED_AT";
  /** Sort products by rank. Note: This option is available only with the `search` filter. */
  ProductOrderField["Rank"] = "RANK";
  /** Sort products by rating. */
  ProductOrderField["Rating"] = "RATING";
  /** Sort products by type. */
  ProductOrderField["Type"] = "TYPE";
})((ProductOrderField = exports.ProductOrderField || (exports.ProductOrderField = {})));
/** An enumeration. */
var ProductTranslateErrorCode;
(function (ProductTranslateErrorCode) {
  ProductTranslateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  ProductTranslateErrorCode["Invalid"] = "INVALID";
  ProductTranslateErrorCode["NotFound"] = "NOT_FOUND";
  ProductTranslateErrorCode["Required"] = "REQUIRED";
})(
  (ProductTranslateErrorCode =
    exports.ProductTranslateErrorCode || (exports.ProductTranslateErrorCode = {}))
);
var ProductTypeConfigurable;
(function (ProductTypeConfigurable) {
  ProductTypeConfigurable["Configurable"] = "CONFIGURABLE";
  ProductTypeConfigurable["Simple"] = "SIMPLE";
})(
  (ProductTypeConfigurable =
    exports.ProductTypeConfigurable || (exports.ProductTypeConfigurable = {}))
);
var ProductTypeEnum;
(function (ProductTypeEnum) {
  ProductTypeEnum["Digital"] = "DIGITAL";
  ProductTypeEnum["Shippable"] = "SHIPPABLE";
})((ProductTypeEnum = exports.ProductTypeEnum || (exports.ProductTypeEnum = {})));
/** An enumeration. */
var ProductTypeKindEnum;
(function (ProductTypeKindEnum) {
  ProductTypeKindEnum["GiftCard"] = "GIFT_CARD";
  ProductTypeKindEnum["Normal"] = "NORMAL";
})((ProductTypeKindEnum = exports.ProductTypeKindEnum || (exports.ProductTypeKindEnum = {})));
var ProductTypeSortField;
(function (ProductTypeSortField) {
  /** Sort products by type. */
  ProductTypeSortField["Digital"] = "DIGITAL";
  /** Sort products by name. */
  ProductTypeSortField["Name"] = "NAME";
  /** Sort products by shipping. */
  ProductTypeSortField["ShippingRequired"] = "SHIPPING_REQUIRED";
})((ProductTypeSortField = exports.ProductTypeSortField || (exports.ProductTypeSortField = {})));
/** An enumeration. */
var ProductVariantBulkErrorCode;
(function (ProductVariantBulkErrorCode) {
  ProductVariantBulkErrorCode["AttributeAlreadyAssigned"] = "ATTRIBUTE_ALREADY_ASSIGNED";
  ProductVariantBulkErrorCode["AttributeCannotBeAssigned"] = "ATTRIBUTE_CANNOT_BE_ASSIGNED";
  ProductVariantBulkErrorCode["AttributeVariantsDisabled"] = "ATTRIBUTE_VARIANTS_DISABLED";
  ProductVariantBulkErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  ProductVariantBulkErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  ProductVariantBulkErrorCode["Invalid"] = "INVALID";
  ProductVariantBulkErrorCode["InvalidPrice"] = "INVALID_PRICE";
  ProductVariantBulkErrorCode["NotFound"] = "NOT_FOUND";
  ProductVariantBulkErrorCode["NotProductsVariant"] = "NOT_PRODUCTS_VARIANT";
  ProductVariantBulkErrorCode["ProductNotAssignedToChannel"] = "PRODUCT_NOT_ASSIGNED_TO_CHANNEL";
  ProductVariantBulkErrorCode["Required"] = "REQUIRED";
  ProductVariantBulkErrorCode["Unique"] = "UNIQUE";
})(
  (ProductVariantBulkErrorCode =
    exports.ProductVariantBulkErrorCode || (exports.ProductVariantBulkErrorCode = {}))
);
var ProductVariantSortField;
(function (ProductVariantSortField) {
  /** Sort products variants by last modified at. */
  ProductVariantSortField["LastModifiedAt"] = "LAST_MODIFIED_AT";
})(
  (ProductVariantSortField =
    exports.ProductVariantSortField || (exports.ProductVariantSortField = {}))
);
/** An enumeration. */
var ProductVariantTranslateErrorCode;
(function (ProductVariantTranslateErrorCode) {
  ProductVariantTranslateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  ProductVariantTranslateErrorCode["Invalid"] = "INVALID";
  ProductVariantTranslateErrorCode["NotFound"] = "NOT_FOUND";
  ProductVariantTranslateErrorCode["Required"] = "REQUIRED";
})(
  (ProductVariantTranslateErrorCode =
    exports.ProductVariantTranslateErrorCode || (exports.ProductVariantTranslateErrorCode = {}))
);
var ReportingPeriod;
(function (ReportingPeriod) {
  ReportingPeriod["ThisMonth"] = "THIS_MONTH";
  ReportingPeriod["Today"] = "TODAY";
})((ReportingPeriod = exports.ReportingPeriod || (exports.ReportingPeriod = {})));
var SaleSortField;
(function (SaleSortField) {
  /** Sort sales by created at. */
  SaleSortField["CreatedAt"] = "CREATED_AT";
  /** Sort sales by end date. */
  SaleSortField["EndDate"] = "END_DATE";
  /** Sort sales by last modified at. */
  SaleSortField["LastModifiedAt"] = "LAST_MODIFIED_AT";
  /** Sort sales by name. */
  SaleSortField["Name"] = "NAME";
  /** Sort sales by start date. */
  SaleSortField["StartDate"] = "START_DATE";
  /** Sort sales by type. */
  SaleSortField["Type"] = "TYPE";
  /**
   * Sort sales by value.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  SaleSortField["Value"] = "VALUE";
})((SaleSortField = exports.SaleSortField || (exports.SaleSortField = {})));
var SaleType;
(function (SaleType) {
  SaleType["Fixed"] = "FIXED";
  SaleType["Percentage"] = "PERCENTAGE";
})((SaleType = exports.SaleType || (exports.SaleType = {})));
/** An enumeration. */
var SendConfirmationEmailErrorCode;
(function (SendConfirmationEmailErrorCode) {
  SendConfirmationEmailErrorCode["AccountConfirmed"] = "ACCOUNT_CONFIRMED";
  SendConfirmationEmailErrorCode["ConfirmationAlreadyRequested"] = "CONFIRMATION_ALREADY_REQUESTED";
  SendConfirmationEmailErrorCode["Invalid"] = "INVALID";
  SendConfirmationEmailErrorCode["MissingChannelSlug"] = "MISSING_CHANNEL_SLUG";
})(
  (SendConfirmationEmailErrorCode =
    exports.SendConfirmationEmailErrorCode || (exports.SendConfirmationEmailErrorCode = {}))
);
/** An enumeration. */
var ShippingErrorCode;
(function (ShippingErrorCode) {
  ShippingErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
  ShippingErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  ShippingErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  ShippingErrorCode["Invalid"] = "INVALID";
  ShippingErrorCode["MaxLessThanMin"] = "MAX_LESS_THAN_MIN";
  ShippingErrorCode["NotFound"] = "NOT_FOUND";
  ShippingErrorCode["Required"] = "REQUIRED";
  ShippingErrorCode["Unique"] = "UNIQUE";
})((ShippingErrorCode = exports.ShippingErrorCode || (exports.ShippingErrorCode = {})));
/** An enumeration. */
var ShippingMethodTypeEnum;
(function (ShippingMethodTypeEnum) {
  ShippingMethodTypeEnum["Price"] = "PRICE";
  ShippingMethodTypeEnum["Weight"] = "WEIGHT";
})(
  (ShippingMethodTypeEnum = exports.ShippingMethodTypeEnum || (exports.ShippingMethodTypeEnum = {}))
);
/** An enumeration. */
var ShopErrorCode;
(function (ShopErrorCode) {
  ShopErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
  ShopErrorCode["CannotFetchTaxRates"] = "CANNOT_FETCH_TAX_RATES";
  ShopErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  ShopErrorCode["Invalid"] = "INVALID";
  ShopErrorCode["NotFound"] = "NOT_FOUND";
  ShopErrorCode["Required"] = "REQUIRED";
  ShopErrorCode["Unique"] = "UNIQUE";
})((ShopErrorCode = exports.ShopErrorCode || (exports.ShopErrorCode = {})));
/** Represents status of a staff account. */
var StaffMemberStatus;
(function (StaffMemberStatus) {
  /** User account has been activated. */
  StaffMemberStatus["Active"] = "ACTIVE";
  /** User account has not been activated yet. */
  StaffMemberStatus["Deactivated"] = "DEACTIVATED";
})((StaffMemberStatus = exports.StaffMemberStatus || (exports.StaffMemberStatus = {})));
var StockAvailability;
(function (StockAvailability) {
  StockAvailability["InStock"] = "IN_STOCK";
  StockAvailability["OutOfStock"] = "OUT_OF_STOCK";
})((StockAvailability = exports.StockAvailability || (exports.StockAvailability = {})));
/** An enumeration. */
var StockBulkUpdateErrorCode;
(function (StockBulkUpdateErrorCode) {
  StockBulkUpdateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  StockBulkUpdateErrorCode["Invalid"] = "INVALID";
  StockBulkUpdateErrorCode["NotFound"] = "NOT_FOUND";
  StockBulkUpdateErrorCode["Required"] = "REQUIRED";
})(
  (StockBulkUpdateErrorCode =
    exports.StockBulkUpdateErrorCode || (exports.StockBulkUpdateErrorCode = {}))
);
/** An enumeration. */
var StockErrorCode;
(function (StockErrorCode) {
  StockErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
  StockErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  StockErrorCode["Invalid"] = "INVALID";
  StockErrorCode["NotFound"] = "NOT_FOUND";
  StockErrorCode["Required"] = "REQUIRED";
  StockErrorCode["Unique"] = "UNIQUE";
})((StockErrorCode = exports.StockErrorCode || (exports.StockErrorCode = {})));
/**
 * Determine how stocks should be updated, while processing an order.
 *
 *     SKIP - stocks are not checked and not updated.
 *     UPDATE - only do update, if there is enough stock.
 *     FORCE - force update, if there is not enough stock.
 *
 */
var StockUpdatePolicyEnum;
(function (StockUpdatePolicyEnum) {
  StockUpdatePolicyEnum["Force"] = "FORCE";
  StockUpdatePolicyEnum["Skip"] = "SKIP";
  StockUpdatePolicyEnum["Update"] = "UPDATE";
})((StockUpdatePolicyEnum = exports.StockUpdatePolicyEnum || (exports.StockUpdatePolicyEnum = {})));
/** Enum representing the type of a payment storage in a gateway. */
var StorePaymentMethodEnum;
(function (StorePaymentMethodEnum) {
  /** Storage is disabled. The payment is not stored. */
  StorePaymentMethodEnum["None"] = "NONE";
  /** Off session storage type. The payment is stored to be reused even if the customer is absent. */
  StorePaymentMethodEnum["OffSession"] = "OFF_SESSION";
  /** On session storage type. The payment is stored only to be reused when the customer is present in the checkout flow. */
  StorePaymentMethodEnum["OnSession"] = "ON_SESSION";
})(
  (StorePaymentMethodEnum = exports.StorePaymentMethodEnum || (exports.StorePaymentMethodEnum = {}))
);
var TaxCalculationStrategy;
(function (TaxCalculationStrategy) {
  TaxCalculationStrategy["FlatRates"] = "FLAT_RATES";
  TaxCalculationStrategy["TaxApp"] = "TAX_APP";
})(
  (TaxCalculationStrategy = exports.TaxCalculationStrategy || (exports.TaxCalculationStrategy = {}))
);
/** An enumeration. */
var TaxClassCreateErrorCode;
(function (TaxClassCreateErrorCode) {
  TaxClassCreateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  TaxClassCreateErrorCode["Invalid"] = "INVALID";
  TaxClassCreateErrorCode["NotFound"] = "NOT_FOUND";
})(
  (TaxClassCreateErrorCode =
    exports.TaxClassCreateErrorCode || (exports.TaxClassCreateErrorCode = {}))
);
/** An enumeration. */
var TaxClassDeleteErrorCode;
(function (TaxClassDeleteErrorCode) {
  TaxClassDeleteErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  TaxClassDeleteErrorCode["Invalid"] = "INVALID";
  TaxClassDeleteErrorCode["NotFound"] = "NOT_FOUND";
})(
  (TaxClassDeleteErrorCode =
    exports.TaxClassDeleteErrorCode || (exports.TaxClassDeleteErrorCode = {}))
);
var TaxClassSortField;
(function (TaxClassSortField) {
  /** Sort tax classes by name. */
  TaxClassSortField["Name"] = "NAME";
})((TaxClassSortField = exports.TaxClassSortField || (exports.TaxClassSortField = {})));
/** An enumeration. */
var TaxClassUpdateErrorCode;
(function (TaxClassUpdateErrorCode) {
  TaxClassUpdateErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  TaxClassUpdateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  TaxClassUpdateErrorCode["Invalid"] = "INVALID";
  TaxClassUpdateErrorCode["NotFound"] = "NOT_FOUND";
})(
  (TaxClassUpdateErrorCode =
    exports.TaxClassUpdateErrorCode || (exports.TaxClassUpdateErrorCode = {}))
);
/** An enumeration. */
var TaxConfigurationUpdateErrorCode;
(function (TaxConfigurationUpdateErrorCode) {
  TaxConfigurationUpdateErrorCode["DuplicatedInputItem"] = "DUPLICATED_INPUT_ITEM";
  TaxConfigurationUpdateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  TaxConfigurationUpdateErrorCode["Invalid"] = "INVALID";
  TaxConfigurationUpdateErrorCode["NotFound"] = "NOT_FOUND";
})(
  (TaxConfigurationUpdateErrorCode =
    exports.TaxConfigurationUpdateErrorCode || (exports.TaxConfigurationUpdateErrorCode = {}))
);
/** An enumeration. */
var TaxCountryConfigurationDeleteErrorCode;
(function (TaxCountryConfigurationDeleteErrorCode) {
  TaxCountryConfigurationDeleteErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  TaxCountryConfigurationDeleteErrorCode["Invalid"] = "INVALID";
  TaxCountryConfigurationDeleteErrorCode["NotFound"] = "NOT_FOUND";
})(
  (TaxCountryConfigurationDeleteErrorCode =
    exports.TaxCountryConfigurationDeleteErrorCode ||
    (exports.TaxCountryConfigurationDeleteErrorCode = {}))
);
/** An enumeration. */
var TaxCountryConfigurationUpdateErrorCode;
(function (TaxCountryConfigurationUpdateErrorCode) {
  TaxCountryConfigurationUpdateErrorCode["CannotCreateNegativeRate"] =
    "CANNOT_CREATE_NEGATIVE_RATE";
  TaxCountryConfigurationUpdateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  TaxCountryConfigurationUpdateErrorCode["Invalid"] = "INVALID";
  TaxCountryConfigurationUpdateErrorCode["NotFound"] = "NOT_FOUND";
  TaxCountryConfigurationUpdateErrorCode["OnlyOneDefaultCountryRateAllowed"] =
    "ONLY_ONE_DEFAULT_COUNTRY_RATE_ALLOWED";
})(
  (TaxCountryConfigurationUpdateErrorCode =
    exports.TaxCountryConfigurationUpdateErrorCode ||
    (exports.TaxCountryConfigurationUpdateErrorCode = {}))
);
/** An enumeration. */
var TaxExemptionManageErrorCode;
(function (TaxExemptionManageErrorCode) {
  TaxExemptionManageErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  TaxExemptionManageErrorCode["Invalid"] = "INVALID";
  TaxExemptionManageErrorCode["NotEditableOrder"] = "NOT_EDITABLE_ORDER";
  TaxExemptionManageErrorCode["NotFound"] = "NOT_FOUND";
})(
  (TaxExemptionManageErrorCode =
    exports.TaxExemptionManageErrorCode || (exports.TaxExemptionManageErrorCode = {}))
);
/** An enumeration. */
var ThumbnailFormatEnum;
(function (ThumbnailFormatEnum) {
  ThumbnailFormatEnum["Avif"] = "AVIF";
  ThumbnailFormatEnum["Original"] = "ORIGINAL";
  ThumbnailFormatEnum["Webp"] = "WEBP";
})((ThumbnailFormatEnum = exports.ThumbnailFormatEnum || (exports.ThumbnailFormatEnum = {})));
/** An enumeration. */
var TimePeriodTypeEnum;
(function (TimePeriodTypeEnum) {
  TimePeriodTypeEnum["Day"] = "DAY";
  TimePeriodTypeEnum["Month"] = "MONTH";
  TimePeriodTypeEnum["Week"] = "WEEK";
  TimePeriodTypeEnum["Year"] = "YEAR";
})((TimePeriodTypeEnum = exports.TimePeriodTypeEnum || (exports.TimePeriodTypeEnum = {})));
/**
 * Represents possible tokenized payment flows that can be used to process payment.
 *
 *     The following flows are possible:
 *     INTERACTIVE - Payment method can be used for 1 click checkout - it's prefilled in
 *     checkout form (might require additional authentication from user)
 *
 */
var TokenizedPaymentFlowEnum;
(function (TokenizedPaymentFlowEnum) {
  TokenizedPaymentFlowEnum["Interactive"] = "INTERACTIVE";
})(
  (TokenizedPaymentFlowEnum =
    exports.TokenizedPaymentFlowEnum || (exports.TokenizedPaymentFlowEnum = {}))
);
/**
 * Represents possible actions on payment transaction.
 *
 *     The following actions are possible:
 *     CHARGE - Represents the charge action.
 *     REFUND - Represents a refund action.
 *     CANCEL - Represents a cancel action. Added in Saleor 3.12.
 *
 */
var TransactionActionEnum;
(function (TransactionActionEnum) {
  TransactionActionEnum["Cancel"] = "CANCEL";
  TransactionActionEnum["Charge"] = "CHARGE";
  TransactionActionEnum["Refund"] = "REFUND";
})((TransactionActionEnum = exports.TransactionActionEnum || (exports.TransactionActionEnum = {})));
/** An enumeration. */
var TransactionCreateErrorCode;
(function (TransactionCreateErrorCode) {
  TransactionCreateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  TransactionCreateErrorCode["IncorrectCurrency"] = "INCORRECT_CURRENCY";
  TransactionCreateErrorCode["Invalid"] = "INVALID";
  TransactionCreateErrorCode["MetadataKeyRequired"] = "METADATA_KEY_REQUIRED";
  TransactionCreateErrorCode["NotFound"] = "NOT_FOUND";
  TransactionCreateErrorCode["Unique"] = "UNIQUE";
})(
  (TransactionCreateErrorCode =
    exports.TransactionCreateErrorCode || (exports.TransactionCreateErrorCode = {}))
);
/** An enumeration. */
var TransactionEventReportErrorCode;
(function (TransactionEventReportErrorCode) {
  TransactionEventReportErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
  TransactionEventReportErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  TransactionEventReportErrorCode["IncorrectDetails"] = "INCORRECT_DETAILS";
  TransactionEventReportErrorCode["Invalid"] = "INVALID";
  TransactionEventReportErrorCode["NotFound"] = "NOT_FOUND";
})(
  (TransactionEventReportErrorCode =
    exports.TransactionEventReportErrorCode || (exports.TransactionEventReportErrorCode = {}))
);
/**
 * Represents possible event types.
 *
 *     Added in Saleor 3.12.
 *
 *     The following types are possible:
 *     AUTHORIZATION_SUCCESS - represents success authorization.
 *     AUTHORIZATION_FAILURE - represents failure authorization.
 *     AUTHORIZATION_ADJUSTMENT - represents authorization adjustment.
 *     AUTHORIZATION_REQUEST - represents authorization request.
 *     AUTHORIZATION_ACTION_REQUIRED - represents authorization that needs
 *     additional actions from the customer.
 *     CHARGE_ACTION_REQUIRED - represents charge that needs
 *     additional actions from the customer.
 *     CHARGE_SUCCESS - represents success charge.
 *     CHARGE_FAILURE - represents failure charge.
 *     CHARGE_BACK - represents chargeback.
 *     CHARGE_REQUEST - represents charge request.
 *     REFUND_SUCCESS - represents success refund.
 *     REFUND_FAILURE - represents failure refund.
 *     REFUND_REVERSE - represents reverse refund.
 *     REFUND_REQUEST - represents refund request.
 *     CANCEL_SUCCESS - represents success cancel.
 *     CANCEL_FAILURE - represents failure cancel.
 *     CANCEL_REQUEST - represents cancel request.
 *     INFO - represents info event.
 *
 */
var TransactionEventTypeEnum;
(function (TransactionEventTypeEnum) {
  TransactionEventTypeEnum["AuthorizationActionRequired"] = "AUTHORIZATION_ACTION_REQUIRED";
  TransactionEventTypeEnum["AuthorizationAdjustment"] = "AUTHORIZATION_ADJUSTMENT";
  TransactionEventTypeEnum["AuthorizationFailure"] = "AUTHORIZATION_FAILURE";
  TransactionEventTypeEnum["AuthorizationRequest"] = "AUTHORIZATION_REQUEST";
  TransactionEventTypeEnum["AuthorizationSuccess"] = "AUTHORIZATION_SUCCESS";
  TransactionEventTypeEnum["CancelFailure"] = "CANCEL_FAILURE";
  TransactionEventTypeEnum["CancelRequest"] = "CANCEL_REQUEST";
  TransactionEventTypeEnum["CancelSuccess"] = "CANCEL_SUCCESS";
  TransactionEventTypeEnum["ChargeActionRequired"] = "CHARGE_ACTION_REQUIRED";
  TransactionEventTypeEnum["ChargeBack"] = "CHARGE_BACK";
  TransactionEventTypeEnum["ChargeFailure"] = "CHARGE_FAILURE";
  TransactionEventTypeEnum["ChargeRequest"] = "CHARGE_REQUEST";
  TransactionEventTypeEnum["ChargeSuccess"] = "CHARGE_SUCCESS";
  TransactionEventTypeEnum["Info"] = "INFO";
  TransactionEventTypeEnum["RefundFailure"] = "REFUND_FAILURE";
  TransactionEventTypeEnum["RefundRequest"] = "REFUND_REQUEST";
  TransactionEventTypeEnum["RefundReverse"] = "REFUND_REVERSE";
  TransactionEventTypeEnum["RefundSuccess"] = "REFUND_SUCCESS";
})(
  (TransactionEventTypeEnum =
    exports.TransactionEventTypeEnum || (exports.TransactionEventTypeEnum = {}))
);
/**
 * Determine the transaction flow strategy.
 *
 *     AUTHORIZATION - the processed transaction should be only authorized
 *     CHARGE - the processed transaction should be charged.
 *
 */
var TransactionFlowStrategyEnum;
(function (TransactionFlowStrategyEnum) {
  TransactionFlowStrategyEnum["Authorization"] = "AUTHORIZATION";
  TransactionFlowStrategyEnum["Charge"] = "CHARGE";
})(
  (TransactionFlowStrategyEnum =
    exports.TransactionFlowStrategyEnum || (exports.TransactionFlowStrategyEnum = {}))
);
/** An enumeration. */
var TransactionInitializeErrorCode;
(function (TransactionInitializeErrorCode) {
  TransactionInitializeErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  TransactionInitializeErrorCode["Invalid"] = "INVALID";
  TransactionInitializeErrorCode["NotFound"] = "NOT_FOUND";
})(
  (TransactionInitializeErrorCode =
    exports.TransactionInitializeErrorCode || (exports.TransactionInitializeErrorCode = {}))
);
/** An enumeration. */
var TransactionKind;
(function (TransactionKind) {
  TransactionKind["ActionToConfirm"] = "ACTION_TO_CONFIRM";
  TransactionKind["Auth"] = "AUTH";
  TransactionKind["Cancel"] = "CANCEL";
  TransactionKind["Capture"] = "CAPTURE";
  TransactionKind["Confirm"] = "CONFIRM";
  TransactionKind["External"] = "EXTERNAL";
  TransactionKind["Pending"] = "PENDING";
  TransactionKind["Refund"] = "REFUND";
  TransactionKind["RefundOngoing"] = "REFUND_ONGOING";
  TransactionKind["Void"] = "VOID";
})((TransactionKind = exports.TransactionKind || (exports.TransactionKind = {})));
/** An enumeration. */
var TransactionProcessErrorCode;
(function (TransactionProcessErrorCode) {
  TransactionProcessErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  TransactionProcessErrorCode["Invalid"] = "INVALID";
  TransactionProcessErrorCode["MissingPaymentApp"] = "MISSING_PAYMENT_APP";
  TransactionProcessErrorCode["MissingPaymentAppRelation"] = "MISSING_PAYMENT_APP_RELATION";
  TransactionProcessErrorCode["NotFound"] = "NOT_FOUND";
  TransactionProcessErrorCode["TransactionAlreadyProcessed"] = "TRANSACTION_ALREADY_PROCESSED";
})(
  (TransactionProcessErrorCode =
    exports.TransactionProcessErrorCode || (exports.TransactionProcessErrorCode = {}))
);
/** An enumeration. */
var TransactionRequestActionErrorCode;
(function (TransactionRequestActionErrorCode) {
  TransactionRequestActionErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  TransactionRequestActionErrorCode["Invalid"] = "INVALID";
  TransactionRequestActionErrorCode["MissingTransactionActionRequestWebhook"] =
    "MISSING_TRANSACTION_ACTION_REQUEST_WEBHOOK";
  TransactionRequestActionErrorCode["NotFound"] = "NOT_FOUND";
})(
  (TransactionRequestActionErrorCode =
    exports.TransactionRequestActionErrorCode || (exports.TransactionRequestActionErrorCode = {}))
);
/** An enumeration. */
var TransactionRequestRefundForGrantedRefundErrorCode;
(function (TransactionRequestRefundForGrantedRefundErrorCode) {
  TransactionRequestRefundForGrantedRefundErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  TransactionRequestRefundForGrantedRefundErrorCode["Invalid"] = "INVALID";
  TransactionRequestRefundForGrantedRefundErrorCode["MissingTransactionActionRequestWebhook"] =
    "MISSING_TRANSACTION_ACTION_REQUEST_WEBHOOK";
  TransactionRequestRefundForGrantedRefundErrorCode["NotFound"] = "NOT_FOUND";
})(
  (TransactionRequestRefundForGrantedRefundErrorCode =
    exports.TransactionRequestRefundForGrantedRefundErrorCode ||
    (exports.TransactionRequestRefundForGrantedRefundErrorCode = {}))
);
/** An enumeration. */
var TransactionUpdateErrorCode;
(function (TransactionUpdateErrorCode) {
  TransactionUpdateErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  TransactionUpdateErrorCode["IncorrectCurrency"] = "INCORRECT_CURRENCY";
  TransactionUpdateErrorCode["Invalid"] = "INVALID";
  TransactionUpdateErrorCode["MetadataKeyRequired"] = "METADATA_KEY_REQUIRED";
  TransactionUpdateErrorCode["NotFound"] = "NOT_FOUND";
  TransactionUpdateErrorCode["Unique"] = "UNIQUE";
})(
  (TransactionUpdateErrorCode =
    exports.TransactionUpdateErrorCode || (exports.TransactionUpdateErrorCode = {}))
);
var TranslatableKinds;
(function (TranslatableKinds) {
  TranslatableKinds["Attribute"] = "ATTRIBUTE";
  TranslatableKinds["AttributeValue"] = "ATTRIBUTE_VALUE";
  TranslatableKinds["Category"] = "CATEGORY";
  TranslatableKinds["Collection"] = "COLLECTION";
  TranslatableKinds["MenuItem"] = "MENU_ITEM";
  TranslatableKinds["Page"] = "PAGE";
  TranslatableKinds["Product"] = "PRODUCT";
  TranslatableKinds["Sale"] = "SALE";
  TranslatableKinds["ShippingMethod"] = "SHIPPING_METHOD";
  TranslatableKinds["Variant"] = "VARIANT";
  TranslatableKinds["Voucher"] = "VOUCHER";
})((TranslatableKinds = exports.TranslatableKinds || (exports.TranslatableKinds = {})));
/** An enumeration. */
var TranslationErrorCode;
(function (TranslationErrorCode) {
  TranslationErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  TranslationErrorCode["Invalid"] = "INVALID";
  TranslationErrorCode["NotFound"] = "NOT_FOUND";
  TranslationErrorCode["Required"] = "REQUIRED";
})((TranslationErrorCode = exports.TranslationErrorCode || (exports.TranslationErrorCode = {})));
/** An enumeration. */
var UploadErrorCode;
(function (UploadErrorCode) {
  UploadErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
})((UploadErrorCode = exports.UploadErrorCode || (exports.UploadErrorCode = {})));
var UserSortField;
(function (UserSortField) {
  /** Sort users by created at. */
  UserSortField["CreatedAt"] = "CREATED_AT";
  /** Sort users by email. */
  UserSortField["Email"] = "EMAIL";
  /** Sort users by first name. */
  UserSortField["FirstName"] = "FIRST_NAME";
  /** Sort users by last modified at. */
  UserSortField["LastModifiedAt"] = "LAST_MODIFIED_AT";
  /** Sort users by last name. */
  UserSortField["LastName"] = "LAST_NAME";
  /** Sort users by order count. */
  UserSortField["OrderCount"] = "ORDER_COUNT";
})((UserSortField = exports.UserSortField || (exports.UserSortField = {})));
var VariantAttributeScope;
(function (VariantAttributeScope) {
  VariantAttributeScope["All"] = "ALL";
  VariantAttributeScope["NotVariantSelection"] = "NOT_VARIANT_SELECTION";
  VariantAttributeScope["VariantSelection"] = "VARIANT_SELECTION";
})((VariantAttributeScope = exports.VariantAttributeScope || (exports.VariantAttributeScope = {})));
/** An enumeration. */
var VolumeUnitsEnum;
(function (VolumeUnitsEnum) {
  VolumeUnitsEnum["AcreFt"] = "ACRE_FT";
  VolumeUnitsEnum["AcreIn"] = "ACRE_IN";
  VolumeUnitsEnum["CubicCentimeter"] = "CUBIC_CENTIMETER";
  VolumeUnitsEnum["CubicDecimeter"] = "CUBIC_DECIMETER";
  VolumeUnitsEnum["CubicFoot"] = "CUBIC_FOOT";
  VolumeUnitsEnum["CubicInch"] = "CUBIC_INCH";
  VolumeUnitsEnum["CubicMeter"] = "CUBIC_METER";
  VolumeUnitsEnum["CubicMillimeter"] = "CUBIC_MILLIMETER";
  VolumeUnitsEnum["CubicYard"] = "CUBIC_YARD";
  VolumeUnitsEnum["FlOz"] = "FL_OZ";
  VolumeUnitsEnum["Liter"] = "LITER";
  VolumeUnitsEnum["Pint"] = "PINT";
  VolumeUnitsEnum["Qt"] = "QT";
})((VolumeUnitsEnum = exports.VolumeUnitsEnum || (exports.VolumeUnitsEnum = {})));
var VoucherDiscountType;
(function (VoucherDiscountType) {
  VoucherDiscountType["Fixed"] = "FIXED";
  VoucherDiscountType["Percentage"] = "PERCENTAGE";
  VoucherDiscountType["Shipping"] = "SHIPPING";
})((VoucherDiscountType = exports.VoucherDiscountType || (exports.VoucherDiscountType = {})));
var VoucherSortField;
(function (VoucherSortField) {
  /** Sort vouchers by code. */
  VoucherSortField["Code"] = "CODE";
  /** Sort vouchers by end date. */
  VoucherSortField["EndDate"] = "END_DATE";
  /**
   * Sort vouchers by minimum spent amount.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  VoucherSortField["MinimumSpentAmount"] = "MINIMUM_SPENT_AMOUNT";
  /** Sort vouchers by start date. */
  VoucherSortField["StartDate"] = "START_DATE";
  /** Sort vouchers by type. */
  VoucherSortField["Type"] = "TYPE";
  /** Sort vouchers by usage limit. */
  VoucherSortField["UsageLimit"] = "USAGE_LIMIT";
  /**
   * Sort vouchers by value.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  VoucherSortField["Value"] = "VALUE";
})((VoucherSortField = exports.VoucherSortField || (exports.VoucherSortField = {})));
var VoucherTypeEnum;
(function (VoucherTypeEnum) {
  VoucherTypeEnum["EntireOrder"] = "ENTIRE_ORDER";
  VoucherTypeEnum["Shipping"] = "SHIPPING";
  VoucherTypeEnum["SpecificProduct"] = "SPECIFIC_PRODUCT";
})((VoucherTypeEnum = exports.VoucherTypeEnum || (exports.VoucherTypeEnum = {})));
/** An enumeration. */
var WarehouseClickAndCollectOptionEnum;
(function (WarehouseClickAndCollectOptionEnum) {
  WarehouseClickAndCollectOptionEnum["All"] = "ALL";
  WarehouseClickAndCollectOptionEnum["Disabled"] = "DISABLED";
  WarehouseClickAndCollectOptionEnum["Local"] = "LOCAL";
})(
  (WarehouseClickAndCollectOptionEnum =
    exports.WarehouseClickAndCollectOptionEnum || (exports.WarehouseClickAndCollectOptionEnum = {}))
);
/** An enumeration. */
var WarehouseErrorCode;
(function (WarehouseErrorCode) {
  WarehouseErrorCode["AlreadyExists"] = "ALREADY_EXISTS";
  WarehouseErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  WarehouseErrorCode["Invalid"] = "INVALID";
  WarehouseErrorCode["NotFound"] = "NOT_FOUND";
  WarehouseErrorCode["Required"] = "REQUIRED";
  WarehouseErrorCode["Unique"] = "UNIQUE";
})((WarehouseErrorCode = exports.WarehouseErrorCode || (exports.WarehouseErrorCode = {})));
var WarehouseSortField;
(function (WarehouseSortField) {
  /** Sort warehouses by name. */
  WarehouseSortField["Name"] = "NAME";
})((WarehouseSortField = exports.WarehouseSortField || (exports.WarehouseSortField = {})));
/** An enumeration. */
var WebhookDryRunErrorCode;
(function (WebhookDryRunErrorCode) {
  WebhookDryRunErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  WebhookDryRunErrorCode["InvalidId"] = "INVALID_ID";
  WebhookDryRunErrorCode["MissingEvent"] = "MISSING_EVENT";
  WebhookDryRunErrorCode["MissingPermission"] = "MISSING_PERMISSION";
  WebhookDryRunErrorCode["MissingSubscription"] = "MISSING_SUBSCRIPTION";
  WebhookDryRunErrorCode["NotFound"] = "NOT_FOUND";
  WebhookDryRunErrorCode["Syntax"] = "SYNTAX";
  WebhookDryRunErrorCode["TypeNotSupported"] = "TYPE_NOT_SUPPORTED";
  WebhookDryRunErrorCode["UnableToParse"] = "UNABLE_TO_PARSE";
})(
  (WebhookDryRunErrorCode = exports.WebhookDryRunErrorCode || (exports.WebhookDryRunErrorCode = {}))
);
/** An enumeration. */
var WebhookErrorCode;
(function (WebhookErrorCode) {
  WebhookErrorCode["DeleteFailed"] = "DELETE_FAILED";
  WebhookErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  WebhookErrorCode["Invalid"] = "INVALID";
  WebhookErrorCode["InvalidCustomHeaders"] = "INVALID_CUSTOM_HEADERS";
  WebhookErrorCode["InvalidNotifyWithSubscription"] = "INVALID_NOTIFY_WITH_SUBSCRIPTION";
  WebhookErrorCode["MissingEvent"] = "MISSING_EVENT";
  WebhookErrorCode["MissingSubscription"] = "MISSING_SUBSCRIPTION";
  WebhookErrorCode["NotFound"] = "NOT_FOUND";
  WebhookErrorCode["Required"] = "REQUIRED";
  WebhookErrorCode["Syntax"] = "SYNTAX";
  WebhookErrorCode["UnableToParse"] = "UNABLE_TO_PARSE";
  WebhookErrorCode["Unique"] = "UNIQUE";
})((WebhookErrorCode = exports.WebhookErrorCode || (exports.WebhookErrorCode = {})));
/** Enum determining type of webhook. */
var WebhookEventTypeAsyncEnum;
(function (WebhookEventTypeAsyncEnum) {
  /** An account email change is requested. */
  WebhookEventTypeAsyncEnum["AccountChangeEmailRequested"] = "ACCOUNT_CHANGE_EMAIL_REQUESTED";
  /** An account confirmation is requested. */
  WebhookEventTypeAsyncEnum["AccountConfirmationRequested"] = "ACCOUNT_CONFIRMATION_REQUESTED";
  /** An account is confirmed. */
  WebhookEventTypeAsyncEnum["AccountConfirmed"] = "ACCOUNT_CONFIRMED";
  /** An account is deleted. */
  WebhookEventTypeAsyncEnum["AccountDeleted"] = "ACCOUNT_DELETED";
  /** An account delete is requested. */
  WebhookEventTypeAsyncEnum["AccountDeleteRequested"] = "ACCOUNT_DELETE_REQUESTED";
  /** An account email was changed */
  WebhookEventTypeAsyncEnum["AccountEmailChanged"] = "ACCOUNT_EMAIL_CHANGED";
  /** Setting a new password for the account is requested. */
  WebhookEventTypeAsyncEnum["AccountSetPasswordRequested"] = "ACCOUNT_SET_PASSWORD_REQUESTED";
  /** A new address created. */
  WebhookEventTypeAsyncEnum["AddressCreated"] = "ADDRESS_CREATED";
  /** An address deleted. */
  WebhookEventTypeAsyncEnum["AddressDeleted"] = "ADDRESS_DELETED";
  /** An address updated. */
  WebhookEventTypeAsyncEnum["AddressUpdated"] = "ADDRESS_UPDATED";
  /**
   * All the events.
   *
   * DEPRECATED: this value will be removed in Saleor 4.0.
   */
  WebhookEventTypeAsyncEnum["AnyEvents"] = "ANY_EVENTS";
  /** An app deleted. */
  WebhookEventTypeAsyncEnum["AppDeleted"] = "APP_DELETED";
  /** A new app installed. */
  WebhookEventTypeAsyncEnum["AppInstalled"] = "APP_INSTALLED";
  /** An app status is changed. */
  WebhookEventTypeAsyncEnum["AppStatusChanged"] = "APP_STATUS_CHANGED";
  /** An app updated. */
  WebhookEventTypeAsyncEnum["AppUpdated"] = "APP_UPDATED";
  /** A new attribute is created. */
  WebhookEventTypeAsyncEnum["AttributeCreated"] = "ATTRIBUTE_CREATED";
  /** An attribute is deleted. */
  WebhookEventTypeAsyncEnum["AttributeDeleted"] = "ATTRIBUTE_DELETED";
  /** An attribute is updated. */
  WebhookEventTypeAsyncEnum["AttributeUpdated"] = "ATTRIBUTE_UPDATED";
  /** A new attribute value is created. */
  WebhookEventTypeAsyncEnum["AttributeValueCreated"] = "ATTRIBUTE_VALUE_CREATED";
  /** An attribute value is deleted. */
  WebhookEventTypeAsyncEnum["AttributeValueDeleted"] = "ATTRIBUTE_VALUE_DELETED";
  /** An attribute value is updated. */
  WebhookEventTypeAsyncEnum["AttributeValueUpdated"] = "ATTRIBUTE_VALUE_UPDATED";
  /** A new category created. */
  WebhookEventTypeAsyncEnum["CategoryCreated"] = "CATEGORY_CREATED";
  /** A category is deleted. */
  WebhookEventTypeAsyncEnum["CategoryDeleted"] = "CATEGORY_DELETED";
  /** A category is updated. */
  WebhookEventTypeAsyncEnum["CategoryUpdated"] = "CATEGORY_UPDATED";
  /** A new channel created. */
  WebhookEventTypeAsyncEnum["ChannelCreated"] = "CHANNEL_CREATED";
  /** A channel is deleted. */
  WebhookEventTypeAsyncEnum["ChannelDeleted"] = "CHANNEL_DELETED";
  /** A channel metadata is updated. */
  WebhookEventTypeAsyncEnum["ChannelMetadataUpdated"] = "CHANNEL_METADATA_UPDATED";
  /** A channel status is changed. */
  WebhookEventTypeAsyncEnum["ChannelStatusChanged"] = "CHANNEL_STATUS_CHANGED";
  /** A channel is updated. */
  WebhookEventTypeAsyncEnum["ChannelUpdated"] = "CHANNEL_UPDATED";
  /** A new checkout is created. */
  WebhookEventTypeAsyncEnum["CheckoutCreated"] = "CHECKOUT_CREATED";
  WebhookEventTypeAsyncEnum["CheckoutFullyPaid"] = "CHECKOUT_FULLY_PAID";
  /**
   * A checkout metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeAsyncEnum["CheckoutMetadataUpdated"] = "CHECKOUT_METADATA_UPDATED";
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  WebhookEventTypeAsyncEnum["CheckoutUpdated"] = "CHECKOUT_UPDATED";
  /** A new collection is created. */
  WebhookEventTypeAsyncEnum["CollectionCreated"] = "COLLECTION_CREATED";
  /** A collection is deleted. */
  WebhookEventTypeAsyncEnum["CollectionDeleted"] = "COLLECTION_DELETED";
  /**
   * A collection metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeAsyncEnum["CollectionMetadataUpdated"] = "COLLECTION_METADATA_UPDATED";
  /** A collection is updated. */
  WebhookEventTypeAsyncEnum["CollectionUpdated"] = "COLLECTION_UPDATED";
  /** A new customer account is created. */
  WebhookEventTypeAsyncEnum["CustomerCreated"] = "CUSTOMER_CREATED";
  /** A customer account is deleted. */
  WebhookEventTypeAsyncEnum["CustomerDeleted"] = "CUSTOMER_DELETED";
  /**
   * A customer account metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeAsyncEnum["CustomerMetadataUpdated"] = "CUSTOMER_METADATA_UPDATED";
  /** A customer account is updated. */
  WebhookEventTypeAsyncEnum["CustomerUpdated"] = "CUSTOMER_UPDATED";
  /** A draft order is created. */
  WebhookEventTypeAsyncEnum["DraftOrderCreated"] = "DRAFT_ORDER_CREATED";
  /** A draft order is deleted. */
  WebhookEventTypeAsyncEnum["DraftOrderDeleted"] = "DRAFT_ORDER_DELETED";
  /** A draft order is updated. */
  WebhookEventTypeAsyncEnum["DraftOrderUpdated"] = "DRAFT_ORDER_UPDATED";
  /** A fulfillment is approved. */
  WebhookEventTypeAsyncEnum["FulfillmentApproved"] = "FULFILLMENT_APPROVED";
  /** A fulfillment is cancelled. */
  WebhookEventTypeAsyncEnum["FulfillmentCanceled"] = "FULFILLMENT_CANCELED";
  /** A new fulfillment is created. */
  WebhookEventTypeAsyncEnum["FulfillmentCreated"] = "FULFILLMENT_CREATED";
  /**
   * A fulfillment metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeAsyncEnum["FulfillmentMetadataUpdated"] = "FULFILLMENT_METADATA_UPDATED";
  /** A new gift card created. */
  WebhookEventTypeAsyncEnum["GiftCardCreated"] = "GIFT_CARD_CREATED";
  /** A gift card is deleted. */
  WebhookEventTypeAsyncEnum["GiftCardDeleted"] = "GIFT_CARD_DELETED";
  /**
   * A gift card metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeAsyncEnum["GiftCardMetadataUpdated"] = "GIFT_CARD_METADATA_UPDATED";
  /**
   * A gift card has been sent.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  WebhookEventTypeAsyncEnum["GiftCardSent"] = "GIFT_CARD_SENT";
  /** A gift card status is changed. */
  WebhookEventTypeAsyncEnum["GiftCardStatusChanged"] = "GIFT_CARD_STATUS_CHANGED";
  /** A gift card is updated. */
  WebhookEventTypeAsyncEnum["GiftCardUpdated"] = "GIFT_CARD_UPDATED";
  /** An invoice is deleted. */
  WebhookEventTypeAsyncEnum["InvoiceDeleted"] = "INVOICE_DELETED";
  /** An invoice for order requested. */
  WebhookEventTypeAsyncEnum["InvoiceRequested"] = "INVOICE_REQUESTED";
  /** Invoice has been sent. */
  WebhookEventTypeAsyncEnum["InvoiceSent"] = "INVOICE_SENT";
  /** A new menu created. */
  WebhookEventTypeAsyncEnum["MenuCreated"] = "MENU_CREATED";
  /** A menu is deleted. */
  WebhookEventTypeAsyncEnum["MenuDeleted"] = "MENU_DELETED";
  /** A new menu item created. */
  WebhookEventTypeAsyncEnum["MenuItemCreated"] = "MENU_ITEM_CREATED";
  /** A menu item is deleted. */
  WebhookEventTypeAsyncEnum["MenuItemDeleted"] = "MENU_ITEM_DELETED";
  /** A menu item is updated. */
  WebhookEventTypeAsyncEnum["MenuItemUpdated"] = "MENU_ITEM_UPDATED";
  /** A menu is updated. */
  WebhookEventTypeAsyncEnum["MenuUpdated"] = "MENU_UPDATED";
  /** User notification triggered. */
  WebhookEventTypeAsyncEnum["NotifyUser"] = "NOTIFY_USER";
  /** An observability event is created. */
  WebhookEventTypeAsyncEnum["Observability"] = "OBSERVABILITY";
  /**
   * Orders are imported.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  WebhookEventTypeAsyncEnum["OrderBulkCreated"] = "ORDER_BULK_CREATED";
  /** An order is cancelled. */
  WebhookEventTypeAsyncEnum["OrderCancelled"] = "ORDER_CANCELLED";
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  WebhookEventTypeAsyncEnum["OrderConfirmed"] = "ORDER_CONFIRMED";
  /** A new order is placed. */
  WebhookEventTypeAsyncEnum["OrderCreated"] = "ORDER_CREATED";
  /** An order is expired. */
  WebhookEventTypeAsyncEnum["OrderExpired"] = "ORDER_EXPIRED";
  /** An order is fulfilled. */
  WebhookEventTypeAsyncEnum["OrderFulfilled"] = "ORDER_FULFILLED";
  /** Payment is made and an order is fully paid. */
  WebhookEventTypeAsyncEnum["OrderFullyPaid"] = "ORDER_FULLY_PAID";
  /**
   * The order is fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  WebhookEventTypeAsyncEnum["OrderFullyRefunded"] = "ORDER_FULLY_REFUNDED";
  /**
   * An order metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeAsyncEnum["OrderMetadataUpdated"] = "ORDER_METADATA_UPDATED";
  /**
   * Payment has been made. The order may be partially or fully paid.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  WebhookEventTypeAsyncEnum["OrderPaid"] = "ORDER_PAID";
  /**
   * The order received a refund. The order may be partially or fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  WebhookEventTypeAsyncEnum["OrderRefunded"] = "ORDER_REFUNDED";
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  WebhookEventTypeAsyncEnum["OrderUpdated"] = "ORDER_UPDATED";
  /** A new page is created. */
  WebhookEventTypeAsyncEnum["PageCreated"] = "PAGE_CREATED";
  /** A page is deleted. */
  WebhookEventTypeAsyncEnum["PageDeleted"] = "PAGE_DELETED";
  /** A new page type is created. */
  WebhookEventTypeAsyncEnum["PageTypeCreated"] = "PAGE_TYPE_CREATED";
  /** A page type is deleted. */
  WebhookEventTypeAsyncEnum["PageTypeDeleted"] = "PAGE_TYPE_DELETED";
  /** A page type is updated. */
  WebhookEventTypeAsyncEnum["PageTypeUpdated"] = "PAGE_TYPE_UPDATED";
  /** A page is updated. */
  WebhookEventTypeAsyncEnum["PageUpdated"] = "PAGE_UPDATED";
  /** A new permission group is created. */
  WebhookEventTypeAsyncEnum["PermissionGroupCreated"] = "PERMISSION_GROUP_CREATED";
  /** A permission group is deleted. */
  WebhookEventTypeAsyncEnum["PermissionGroupDeleted"] = "PERMISSION_GROUP_DELETED";
  /** A permission group is updated. */
  WebhookEventTypeAsyncEnum["PermissionGroupUpdated"] = "PERMISSION_GROUP_UPDATED";
  /** A new product is created. */
  WebhookEventTypeAsyncEnum["ProductCreated"] = "PRODUCT_CREATED";
  /** A product is deleted. */
  WebhookEventTypeAsyncEnum["ProductDeleted"] = "PRODUCT_DELETED";
  /**
   * A new product media is created.
   *
   * Added in Saleor 3.12.
   */
  WebhookEventTypeAsyncEnum["ProductMediaCreated"] = "PRODUCT_MEDIA_CREATED";
  /**
   * A product media is deleted.
   *
   * Added in Saleor 3.12.
   */
  WebhookEventTypeAsyncEnum["ProductMediaDeleted"] = "PRODUCT_MEDIA_DELETED";
  /**
   * A product media is updated.
   *
   * Added in Saleor 3.12.
   */
  WebhookEventTypeAsyncEnum["ProductMediaUpdated"] = "PRODUCT_MEDIA_UPDATED";
  /**
   * A product metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeAsyncEnum["ProductMetadataUpdated"] = "PRODUCT_METADATA_UPDATED";
  /** A product is updated. */
  WebhookEventTypeAsyncEnum["ProductUpdated"] = "PRODUCT_UPDATED";
  /** A product variant is back in stock. */
  WebhookEventTypeAsyncEnum["ProductVariantBackInStock"] = "PRODUCT_VARIANT_BACK_IN_STOCK";
  /** A new product variant is created. */
  WebhookEventTypeAsyncEnum["ProductVariantCreated"] = "PRODUCT_VARIANT_CREATED";
  /** A product variant is deleted. */
  WebhookEventTypeAsyncEnum["ProductVariantDeleted"] = "PRODUCT_VARIANT_DELETED";
  /**
   * A product variant metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeAsyncEnum["ProductVariantMetadataUpdated"] = "PRODUCT_VARIANT_METADATA_UPDATED";
  /** A product variant is out of stock. */
  WebhookEventTypeAsyncEnum["ProductVariantOutOfStock"] = "PRODUCT_VARIANT_OUT_OF_STOCK";
  /** A product variant stock is updated */
  WebhookEventTypeAsyncEnum["ProductVariantStockUpdated"] = "PRODUCT_VARIANT_STOCK_UPDATED";
  /** A product variant is updated. */
  WebhookEventTypeAsyncEnum["ProductVariantUpdated"] = "PRODUCT_VARIANT_UPDATED";
  /** A sale is created. */
  WebhookEventTypeAsyncEnum["SaleCreated"] = "SALE_CREATED";
  /** A sale is deleted. */
  WebhookEventTypeAsyncEnum["SaleDeleted"] = "SALE_DELETED";
  /** A sale is activated or deactivated. */
  WebhookEventTypeAsyncEnum["SaleToggle"] = "SALE_TOGGLE";
  /** A sale is updated. */
  WebhookEventTypeAsyncEnum["SaleUpdated"] = "SALE_UPDATED";
  /** A new shipping price is created. */
  WebhookEventTypeAsyncEnum["ShippingPriceCreated"] = "SHIPPING_PRICE_CREATED";
  /** A shipping price is deleted. */
  WebhookEventTypeAsyncEnum["ShippingPriceDeleted"] = "SHIPPING_PRICE_DELETED";
  /** A shipping price is updated. */
  WebhookEventTypeAsyncEnum["ShippingPriceUpdated"] = "SHIPPING_PRICE_UPDATED";
  /** A new shipping zone is created. */
  WebhookEventTypeAsyncEnum["ShippingZoneCreated"] = "SHIPPING_ZONE_CREATED";
  /** A shipping zone is deleted. */
  WebhookEventTypeAsyncEnum["ShippingZoneDeleted"] = "SHIPPING_ZONE_DELETED";
  /**
   * A shipping zone metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeAsyncEnum["ShippingZoneMetadataUpdated"] = "SHIPPING_ZONE_METADATA_UPDATED";
  /** A shipping zone is updated. */
  WebhookEventTypeAsyncEnum["ShippingZoneUpdated"] = "SHIPPING_ZONE_UPDATED";
  /**
   * Shop metadata is updated.
   *
   * Added in Saleor 3.15.
   */
  WebhookEventTypeAsyncEnum["ShopMetadataUpdated"] = "SHOP_METADATA_UPDATED";
  /** A new staff user is created. */
  WebhookEventTypeAsyncEnum["StaffCreated"] = "STAFF_CREATED";
  /** A staff user is deleted. */
  WebhookEventTypeAsyncEnum["StaffDeleted"] = "STAFF_DELETED";
  /** Setting a new password for the staff account is requested. */
  WebhookEventTypeAsyncEnum["StaffSetPasswordRequested"] = "STAFF_SET_PASSWORD_REQUESTED";
  /** A staff user is updated. */
  WebhookEventTypeAsyncEnum["StaffUpdated"] = "STAFF_UPDATED";
  /**
   * A thumbnail is created.
   *
   * Added in Saleor 3.12.
   */
  WebhookEventTypeAsyncEnum["ThumbnailCreated"] = "THUMBNAIL_CREATED";
  /**
   * Transaction item metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeAsyncEnum["TransactionItemMetadataUpdated"] = "TRANSACTION_ITEM_METADATA_UPDATED";
  /** A new translation is created. */
  WebhookEventTypeAsyncEnum["TranslationCreated"] = "TRANSLATION_CREATED";
  /** A translation is updated. */
  WebhookEventTypeAsyncEnum["TranslationUpdated"] = "TRANSLATION_UPDATED";
  /** A new voucher created. */
  WebhookEventTypeAsyncEnum["VoucherCreated"] = "VOUCHER_CREATED";
  /** A voucher is deleted. */
  WebhookEventTypeAsyncEnum["VoucherDeleted"] = "VOUCHER_DELETED";
  /**
   * A voucher metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeAsyncEnum["VoucherMetadataUpdated"] = "VOUCHER_METADATA_UPDATED";
  /** A voucher is updated. */
  WebhookEventTypeAsyncEnum["VoucherUpdated"] = "VOUCHER_UPDATED";
  /** A new warehouse created. */
  WebhookEventTypeAsyncEnum["WarehouseCreated"] = "WAREHOUSE_CREATED";
  /** A warehouse is deleted. */
  WebhookEventTypeAsyncEnum["WarehouseDeleted"] = "WAREHOUSE_DELETED";
  /**
   * A warehouse metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeAsyncEnum["WarehouseMetadataUpdated"] = "WAREHOUSE_METADATA_UPDATED";
  /** A warehouse is updated. */
  WebhookEventTypeAsyncEnum["WarehouseUpdated"] = "WAREHOUSE_UPDATED";
})(
  (WebhookEventTypeAsyncEnum =
    exports.WebhookEventTypeAsyncEnum || (exports.WebhookEventTypeAsyncEnum = {}))
);
/** Enum determining type of webhook. */
var WebhookEventTypeEnum;
(function (WebhookEventTypeEnum) {
  /** An account email change is requested. */
  WebhookEventTypeEnum["AccountChangeEmailRequested"] = "ACCOUNT_CHANGE_EMAIL_REQUESTED";
  /** An account confirmation is requested. */
  WebhookEventTypeEnum["AccountConfirmationRequested"] = "ACCOUNT_CONFIRMATION_REQUESTED";
  /** An account is confirmed. */
  WebhookEventTypeEnum["AccountConfirmed"] = "ACCOUNT_CONFIRMED";
  /** An account is deleted. */
  WebhookEventTypeEnum["AccountDeleted"] = "ACCOUNT_DELETED";
  /** An account delete is requested. */
  WebhookEventTypeEnum["AccountDeleteRequested"] = "ACCOUNT_DELETE_REQUESTED";
  /** An account email was changed */
  WebhookEventTypeEnum["AccountEmailChanged"] = "ACCOUNT_EMAIL_CHANGED";
  /** Setting a new password for the account is requested. */
  WebhookEventTypeEnum["AccountSetPasswordRequested"] = "ACCOUNT_SET_PASSWORD_REQUESTED";
  /** A new address created. */
  WebhookEventTypeEnum["AddressCreated"] = "ADDRESS_CREATED";
  /** An address deleted. */
  WebhookEventTypeEnum["AddressDeleted"] = "ADDRESS_DELETED";
  /** An address updated. */
  WebhookEventTypeEnum["AddressUpdated"] = "ADDRESS_UPDATED";
  /**
   * All the events.
   *
   * DEPRECATED: this value will be removed in Saleor 4.0.
   */
  WebhookEventTypeEnum["AnyEvents"] = "ANY_EVENTS";
  /** An app deleted. */
  WebhookEventTypeEnum["AppDeleted"] = "APP_DELETED";
  /** A new app installed. */
  WebhookEventTypeEnum["AppInstalled"] = "APP_INSTALLED";
  /** An app status is changed. */
  WebhookEventTypeEnum["AppStatusChanged"] = "APP_STATUS_CHANGED";
  /** An app updated. */
  WebhookEventTypeEnum["AppUpdated"] = "APP_UPDATED";
  /** A new attribute is created. */
  WebhookEventTypeEnum["AttributeCreated"] = "ATTRIBUTE_CREATED";
  /** An attribute is deleted. */
  WebhookEventTypeEnum["AttributeDeleted"] = "ATTRIBUTE_DELETED";
  /** An attribute is updated. */
  WebhookEventTypeEnum["AttributeUpdated"] = "ATTRIBUTE_UPDATED";
  /** A new attribute value is created. */
  WebhookEventTypeEnum["AttributeValueCreated"] = "ATTRIBUTE_VALUE_CREATED";
  /** An attribute value is deleted. */
  WebhookEventTypeEnum["AttributeValueDeleted"] = "ATTRIBUTE_VALUE_DELETED";
  /** An attribute value is updated. */
  WebhookEventTypeEnum["AttributeValueUpdated"] = "ATTRIBUTE_VALUE_UPDATED";
  /** A new category created. */
  WebhookEventTypeEnum["CategoryCreated"] = "CATEGORY_CREATED";
  /** A category is deleted. */
  WebhookEventTypeEnum["CategoryDeleted"] = "CATEGORY_DELETED";
  /** A category is updated. */
  WebhookEventTypeEnum["CategoryUpdated"] = "CATEGORY_UPDATED";
  /** A new channel created. */
  WebhookEventTypeEnum["ChannelCreated"] = "CHANNEL_CREATED";
  /** A channel is deleted. */
  WebhookEventTypeEnum["ChannelDeleted"] = "CHANNEL_DELETED";
  /** A channel metadata is updated. */
  WebhookEventTypeEnum["ChannelMetadataUpdated"] = "CHANNEL_METADATA_UPDATED";
  /** A channel status is changed. */
  WebhookEventTypeEnum["ChannelStatusChanged"] = "CHANNEL_STATUS_CHANGED";
  /** A channel is updated. */
  WebhookEventTypeEnum["ChannelUpdated"] = "CHANNEL_UPDATED";
  /**
   * Event called for checkout tax calculation.
   *
   * Added in Saleor 3.6.
   */
  WebhookEventTypeEnum["CheckoutCalculateTaxes"] = "CHECKOUT_CALCULATE_TAXES";
  /** A new checkout is created. */
  WebhookEventTypeEnum["CheckoutCreated"] = "CHECKOUT_CREATED";
  /** Filter shipping methods for checkout. */
  WebhookEventTypeEnum["CheckoutFilterShippingMethods"] = "CHECKOUT_FILTER_SHIPPING_METHODS";
  WebhookEventTypeEnum["CheckoutFullyPaid"] = "CHECKOUT_FULLY_PAID";
  /**
   * A checkout metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeEnum["CheckoutMetadataUpdated"] = "CHECKOUT_METADATA_UPDATED";
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  WebhookEventTypeEnum["CheckoutUpdated"] = "CHECKOUT_UPDATED";
  /** A new collection is created. */
  WebhookEventTypeEnum["CollectionCreated"] = "COLLECTION_CREATED";
  /** A collection is deleted. */
  WebhookEventTypeEnum["CollectionDeleted"] = "COLLECTION_DELETED";
  /**
   * A collection metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeEnum["CollectionMetadataUpdated"] = "COLLECTION_METADATA_UPDATED";
  /** A collection is updated. */
  WebhookEventTypeEnum["CollectionUpdated"] = "COLLECTION_UPDATED";
  /** A new customer account is created. */
  WebhookEventTypeEnum["CustomerCreated"] = "CUSTOMER_CREATED";
  /** A customer account is deleted. */
  WebhookEventTypeEnum["CustomerDeleted"] = "CUSTOMER_DELETED";
  /**
   * A customer account metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeEnum["CustomerMetadataUpdated"] = "CUSTOMER_METADATA_UPDATED";
  /** A customer account is updated. */
  WebhookEventTypeEnum["CustomerUpdated"] = "CUSTOMER_UPDATED";
  /** A draft order is created. */
  WebhookEventTypeEnum["DraftOrderCreated"] = "DRAFT_ORDER_CREATED";
  /** A draft order is deleted. */
  WebhookEventTypeEnum["DraftOrderDeleted"] = "DRAFT_ORDER_DELETED";
  /** A draft order is updated. */
  WebhookEventTypeEnum["DraftOrderUpdated"] = "DRAFT_ORDER_UPDATED";
  /** A fulfillment is approved. */
  WebhookEventTypeEnum["FulfillmentApproved"] = "FULFILLMENT_APPROVED";
  /** A fulfillment is cancelled. */
  WebhookEventTypeEnum["FulfillmentCanceled"] = "FULFILLMENT_CANCELED";
  /** A new fulfillment is created. */
  WebhookEventTypeEnum["FulfillmentCreated"] = "FULFILLMENT_CREATED";
  /**
   * A fulfillment metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeEnum["FulfillmentMetadataUpdated"] = "FULFILLMENT_METADATA_UPDATED";
  /** A new gift card created. */
  WebhookEventTypeEnum["GiftCardCreated"] = "GIFT_CARD_CREATED";
  /** A gift card is deleted. */
  WebhookEventTypeEnum["GiftCardDeleted"] = "GIFT_CARD_DELETED";
  /**
   * A gift card metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeEnum["GiftCardMetadataUpdated"] = "GIFT_CARD_METADATA_UPDATED";
  /**
   * A gift card has been sent.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  WebhookEventTypeEnum["GiftCardSent"] = "GIFT_CARD_SENT";
  /** A gift card status is changed. */
  WebhookEventTypeEnum["GiftCardStatusChanged"] = "GIFT_CARD_STATUS_CHANGED";
  /** A gift card is updated. */
  WebhookEventTypeEnum["GiftCardUpdated"] = "GIFT_CARD_UPDATED";
  /** An invoice is deleted. */
  WebhookEventTypeEnum["InvoiceDeleted"] = "INVOICE_DELETED";
  /** An invoice for order requested. */
  WebhookEventTypeEnum["InvoiceRequested"] = "INVOICE_REQUESTED";
  /** Invoice has been sent. */
  WebhookEventTypeEnum["InvoiceSent"] = "INVOICE_SENT";
  WebhookEventTypeEnum["ListStoredPaymentMethods"] = "LIST_STORED_PAYMENT_METHODS";
  /** A new menu created. */
  WebhookEventTypeEnum["MenuCreated"] = "MENU_CREATED";
  /** A menu is deleted. */
  WebhookEventTypeEnum["MenuDeleted"] = "MENU_DELETED";
  /** A new menu item created. */
  WebhookEventTypeEnum["MenuItemCreated"] = "MENU_ITEM_CREATED";
  /** A menu item is deleted. */
  WebhookEventTypeEnum["MenuItemDeleted"] = "MENU_ITEM_DELETED";
  /** A menu item is updated. */
  WebhookEventTypeEnum["MenuItemUpdated"] = "MENU_ITEM_UPDATED";
  /** A menu is updated. */
  WebhookEventTypeEnum["MenuUpdated"] = "MENU_UPDATED";
  /** User notification triggered. */
  WebhookEventTypeEnum["NotifyUser"] = "NOTIFY_USER";
  /** An observability event is created. */
  WebhookEventTypeEnum["Observability"] = "OBSERVABILITY";
  /**
   * Orders are imported.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  WebhookEventTypeEnum["OrderBulkCreated"] = "ORDER_BULK_CREATED";
  /**
   * Event called for order tax calculation.
   *
   * Added in Saleor 3.6.
   */
  WebhookEventTypeEnum["OrderCalculateTaxes"] = "ORDER_CALCULATE_TAXES";
  /** An order is cancelled. */
  WebhookEventTypeEnum["OrderCancelled"] = "ORDER_CANCELLED";
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  WebhookEventTypeEnum["OrderConfirmed"] = "ORDER_CONFIRMED";
  /** A new order is placed. */
  WebhookEventTypeEnum["OrderCreated"] = "ORDER_CREATED";
  /** An order is expired. */
  WebhookEventTypeEnum["OrderExpired"] = "ORDER_EXPIRED";
  /** Filter shipping methods for order. */
  WebhookEventTypeEnum["OrderFilterShippingMethods"] = "ORDER_FILTER_SHIPPING_METHODS";
  /** An order is fulfilled. */
  WebhookEventTypeEnum["OrderFulfilled"] = "ORDER_FULFILLED";
  /** Payment is made and an order is fully paid. */
  WebhookEventTypeEnum["OrderFullyPaid"] = "ORDER_FULLY_PAID";
  /**
   * The order is fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  WebhookEventTypeEnum["OrderFullyRefunded"] = "ORDER_FULLY_REFUNDED";
  /**
   * An order metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeEnum["OrderMetadataUpdated"] = "ORDER_METADATA_UPDATED";
  /**
   * Payment has been made. The order may be partially or fully paid.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  WebhookEventTypeEnum["OrderPaid"] = "ORDER_PAID";
  /**
   * The order received a refund. The order may be partially or fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  WebhookEventTypeEnum["OrderRefunded"] = "ORDER_REFUNDED";
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  WebhookEventTypeEnum["OrderUpdated"] = "ORDER_UPDATED";
  /** A new page is created. */
  WebhookEventTypeEnum["PageCreated"] = "PAGE_CREATED";
  /** A page is deleted. */
  WebhookEventTypeEnum["PageDeleted"] = "PAGE_DELETED";
  /** A new page type is created. */
  WebhookEventTypeEnum["PageTypeCreated"] = "PAGE_TYPE_CREATED";
  /** A page type is deleted. */
  WebhookEventTypeEnum["PageTypeDeleted"] = "PAGE_TYPE_DELETED";
  /** A page type is updated. */
  WebhookEventTypeEnum["PageTypeUpdated"] = "PAGE_TYPE_UPDATED";
  /** A page is updated. */
  WebhookEventTypeEnum["PageUpdated"] = "PAGE_UPDATED";
  /** Authorize payment. */
  WebhookEventTypeEnum["PaymentAuthorize"] = "PAYMENT_AUTHORIZE";
  /** Capture payment. */
  WebhookEventTypeEnum["PaymentCapture"] = "PAYMENT_CAPTURE";
  /** Confirm payment. */
  WebhookEventTypeEnum["PaymentConfirm"] = "PAYMENT_CONFIRM";
  WebhookEventTypeEnum["PaymentGatewayInitializeSession"] = "PAYMENT_GATEWAY_INITIALIZE_SESSION";
  /** Listing available payment gateways. */
  WebhookEventTypeEnum["PaymentListGateways"] = "PAYMENT_LIST_GATEWAYS";
  /** Process payment. */
  WebhookEventTypeEnum["PaymentProcess"] = "PAYMENT_PROCESS";
  /** Refund payment. */
  WebhookEventTypeEnum["PaymentRefund"] = "PAYMENT_REFUND";
  /** Void payment. */
  WebhookEventTypeEnum["PaymentVoid"] = "PAYMENT_VOID";
  /** A new permission group is created. */
  WebhookEventTypeEnum["PermissionGroupCreated"] = "PERMISSION_GROUP_CREATED";
  /** A permission group is deleted. */
  WebhookEventTypeEnum["PermissionGroupDeleted"] = "PERMISSION_GROUP_DELETED";
  /** A permission group is updated. */
  WebhookEventTypeEnum["PermissionGroupUpdated"] = "PERMISSION_GROUP_UPDATED";
  /** A new product is created. */
  WebhookEventTypeEnum["ProductCreated"] = "PRODUCT_CREATED";
  /** A product is deleted. */
  WebhookEventTypeEnum["ProductDeleted"] = "PRODUCT_DELETED";
  /**
   * A new product media is created.
   *
   * Added in Saleor 3.12.
   */
  WebhookEventTypeEnum["ProductMediaCreated"] = "PRODUCT_MEDIA_CREATED";
  /**
   * A product media is deleted.
   *
   * Added in Saleor 3.12.
   */
  WebhookEventTypeEnum["ProductMediaDeleted"] = "PRODUCT_MEDIA_DELETED";
  /**
   * A product media is updated.
   *
   * Added in Saleor 3.12.
   */
  WebhookEventTypeEnum["ProductMediaUpdated"] = "PRODUCT_MEDIA_UPDATED";
  /**
   * A product metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeEnum["ProductMetadataUpdated"] = "PRODUCT_METADATA_UPDATED";
  /** A product is updated. */
  WebhookEventTypeEnum["ProductUpdated"] = "PRODUCT_UPDATED";
  /** A product variant is back in stock. */
  WebhookEventTypeEnum["ProductVariantBackInStock"] = "PRODUCT_VARIANT_BACK_IN_STOCK";
  /** A new product variant is created. */
  WebhookEventTypeEnum["ProductVariantCreated"] = "PRODUCT_VARIANT_CREATED";
  /** A product variant is deleted. */
  WebhookEventTypeEnum["ProductVariantDeleted"] = "PRODUCT_VARIANT_DELETED";
  /**
   * A product variant metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeEnum["ProductVariantMetadataUpdated"] = "PRODUCT_VARIANT_METADATA_UPDATED";
  /** A product variant is out of stock. */
  WebhookEventTypeEnum["ProductVariantOutOfStock"] = "PRODUCT_VARIANT_OUT_OF_STOCK";
  /** A product variant stock is updated */
  WebhookEventTypeEnum["ProductVariantStockUpdated"] = "PRODUCT_VARIANT_STOCK_UPDATED";
  /** A product variant is updated. */
  WebhookEventTypeEnum["ProductVariantUpdated"] = "PRODUCT_VARIANT_UPDATED";
  /** A sale is created. */
  WebhookEventTypeEnum["SaleCreated"] = "SALE_CREATED";
  /** A sale is deleted. */
  WebhookEventTypeEnum["SaleDeleted"] = "SALE_DELETED";
  /** A sale is activated or deactivated. */
  WebhookEventTypeEnum["SaleToggle"] = "SALE_TOGGLE";
  /** A sale is updated. */
  WebhookEventTypeEnum["SaleUpdated"] = "SALE_UPDATED";
  /** Fetch external shipping methods for checkout. */
  WebhookEventTypeEnum["ShippingListMethodsForCheckout"] = "SHIPPING_LIST_METHODS_FOR_CHECKOUT";
  /** A new shipping price is created. */
  WebhookEventTypeEnum["ShippingPriceCreated"] = "SHIPPING_PRICE_CREATED";
  /** A shipping price is deleted. */
  WebhookEventTypeEnum["ShippingPriceDeleted"] = "SHIPPING_PRICE_DELETED";
  /** A shipping price is updated. */
  WebhookEventTypeEnum["ShippingPriceUpdated"] = "SHIPPING_PRICE_UPDATED";
  /** A new shipping zone is created. */
  WebhookEventTypeEnum["ShippingZoneCreated"] = "SHIPPING_ZONE_CREATED";
  /** A shipping zone is deleted. */
  WebhookEventTypeEnum["ShippingZoneDeleted"] = "SHIPPING_ZONE_DELETED";
  /**
   * A shipping zone metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeEnum["ShippingZoneMetadataUpdated"] = "SHIPPING_ZONE_METADATA_UPDATED";
  /** A shipping zone is updated. */
  WebhookEventTypeEnum["ShippingZoneUpdated"] = "SHIPPING_ZONE_UPDATED";
  /**
   * Shop metadata is updated.
   *
   * Added in Saleor 3.15.
   */
  WebhookEventTypeEnum["ShopMetadataUpdated"] = "SHOP_METADATA_UPDATED";
  /** A new staff user is created. */
  WebhookEventTypeEnum["StaffCreated"] = "STAFF_CREATED";
  /** A staff user is deleted. */
  WebhookEventTypeEnum["StaffDeleted"] = "STAFF_DELETED";
  /** Setting a new password for the staff account is requested. */
  WebhookEventTypeEnum["StaffSetPasswordRequested"] = "STAFF_SET_PASSWORD_REQUESTED";
  /** A staff user is updated. */
  WebhookEventTypeEnum["StaffUpdated"] = "STAFF_UPDATED";
  /**
   * A thumbnail is created.
   *
   * Added in Saleor 3.12.
   */
  WebhookEventTypeEnum["ThumbnailCreated"] = "THUMBNAIL_CREATED";
  /**
   * Event called when cancel has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  WebhookEventTypeEnum["TransactionCancelationRequested"] = "TRANSACTION_CANCELATION_REQUESTED";
  /**
   * Event called when charge has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  WebhookEventTypeEnum["TransactionChargeRequested"] = "TRANSACTION_CHARGE_REQUESTED";
  WebhookEventTypeEnum["TransactionInitializeSession"] = "TRANSACTION_INITIALIZE_SESSION";
  /**
   * Transaction item metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeEnum["TransactionItemMetadataUpdated"] = "TRANSACTION_ITEM_METADATA_UPDATED";
  WebhookEventTypeEnum["TransactionProcessSession"] = "TRANSACTION_PROCESS_SESSION";
  /**
   * Event called when refund has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  WebhookEventTypeEnum["TransactionRefundRequested"] = "TRANSACTION_REFUND_REQUESTED";
  /** A new translation is created. */
  WebhookEventTypeEnum["TranslationCreated"] = "TRANSLATION_CREATED";
  /** A translation is updated. */
  WebhookEventTypeEnum["TranslationUpdated"] = "TRANSLATION_UPDATED";
  /** A new voucher created. */
  WebhookEventTypeEnum["VoucherCreated"] = "VOUCHER_CREATED";
  /** A voucher is deleted. */
  WebhookEventTypeEnum["VoucherDeleted"] = "VOUCHER_DELETED";
  /**
   * A voucher metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeEnum["VoucherMetadataUpdated"] = "VOUCHER_METADATA_UPDATED";
  /** A voucher is updated. */
  WebhookEventTypeEnum["VoucherUpdated"] = "VOUCHER_UPDATED";
  /** A new warehouse created. */
  WebhookEventTypeEnum["WarehouseCreated"] = "WAREHOUSE_CREATED";
  /** A warehouse is deleted. */
  WebhookEventTypeEnum["WarehouseDeleted"] = "WAREHOUSE_DELETED";
  /**
   * A warehouse metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  WebhookEventTypeEnum["WarehouseMetadataUpdated"] = "WAREHOUSE_METADATA_UPDATED";
  /** A warehouse is updated. */
  WebhookEventTypeEnum["WarehouseUpdated"] = "WAREHOUSE_UPDATED";
})((WebhookEventTypeEnum = exports.WebhookEventTypeEnum || (exports.WebhookEventTypeEnum = {})));
/** Enum determining type of webhook. */
var WebhookEventTypeSyncEnum;
(function (WebhookEventTypeSyncEnum) {
  /**
   * Event called for checkout tax calculation.
   *
   * Added in Saleor 3.6.
   */
  WebhookEventTypeSyncEnum["CheckoutCalculateTaxes"] = "CHECKOUT_CALCULATE_TAXES";
  /** Filter shipping methods for checkout. */
  WebhookEventTypeSyncEnum["CheckoutFilterShippingMethods"] = "CHECKOUT_FILTER_SHIPPING_METHODS";
  WebhookEventTypeSyncEnum["ListStoredPaymentMethods"] = "LIST_STORED_PAYMENT_METHODS";
  /**
   * Event called for order tax calculation.
   *
   * Added in Saleor 3.6.
   */
  WebhookEventTypeSyncEnum["OrderCalculateTaxes"] = "ORDER_CALCULATE_TAXES";
  /** Filter shipping methods for order. */
  WebhookEventTypeSyncEnum["OrderFilterShippingMethods"] = "ORDER_FILTER_SHIPPING_METHODS";
  /** Authorize payment. */
  WebhookEventTypeSyncEnum["PaymentAuthorize"] = "PAYMENT_AUTHORIZE";
  /** Capture payment. */
  WebhookEventTypeSyncEnum["PaymentCapture"] = "PAYMENT_CAPTURE";
  /** Confirm payment. */
  WebhookEventTypeSyncEnum["PaymentConfirm"] = "PAYMENT_CONFIRM";
  WebhookEventTypeSyncEnum["PaymentGatewayInitializeSession"] =
    "PAYMENT_GATEWAY_INITIALIZE_SESSION";
  /** Listing available payment gateways. */
  WebhookEventTypeSyncEnum["PaymentListGateways"] = "PAYMENT_LIST_GATEWAYS";
  /** Process payment. */
  WebhookEventTypeSyncEnum["PaymentProcess"] = "PAYMENT_PROCESS";
  /** Refund payment. */
  WebhookEventTypeSyncEnum["PaymentRefund"] = "PAYMENT_REFUND";
  /** Void payment. */
  WebhookEventTypeSyncEnum["PaymentVoid"] = "PAYMENT_VOID";
  /** Fetch external shipping methods for checkout. */
  WebhookEventTypeSyncEnum["ShippingListMethodsForCheckout"] = "SHIPPING_LIST_METHODS_FOR_CHECKOUT";
  /**
   * Event called when cancel has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  WebhookEventTypeSyncEnum["TransactionCancelationRequested"] = "TRANSACTION_CANCELATION_REQUESTED";
  /**
   * Event called when charge has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  WebhookEventTypeSyncEnum["TransactionChargeRequested"] = "TRANSACTION_CHARGE_REQUESTED";
  WebhookEventTypeSyncEnum["TransactionInitializeSession"] = "TRANSACTION_INITIALIZE_SESSION";
  WebhookEventTypeSyncEnum["TransactionProcessSession"] = "TRANSACTION_PROCESS_SESSION";
  /**
   * Event called when refund has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  WebhookEventTypeSyncEnum["TransactionRefundRequested"] = "TRANSACTION_REFUND_REQUESTED";
})(
  (WebhookEventTypeSyncEnum =
    exports.WebhookEventTypeSyncEnum || (exports.WebhookEventTypeSyncEnum = {}))
);
/** An enumeration. */
var WebhookSampleEventTypeEnum;
(function (WebhookSampleEventTypeEnum) {
  WebhookSampleEventTypeEnum["AccountChangeEmailRequested"] = "ACCOUNT_CHANGE_EMAIL_REQUESTED";
  WebhookSampleEventTypeEnum["AccountConfirmationRequested"] = "ACCOUNT_CONFIRMATION_REQUESTED";
  WebhookSampleEventTypeEnum["AccountConfirmed"] = "ACCOUNT_CONFIRMED";
  WebhookSampleEventTypeEnum["AccountDeleted"] = "ACCOUNT_DELETED";
  WebhookSampleEventTypeEnum["AccountDeleteRequested"] = "ACCOUNT_DELETE_REQUESTED";
  WebhookSampleEventTypeEnum["AccountEmailChanged"] = "ACCOUNT_EMAIL_CHANGED";
  WebhookSampleEventTypeEnum["AccountSetPasswordRequested"] = "ACCOUNT_SET_PASSWORD_REQUESTED";
  WebhookSampleEventTypeEnum["AddressCreated"] = "ADDRESS_CREATED";
  WebhookSampleEventTypeEnum["AddressDeleted"] = "ADDRESS_DELETED";
  WebhookSampleEventTypeEnum["AddressUpdated"] = "ADDRESS_UPDATED";
  WebhookSampleEventTypeEnum["AppDeleted"] = "APP_DELETED";
  WebhookSampleEventTypeEnum["AppInstalled"] = "APP_INSTALLED";
  WebhookSampleEventTypeEnum["AppStatusChanged"] = "APP_STATUS_CHANGED";
  WebhookSampleEventTypeEnum["AppUpdated"] = "APP_UPDATED";
  WebhookSampleEventTypeEnum["AttributeCreated"] = "ATTRIBUTE_CREATED";
  WebhookSampleEventTypeEnum["AttributeDeleted"] = "ATTRIBUTE_DELETED";
  WebhookSampleEventTypeEnum["AttributeUpdated"] = "ATTRIBUTE_UPDATED";
  WebhookSampleEventTypeEnum["AttributeValueCreated"] = "ATTRIBUTE_VALUE_CREATED";
  WebhookSampleEventTypeEnum["AttributeValueDeleted"] = "ATTRIBUTE_VALUE_DELETED";
  WebhookSampleEventTypeEnum["AttributeValueUpdated"] = "ATTRIBUTE_VALUE_UPDATED";
  WebhookSampleEventTypeEnum["CategoryCreated"] = "CATEGORY_CREATED";
  WebhookSampleEventTypeEnum["CategoryDeleted"] = "CATEGORY_DELETED";
  WebhookSampleEventTypeEnum["CategoryUpdated"] = "CATEGORY_UPDATED";
  WebhookSampleEventTypeEnum["ChannelCreated"] = "CHANNEL_CREATED";
  WebhookSampleEventTypeEnum["ChannelDeleted"] = "CHANNEL_DELETED";
  WebhookSampleEventTypeEnum["ChannelMetadataUpdated"] = "CHANNEL_METADATA_UPDATED";
  WebhookSampleEventTypeEnum["ChannelStatusChanged"] = "CHANNEL_STATUS_CHANGED";
  WebhookSampleEventTypeEnum["ChannelUpdated"] = "CHANNEL_UPDATED";
  WebhookSampleEventTypeEnum["CheckoutCreated"] = "CHECKOUT_CREATED";
  WebhookSampleEventTypeEnum["CheckoutFullyPaid"] = "CHECKOUT_FULLY_PAID";
  WebhookSampleEventTypeEnum["CheckoutMetadataUpdated"] = "CHECKOUT_METADATA_UPDATED";
  WebhookSampleEventTypeEnum["CheckoutUpdated"] = "CHECKOUT_UPDATED";
  WebhookSampleEventTypeEnum["CollectionCreated"] = "COLLECTION_CREATED";
  WebhookSampleEventTypeEnum["CollectionDeleted"] = "COLLECTION_DELETED";
  WebhookSampleEventTypeEnum["CollectionMetadataUpdated"] = "COLLECTION_METADATA_UPDATED";
  WebhookSampleEventTypeEnum["CollectionUpdated"] = "COLLECTION_UPDATED";
  WebhookSampleEventTypeEnum["CustomerCreated"] = "CUSTOMER_CREATED";
  WebhookSampleEventTypeEnum["CustomerDeleted"] = "CUSTOMER_DELETED";
  WebhookSampleEventTypeEnum["CustomerMetadataUpdated"] = "CUSTOMER_METADATA_UPDATED";
  WebhookSampleEventTypeEnum["CustomerUpdated"] = "CUSTOMER_UPDATED";
  WebhookSampleEventTypeEnum["DraftOrderCreated"] = "DRAFT_ORDER_CREATED";
  WebhookSampleEventTypeEnum["DraftOrderDeleted"] = "DRAFT_ORDER_DELETED";
  WebhookSampleEventTypeEnum["DraftOrderUpdated"] = "DRAFT_ORDER_UPDATED";
  WebhookSampleEventTypeEnum["FulfillmentApproved"] = "FULFILLMENT_APPROVED";
  WebhookSampleEventTypeEnum["FulfillmentCanceled"] = "FULFILLMENT_CANCELED";
  WebhookSampleEventTypeEnum["FulfillmentCreated"] = "FULFILLMENT_CREATED";
  WebhookSampleEventTypeEnum["FulfillmentMetadataUpdated"] = "FULFILLMENT_METADATA_UPDATED";
  WebhookSampleEventTypeEnum["GiftCardCreated"] = "GIFT_CARD_CREATED";
  WebhookSampleEventTypeEnum["GiftCardDeleted"] = "GIFT_CARD_DELETED";
  WebhookSampleEventTypeEnum["GiftCardMetadataUpdated"] = "GIFT_CARD_METADATA_UPDATED";
  WebhookSampleEventTypeEnum["GiftCardSent"] = "GIFT_CARD_SENT";
  WebhookSampleEventTypeEnum["GiftCardStatusChanged"] = "GIFT_CARD_STATUS_CHANGED";
  WebhookSampleEventTypeEnum["GiftCardUpdated"] = "GIFT_CARD_UPDATED";
  WebhookSampleEventTypeEnum["InvoiceDeleted"] = "INVOICE_DELETED";
  WebhookSampleEventTypeEnum["InvoiceRequested"] = "INVOICE_REQUESTED";
  WebhookSampleEventTypeEnum["InvoiceSent"] = "INVOICE_SENT";
  WebhookSampleEventTypeEnum["MenuCreated"] = "MENU_CREATED";
  WebhookSampleEventTypeEnum["MenuDeleted"] = "MENU_DELETED";
  WebhookSampleEventTypeEnum["MenuItemCreated"] = "MENU_ITEM_CREATED";
  WebhookSampleEventTypeEnum["MenuItemDeleted"] = "MENU_ITEM_DELETED";
  WebhookSampleEventTypeEnum["MenuItemUpdated"] = "MENU_ITEM_UPDATED";
  WebhookSampleEventTypeEnum["MenuUpdated"] = "MENU_UPDATED";
  WebhookSampleEventTypeEnum["NotifyUser"] = "NOTIFY_USER";
  WebhookSampleEventTypeEnum["Observability"] = "OBSERVABILITY";
  WebhookSampleEventTypeEnum["OrderBulkCreated"] = "ORDER_BULK_CREATED";
  WebhookSampleEventTypeEnum["OrderCancelled"] = "ORDER_CANCELLED";
  WebhookSampleEventTypeEnum["OrderConfirmed"] = "ORDER_CONFIRMED";
  WebhookSampleEventTypeEnum["OrderCreated"] = "ORDER_CREATED";
  WebhookSampleEventTypeEnum["OrderExpired"] = "ORDER_EXPIRED";
  WebhookSampleEventTypeEnum["OrderFulfilled"] = "ORDER_FULFILLED";
  WebhookSampleEventTypeEnum["OrderFullyPaid"] = "ORDER_FULLY_PAID";
  WebhookSampleEventTypeEnum["OrderFullyRefunded"] = "ORDER_FULLY_REFUNDED";
  WebhookSampleEventTypeEnum["OrderMetadataUpdated"] = "ORDER_METADATA_UPDATED";
  WebhookSampleEventTypeEnum["OrderPaid"] = "ORDER_PAID";
  WebhookSampleEventTypeEnum["OrderRefunded"] = "ORDER_REFUNDED";
  WebhookSampleEventTypeEnum["OrderUpdated"] = "ORDER_UPDATED";
  WebhookSampleEventTypeEnum["PageCreated"] = "PAGE_CREATED";
  WebhookSampleEventTypeEnum["PageDeleted"] = "PAGE_DELETED";
  WebhookSampleEventTypeEnum["PageTypeCreated"] = "PAGE_TYPE_CREATED";
  WebhookSampleEventTypeEnum["PageTypeDeleted"] = "PAGE_TYPE_DELETED";
  WebhookSampleEventTypeEnum["PageTypeUpdated"] = "PAGE_TYPE_UPDATED";
  WebhookSampleEventTypeEnum["PageUpdated"] = "PAGE_UPDATED";
  WebhookSampleEventTypeEnum["PermissionGroupCreated"] = "PERMISSION_GROUP_CREATED";
  WebhookSampleEventTypeEnum["PermissionGroupDeleted"] = "PERMISSION_GROUP_DELETED";
  WebhookSampleEventTypeEnum["PermissionGroupUpdated"] = "PERMISSION_GROUP_UPDATED";
  WebhookSampleEventTypeEnum["ProductCreated"] = "PRODUCT_CREATED";
  WebhookSampleEventTypeEnum["ProductDeleted"] = "PRODUCT_DELETED";
  WebhookSampleEventTypeEnum["ProductMediaCreated"] = "PRODUCT_MEDIA_CREATED";
  WebhookSampleEventTypeEnum["ProductMediaDeleted"] = "PRODUCT_MEDIA_DELETED";
  WebhookSampleEventTypeEnum["ProductMediaUpdated"] = "PRODUCT_MEDIA_UPDATED";
  WebhookSampleEventTypeEnum["ProductMetadataUpdated"] = "PRODUCT_METADATA_UPDATED";
  WebhookSampleEventTypeEnum["ProductUpdated"] = "PRODUCT_UPDATED";
  WebhookSampleEventTypeEnum["ProductVariantBackInStock"] = "PRODUCT_VARIANT_BACK_IN_STOCK";
  WebhookSampleEventTypeEnum["ProductVariantCreated"] = "PRODUCT_VARIANT_CREATED";
  WebhookSampleEventTypeEnum["ProductVariantDeleted"] = "PRODUCT_VARIANT_DELETED";
  WebhookSampleEventTypeEnum["ProductVariantMetadataUpdated"] = "PRODUCT_VARIANT_METADATA_UPDATED";
  WebhookSampleEventTypeEnum["ProductVariantOutOfStock"] = "PRODUCT_VARIANT_OUT_OF_STOCK";
  WebhookSampleEventTypeEnum["ProductVariantStockUpdated"] = "PRODUCT_VARIANT_STOCK_UPDATED";
  WebhookSampleEventTypeEnum["ProductVariantUpdated"] = "PRODUCT_VARIANT_UPDATED";
  WebhookSampleEventTypeEnum["SaleCreated"] = "SALE_CREATED";
  WebhookSampleEventTypeEnum["SaleDeleted"] = "SALE_DELETED";
  WebhookSampleEventTypeEnum["SaleToggle"] = "SALE_TOGGLE";
  WebhookSampleEventTypeEnum["SaleUpdated"] = "SALE_UPDATED";
  WebhookSampleEventTypeEnum["ShippingPriceCreated"] = "SHIPPING_PRICE_CREATED";
  WebhookSampleEventTypeEnum["ShippingPriceDeleted"] = "SHIPPING_PRICE_DELETED";
  WebhookSampleEventTypeEnum["ShippingPriceUpdated"] = "SHIPPING_PRICE_UPDATED";
  WebhookSampleEventTypeEnum["ShippingZoneCreated"] = "SHIPPING_ZONE_CREATED";
  WebhookSampleEventTypeEnum["ShippingZoneDeleted"] = "SHIPPING_ZONE_DELETED";
  WebhookSampleEventTypeEnum["ShippingZoneMetadataUpdated"] = "SHIPPING_ZONE_METADATA_UPDATED";
  WebhookSampleEventTypeEnum["ShippingZoneUpdated"] = "SHIPPING_ZONE_UPDATED";
  WebhookSampleEventTypeEnum["ShopMetadataUpdated"] = "SHOP_METADATA_UPDATED";
  WebhookSampleEventTypeEnum["StaffCreated"] = "STAFF_CREATED";
  WebhookSampleEventTypeEnum["StaffDeleted"] = "STAFF_DELETED";
  WebhookSampleEventTypeEnum["StaffSetPasswordRequested"] = "STAFF_SET_PASSWORD_REQUESTED";
  WebhookSampleEventTypeEnum["StaffUpdated"] = "STAFF_UPDATED";
  WebhookSampleEventTypeEnum["ThumbnailCreated"] = "THUMBNAIL_CREATED";
  WebhookSampleEventTypeEnum["TransactionItemMetadataUpdated"] =
    "TRANSACTION_ITEM_METADATA_UPDATED";
  WebhookSampleEventTypeEnum["TranslationCreated"] = "TRANSLATION_CREATED";
  WebhookSampleEventTypeEnum["TranslationUpdated"] = "TRANSLATION_UPDATED";
  WebhookSampleEventTypeEnum["VoucherCreated"] = "VOUCHER_CREATED";
  WebhookSampleEventTypeEnum["VoucherDeleted"] = "VOUCHER_DELETED";
  WebhookSampleEventTypeEnum["VoucherMetadataUpdated"] = "VOUCHER_METADATA_UPDATED";
  WebhookSampleEventTypeEnum["VoucherUpdated"] = "VOUCHER_UPDATED";
  WebhookSampleEventTypeEnum["WarehouseCreated"] = "WAREHOUSE_CREATED";
  WebhookSampleEventTypeEnum["WarehouseDeleted"] = "WAREHOUSE_DELETED";
  WebhookSampleEventTypeEnum["WarehouseMetadataUpdated"] = "WAREHOUSE_METADATA_UPDATED";
  WebhookSampleEventTypeEnum["WarehouseUpdated"] = "WAREHOUSE_UPDATED";
})(
  (WebhookSampleEventTypeEnum =
    exports.WebhookSampleEventTypeEnum || (exports.WebhookSampleEventTypeEnum = {}))
);
/** An enumeration. */
var WebhookTriggerErrorCode;
(function (WebhookTriggerErrorCode) {
  WebhookTriggerErrorCode["GraphqlError"] = "GRAPHQL_ERROR";
  WebhookTriggerErrorCode["InvalidId"] = "INVALID_ID";
  WebhookTriggerErrorCode["MissingEvent"] = "MISSING_EVENT";
  WebhookTriggerErrorCode["MissingPermission"] = "MISSING_PERMISSION";
  WebhookTriggerErrorCode["MissingQuery"] = "MISSING_QUERY";
  WebhookTriggerErrorCode["MissingSubscription"] = "MISSING_SUBSCRIPTION";
  WebhookTriggerErrorCode["NotFound"] = "NOT_FOUND";
  WebhookTriggerErrorCode["Syntax"] = "SYNTAX";
  WebhookTriggerErrorCode["TypeNotSupported"] = "TYPE_NOT_SUPPORTED";
  WebhookTriggerErrorCode["UnableToParse"] = "UNABLE_TO_PARSE";
})(
  (WebhookTriggerErrorCode =
    exports.WebhookTriggerErrorCode || (exports.WebhookTriggerErrorCode = {}))
);
/** An enumeration. */
var WeightUnitsEnum;
(function (WeightUnitsEnum) {
  WeightUnitsEnum["G"] = "G";
  WeightUnitsEnum["Kg"] = "KG";
  WeightUnitsEnum["Lb"] = "LB";
  WeightUnitsEnum["Oz"] = "OZ";
  WeightUnitsEnum["Tonne"] = "TONNE";
})((WeightUnitsEnum = exports.WeightUnitsEnum || (exports.WeightUnitsEnum = {})));
exports.ProductGetThreeElementsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ProductGetThreeElements" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "products" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "3" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "channel" },
                value: { kind: "StringValue", value: "default-channel", block: false },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
