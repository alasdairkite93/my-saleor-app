"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticPaths = exports.getStaticProps = void 0;
const image_1 = __importDefault(require("next/legacy/image"));
const components_1 = require("@/components");
const AddressDisplay_1 = require("@/components/checkout/AddressDisplay");
const RegionsProvider_1 = require("@/components/RegionsProvider");
const api_1 = require("@/saleor/api");
const useUser_1 = require("@/lib/useUser");
const getStaticProps = (context) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    return {
      props: {
        token:
          (_b = (_a = context.params) === null || _a === void 0 ? void 0 : _a.token) === null ||
          _b === void 0
            ? void 0
            : _b.toString(),
      },
    };
  });
exports.getStaticProps = getStaticProps;
function getStaticPaths() {
  return __awaiter(this, void 0, void 0, function* () {
    return {
      paths: [],
      fallback: "blocking",
    };
  });
}
exports.getStaticPaths = getStaticPaths;
function OrderDetailsPage({ token }) {
  const { formatPrice } = (0, RegionsProvider_1.useRegions)();
  const { authenticated } = (0, useUser_1.useUser)();
  const { loading, error, data } = (0, api_1.useOrderDetailsByTokenQuery)({
    variables: { token: token },
    skip: !token || !authenticated,
  });
  if (loading) return <components_1.Spinner />;
  if (error) {
    return <div>Error :{error.message}</div>;
  }
  if (!data || !data.orderByToken) {
    return null;
  }
  const order = data.orderByToken;
  return (
    <>
      <h1 className="text-2xl ml-2 md:ml-20 mt-5 font-bold text-gray-800 mb-2">
        Your order number : {order === null || order === void 0 ? void 0 : order.number}
      </h1>
      <h1 className="text-1xl ml-2 md:ml-20 font-semibold text-gray-600 mb-4">
        Status : {order === null || order === void 0 ? void 0 : order.status}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 mb-20 mt-10 ml-2 md:ml-20 max-w-6xl h-full">
        <div className="col-span-2 md:col-span-4">
          <table className="w-full divide-y table-fixed">
            <thead className="text-center">
              <tr>
                <td className="md:w-1/4 font-semibold text-md md:text-center text-left">Items</td>
                <td className="md:w-1/4 font-semibold text-md">Price</td>
                <td className="md:w-1/4 font-semibold text-md">Quantity</td>
                <td className="md:w-1/4 font-semibold text-md text-right">
                  <p className="mr-3 md:mr-10">Total</p>
                </td>
              </tr>
            </thead>
            <tbody className="text-center divide-y">
              {order === null || order === void 0
                ? void 0
                : order.lines.map((line) => {
                    var _a, _b;
                    return (
                      <tr
                        key={line === null || line === void 0 ? void 0 : line.id}
                        className="h-16"
                      >
                        <td className="my-3">
                          <div className="flex flex-row justify-center">
                            <image_1.default
                              src={
                                ((_a =
                                  line === null || line === void 0 ? void 0 : line.thumbnail) ===
                                  null || _a === void 0
                                  ? void 0
                                  : _a.url) || "/"
                              }
                              alt={
                                ((_b =
                                  line === null || line === void 0 ? void 0 : line.thumbnail) ===
                                  null || _b === void 0
                                  ? void 0
                                  : _b.alt) || " "
                              }
                              width={70}
                              height={70}
                            />
                            <div className="flex flex-col justify-center">
                              <div>
                                {line === null || line === void 0 ? void 0 : line.productName}
                              </div>
                              <div className="text-xs text-left text-gray-600">
                                {line === null || line === void 0 ? void 0 : line.variantName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          {formatPrice(
                            line === null || line === void 0 ? void 0 : line.unitPrice.gross
                          )}
                        </td>
                        <td>{line === null || line === void 0 ? void 0 : line.quantity}</td>
                        <td>
                          <p className="mr-3 md:mr-10 text-right">
                            {formatPrice(
                              line === null || line === void 0 ? void 0 : line.totalPrice.gross
                            )}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
              <tr />
            </tbody>
          </table>
        </div>
        <div className="md:col-start-3 text-md h-16">
          <div className="mt-5 text-left md:text-center">Subtotal</div>
        </div>
        <div className="text-md text-center">
          <p className="mt-5 text-right mr-3 md:mr-10">
            {formatPrice(order === null || order === void 0 ? void 0 : order.subtotal.net)}
          </p>
        </div>
        <div className="md:col-start-3 col-span-2 border-t" />
        <div className="md:col-start-3 text-md h-16">
          <div className="mt-5 text-left md:text-center">Shipping Price</div>
        </div>
        <div className="text-md text-center">
          <p className="mt-5 text-right mr-3 md:mr-10">
            {formatPrice(order === null || order === void 0 ? void 0 : order.shippingPrice.gross)}
          </p>
        </div>
        <div className="md:col-start-3 col-span-2 border-t" />
        <div className="md:col-start-3 text-md font-semibold h-16">
          <div className="mt-5 text-left md:text-center">Total</div>
        </div>
        <div className="text-md font-semibold text-center">
          <p className="mt-5 text-right mr-3 md:mr-10">
            {formatPrice(order === null || order === void 0 ? void 0 : order.total.gross)}
          </p>
        </div>

        {!!(order === null || order === void 0 ? void 0 : order.billingAddress) && (
          <div className="col-span-2 mr-2 my-2 p-4 rounded shadow-xs bg-white border md:w-1/2 md:col-span-2 md:w-full">
            <h2 className="font-semibold text-lg mb-2">Billing Address </h2>
            <AddressDisplay_1.AddressDisplay address={order.billingAddress} />
          </div>
        )}

        {!!(order === null || order === void 0 ? void 0 : order.shippingAddress) && (
          <div className="col-span-2 mr-2 md:ml-2 my-2 p-4 shadow-xs rounded bg-white border md:w-1/2 md:col-start-3 md:col-span-2 md:w-full">
            <h2 className="font-semibold text-lg mb-2">Shipping Address </h2>
            <AddressDisplay_1.AddressDisplay address={order.shippingAddress} />
          </div>
        )}
      </div>
    </>
  );
}
exports.default = OrderDetailsPage;
OrderDetailsPage.getLayout = function getLayout(page) {
  return <components_1.AccountLayout>{page}</components_1.AccountLayout>;
};
