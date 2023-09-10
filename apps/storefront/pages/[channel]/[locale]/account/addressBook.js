"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_intl_1 = require("react-intl");
const components_1 = require("@/components");
const translations_1 = require("@/components/translations");
const api_1 = require("@/saleor/api");
const useUser_1 = require("@/lib/useUser");
function AddressBookPage() {
  var _a;
  const t = (0, react_intl_1.useIntl)();
  const { authenticated } = (0, useUser_1.useUser)();
  const { loading, error, data, refetch } = (0, api_1.useCurrentUserAddressesQuery)({
    skip: !authenticated,
    fetchPolicy: "network-only",
  });
  if (loading) {
    return <components_1.Spinner />;
  }
  if (error) {
    return <p>Error :{error.message}</p>;
  }
  const addresses =
    ((_a = data === null || data === void 0 ? void 0 : data.me) === null || _a === void 0
      ? void 0
      : _a.addresses) || [];
  if (addresses.length === 0) {
    return <div>{t.formatMessage(translations_1.messages.noAddressDataMessage)}</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {addresses.map((address) => (
        <components_1.AddressBookCard
          key={address.id}
          address={address}
          onRefreshBook={() => refetch()}
        />
      ))}
    </div>
  );
}
exports.default = AddressBookPage;
AddressBookPage.getLayout = function getLayout(page) {
  return <components_1.AccountLayout>{page}</components_1.AccountLayout>;
};
