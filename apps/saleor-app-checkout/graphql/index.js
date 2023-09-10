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
exports.TransactionUpdateProcessedEventsDocument =
  exports.useTransactionProcessedEventsQuery =
  exports.TransactionProcessedEventsDocument =
  exports.useTransactionUpdateMutation =
  exports.TransactionUpdateDocument =
  exports.useTransactionCreateMutation =
  exports.TransactionCreateDocument =
  exports.useOrderTransactionsQuery =
  exports.OrderTransactionsDocument =
  exports.useOrderUpdatePaymentMetafieldMutation =
  exports.OrderUpdatePaymentMetafieldDocument =
  exports.useOrderPaymentDetailsQuery =
  exports.OrderPaymentDetailsDocument =
  exports.useOrderDetailsQuery =
  exports.OrderDetailsDocument =
  exports.useOrderCreateMutation =
  exports.OrderCreateDocument =
  exports.useUpdatePrivateMetadataMutation =
  exports.UpdatePrivateMetadataDocument =
  exports.useUpdatePublicMetadataMutation =
  exports.UpdatePublicMetadataDocument =
  exports.usePrivateMetafieldsInferedQuery =
  exports.PrivateMetafieldsInferedDocument =
  exports.usePublicMetafieldsInferedQuery =
  exports.PublicMetafieldsInferedDocument =
  exports.usePrivateMetafieldsQuery =
  exports.PrivateMetafieldsDocument =
  exports.usePublicMetafieldsQuery =
  exports.PublicMetafieldsDocument =
  exports.useFileUploadMutation =
  exports.FileUploadDocument =
  exports.useCheckoutQuery =
  exports.CheckoutDocument =
  exports.useChannelsQuery =
  exports.ChannelsDocument =
  exports.useChannelQuery =
  exports.ChannelDocument =
  exports.useAppQuery =
  exports.AppDocument =
  exports.WebhookErrorFragmentDoc =
  exports.TransactionActionPayloadFragmentDoc =
  exports.TransactionFragmentDoc =
  exports.TransactionEventFragmentDoc =
  exports.OrderFragmentDoc =
  exports.OrderLineFragmentDoc =
  exports.MoneyFragmentDoc =
  exports.AddressFragmentDoc =
  exports.MetadataErrorFragmentDoc =
  exports.FileUploadErrorFragmentDoc =
  exports.ChannelFragmentDoc =
    void 0;
exports.useCheckWebhooksQuery =
  exports.CheckWebhooksDocument =
  exports.useCreateWebhooksMutation =
  exports.CreateWebhooksDocument =
  exports.useTransactionActionRequestSubscription =
  exports.TransactionActionRequestSubscriptionDocument =
  exports.useTransactionUpdateProcessedEventsMutation =
    void 0;
