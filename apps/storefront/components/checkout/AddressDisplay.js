"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressDisplay = void 0;
function AddressDisplay({ address }) {
  return (
    <div className="text-base">
      <address className="not-italic mb-2">
        <p>
          {address === null || address === void 0 ? void 0 : address.firstName}{" "}
          {address === null || address === void 0 ? void 0 : address.lastName}
        </p>
        <p>{address === null || address === void 0 ? void 0 : address.streetAddress1}</p>
        <p>
          {address === null || address === void 0 ? void 0 : address.postalCode}{" "}
          {address === null || address === void 0 ? void 0 : address.city},{" "}
          {address === null || address === void 0 ? void 0 : address.country.country}
        </p>
      </address>
      <div>{address === null || address === void 0 ? void 0 : address.phone}</div>
    </div>
  );
}
exports.AddressDisplay = AddressDisplay;
exports.default = AddressDisplay;
