"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withNames = exports.withLabels = void 0;
const withLabels = (intl, messages, items) => {
  return items.map((item) =>
    Object.assign(Object.assign({}, item), { label: intl.formatMessage(messages[item.id]) })
  );
};
exports.withLabels = withLabels;
const withNames = (intl, messages, items) => {
  return items.map((item) =>
    Object.assign(Object.assign({}, item), { name: intl.formatMessage(messages[item.id]) })
  );
};
exports.withNames = withNames;
