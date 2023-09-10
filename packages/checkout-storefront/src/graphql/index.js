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
exports.useRequestPasswordResetMutation =
  exports.RequestPasswordResetDocument =
  exports.useUserRegisterMutation =
  exports.UserRegisterDocument =
  exports.useUserQuery =
  exports.UserDocument =
  exports.useOrderQuery =
  exports.OrderDocument =
  exports.useCheckoutRemovePromoCodeMutation =
  exports.CheckoutRemovePromoCodeDocument =
  exports.useCheckoutAddPromoCodeMutation =
  exports.CheckoutAddPromoCodeDocument =
  exports.useAddressValidationRulesQuery =
  exports.AddressValidationRulesDocument =
  exports.useCheckoutDeliveryMethodUpdateMutation =
  exports.CheckoutDeliveryMethodUpdateDocument =
  exports.useCheckoutBillingAddressUpdateMutation =
  exports.CheckoutBillingAddressUpdateDocument =
  exports.useCheckoutShippingAddressUpdateMutation =
  exports.CheckoutShippingAddressUpdateDocument =
  exports.useUserAddressCreateMutation =
  exports.UserAddressCreateDocument =
  exports.useUserAddressUpdateMutation =
  exports.UserAddressUpdateDocument =
  exports.useUserAddressDeleteMutation =
  exports.UserAddressDeleteDocument =
  exports.useCheckoutCustomerAttachMutation =
  exports.CheckoutCustomerAttachDocument =
  exports.useCheckoutEmailUpdateMutation =
  exports.CheckoutEmailUpdateDocument =
  exports.useCheckoutLineDeleteMutation =
  exports.CheckoutLineDeleteDocument =
  exports.useCheckoutLinesUpdateMutation =
  exports.CheckoutLinesUpdateDocument =
  exports.useChannelQuery =
  exports.ChannelDocument =
  exports.useCheckoutQuery =
  exports.CheckoutDocument =
  exports.OrderFragmentDoc =
  exports.OrderLineFragmentDoc =
  exports.ShippingFragmentDoc =
  exports.CheckoutFragmentDoc =
  exports.CheckoutLineFragmentDoc =
  exports.AddressFragmentDoc =
  exports.GiftCardFragmentDoc =
  exports.MoneyFragmentDoc =
  exports.ValidationRulesFragmentDoc =
  exports.CheckoutErrorFragmentDoc =
  exports.AccountErrorFragmentDoc =
    void 0;
