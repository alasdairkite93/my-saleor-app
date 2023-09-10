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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetAddressDefaultDocument =
  exports.useCheckoutShippingMethodUpdateMutation =
  exports.CheckoutShippingMethodUpdateDocument =
  exports.useCheckoutShippingAddressUpdateMutation =
  exports.CheckoutShippingAddressUpdateDocument =
  exports.useRemoveProductFromCheckoutMutation =
  exports.RemoveProductFromCheckoutDocument =
  exports.useCheckoutLineUpdateMutation =
  exports.CheckoutLineUpdateDocument =
  exports.useCheckoutEmailUpdateMutation =
  exports.CheckoutEmailUpdateDocument =
  exports.useCheckoutPaymentCreateMutation =
  exports.CheckoutPaymentCreateDocument =
  exports.useCreateCheckoutMutation =
  exports.CreateCheckoutDocument =
  exports.useCheckoutCompleteMutation =
  exports.CheckoutCompleteDocument =
  exports.useCheckoutBillingAddressUpdateMutation =
  exports.CheckoutBillingAddressUpdateDocument =
  exports.useCheckoutAddPromoCodeMutation =
  exports.CheckoutAddPromoCodeDocument =
  exports.useCheckoutAddProductLineMutation =
  exports.CheckoutAddProductLineDocument =
  exports.useAddressSetDefaultMutation =
  exports.AddressSetDefaultDocument =
  exports.useAddressDeleteMutation =
  exports.AddressDeleteDocument =
  exports.ProductDetailsFragmentDoc =
  exports.ProductVariantDetailsFragmentDoc =
  exports.ProductMediaFragmentDoc =
  exports.SelectedAttributeDetailsFragmentDoc =
  exports.ProductCardFragmentDoc =
  exports.PageInfoFragmentDoc =
  exports.OrderDetailsFragmentDoc =
  exports.MenuItemWithChildrenFragmentDoc =
  exports.MenuItemFragmentDoc =
  exports.HomepageBlockFragmentDoc =
  exports.ErrorDetailsFragmentDoc =
  exports.CollectionDetailsFragmentDoc =
  exports.CollectionBasicFragmentDoc =
  exports.CheckoutDetailsFragmentDoc =
  exports.CheckoutLineDetailsFragmentDoc =
  exports.DeliveryMethodFragmentDoc =
  exports.PriceFragmentDoc =
  exports.AddressDetailsFragmentDoc =
  exports.CategoryDetailsFragmentDoc =
  exports.ImageFragmentDoc =
  exports.CategoryBasicFragmentDoc =
  exports.AttributeFilterFragmentDoc =
  exports.AttributeFilterChoiceFragmentDoc =
    void 0;
exports.PageDocument =
  exports.useOrdersLazyQuery =
  exports.useOrdersQuery =
  exports.OrdersDocument =
  exports.useOrderDetailsByTokenLazyQuery =
  exports.useOrderDetailsByTokenQuery =
  exports.OrderDetailsByTokenDocument =
  exports.useOrderDetailsQueryLazyQuery =
  exports.useOrderDetailsQuery =
  exports.OrderDetailsQueryDocument =
  exports.useMainMenuLazyQuery =
  exports.useMainMenuQuery =
  exports.MainMenuDocument =
  exports.useHomepageBlocksQueryLazyQuery =
  exports.useHomepageBlocksQuery =
  exports.HomepageBlocksQueryDocument =
  exports.useFooterMenuLazyQuery =
  exports.useFooterMenuQuery =
  exports.FooterMenuDocument =
  exports.useFilteringAttributesQueryLazyQuery =
  exports.useFilteringAttributesQuery =
  exports.FilteringAttributesQueryDocument =
  exports.useCurrentUserDetailsLazyQuery =
  exports.useCurrentUserDetailsQuery =
  exports.CurrentUserDetailsDocument =
  exports.useCollectionPathsLazyQuery =
  exports.useCollectionPathsQuery =
  exports.CollectionPathsDocument =
  exports.useCollectionBySlugLazyQuery =
  exports.useCollectionBySlugQuery =
  exports.CollectionBySlugDocument =
  exports.useCheckoutByTokenLazyQuery =
  exports.useCheckoutByTokenQuery =
  exports.CheckoutByTokenDocument =
  exports.useCategoryPathsLazyQuery =
  exports.useCategoryPathsQuery =
  exports.CategoryPathsDocument =
  exports.useCategoryBySlugLazyQuery =
  exports.useCategoryBySlugQuery =
  exports.CategoryBySlugDocument =
  exports.useAvailableShippingMethodsLazyQuery =
  exports.useAvailableShippingMethodsQuery =
  exports.AvailableShippingMethodsDocument =
  exports.useRequestEmailChangeMutation =
  exports.RequestEmailChangeDocument =
  exports.useRegisterMutation =
  exports.RegisterDocument =
  exports.usePasswordChangeMutation =
  exports.PasswordChangeDocument =
  exports.useSetAddressDefaultMutation =
    void 0;
exports.useCurrentUserAddressesLazyQuery =
  exports.useCurrentUserAddressesQuery =
  exports.CurrentUserAddressesDocument =
  exports.useUserLazyQuery =
  exports.useUserQuery =
  exports.UserDocument =
  exports.useProductPathsLazyQuery =
  exports.useProductPathsQuery =
  exports.ProductPathsDocument =
  exports.useProductCollectionLazyQuery =
  exports.useProductCollectionQuery =
  exports.ProductCollectionDocument =
  exports.useProductBySlugLazyQuery =
  exports.useProductBySlugQuery =
  exports.ProductBySlugDocument =
  exports.usePagePathsLazyQuery =
  exports.usePagePathsQuery =
  exports.PagePathsDocument =
  exports.usePageLazyQuery =
  exports.usePageQuery =
    void 0;
