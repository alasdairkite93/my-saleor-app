"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersTable = void 0;
const router_1 = require("next/router");
const paths_1 = require("@/lib/paths");
const RegionsProvider_1 = require("../RegionsProvider");
function OrdersTable({ orders }) {
  const router = (0, router_1.useRouter)();
  const paths = (0, paths_1.usePaths)();
  const { formatPrice } = (0, RegionsProvider_1.useRegions)();
  return (
    <table className="w-full divide-y bg-white rounded-md ">
      <thead className="text-center h-16">
        <tr>
          <th className="w-1/4 font-semibold text-md">Number</th>
          <th className="w-1/4 font-semibold text-md">Creation Date</th>
          <th className="w-1/4 font-semibold text-md md:text-center hidden md:table-cell">
            Status
          </th>
          <th className="w-1/4 font-semibold text-md">Total</th>
        </tr>
      </thead>
      <tbody className="text-center divide-y">
        {orders === null || orders === void 0
          ? void 0
          : orders.map((order) => (
              <tr
                className="h-16 cursor-pointer"
                key={order.id}
                onClick={() => router.push(paths.account.orders._token(order.token).$url())}
              >
                <td>{order === null || order === void 0 ? void 0 : order.number}</td>
                <td>{order.created.slice(0, 10)}</td>
                <td className="hidden md:table-cell">{order.status}</td>
                <td>{formatPrice(order.total.gross)}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
}
exports.OrdersTable = OrdersTable;
