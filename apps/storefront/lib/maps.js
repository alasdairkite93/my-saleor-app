"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapEdgesToItems = void 0;
function mapEdgesToItems(data) {
  var _a;
  return (
    ((_a = data === null || data === void 0 ? void 0 : data.edges) === null || _a === void 0
      ? void 0
      : _a.map(({ node }) => node)) || []
  );
}
exports.mapEdgesToItems = mapEdgesToItems;