// THIS FILE IS GENERATED WITH `pnpm generate`
require("graphql/language/ast");
const client_1 = require("@apollo/client");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.AttributeFilterChoiceFragmentDoc = (0, client_1.gql)`
  fragment AttributeFilterChoiceFragment on AttributeValue {
    id
    name
    slug
    translation(languageCode: $locale) {
      name
    }
  }
`;
exports.AttributeFilterFragmentDoc = (0, client_1.gql)`
  fragment AttributeFilterFragment on Attribute {
    id
    inputType
    name
    translation(languageCode: $locale) {
      id
      name
    }
    slug
    withChoices
    choices(first: 20) {
      edges {
        node {
          ...AttributeFilterChoiceFragment
        }
        cursor
      }
    }
  }
  ${exports.AttributeFilterChoiceFragmentDoc}
`;
exports.CategoryBasicFragmentDoc = (0, client_1.gql)`
  fragment CategoryBasicFragment on Category {
    id
    name
    slug
    translation(languageCode: $locale) {
      id
      name
    }
  }
`;
exports.ImageFragmentDoc = (0, client_1.gql)`
  fragment ImageFragment on Image {
    url
    alt
  }
`;
exports.CategoryDetailsFragmentDoc = (0, client_1.gql)`
  fragment CategoryDetailsFragment on Category {
    id
    ...CategoryBasicFragment
    seoTitle
    seoDescription
    description
    translation(languageCode: $locale) {
      id
      description
    }
    backgroundImage {
      ...ImageFragment
    }
    ancestors(first: 5) {
      edges {
        node {
          ...CategoryBasicFragment
        }
      }
    }
    children(first: 10) {
      edges {
        node {
          ...CategoryBasicFragment
        }
      }
    }
  }
  ${exports.CategoryBasicFragmentDoc}
  ${exports.ImageFragmentDoc}
`;
exports.AddressDetailsFragmentDoc = (0, client_1.gql)`
  fragment AddressDetailsFragment on Address {
    id
    phone
    firstName
    lastName
    streetAddress1
    city
    postalCode
    isDefaultBillingAddress
    isDefaultShippingAddress
    country {
      code
      country
    }
  }
`;
exports.PriceFragmentDoc = (0, client_1.gql)`
  fragment PriceFragment on Money {
    currency
    amount
  }
`;
exports.DeliveryMethodFragmentDoc = (0, client_1.gql)`
  fragment DeliveryMethodFragment on ShippingMethod {
    id
    name
    translation(languageCode: $locale) {
      id
      name
    }
    price {
      ...PriceFragment
    }
    minimumDeliveryDays
    maximumDeliveryDays
  }
  ${exports.PriceFragmentDoc}
`;
exports.CheckoutLineDetailsFragmentDoc = (0, client_1.gql)`
  fragment CheckoutLineDetailsFragment on CheckoutLine {
    id
    totalPrice {
      gross {
        ...PriceFragment
      }
    }
    variant {
      id
      product {
        id
        name
        translation(languageCode: $locale) {
          id
          name
        }
        slug
        thumbnail {
          ...ImageFragment
        }
      }
      pricing {
        price {
          gross {
            ...PriceFragment
          }
        }
      }
      name
      translation(languageCode: $locale) {
        id
        name
      }
    }
    quantity
  }
  ${exports.PriceFragmentDoc}
  ${exports.ImageFragmentDoc}
`;
exports.CheckoutDetailsFragmentDoc = (0, client_1.gql)`
  fragment CheckoutDetailsFragment on Checkout {
    id
    token
    email
    billingAddress {
      ...AddressDetailsFragment
    }
    shippingAddress {
      ...AddressDetailsFragment
    }
    shippingMethod {
      ...DeliveryMethodFragment
    }
    isShippingRequired
    availableShippingMethods {
      ...DeliveryMethodFragment
    }
    availablePaymentGateways {
      id
      name
      config {
        field
        value
      }
    }
    lines {
      ...CheckoutLineDetailsFragment
    }
    discount {
      ...PriceFragment
    }
    discountName
    subtotalPrice {
      net {
        ...PriceFragment
      }
      tax {
        ...PriceFragment
      }
    }
    shippingPrice {
      gross {
        ...PriceFragment
      }
    }
    totalPrice {
      gross {
        ...PriceFragment
      }
    }
  }
  ${exports.AddressDetailsFragmentDoc}
  ${exports.DeliveryMethodFragmentDoc}
  ${exports.CheckoutLineDetailsFragmentDoc}
  ${exports.PriceFragmentDoc}
`;
exports.CollectionBasicFragmentDoc = (0, client_1.gql)`
  fragment CollectionBasicFragment on Collection {
    id
    name
    translation(languageCode: $locale) {
      id
      name
    }
    slug
  }
`;
exports.CollectionDetailsFragmentDoc = (0, client_1.gql)`
  fragment CollectionDetailsFragment on Collection {
    id
    ...CollectionBasicFragment
    seoTitle
    seoDescription
    description
    translation(languageCode: $locale) {
      id
      description
    }
    backgroundImage {
      ...ImageFragment
    }
  }
  ${exports.CollectionBasicFragmentDoc}
  ${exports.ImageFragmentDoc}
`;
exports.ErrorDetailsFragmentDoc = (0, client_1.gql)`
  fragment ErrorDetailsFragment on CheckoutError {
    field
    message
    code
  }
`;
exports.HomepageBlockFragmentDoc = (0, client_1.gql)`
  fragment HomepageBlockFragment on MenuItem {
    id
    name
    translation(languageCode: $locale) {
      id
      name
    }
    category {
      id
      slug
    }
    collection {
      id
      slug
    }
    page {
      id
      slug
    }
    page {
      id
      content
      title
      translation(languageCode: $locale) {
        content
        title
      }
    }
  }
`;
exports.MenuItemFragmentDoc = (0, client_1.gql)`
  fragment MenuItemFragment on MenuItem {
    id
    name
    translation(languageCode: $locale) {
      id
      name
    }
    category {
      id
      slug
    }
    collection {
      id
      slug
    }
    page {
      id
      slug
    }
    url
  }
`;
exports.MenuItemWithChildrenFragmentDoc = (0, client_1.gql)`
  fragment MenuItemWithChildrenFragment on MenuItem {
    id
    name
    translation(languageCode: $locale) {
      id
      name
    }
    category {
      id
      slug
    }
    collection {
      id
      slug
    }
    page {
      id
      slug
    }
    children {
      ...MenuItemFragment
      children {
        ...MenuItemFragment
      }
    }
    url
  }
  ${exports.MenuItemFragmentDoc}
`;
exports.OrderDetailsFragmentDoc = (0, client_1.gql)`
  fragment OrderDetailsFragment on Order {
    id
    token
    created
    number
    status
    total {
      currency
      gross {
        ...PriceFragment
      }
      net {
        ...PriceFragment
      }
    }
  }
  ${exports.PriceFragmentDoc}
`;
exports.PageInfoFragmentDoc = (0, client_1.gql)`
  fragment PageInfoFragment on PageInfo {
    hasNextPage
    startCursor
    endCursor
  }
`;
exports.ProductCardFragmentDoc = (0, client_1.gql)`
  fragment ProductCardFragment on Product {
    id
    slug
    name
    translation(languageCode: $locale) {
      id
      name
    }
    thumbnail {
      ...ImageFragment
    }
    category {
      id
      name
      translation(languageCode: $locale) {
        id
        name
      }
    }
    media {
      url
      alt
      type
    }
    attributes {
      attribute {
        slug
      }
      values {
        name
      }
    }
  }
  ${exports.ImageFragmentDoc}
`;
exports.SelectedAttributeDetailsFragmentDoc = (0, client_1.gql)`
  fragment SelectedAttributeDetailsFragment on SelectedAttribute {
    attribute {
      id
      name
      translation(languageCode: $locale) {
        id
        name
      }
      type
      unit
    }
    values {
      id
      name
      translation(languageCode: $locale) {
        id
        name
        richText
      }
      value
    }
  }
`;
exports.ProductMediaFragmentDoc = (0, client_1.gql)`
  fragment ProductMediaFragment on ProductMedia {
    url
    alt
    type
  }
`;
exports.ProductVariantDetailsFragmentDoc = (0, client_1.gql)`
  fragment ProductVariantDetailsFragment on ProductVariant {
    id
    name
    translation(languageCode: $locale) {
      id
      name
    }
    quantityAvailable
    attributes {
      ...SelectedAttributeDetailsFragment
    }
    media {
      ...ProductMediaFragment
    }
    pricing {
      price {
        gross {
          ...PriceFragment
        }
      }
    }
  }
  ${exports.SelectedAttributeDetailsFragmentDoc}
  ${exports.ProductMediaFragmentDoc}
  ${exports.PriceFragmentDoc}
`;
exports.ProductDetailsFragmentDoc = (0, client_1.gql)`
  fragment ProductDetailsFragment on Product {
    id
    name
    slug
    description
    seoDescription
    seoTitle
    isAvailableForPurchase
    translation(languageCode: $locale) {
      id
      description
      name
    }
    attributes {
      ...SelectedAttributeDetailsFragment
    }
    category {
      ...CategoryBasicFragment
    }
    variants {
      ...ProductVariantDetailsFragment
    }
    pricing {
      priceRange {
        start {
          gross {
            ...PriceFragment
          }
        }
      }
    }
    media {
      ...ProductMediaFragment
    }
    thumbnail {
      ...ImageFragment
    }
    category {
      name
    }
  }
  ${exports.SelectedAttributeDetailsFragmentDoc}
  ${exports.CategoryBasicFragmentDoc}
  ${exports.ProductVariantDetailsFragmentDoc}
  ${exports.PriceFragmentDoc}
  ${exports.ProductMediaFragmentDoc}
  ${exports.ImageFragmentDoc}
`;
exports.AddressDeleteDocument = (0, client_1.gql)`
  mutation AddressDelete($id: ID!) {
    accountAddressDelete(id: $id) {
      user {
        addresses {
          ...AddressDetailsFragment
        }
      }
    }
  }
  ${exports.AddressDetailsFragmentDoc}
`;
/**
 * __useAddressDeleteMutation__
 *
 * To run a mutation, you first call `useAddressDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddressDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addressDeleteMutation, { data, loading, error }] = useAddressDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useAddressDeleteMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.AddressDeleteDocument, options);
}
exports.useAddressDeleteMutation = useAddressDeleteMutation;
exports.AddressSetDefaultDocument = (0, client_1.gql)`
  mutation AddressSetDefault($addressID: ID!, $userID: ID!, $addressType: AddressTypeEnum!) {
    addressSetDefault(addressId: $addressID, type: $addressType, userId: $userID) {
      errors {
        field
        message
        code
      }
    }
  }
`;
/**
 * __useAddressSetDefaultMutation__
 *
 * To run a mutation, you first call `useAddressSetDefaultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddressSetDefaultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addressSetDefaultMutation, { data, loading, error }] = useAddressSetDefaultMutation({
 *   variables: {
 *      addressID: // value for 'addressID'
 *      userID: // value for 'userID'
 *      addressType: // value for 'addressType'
 *   },
 * });
 */
function useAddressSetDefaultMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.AddressSetDefaultDocument, options);
}
exports.useAddressSetDefaultMutation = useAddressSetDefaultMutation;
exports.CheckoutAddProductLineDocument = (0, client_1.gql)`
  mutation CheckoutAddProductLine(
    $checkoutToken: UUID!
    $variantId: ID!
    $locale: LanguageCodeEnum!
  ) {
    checkoutLinesAdd(token: $checkoutToken, lines: [{ quantity: 1, variantId: $variantId }]) {
      checkout {
        ...CheckoutDetailsFragment
      }
      errors {
        message
        code
      }
    }
  }
  ${exports.CheckoutDetailsFragmentDoc}
`;
/**
 * __useCheckoutAddProductLineMutation__
 *
 * To run a mutation, you first call `useCheckoutAddProductLineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutAddProductLineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutAddProductLineMutation, { data, loading, error }] = useCheckoutAddProductLineMutation({
 *   variables: {
 *      checkoutToken: // value for 'checkoutToken'
 *      variantId: // value for 'variantId'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function useCheckoutAddProductLineMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.CheckoutAddProductLineDocument, options);
}
exports.useCheckoutAddProductLineMutation = useCheckoutAddProductLineMutation;
exports.CheckoutAddPromoCodeDocument = (0, client_1.gql)`
  mutation CheckoutAddPromoCode($token: UUID!, $promoCode: String!, $locale: LanguageCodeEnum!) {
    checkoutAddPromoCode(token: $token, promoCode: $promoCode) {
      checkout {
        ...CheckoutDetailsFragment
      }
      errors {
        message
        field
      }
    }
  }
  ${exports.CheckoutDetailsFragmentDoc}
`;
/**
 * __useCheckoutAddPromoCodeMutation__
 *
 * To run a mutation, you first call `useCheckoutAddPromoCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutAddPromoCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutAddPromoCodeMutation, { data, loading, error }] = useCheckoutAddPromoCodeMutation({
 *   variables: {
 *      token: // value for 'token'
 *      promoCode: // value for 'promoCode'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function useCheckoutAddPromoCodeMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.CheckoutAddPromoCodeDocument, options);
}
exports.useCheckoutAddPromoCodeMutation = useCheckoutAddPromoCodeMutation;
exports.CheckoutBillingAddressUpdateDocument = (0, client_1.gql)`
  mutation CheckoutBillingAddressUpdate(
    $token: UUID!
    $address: AddressInput!
    $locale: LanguageCodeEnum!
  ) {
    checkoutBillingAddressUpdate(billingAddress: $address, token: $token) {
      checkout {
        ...CheckoutDetailsFragment
      }
      errors {
        field
        message
        code
      }
    }
  }
  ${exports.CheckoutDetailsFragmentDoc}
`;
/**
 * __useCheckoutBillingAddressUpdateMutation__
 *
 * To run a mutation, you first call `useCheckoutBillingAddressUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutBillingAddressUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutBillingAddressUpdateMutation, { data, loading, error }] = useCheckoutBillingAddressUpdateMutation({
 *   variables: {
 *      token: // value for 'token'
 *      address: // value for 'address'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function useCheckoutBillingAddressUpdateMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.CheckoutBillingAddressUpdateDocument, options);
}
exports.useCheckoutBillingAddressUpdateMutation = useCheckoutBillingAddressUpdateMutation;
exports.CheckoutCompleteDocument = (0, client_1.gql)`
  mutation checkoutComplete($checkoutToken: UUID!, $paymentData: JSONString) {
    checkoutComplete(token: $checkoutToken, paymentData: $paymentData) {
      order {
        id
        status
        token
        billingAddress {
          id
          ...AddressDetailsFragment
        }
        shippingAddress {
          id
          ...AddressDetailsFragment
        }
      }
      confirmationNeeded
      confirmationData
      errors {
        field
        message
        variants
        addressType
      }
    }
  }
  ${exports.AddressDetailsFragmentDoc}
`;
/**
 * __useCheckoutCompleteMutation__
 *
 * To run a mutation, you first call `useCheckoutCompleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutCompleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutCompleteMutation, { data, loading, error }] = useCheckoutCompleteMutation({
 *   variables: {
 *      checkoutToken: // value for 'checkoutToken'
 *      paymentData: // value for 'paymentData'
 *   },
 * });
 */
function useCheckoutCompleteMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.CheckoutCompleteDocument, options);
}
exports.useCheckoutCompleteMutation = useCheckoutCompleteMutation;
exports.CreateCheckoutDocument = (0, client_1.gql)`
  mutation CreateCheckout($email: String, $lines: [CheckoutLineInput!]!, $channel: String!) {
    checkoutCreate(input: { channel: $channel, email: $email, lines: $lines }) {
      checkout {
        id
        token
      }
      errors {
        field
        message
        code
      }
    }
  }
`;
/**
 * __useCreateCheckoutMutation__
 *
 * To run a mutation, you first call `useCreateCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCheckoutMutation, { data, loading, error }] = useCreateCheckoutMutation({
 *   variables: {
 *      email: // value for 'email'
 *      lines: // value for 'lines'
 *      channel: // value for 'channel'
 *   },
 * });
 */
function useCreateCheckoutMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.CreateCheckoutDocument, options);
}
exports.useCreateCheckoutMutation = useCreateCheckoutMutation;
exports.CheckoutPaymentCreateDocument = (0, client_1.gql)`
  mutation checkoutPaymentCreate($checkoutToken: UUID!, $paymentInput: PaymentInput!) {
    checkoutPaymentCreate(token: $checkoutToken, input: $paymentInput) {
      payment {
        id
        total {
          ...PriceFragment
        }
      }
      errors {
        field
        message
      }
    }
  }
  ${exports.PriceFragmentDoc}
`;
/**
 * __useCheckoutPaymentCreateMutation__
 *
 * To run a mutation, you first call `useCheckoutPaymentCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutPaymentCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutPaymentCreateMutation, { data, loading, error }] = useCheckoutPaymentCreateMutation({
 *   variables: {
 *      checkoutToken: // value for 'checkoutToken'
 *      paymentInput: // value for 'paymentInput'
 *   },
 * });
 */
function useCheckoutPaymentCreateMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.CheckoutPaymentCreateDocument, options);
}
exports.useCheckoutPaymentCreateMutation = useCheckoutPaymentCreateMutation;
exports.CheckoutEmailUpdateDocument = (0, client_1.gql)`
  mutation CheckoutEmailUpdate($token: UUID!, $email: String!, $locale: LanguageCodeEnum!) {
    checkoutEmailUpdate(email: $email, token: $token) {
      checkout {
        ...CheckoutDetailsFragment
      }
      errors {
        field
        message
      }
    }
  }
  ${exports.CheckoutDetailsFragmentDoc}
`;
/**
 * __useCheckoutEmailUpdateMutation__
 *
 * To run a mutation, you first call `useCheckoutEmailUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutEmailUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutEmailUpdateMutation, { data, loading, error }] = useCheckoutEmailUpdateMutation({
 *   variables: {
 *      token: // value for 'token'
 *      email: // value for 'email'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function useCheckoutEmailUpdateMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.CheckoutEmailUpdateDocument, options);
}
exports.useCheckoutEmailUpdateMutation = useCheckoutEmailUpdateMutation;
exports.CheckoutLineUpdateDocument = (0, client_1.gql)`
  mutation CheckoutLineUpdate(
    $token: UUID
    $lines: [CheckoutLineUpdateInput!]!
    $locale: LanguageCodeEnum!
  ) {
    checkoutLinesUpdate(token: $token, lines: $lines) {
      checkout {
        ...CheckoutDetailsFragment
      }
      errors {
        ...ErrorDetailsFragment
      }
    }
  }
  ${exports.CheckoutDetailsFragmentDoc}
  ${exports.ErrorDetailsFragmentDoc}
`;
/**
 * __useCheckoutLineUpdateMutation__
 *
 * To run a mutation, you first call `useCheckoutLineUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutLineUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutLineUpdateMutation, { data, loading, error }] = useCheckoutLineUpdateMutation({
 *   variables: {
 *      token: // value for 'token'
 *      lines: // value for 'lines'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function useCheckoutLineUpdateMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.CheckoutLineUpdateDocument, options);
}
exports.useCheckoutLineUpdateMutation = useCheckoutLineUpdateMutation;
exports.RemoveProductFromCheckoutDocument = (0, client_1.gql)`
  mutation RemoveProductFromCheckout(
    $checkoutToken: UUID!
    $lineId: ID!
    $locale: LanguageCodeEnum!
  ) {
    checkoutLineDelete(token: $checkoutToken, lineId: $lineId) {
      checkout {
        ...CheckoutDetailsFragment
      }
      errors {
        field
        message
      }
    }
  }
  ${exports.CheckoutDetailsFragmentDoc}
`;
/**
 * __useRemoveProductFromCheckoutMutation__
 *
 * To run a mutation, you first call `useRemoveProductFromCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProductFromCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProductFromCheckoutMutation, { data, loading, error }] = useRemoveProductFromCheckoutMutation({
 *   variables: {
 *      checkoutToken: // value for 'checkoutToken'
 *      lineId: // value for 'lineId'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function useRemoveProductFromCheckoutMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.RemoveProductFromCheckoutDocument, options);
}
exports.useRemoveProductFromCheckoutMutation = useRemoveProductFromCheckoutMutation;
exports.CheckoutShippingAddressUpdateDocument = (0, client_1.gql)`
  mutation CheckoutShippingAddressUpdate(
    $token: UUID!
    $address: AddressInput!
    $locale: LanguageCodeEnum!
  ) {
    checkoutShippingAddressUpdate(shippingAddress: $address, token: $token) {
      checkout {
        ...CheckoutDetailsFragment
      }
      errors {
        field
        message
        code
      }
    }
  }
  ${exports.CheckoutDetailsFragmentDoc}
`;
/**
 * __useCheckoutShippingAddressUpdateMutation__
 *
 * To run a mutation, you first call `useCheckoutShippingAddressUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutShippingAddressUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutShippingAddressUpdateMutation, { data, loading, error }] = useCheckoutShippingAddressUpdateMutation({
 *   variables: {
 *      token: // value for 'token'
 *      address: // value for 'address'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function useCheckoutShippingAddressUpdateMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.CheckoutShippingAddressUpdateDocument, options);
}
exports.useCheckoutShippingAddressUpdateMutation = useCheckoutShippingAddressUpdateMutation;
exports.CheckoutShippingMethodUpdateDocument = (0, client_1.gql)`
  mutation CheckoutShippingMethodUpdate(
    $token: UUID!
    $shippingMethodId: ID!
    $locale: LanguageCodeEnum!
  ) {
    checkoutShippingMethodUpdate(shippingMethodId: $shippingMethodId, token: $token) {
      checkout {
        ...CheckoutDetailsFragment
      }
      errors {
        field
        message
        code
      }
    }
  }
  ${exports.CheckoutDetailsFragmentDoc}
`;
/**
 * __useCheckoutShippingMethodUpdateMutation__
 *
 * To run a mutation, you first call `useCheckoutShippingMethodUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutShippingMethodUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutShippingMethodUpdateMutation, { data, loading, error }] = useCheckoutShippingMethodUpdateMutation({
 *   variables: {
 *      token: // value for 'token'
 *      shippingMethodId: // value for 'shippingMethodId'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function useCheckoutShippingMethodUpdateMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.CheckoutShippingMethodUpdateDocument, options);
}
exports.useCheckoutShippingMethodUpdateMutation = useCheckoutShippingMethodUpdateMutation;
exports.SetAddressDefaultDocument = (0, client_1.gql)`
  mutation SetAddressDefault($id: ID!, $type: AddressTypeEnum!) {
    accountSetDefaultAddress(id: $id, type: $type) {
      user {
        addresses {
          ...AddressDetailsFragment
        }
      }
      errors {
        code
        message
      }
    }
  }
  ${exports.AddressDetailsFragmentDoc}
`;
/**
 * __useSetAddressDefaultMutation__
 *
 * To run a mutation, you first call `useSetAddressDefaultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetAddressDefaultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setAddressDefaultMutation, { data, loading, error }] = useSetAddressDefaultMutation({
 *   variables: {
 *      id: // value for 'id'
 *      type: // value for 'type'
 *   },
 * });
 */
function useSetAddressDefaultMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.SetAddressDefaultDocument, options);
}
exports.useSetAddressDefaultMutation = useSetAddressDefaultMutation;
exports.PasswordChangeDocument = (0, client_1.gql)`
  mutation PasswordChange($newPassword: String!, $oldPassword: String!) {
    passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {
      user {
        email
      }
      errors {
        field
        message
        code
      }
    }
  }
`;
/**
 * __usePasswordChangeMutation__
 *
 * To run a mutation, you first call `usePasswordChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePasswordChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [passwordChangeMutation, { data, loading, error }] = usePasswordChangeMutation({
 *   variables: {
 *      newPassword: // value for 'newPassword'
 *      oldPassword: // value for 'oldPassword'
 *   },
 * });
 */
function usePasswordChangeMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.PasswordChangeDocument, options);
}
exports.usePasswordChangeMutation = usePasswordChangeMutation;
exports.RegisterDocument = (0, client_1.gql)`
  mutation Register($input: AccountRegisterInput!) {
    accountRegister(input: $input) {
      errors {
        message
        field
        code
      }
    }
  }
`;
/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useRegisterMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.RegisterDocument, options);
}
exports.useRegisterMutation = useRegisterMutation;
exports.RequestEmailChangeDocument = (0, client_1.gql)`
  mutation RequestEmailChange($newEmail: String!, $password: String!, $redirectUrl: String!) {
    requestEmailChange(
      channel: "default-channel"
      newEmail: $newEmail
      password: $password
      redirectUrl: $redirectUrl
    ) {
      user {
        email
      }
      errors {
        field
        message
        code
      }
    }
  }
`;
/**
 * __useRequestEmailChangeMutation__
 *
 * To run a mutation, you first call `useRequestEmailChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestEmailChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestEmailChangeMutation, { data, loading, error }] = useRequestEmailChangeMutation({
 *   variables: {
 *      newEmail: // value for 'newEmail'
 *      password: // value for 'password'
 *      redirectUrl: // value for 'redirectUrl'
 *   },
 * });
 */