// THIS FILE IS GENERATED WITH `pnpm generate`
require("graphql/language/ast");
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const Urql = __importStar(require("urql"));
exports.ChannelFragmentDoc = (0, graphql_tag_1.default)`
  fragment ChannelFragment on Channel {
    id
    name
    slug
  }
`;
exports.FileUploadErrorFragmentDoc = (0, graphql_tag_1.default)`
  fragment FileUploadErrorFragment on UploadError {
    code
    message
    field
  }
`;
exports.MetadataErrorFragmentDoc = (0, graphql_tag_1.default)`
  fragment MetadataErrorFragment on MetadataError {
    code
    message
    field
  }
`;
exports.AddressFragmentDoc = (0, graphql_tag_1.default)`
  fragment Address on Address {
    companyName
    firstName
    lastName
    streetAddress1
    streetAddress2
    postalCode
    city
    country {
      code
    }
    countryArea
    phone
  }
`;
exports.MoneyFragmentDoc = (0, graphql_tag_1.default)`
  fragment Money on Money {
    currency
    amount
  }
`;
exports.OrderLineFragmentDoc = (0, graphql_tag_1.default)`
  fragment OrderLine on OrderLine {
    id
    productName
    variantName
    quantity
    taxRate
    variant {
      product {
        category {
          name
        }
        productType {
          isDigital
          kind
        }
      }
    }
    unitPrice {
      gross {
        ...Money
      }
    }
    totalPrice {
      gross {
        ...Money
      }
      net {
        ...Money
      }
      tax {
        ...Money
      }
    }
    thumbnail {
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
    billingAddress {
      ...Address
    }
    shippingAddress {
      ...Address
    }
    total {
      gross {
        ...Money
      }
    }
    discounts {
      name
      amount {
        ...Money
      }
    }
    shippingPrice {
      gross {
        ...Money
      }
      net {
        ...Money
      }
      tax {
        ...Money
      }
    }
    shippingTaxRate
    shippingMethodName
    privateMetafield(key: "payment")
    lines {
      ...OrderLine
    }
  }
  ${exports.AddressFragmentDoc}
  ${exports.MoneyFragmentDoc}
  ${exports.OrderLineFragmentDoc}
`;
exports.TransactionEventFragmentDoc = (0, graphql_tag_1.default)`
  fragment TransactionEvent on TransactionEvent {
    name
    reference
  }
`;
exports.TransactionFragmentDoc = (0, graphql_tag_1.default)`
  fragment Transaction on TransactionItem {
    id
    reference
    voidedAmount {
      ...Money
    }
    refundedAmount {
      ...Money
    }
    chargedAmount {
      ...Money
    }
    authorizedAmount {
      ...Money
    }
    events {
      ...TransactionEvent
    }
  }
  ${exports.MoneyFragmentDoc}
  ${exports.TransactionEventFragmentDoc}
`;
exports.TransactionActionPayloadFragmentDoc = (0, graphql_tag_1.default)`
  fragment TransactionActionPayload on TransactionActionRequest {
    transaction {
      id
      reference
      type
      authorizedAmount {
        amount
        currency
      }
      chargedAmount {
        amount
      }
      voidedAmount {
        amount
      }
      refundedAmount {
        amount
      }
    }
    action {
      actionType
      amount
    }
  }
`;
exports.WebhookErrorFragmentDoc = (0, graphql_tag_1.default)`
  fragment WebhookErrorFragment on WebhookError {
    message
    field
    code
  }
`;
exports.AppDocument = (0, graphql_tag_1.default)`
  query App {
    app {
      id
      name
    }
  }
`;
function useAppQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.AppDocument }, options));
}
exports.useAppQuery = useAppQuery;
exports.ChannelDocument = (0, graphql_tag_1.default)`
  query Channel($id: ID!) {
    channel(id: $id) {
      ...ChannelFragment
    }
  }
  ${exports.ChannelFragmentDoc}
`;
function useChannelQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.ChannelDocument }, options));
}
exports.useChannelQuery = useChannelQuery;
exports.ChannelsDocument = (0, graphql_tag_1.default)`
  query Channels {
    channels {
      ...ChannelFragment
    }
  }
  ${exports.ChannelFragmentDoc}
`;
function useChannelsQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.ChannelsDocument }, options));
}
exports.useChannelsQuery = useChannelsQuery;
exports.CheckoutDocument = (0, graphql_tag_1.default)`
  query Checkout($id: ID!) {
    checkout(id: $id) {
      id
      totalPrice {
        gross {
          ...Money
        }
        net {
          ...Money
        }
      }
    }
  }
  ${exports.MoneyFragmentDoc}
`;
function useCheckoutQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.CheckoutDocument }, options));
}
exports.useCheckoutQuery = useCheckoutQuery;
exports.FileUploadDocument = (0, graphql_tag_1.default)`
  mutation FileUpload($file: Upload!) {
    fileUpload(file: $file) {
      uploadedFile {
        url
        contentType
      }
      errors {
        ...FileUploadErrorFragment
      }
    }
  }
  ${exports.FileUploadErrorFragmentDoc}
`;
function useFileUploadMutation() {
  return Urql.useMutation(exports.FileUploadDocument);
}
exports.useFileUploadMutation = useFileUploadMutation;
exports.PublicMetafieldsDocument = (0, graphql_tag_1.default)`
  query PublicMetafields($id: ID!, $keys: [String!]) {
    app(id: $id) {
      id
      metafields(keys: $keys)
    }
  }
`;
function usePublicMetafieldsQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.PublicMetafieldsDocument }, options));
}
exports.usePublicMetafieldsQuery = usePublicMetafieldsQuery;
exports.PrivateMetafieldsDocument = (0, graphql_tag_1.default)`
  query PrivateMetafields($id: ID!, $keys: [String!]) {
    app(id: $id) {
      id
      privateMetafields(keys: $keys)
    }
  }
`;
function usePrivateMetafieldsQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.PrivateMetafieldsDocument }, options));
}
exports.usePrivateMetafieldsQuery = usePrivateMetafieldsQuery;
exports.PublicMetafieldsInferedDocument = (0, graphql_tag_1.default)`
  query PublicMetafieldsInfered($keys: [String!]) {
    app {
      id
      metafields(keys: $keys)
    }
  }
`;
function usePublicMetafieldsInferedQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.PublicMetafieldsInferedDocument }, options));
}
exports.usePublicMetafieldsInferedQuery = usePublicMetafieldsInferedQuery;
exports.PrivateMetafieldsInferedDocument = (0, graphql_tag_1.default)`
  query PrivateMetafieldsInfered($keys: [String!]) {
    app {
      id
      privateMetafields(keys: $keys)
    }
  }
`;
function usePrivateMetafieldsInferedQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.PrivateMetafieldsInferedDocument }, options));
}
exports.usePrivateMetafieldsInferedQuery = usePrivateMetafieldsInferedQuery;
exports.UpdatePublicMetadataDocument = (0, graphql_tag_1.default)`
  mutation UpdatePublicMetadata($id: ID!, $input: [MetadataInput!]!, $keys: [String!]) {
    updateMetadata(id: $id, input: $input) {
      item {
        metafields(keys: $keys)
      }
      errors {
        ...MetadataErrorFragment
      }
    }
  }
  ${exports.MetadataErrorFragmentDoc}
`;
function useUpdatePublicMetadataMutation() {
  return Urql.useMutation(exports.UpdatePublicMetadataDocument);
}
exports.useUpdatePublicMetadataMutation = useUpdatePublicMetadataMutation;
exports.UpdatePrivateMetadataDocument = (0, graphql_tag_1.default)`
  mutation UpdatePrivateMetadata($id: ID!, $input: [MetadataInput!]!, $keys: [String!]) {
    updatePrivateMetadata(id: $id, input: $input) {
      item {
        privateMetafields(keys: $keys)
      }
      errors {
        ...MetadataErrorFragment
      }
    }
  }
  ${exports.MetadataErrorFragmentDoc}
`;
function useUpdatePrivateMetadataMutation() {
  return Urql.useMutation(exports.UpdatePrivateMetadataDocument);
}
exports.useUpdatePrivateMetadataMutation = useUpdatePrivateMetadataMutation;
exports.OrderCreateDocument = (0, graphql_tag_1.default)`
  mutation OrderCreate($id: ID!) {
    orderCreateFromCheckout(id: $id) {
      order {
        ...Order
      }
      errors {
        code
        message
      }
    }
  }
  ${exports.OrderFragmentDoc}
`;
function useOrderCreateMutation() {
  return Urql.useMutation(exports.OrderCreateDocument);
}
exports.useOrderCreateMutation = useOrderCreateMutation;
exports.OrderDetailsDocument = (0, graphql_tag_1.default)`
  query OrderDetails($id: ID!) {
    order(id: $id) {
      ...Order
    }
  }
  ${exports.OrderFragmentDoc}
`;
function useOrderDetailsQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.OrderDetailsDocument }, options));
}
exports.useOrderDetailsQuery = useOrderDetailsQuery;
exports.OrderPaymentDetailsDocument = (0, graphql_tag_1.default)`
  query OrderPaymentDetails($id: ID!) {
    order(id: $id) {
      authorizeStatus
      chargeStatus
      isPaid
      status
      privateMetafield(key: "payment")
    }
  }
`;
function useOrderPaymentDetailsQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.OrderPaymentDetailsDocument }, options));
}
exports.useOrderPaymentDetailsQuery = useOrderPaymentDetailsQuery;
exports.OrderUpdatePaymentMetafieldDocument = (0, graphql_tag_1.default)`
  mutation OrderUpdatePaymentMetafield($orderId: ID!, $data: String!) {
    updatePrivateMetadata(id: $orderId, input: { key: "payment", value: $data }) {
      errors {
        code
      }
    }
  }
`;
function useOrderUpdatePaymentMetafieldMutation() {
  return Urql.useMutation(exports.OrderUpdatePaymentMetafieldDocument);
}
exports.useOrderUpdatePaymentMetafieldMutation = useOrderUpdatePaymentMetafieldMutation;
exports.OrderTransactionsDocument = (0, graphql_tag_1.default)`
  query OrderTransactions($id: ID!) {
    order(id: $id) {
      transactions {
        ...Transaction
      }
      errors {
        code
        message
      }
    }
  }
  ${exports.TransactionFragmentDoc}
`;
function useOrderTransactionsQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.OrderTransactionsDocument }, options));
}
exports.useOrderTransactionsQuery = useOrderTransactionsQuery;
exports.TransactionCreateDocument = (0, graphql_tag_1.default)`
  mutation TransactionCreate(
    $id: ID!
    $transaction: TransactionCreateInput!
    $transactionEvent: TransactionEventInput
  ) {
    transactionCreate(id: $id, transaction: $transaction, transactionEvent: $transactionEvent) {
      transaction {
        id
      }
      errors {
        code
        message
      }
    }
  }
`;
function useTransactionCreateMutation() {
  return Urql.useMutation(exports.TransactionCreateDocument);
}
exports.useTransactionCreateMutation = useTransactionCreateMutation;
exports.TransactionUpdateDocument = (0, graphql_tag_1.default)`
  mutation TransactionUpdate(
    $id: ID!
    $transaction: TransactionUpdateInput!
    $transactionEvent: TransactionEventInput
  ) {
    transactionUpdate(id: $id, transaction: $transaction, transactionEvent: $transactionEvent) {
      transaction {
        id
      }
      errors {
        code
        message
      }
    }
  }
`;
function useTransactionUpdateMutation() {
  return Urql.useMutation(exports.TransactionUpdateDocument);
}
exports.useTransactionUpdateMutation = useTransactionUpdateMutation;
exports.TransactionProcessedEventsDocument = (0, graphql_tag_1.default)`
  query TransactionProcessedEvents($id: ID!) {
    transaction(id: $id) {
      processedEvents: metafield(key: "processedEvents")
    }
  }
`;
function useTransactionProcessedEventsQuery(options) {
  return Urql.useQuery(
    Object.assign({ query: exports.TransactionProcessedEventsDocument }, options)
  );
}
exports.useTransactionProcessedEventsQuery = useTransactionProcessedEventsQuery;
exports.TransactionUpdateProcessedEventsDocument = (0, graphql_tag_1.default)`
  mutation TransactionUpdateProcessedEvents($id: ID!, $input: String!) {
    updateMetadata(id: $id, input: { key: "processedEvents", value: $input }) {
      errors {
        code
        field
        message
      }
    }
  }
`;
function useTransactionUpdateProcessedEventsMutation() {
  return Urql.useMutation(exports.TransactionUpdateProcessedEventsDocument);
}
exports.useTransactionUpdateProcessedEventsMutation = useTransactionUpdateProcessedEventsMutation;
exports.TransactionActionRequestSubscriptionDocument = (0, graphql_tag_1.default)`
  subscription TransactionActionRequestSubscription {
    event {
      ... on TransactionActionRequest {
        transaction {
          id
          reference
          type
          authorizedAmount {
            amount
            currency
          }
          chargedAmount {
            amount
          }
          voidedAmount {
            amount
          }
          refundedAmount {
            amount
          }
        }
        action {
          actionType
          amount
        }
      }
    }
  }
`;
function useTransactionActionRequestSubscription(options = {}, handler) {
  return Urql.useSubscription(
    Object.assign({ query: exports.TransactionActionRequestSubscriptionDocument }, options),
    handler
  );
}
exports.useTransactionActionRequestSubscription = useTransactionActionRequestSubscription;
exports.CreateWebhooksDocument = (0, graphql_tag_1.default)`
  mutation CreateWebhooks($targetUrl: String, $query: String) {
    webhookCreate(
      input: {
        name: "Checkout app payment notifications"
        targetUrl: $targetUrl
        events: [TRANSACTION_ACTION_REQUEST]
        isActive: true
        query: $query
      }
    ) {
      errors {
        ...WebhookErrorFragment
      }
    }
  }
  ${exports.WebhookErrorFragmentDoc}
`;
function useCreateWebhooksMutation() {
  return Urql.useMutation(exports.CreateWebhooksDocument);
}
exports.useCreateWebhooksMutation = useCreateWebhooksMutation;
exports.CheckWebhooksDocument = (0, graphql_tag_1.default)`
  query CheckWebhooks {
    app {
      webhooks {
        id
        targetUrl
      }
    }
  }
`;
function useCheckWebhooksQuery(options) {
  return Urql.useQuery(Object.assign({ query: exports.CheckWebhooksDocument }, options));
}
exports.useCheckWebhooksQuery = useCheckWebhooksQuery;