// THIS FILE IS GENERATED WITH `pnpm generate`
require("graphql/language/ast");
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const Urql = __importStar(require("urql"));
exports.AccountErrorFragmentDoc = (0, graphql_tag_1.default)`
  fragment AccountErrorFragment on AccountError {
    message
    field
    code
  }
`;
exports.CheckoutErrorFragmentDoc = (0, graphql_tag_1.default)`
  fragment CheckoutErrorFragment on CheckoutError {
    message
    field
    code
  }
`;
exports.ValidationRulesFragmentDoc = (0, graphql_tag_1.default)`
  fragment ValidationRulesFragment on AddressValidationData {
    addressFormat
    allowedFields
    requiredFields
    countryAreaType
    postalCodeType
    cityType
    countryAreaChoices {
      raw
      verbose
    }
  }
`;
exports.MoneyFragmentDoc = (0, graphql_tag_1.default)`
  fragment Money on Money {
    currency
    amount
  }
`;
exports.GiftCardFragmentDoc = (0, graphql_tag_1.default)`
  fragment GiftCardFragment on GiftCard {
    displayCode
    id
    currentBalance {
      ...Money
    }
  }
  ${exports.MoneyFragmentDoc}
`;
exports.AddressFragmentDoc = (0, graphql_tag_1.default)`
  fragment AddressFragment on Address {
    id
    city
    phone
    postalCode
    companyName
    cityArea
    streetAddress1
    streetAddress2
    countryArea
    country {
      country
      code
    }
    firstName
    lastName
  }
`;
exports.CheckoutLineFragmentDoc = (0, graphql_tag_1.default)`
  fragment CheckoutLineFragment on CheckoutLine {
    id
    quantity
    totalPrice {
      gross {
        currency
        amount
      }
    }
    unitPrice {
      gross {
        ...Money
      }
    }
    undiscountedUnitPrice {
      ...Money
    }
    variant {
      attributes(variantSelection: ALL) {
        values {
          name
          dateTime
          boolean
          translation(languageCode: $languageCode) {
            name
          }
        }
      }
      id
      name
      translation(languageCode: $languageCode) {
        name
      }
      product {
        name
        translation(languageCode: $languageCode) {
          language {
            code
          }
          id
          name
        }
        media {
          alt
          type
          url(size: 72)
        }
      }
      media {
        alt
        type
        url(size: 72)
      }
    }
  }
  ${exports.MoneyFragmentDoc}
`;
exports.CheckoutFragmentDoc = (0, graphql_tag_1.default)`
  fragment CheckoutFragment on Checkout {
    id
    email
    discount {
      ...Money
    }
    voucherCode
    discountName
    translatedDiscountName
    giftCards {
      ...GiftCardFragment
    }
    channel {
      id
      slug
    }
    shippingAddress {
      ...AddressFragment
    }
    billingAddress {
      ...AddressFragment
    }
    isShippingRequired
    user {
      id
      email
    }
    availablePaymentGateways {
      id
      name
    }
    deliveryMethod {
      ... on ShippingMethod {
        id
      }
      ... on Warehouse {
        id
      }
    }
    shippingMethods {
      id
      name
      price {
        ...Money
      }
    }
    totalPrice {
      gross {
        amount
      }
    }
    availablePaymentGateways {
      id
      name
    }
    deliveryMethod {
      ... on ShippingMethod {
        id
      }
      ... on Warehouse {
        id
      }
    }
    shippingMethods {
      id
      name
      price {
        ...Money
      }
      maximumDeliveryDays
      minimumDeliveryDays
    }
    totalPrice {
      gross {
        ...Money
      }
      tax {
        ...Money
      }
    }
    shippingPrice {
      gross {
        ...Money
      }
    }
    subtotalPrice {
      gross {
        ...Money
      }
    }
    lines {
      ...CheckoutLineFragment
    }
  }
  ${exports.MoneyFragmentDoc}
  ${exports.GiftCardFragmentDoc}
  ${exports.AddressFragmentDoc}
  ${exports.CheckoutLineFragmentDoc}
`;
exports.ShippingFragmentDoc = (0, graphql_tag_1.default)`
  fragment Shipping on ShippingMethod {
    name
    minimumDeliveryDays
    maximumDeliveryDays
  }
`;
exports.OrderLineFragmentDoc = (0, graphql_tag_1.default)`
  fragment OrderLineFragment on OrderLine {
    id
    quantity
    variant {
      name
      attributes(variantSelection: ALL) {
        values {
          name
          dateTime
          boolean
          translation(languageCode: $languageCode) {
            name
          }
        }
      }
    }
    totalPrice {
      gross {
        ...Money
      }
    }
    undiscountedUnitPrice {
      gross {
        ...Money
      }
    }
    unitPrice {
      gross {
        ...Money
      }
    }
    productName
    variantName
    thumbnail {
      alt
      url
    }
  }
  ${exports.MoneyFragmentDoc}
`;
exports.OrderFragmentDoc = (0, graphql_tag_1.default)`
  fragment Order on Order {
    id
    number
    userEmail
    isPaid
    discounts {
      type
      name
      amount {
        ...Money
      }
    }
    shippingAddress {
      ...AddressFragment
    }
    billingAddress {
      ...AddressFragment
    }
    deliveryMethod {
      ...Shipping
    }
    total {
      gross {
        ...Money
      }
      tax {
        ...Money
      }
    }
    voucher {
      code
    }
    shippingPrice {
      gross {
        ...Money
      }
    }
    subtotal {
      gross {
        ...Money
      }
    }
    lines {
      ...OrderLineFragment
    }
    totalBalance {
      ...Money
    }
    totalCaptured {
      ...Money
    }
  }
  ${exports.MoneyFragmentDoc}
  ${exports.AddressFragmentDoc}
  ${exports.ShippingFragmentDoc}
  ${exports.OrderLineFragmentDoc}
`;
exports.CheckoutDocument = (0, graphql_tag_1.default)`
  query checkout($id: ID!, $languageCode: LanguageCodeEnum!) {
    checkout(id: $id) {
      ...CheckoutFragment
    }
  }
  ${exports.CheckoutFragmentDoc}
`;
function useCheckoutQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.CheckoutDocument }, options));
}
exports.useCheckoutQuery = useCheckoutQuery;
exports.ChannelDocument = (0, graphql_tag_1.default)`
  query channel($slug: String!) {
    channel(slug: $slug) {
      countries {
        code
      }
    }
  }
`;
function useChannelQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.ChannelDocument }, options));
}
exports.useChannelQuery = useChannelQuery;
exports.CheckoutLinesUpdateDocument = (0, graphql_tag_1.default)`
  mutation checkoutLinesUpdate(
    $checkoutId: ID!
    $lines: [CheckoutLineUpdateInput!]!
    $languageCode: LanguageCodeEnum!
  ) {
    checkoutLinesUpdate(id: $checkoutId, lines: $lines) {
      errors {
        ...CheckoutErrorFragment
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${exports.CheckoutErrorFragmentDoc}
  ${exports.CheckoutFragmentDoc}
`;
function useCheckoutLinesUpdateMutation() {
  return Urql.useMutation(exports.CheckoutLinesUpdateDocument);
}
exports.useCheckoutLinesUpdateMutation = useCheckoutLinesUpdateMutation;
exports.CheckoutLineDeleteDocument = (0, graphql_tag_1.default)`
  mutation checkoutLineDelete($checkoutId: ID!, $lineId: ID, $languageCode: LanguageCodeEnum!) {
    checkoutLineDelete(id: $checkoutId, lineId: $lineId) {
      errors {
        ...CheckoutErrorFragment
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${exports.CheckoutErrorFragmentDoc}
  ${exports.CheckoutFragmentDoc}
`;
function useCheckoutLineDeleteMutation() {
  return Urql.useMutation(exports.CheckoutLineDeleteDocument);
}
exports.useCheckoutLineDeleteMutation = useCheckoutLineDeleteMutation;
exports.CheckoutEmailUpdateDocument = (0, graphql_tag_1.default)`
  mutation checkoutEmailUpdate(
    $email: String!
    $checkoutId: ID!
    $languageCode: LanguageCodeEnum!
  ) {
    checkoutEmailUpdate(email: $email, id: $checkoutId) {
      errors {
        ...CheckoutErrorFragment
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${exports.CheckoutErrorFragmentDoc}
  ${exports.CheckoutFragmentDoc}
`;
function useCheckoutEmailUpdateMutation() {
  return Urql.useMutation(exports.CheckoutEmailUpdateDocument);
}
exports.useCheckoutEmailUpdateMutation = useCheckoutEmailUpdateMutation;
exports.CheckoutCustomerAttachDocument = (0, graphql_tag_1.default)`
  mutation checkoutCustomerAttach($checkoutId: ID!, $languageCode: LanguageCodeEnum!) {
    checkoutCustomerAttach(id: $checkoutId) {
      errors {
        ...CheckoutErrorFragment
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${exports.CheckoutErrorFragmentDoc}
  ${exports.CheckoutFragmentDoc}
`;
function useCheckoutCustomerAttachMutation() {
  return Urql.useMutation(exports.CheckoutCustomerAttachDocument);
}
exports.useCheckoutCustomerAttachMutation = useCheckoutCustomerAttachMutation;
exports.UserAddressDeleteDocument = (0, graphql_tag_1.default)`
  mutation userAddressDelete($id: ID!) {
    accountAddressDelete(id: $id) {
      errors {
        ...AccountErrorFragment
      }
      address {
        ...AddressFragment
      }
    }
  }
  ${exports.AccountErrorFragmentDoc}
  ${exports.AddressFragmentDoc}
`;
function useUserAddressDeleteMutation() {
  return Urql.useMutation(exports.UserAddressDeleteDocument);
}
exports.useUserAddressDeleteMutation = useUserAddressDeleteMutation;
exports.UserAddressUpdateDocument = (0, graphql_tag_1.default)`
  mutation userAddressUpdate($id: ID!, $address: AddressInput!) {
    accountAddressUpdate(id: $id, input: $address) {
      errors {
        ...AccountErrorFragment
      }
      address {
        ...AddressFragment
      }
    }
  }
  ${exports.AccountErrorFragmentDoc}
  ${exports.AddressFragmentDoc}
`;
function useUserAddressUpdateMutation() {
  return Urql.useMutation(exports.UserAddressUpdateDocument);
}
exports.useUserAddressUpdateMutation = useUserAddressUpdateMutation;
exports.UserAddressCreateDocument = (0, graphql_tag_1.default)`
  mutation userAddressCreate($address: AddressInput!, $type: AddressTypeEnum) {
    accountAddressCreate(type: $type, input: $address) {
      errors {
        ...AccountErrorFragment
      }
      address {
        ...AddressFragment
      }
    }
  }
  ${exports.AccountErrorFragmentDoc}
  ${exports.AddressFragmentDoc}
`;
function useUserAddressCreateMutation() {
  return Urql.useMutation(exports.UserAddressCreateDocument);
}
exports.useUserAddressCreateMutation = useUserAddressCreateMutation;
exports.CheckoutShippingAddressUpdateDocument = (0, graphql_tag_1.default)`
  mutation checkoutShippingAddressUpdate(
    $checkoutId: ID!
    $shippingAddress: AddressInput!
    $validationRules: CheckoutAddressValidationRules
    $languageCode: LanguageCodeEnum!
  ) {
    checkoutShippingAddressUpdate(
      id: $checkoutId
      shippingAddress: $shippingAddress
      validationRules: $validationRules
    ) {
      errors {
        ...CheckoutErrorFragment
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${exports.CheckoutErrorFragmentDoc}
  ${exports.CheckoutFragmentDoc}
`;
function useCheckoutShippingAddressUpdateMutation() {
  return Urql.useMutation(exports.CheckoutShippingAddressUpdateDocument);
}
exports.useCheckoutShippingAddressUpdateMutation = useCheckoutShippingAddressUpdateMutation;
exports.CheckoutBillingAddressUpdateDocument = (0, graphql_tag_1.default)`
  mutation checkoutBillingAddressUpdate(
    $checkoutId: ID!
    $billingAddress: AddressInput!
    $validationRules: CheckoutAddressValidationRules
    $languageCode: LanguageCodeEnum!
  ) {
    checkoutBillingAddressUpdate(
      id: $checkoutId
      billingAddress: $billingAddress
      validationRules: $validationRules
    ) {
      errors {
        ...CheckoutErrorFragment
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${exports.CheckoutErrorFragmentDoc}
  ${exports.CheckoutFragmentDoc}
`;
function useCheckoutBillingAddressUpdateMutation() {
  return Urql.useMutation(exports.CheckoutBillingAddressUpdateDocument);
}
exports.useCheckoutBillingAddressUpdateMutation = useCheckoutBillingAddressUpdateMutation;
exports.CheckoutDeliveryMethodUpdateDocument = (0, graphql_tag_1.default)`
  mutation checkoutDeliveryMethodUpdate(
    $checkoutId: ID!
    $deliveryMethodId: ID!
    $languageCode: LanguageCodeEnum!
  ) {
    checkoutDeliveryMethodUpdate(id: $checkoutId, deliveryMethodId: $deliveryMethodId) {
      errors {
        ...CheckoutErrorFragment
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${exports.CheckoutErrorFragmentDoc}
  ${exports.CheckoutFragmentDoc}
`;
function useCheckoutDeliveryMethodUpdateMutation() {
  return Urql.useMutation(exports.CheckoutDeliveryMethodUpdateDocument);
}
exports.useCheckoutDeliveryMethodUpdateMutation = useCheckoutDeliveryMethodUpdateMutation;
exports.AddressValidationRulesDocument = (0, graphql_tag_1.default)`
  query addressValidationRules($countryCode: CountryCode!) {
    addressValidationRules(countryCode: $countryCode) {
      ...ValidationRulesFragment
    }
  }
  ${exports.ValidationRulesFragmentDoc}
`;
function useAddressValidationRulesQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.AddressValidationRulesDocument }, options));
}
exports.useAddressValidationRulesQuery = useAddressValidationRulesQuery;
exports.CheckoutAddPromoCodeDocument = (0, graphql_tag_1.default)`
  mutation checkoutAddPromoCode(
    $checkoutId: ID
    $promoCode: String!
    $languageCode: LanguageCodeEnum!
  ) {
    checkoutAddPromoCode(checkoutId: $checkoutId, promoCode: $promoCode) {
      errors {
        ...CheckoutErrorFragment
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${exports.CheckoutErrorFragmentDoc}
  ${exports.CheckoutFragmentDoc}
`;
function useCheckoutAddPromoCodeMutation() {
  return Urql.useMutation(exports.CheckoutAddPromoCodeDocument);
}
exports.useCheckoutAddPromoCodeMutation = useCheckoutAddPromoCodeMutation;
exports.CheckoutRemovePromoCodeDocument = (0, graphql_tag_1.default)`
  mutation checkoutRemovePromoCode(
    $checkoutId: ID
    $promoCode: String
    $promoCodeId: ID
    $languageCode: LanguageCodeEnum!
  ) {
    checkoutRemovePromoCode(
      checkoutId: $checkoutId
      promoCode: $promoCode
      promoCodeId: $promoCodeId
    ) {
      errors {
        ...CheckoutErrorFragment
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${exports.CheckoutErrorFragmentDoc}
  ${exports.CheckoutFragmentDoc}
`;
function useCheckoutRemovePromoCodeMutation() {
  return Urql.useMutation(exports.CheckoutRemovePromoCodeDocument);
}
exports.useCheckoutRemovePromoCodeMutation = useCheckoutRemovePromoCodeMutation;
exports.OrderDocument = (0, graphql_tag_1.default)`
  query order($id: ID!, $languageCode: LanguageCodeEnum!) {
    order(id: $id) {
      ...Order
    }
  }
  ${exports.OrderFragmentDoc}
`;
function useOrderQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.OrderDocument }, options));
}
exports.useOrderQuery = useOrderQuery;
exports.UserDocument = (0, graphql_tag_1.default)`
  query user {
    user: me {
      id
      email
      addresses {
        ...AddressFragment
      }
      defaultBillingAddress {
        ...AddressFragment
      }
      defaultShippingAddress {
        ...AddressFragment
      }
    }
  }
  ${exports.AddressFragmentDoc}
`;
function useUserQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.UserDocument }, options));
}
exports.useUserQuery = useUserQuery;
exports.UserRegisterDocument = (0, graphql_tag_1.default)`
  mutation userRegister($input: AccountRegisterInput!) {
    accountRegister(input: $input) {
      errors {
        message
        field
        code
      }
    }
  }
`;
function useUserRegisterMutation() {
  return Urql.useMutation(exports.UserRegisterDocument);
}
exports.useUserRegisterMutation = useUserRegisterMutation;
exports.RequestPasswordResetDocument = (0, graphql_tag_1.default)`
  mutation requestPasswordReset($email: String!, $channel: String!, $redirectUrl: String!) {
    requestPasswordReset(email: $email, channel: $channel, redirectUrl: $redirectUrl) {
      errors {
        message
        field
        code
      }
    }
  }
`;
function useRequestPasswordResetMutation() {
  return Urql.useMutation(exports.RequestPasswordResetDocument);
}
exports.useRequestPasswordResetMutation = useRequestPasswordResetMutation;