function useRequestEmailChangeMutation(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useMutation(exports.RequestEmailChangeDocument, options);
}
exports.useRequestEmailChangeMutation = useRequestEmailChangeMutation;
exports.AvailableShippingMethodsDocument = (0, client_1.gql)`
  query AvailableShippingMethods($channel: String!, $locale: LanguageCodeEnum!) {
    shop {
      availableShippingMethods(channel: $channel) {
        id
        name
        translation(languageCode: $locale) {
          id
          name
        }
        price {
          ...PriceFragment
        }
      }
    }
  }
  ${exports.PriceFragmentDoc}
`;
/**
 * __useAvailableShippingMethodsQuery__
 *
 * To run a query within a React component, call `useAvailableShippingMethodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailableShippingMethodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvailableShippingMethodsQuery({
 *   variables: {
 *      channel: // value for 'channel'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function useAvailableShippingMethodsQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.AvailableShippingMethodsDocument, options);
}
exports.useAvailableShippingMethodsQuery = useAvailableShippingMethodsQuery;
function useAvailableShippingMethodsLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.AvailableShippingMethodsDocument, options);
}
exports.useAvailableShippingMethodsLazyQuery = useAvailableShippingMethodsLazyQuery;
exports.CategoryBySlugDocument = (0, client_1.gql)`
  query CategoryBySlug($slug: String!, $locale: LanguageCodeEnum!) {
    category(slug: $slug) {
      ...CategoryDetailsFragment
    }
  }
  ${exports.CategoryDetailsFragmentDoc}
`;
/**
 * __useCategoryBySlugQuery__
 *
 * To run a query within a React component, call `useCategoryBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function useCategoryBySlugQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.CategoryBySlugDocument, options);
}
exports.useCategoryBySlugQuery = useCategoryBySlugQuery;
function useCategoryBySlugLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.CategoryBySlugDocument, options);
}
exports.useCategoryBySlugLazyQuery = useCategoryBySlugLazyQuery;
exports.CategoryPathsDocument = (0, client_1.gql)`
  query CategoryPaths($after: String) {
    categories(first: 100, after: $after) {
      pageInfo {
        ...PageInfoFragment
      }
      edges {
        node {
          slug
        }
      }
    }
  }
  ${exports.PageInfoFragmentDoc}
`;
/**
 * __useCategoryPathsQuery__
 *
 * To run a query within a React component, call `useCategoryPathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryPathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryPathsQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
function useCategoryPathsQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.CategoryPathsDocument, options);
}
exports.useCategoryPathsQuery = useCategoryPathsQuery;
function useCategoryPathsLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.CategoryPathsDocument, options);
}
exports.useCategoryPathsLazyQuery = useCategoryPathsLazyQuery;
exports.CheckoutByTokenDocument = (0, client_1.gql)`
  query CheckoutByToken($checkoutToken: UUID!, $locale: LanguageCodeEnum!) {
    checkout(token: $checkoutToken) {
      ...CheckoutDetailsFragment
    }
  }
  ${exports.CheckoutDetailsFragmentDoc}
`;
/**
 * __useCheckoutByTokenQuery__
 *
 * To run a query within a React component, call `useCheckoutByTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckoutByTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckoutByTokenQuery({
 *   variables: {
 *      checkoutToken: // value for 'checkoutToken'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function useCheckoutByTokenQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.CheckoutByTokenDocument, options);
}
exports.useCheckoutByTokenQuery = useCheckoutByTokenQuery;
function useCheckoutByTokenLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.CheckoutByTokenDocument, options);
}
exports.useCheckoutByTokenLazyQuery = useCheckoutByTokenLazyQuery;
exports.CollectionBySlugDocument = (0, client_1.gql)`
  query CollectionBySlug($slug: String!, $channel: String!, $locale: LanguageCodeEnum!) {
    collection(slug: $slug, channel: $channel) {
      id
      ...CollectionDetailsFragment
      backgroundImage {
        ...ImageFragment
      }
    }
  }
  ${exports.CollectionDetailsFragmentDoc}
  ${exports.ImageFragmentDoc}
`;
/**
 * __useCollectionBySlugQuery__
 *
 * To run a query within a React component, call `useCollectionBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      channel: // value for 'channel'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function useCollectionBySlugQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.CollectionBySlugDocument, options);
}
exports.useCollectionBySlugQuery = useCollectionBySlugQuery;
function useCollectionBySlugLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.CollectionBySlugDocument, options);
}
exports.useCollectionBySlugLazyQuery = useCollectionBySlugLazyQuery;
exports.CollectionPathsDocument = (0, client_1.gql)`
  query CollectionPaths($after: String, $channel: String!) {
    collections(first: 20, channel: $channel, after: $after) {
      pageInfo {
        ...PageInfoFragment
      }
      edges {
        node {
          slug
        }
      }
    }
  }
  ${exports.PageInfoFragmentDoc}
`;
/**
 * __useCollectionPathsQuery__
 *
 * To run a query within a React component, call `useCollectionPathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionPathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionPathsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      channel: // value for 'channel'
 *   },
 * });
 */
function useCollectionPathsQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.CollectionPathsDocument, options);
}
exports.useCollectionPathsQuery = useCollectionPathsQuery;
function useCollectionPathsLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.CollectionPathsDocument, options);
}
exports.useCollectionPathsLazyQuery = useCollectionPathsLazyQuery;
exports.CurrentUserDetailsDocument = (0, client_1.gql)`
  query CurrentUserDetails {
    me {
      id
      lastLogin
      dateJoined
      email
      firstName
      lastName
      avatar {
        ...ImageFragment
      }
      orders {
        totalCount
      }
    }
  }
  ${exports.ImageFragmentDoc}
`;
/**
 * __useCurrentUserDetailsQuery__
 *
 * To run a query within a React component, call `useCurrentUserDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserDetailsQuery({
 *   variables: {
 *   },
 * });
 */
function useCurrentUserDetailsQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.CurrentUserDetailsDocument, options);
}
exports.useCurrentUserDetailsQuery = useCurrentUserDetailsQuery;
function useCurrentUserDetailsLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.CurrentUserDetailsDocument, options);
}
exports.useCurrentUserDetailsLazyQuery = useCurrentUserDetailsLazyQuery;
exports.FilteringAttributesQueryDocument = (0, client_1.gql)`
  query FilteringAttributesQuery(
    $filter: AttributeFilterInput!
    $channel: String!
    $locale: LanguageCodeEnum!
  ) {
    attributes(filter: $filter, first: 100, channel: $channel) {
      totalCount
      edges {
        node {
          ...AttributeFilterFragment
        }
      }
    }
  }
  ${exports.AttributeFilterFragmentDoc}
`;
/**
 * __useFilteringAttributesQuery__
 *
 * To run a query within a React component, call `useFilteringAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilteringAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilteringAttributesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      channel: // value for 'channel'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function useFilteringAttributesQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.FilteringAttributesQueryDocument, options);
}
exports.useFilteringAttributesQuery = useFilteringAttributesQuery;
function useFilteringAttributesQueryLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.FilteringAttributesQueryDocument, options);
}
exports.useFilteringAttributesQueryLazyQuery = useFilteringAttributesQueryLazyQuery;
exports.FooterMenuDocument = (0, client_1.gql)`
  query FooterMenu($locale: LanguageCodeEnum!, $channel: String!) {
    menu(slug: "footer", channel: $channel) {
      id
      items {
        children {
          ...MenuItemFragment
        }
        ...MenuItemFragment
      }
    }
  }
  ${exports.MenuItemFragmentDoc}
`;
/**
 * __useFooterMenuQuery__
 *
 * To run a query within a React component, call `useFooterMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useFooterMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFooterMenuQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      channel: // value for 'channel'
 *   },
 * });
 */
function useFooterMenuQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.FooterMenuDocument, options);
}
exports.useFooterMenuQuery = useFooterMenuQuery;
function useFooterMenuLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.FooterMenuDocument, options);
}
exports.useFooterMenuLazyQuery = useFooterMenuLazyQuery;
exports.HomepageBlocksQueryDocument = (0, client_1.gql)`
  query HomepageBlocksQuery($slug: String!, $channel: String!, $locale: LanguageCodeEnum!) {
    menu(channel: $channel, slug: $slug) {
      id
      name
      slug
      items {
        ...HomepageBlockFragment
      }
    }
  }
  ${exports.HomepageBlockFragmentDoc}
`;
/**
 * __useHomepageBlocksQuery__
 *
 * To run a query within a React component, call `useHomepageBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomepageBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomepageBlocksQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      channel: // value for 'channel'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function useHomepageBlocksQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.HomepageBlocksQueryDocument, options);
}
exports.useHomepageBlocksQuery = useHomepageBlocksQuery;
function useHomepageBlocksQueryLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.HomepageBlocksQueryDocument, options);
}
exports.useHomepageBlocksQueryLazyQuery = useHomepageBlocksQueryLazyQuery;
exports.MainMenuDocument = (0, client_1.gql)`
  query MainMenu($locale: LanguageCodeEnum!, $channel: String!) {
    menu(slug: "navbar", channel: $channel) {
      id
      items {
        ...MenuItemWithChildrenFragment
      }
    }
  }
  ${exports.MenuItemWithChildrenFragmentDoc}
`;
/**
 * __useMainMenuQuery__
 *
 * To run a query within a React component, call `useMainMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useMainMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMainMenuQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      channel: // value for 'channel'
 *   },
 * });
 */
function useMainMenuQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.MainMenuDocument, options);
}
exports.useMainMenuQuery = useMainMenuQuery;
function useMainMenuLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.MainMenuDocument, options);
}
exports.useMainMenuLazyQuery = useMainMenuLazyQuery;
exports.OrderDetailsQueryDocument = (0, client_1.gql)`
  query OrderDetailsQuery($token: UUID!) {
    orderByToken(token: $token) {
      id
      number
      shippingPrice {
        gross {
          ...PriceFragment
        }
      }
      created
      lines {
        id
        thumbnail {
          ...ImageFragment
        }
        totalPrice {
          gross {
            ...PriceFragment
          }
        }
        productName
        variantName
        quantity
      }
      total {
        gross {
          ...PriceFragment
        }
      }
      statusDisplay
    }
  }
  ${exports.PriceFragmentDoc}
  ${exports.ImageFragmentDoc}
`;
/**
 * __useOrderDetailsQuery__
 *
 * To run a query within a React component, call `useOrderDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderDetailsQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
function useOrderDetailsQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.OrderDetailsQueryDocument, options);
}
exports.useOrderDetailsQuery = useOrderDetailsQuery;
function useOrderDetailsQueryLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.OrderDetailsQueryDocument, options);
}
exports.useOrderDetailsQueryLazyQuery = useOrderDetailsQueryLazyQuery;
exports.OrderDetailsByTokenDocument = (0, client_1.gql)`
  query OrderDetailsByToken($token: UUID!) {
    orderByToken(token: $token) {
      id
      status
      number
      shippingAddress {
        ...AddressDetailsFragment
      }
      billingAddress {
        ...AddressDetailsFragment
      }
      subtotal {
        net {
          ...PriceFragment
        }
        tax {
          ...PriceFragment
        }
      }
      total {
        gross {
          ...PriceFragment
        }
      }
      lines {
        id
        productName
        variantName
        quantity
        thumbnail {
          url
          alt
        }
        unitPrice {
          gross {
            ...PriceFragment
          }
        }
        totalPrice {
          gross {
            ...PriceFragment
          }
        }
      }
      shippingPrice {
        gross {
          ...PriceFragment
        }
      }
    }
  }
  ${exports.AddressDetailsFragmentDoc}
  ${exports.PriceFragmentDoc}
`;
/**
 * __useOrderDetailsByTokenQuery__
 *
 * To run a query within a React component, call `useOrderDetailsByTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderDetailsByTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderDetailsByTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
function useOrderDetailsByTokenQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.OrderDetailsByTokenDocument, options);
}
exports.useOrderDetailsByTokenQuery = useOrderDetailsByTokenQuery;
function useOrderDetailsByTokenLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.OrderDetailsByTokenDocument, options);
}
exports.useOrderDetailsByTokenLazyQuery = useOrderDetailsByTokenLazyQuery;
exports.OrdersDocument = (0, client_1.gql)`
  query Orders($before: String, $after: String) {
    me {
      orders(first: 10, before: $before, after: $after) {
        edges {
          cursor
          node {
            ...OrderDetailsFragment
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        totalCount
      }
    }
  }
  ${exports.OrderDetailsFragmentDoc}
`;
/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
function useOrdersQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.OrdersDocument, options);
}
exports.useOrdersQuery = useOrdersQuery;
function useOrdersLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.OrdersDocument, options);
}
exports.useOrdersLazyQuery = useOrdersLazyQuery;
exports.PageDocument = (0, client_1.gql)`
  query Page($slug: String!, $locale: LanguageCodeEnum!) {
    page(slug: $slug) {
      id
      title
      translation(languageCode: $locale) {
        id
        title
        content
      }
      seoTitle
      seoDescription
      slug
      created
      content
    }
  }
`;
/**
 * __usePageQuery__
 *
 * To run a query within a React component, call `usePageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function usePageQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.PageDocument, options);
}
exports.usePageQuery = usePageQuery;
function usePageLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.PageDocument, options);
}
exports.usePageLazyQuery = usePageLazyQuery;
exports.PagePathsDocument = (0, client_1.gql)`
  query PagePaths($after: String) {
    pages(first: 100, after: $after) {
      pageInfo {
        ...PageInfoFragment
      }
      edges {
        node {
          slug
        }
      }
    }
  }
  ${exports.PageInfoFragmentDoc}
`;
/**
 * __usePagePathsQuery__
 *
 * To run a query within a React component, call `usePagePathsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagePathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagePathsQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
function usePagePathsQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.PagePathsDocument, options);
}
exports.usePagePathsQuery = usePagePathsQuery;
function usePagePathsLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.PagePathsDocument, options);
}
exports.usePagePathsLazyQuery = usePagePathsLazyQuery;
exports.ProductBySlugDocument = (0, client_1.gql)`
  query ProductBySlug($slug: String!, $channel: String!, $locale: LanguageCodeEnum!) {
    product(slug: $slug, channel: $channel) {
      ...ProductDetailsFragment
    }
  }
  ${exports.ProductDetailsFragmentDoc}
`;
/**
 * __useProductBySlugQuery__
 *
 * To run a query within a React component, call `useProductBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      channel: // value for 'channel'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function useProductBySlugQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.ProductBySlugDocument, options);
}
exports.useProductBySlugQuery = useProductBySlugQuery;
function useProductBySlugLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.ProductBySlugDocument, options);
}
exports.useProductBySlugLazyQuery = useProductBySlugLazyQuery;
exports.ProductCollectionDocument = (0, client_1.gql)`
  query ProductCollection(
    $before: String
    $after: String
    $first: Int = 4
    $filter: ProductFilterInput
    $sortBy: ProductOrder
    $channel: String!
    $locale: LanguageCodeEnum!
  ) {
    products(
      first: $first
      channel: $channel
      after: $after
      before: $before
      filter: $filter
      sortBy: $sortBy
    ) {
      totalCount
      edges {
        cursor
        node {
          ...ProductCardFragment
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
  ${exports.ProductCardFragmentDoc}
`;
/**
 * __useProductCollectionQuery__
 *
 * To run a query within a React component, call `useProductCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductCollectionQuery({
 *   variables: {
 *      before: // value for 'before'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      filter: // value for 'filter'
 *      sortBy: // value for 'sortBy'
 *      channel: // value for 'channel'
 *      locale: // value for 'locale'
 *   },
 * });
 */
function useProductCollectionQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.ProductCollectionDocument, options);
}
exports.useProductCollectionQuery = useProductCollectionQuery;
function useProductCollectionLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.ProductCollectionDocument, options);
}
exports.useProductCollectionLazyQuery = useProductCollectionLazyQuery;
exports.ProductPathsDocument = (0, client_1.gql)`
  query ProductPaths($after: String, $channel: String!) {
    products(first: 100, channel: $channel, after: $after) {
      pageInfo {
        ...PageInfoFragment
      }
      edges {
        node {
          slug
        }
      }
    }
  }
  ${exports.PageInfoFragmentDoc}
`;
/**
 * __useProductPathsQuery__
 *
 * To run a query within a React component, call `useProductPathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductPathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductPathsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      channel: // value for 'channel'
 *   },
 * });
 */
function useProductPathsQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.ProductPathsDocument, options);
}
exports.useProductPathsQuery = useProductPathsQuery;
function useProductPathsLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.ProductPathsDocument, options);
}
exports.useProductPathsLazyQuery = useProductPathsLazyQuery;
exports.UserDocument = (0, client_1.gql)`
  query User {
    user: me {
      id
      email
      addresses {
        ...AddressDetailsFragment
      }
      defaultBillingAddress {
        ...AddressDetailsFragment
      }
      defaultShippingAddress {
        ...AddressDetailsFragment
      }
    }
  }
  ${exports.AddressDetailsFragmentDoc}
`;
/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
function useUserQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.UserDocument, options);
}
exports.useUserQuery = useUserQuery;
function useUserLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.UserDocument, options);
}
exports.useUserLazyQuery = useUserLazyQuery;
exports.CurrentUserAddressesDocument = (0, client_1.gql)`
  query CurrentUserAddresses {
    me {
      addresses {
        ...AddressDetailsFragment
      }
    }
  }
  ${exports.AddressDetailsFragmentDoc}
`;
/**
 * __useCurrentUserAddressesQuery__
 *
 * To run a query within a React component, call `useCurrentUserAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserAddressesQuery({
 *   variables: {
 *   },
 * });
 */
function useCurrentUserAddressesQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useQuery(exports.CurrentUserAddressesDocument, options);
}
exports.useCurrentUserAddressesQuery = useCurrentUserAddressesQuery;
function useCurrentUserAddressesLazyQuery(baseOptions) {
  const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
  return Apollo.useLazyQuery(exports.CurrentUserAddressesDocument, options);
}
exports.useCurrentUserAddressesLazyQuery = useCurrentUserAddressesLazyQuery;
