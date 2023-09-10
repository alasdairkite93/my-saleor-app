"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("next");
const server_1 = require("./mocks/server");
const test_utils_1 = require("./test-utils");
// Establish API mocking before all tests.
beforeAll(() =>
  server_1.server.listen({
    // if not handled by msw, it will be by Polly.js
    onUnhandledRequest: "bypass",
  })
);
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server_1.server.resetHandlers());
// Clear mocked console.xyz() calls when used `disableConsole` from test-utils
afterEach(() => {
  test_utils_1.consoleTypes.forEach((type) => {
    var _a;
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    typeof ((_a = console[type]) === null || _a === void 0 ? void 0 : _a.mockClear) ===
      "function" && console[type].mockClear();
  });
});
// Clean up after the tests are finished.
afterAll(() => server_1.server.close());
