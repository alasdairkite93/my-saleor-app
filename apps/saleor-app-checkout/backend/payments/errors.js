"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingPaymentProviderSettingsError =
  exports.UnknownPaymentError =
  exports.KnownPaymentError =
  exports.MissingUrlError =
    void 0;
class MissingUrlError extends Error {
  constructor(provider, order) {
    var _a;
    super(
      `Missing url! Provider: ${provider} | Order ID: ${
        (_a = order === null || order === void 0 ? void 0 : order.id) !== null && _a !== void 0
          ? _a
          : "(missing)"
      }`
    );
    this.provider = provider;
    this.order = order;
    Object.setPrototypeOf(this, MissingUrlError.prototype);
  }
}
exports.MissingUrlError = MissingUrlError;
class KnownPaymentError extends Error {
  constructor(provider, errors) {
    super(`Error! Provider: ${provider} | Errors: ${errors.join(", ")}`);
    this.provider = provider;
    this.errors = errors;
    Object.setPrototypeOf(this, KnownPaymentError.prototype);
  }
}
exports.KnownPaymentError = KnownPaymentError;
class UnknownPaymentError extends Error {
  constructor(provider, error, order) {
    super(`Error! Provider: ${provider} | Error: ${error.message}`);
    this.provider = provider;
    this.error = error;
    this.order = order;
    Object.setPrototypeOf(this, UnknownPaymentError.prototype);
  }
}
exports.UnknownPaymentError = UnknownPaymentError;
class MissingPaymentProviderSettingsError extends Error {
  constructor(provider, missingOptions) {
    const opts = missingOptions.join(", ");
    super(`Error! Provider: ${provider} | Missing payment provider configuration: ${opts}`);
    this.provider = provider;
    Object.setPrototypeOf(this, MissingPaymentProviderSettingsError.prototype);
  }
}
exports.MissingPaymentProviderSettingsError = MissingPaymentProviderSettingsError;
