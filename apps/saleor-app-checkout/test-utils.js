"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableConsole =
  exports.consoleTypes =
  exports.setupRecording =
  exports.setupPollyMiddleware =
  exports.removeBlacklistedVariables =
  exports.mockRequestStream =
  exports.mockRequest =
    void 0;
const omit_deep_lodash_1 = __importDefault(require("omit-deep-lodash"));
const path_1 = __importDefault(require("path"));
const setup_polly_jest_1 = require("setup-polly-jest");
const node_mocks_http_1 = require("node-mocks-http");
const handlers_1 = require("./mocks/handlers");
const headers_polyfill_1 = require("headers-polyfill");
const node_stream_1 = require("node:stream");
const mockRequest = (method = "GET") => {
  const { req, res } = (0, node_mocks_http_1.createMocks)({
    method,
    url: `https://test.localhost/?saleorApiUrl=${process.env.NEXT_PUBLIC_SALEOR_API_URL}`,
    query: {
      saleorApiUrl: process.env.NEXT_PUBLIC_SALEOR_API_URL,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return {
    req: req,
    res: res,
  };
};
exports.mockRequest = mockRequest;
/**
 * Use this for routes with bodyParser = false
 */
const mockRequestStream = (method = "GET", _a = { body: undefined }) => {
  var { body } = _a,
    params = __rest(_a, ["body"]);
  const { req, res } = (0, exports.mockRequest)(method);
  const bodyStr = body ? JSON.stringify(body) : "";
  const reqStream = Object.assign(node_stream_1.Readable.from([bodyStr]), req, params);
  return {
    req: reqStream,
    res: res,
  };
};
exports.mockRequestStream = mockRequestStream;
const HEADERS_BLACKLIST = new Set([
  "authorization-bearer",
  "authorization",
  "set-cookie",
  "saleor-signature",
]);
const VARIABLES_BLACKLIST = [
  "email",
  "password",
  "redirectUrl",
  "newPassword",
  "oldPassword",
  "newEmail",
  "token",
  "refreshToken",
  "csrfToken",
];
const removeBlacklistedVariables = (obj) => {
  if (!obj || typeof obj === "string") return obj;
  return (0, omit_deep_lodash_1.default)(obj, ...VARIABLES_BLACKLIST);
};
exports.removeBlacklistedVariables = removeBlacklistedVariables;
const tryParse = (text) => {
  if (!text) {
    return undefined;
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
};
const setupPollyMiddleware = (server) => {
  // Hide sensitive data in headers or in body
  server.any().on("beforePersist", (_, recording) => {
    var _a, _b;
    const requestJson = tryParse(
      (_a = recording.request.postData) === null || _a === void 0 ? void 0 : _a.text
    );
    const requestHeaders = recording.request.headers.filter(
      (el) => !HEADERS_BLACKLIST.has(el.name)
    );
    const responseJson = tryParse(
      (_b = recording.response.content) === null || _b === void 0 ? void 0 : _b.text
    );
    const responseHeaders = recording.response.headers.filter(
      (el) => !HEADERS_BLACKLIST.has(el.name)
    );
    const filteredRequestJson = (0, exports.removeBlacklistedVariables)(requestJson);
    const filteredResponseJson = (0, exports.removeBlacklistedVariables)(responseJson);
    if (filteredRequestJson) {
      recording.request.postData.text = JSON.stringify(filteredRequestJson);
    }
    if (filteredResponseJson) {
      recording.response.content.text = JSON.stringify(filteredResponseJson);
    }
    recording.request.headers = requestHeaders;
    recording.response.cookies = [];
    recording.response.headers = responseHeaders;
  });
  // Check if request is handled by msw
  server
    .any()
    .filter((req) => {
      const { url, method, headers, body, id } = req;
      let reqBody;
      if (typeof body === "string") {
        try {
          reqBody = JSON.parse(body);
        } catch (e) {
          reqBody = body !== null && body !== void 0 ? body : "";
        }
      } else {
        reqBody = body !== null && body !== void 0 ? body : "";
      }
      const fakeReq = {
        id: id !== null && id !== void 0 ? id : "",
        url: new URL(url),
        body: reqBody,
        mode: "cors",
        cache: "default",
        method,
        cookies: {},
        headers: new headers_polyfill_1.Headers(headers),
        redirect: "manual",
        bodyUsed: false,
        referrerPolicy: "no-referrer",
        destination: "document",
        credentials: "same-origin",
        referrer: "",
        integrity: "",
        keepalive: false,
        passthrough: () => ({
          passthrough: false,
          headers: new headers_polyfill_1.Headers(),
          body: reqBody,
          once: false,
          status: 200,
          statusText: "",
          delay: 0,
        }),
      };
      const isHandledByMsw = handlers_1.handlers.some((handler) => handler.test(fakeReq));
      if (isHandledByMsw && (process.env.DEBUG || process.env.CI)) {
        console.debug("(from Polly.js) Passing request to MSW:\n", JSON.stringify(fakeReq));
      }
      return isHandledByMsw;
    })
    .passthrough();
};
exports.setupPollyMiddleware = setupPollyMiddleware;
const getPollyConfig = () => {
  var _a;
  // use replay mode by default, override if POLLY_MODE env variable is passed
  const mode = process.env.CI
    ? "replay"
    : (_a = process.env.POLLY_MODE) !== null && _a !== void 0
    ? _a
    : "replay";
  if (mode === "record") {
    return {
      mode: "record",
      recordIfMissing: true,
      recordFailedRequests: true,
    };
  }
  if (mode === "record_missing") {
    return {
      mode: "replay",
      recordIfMissing: true,
      recordFailedRequests: true,
    };
  }
  return {
    mode: "replay",
    recordIfMissing: false,
    recordFailedRequests: false,
  };
};
const setupRecording = () => {
  const opts = getPollyConfig();
  return (0, setup_polly_jest_1.setupPolly)(
    Object.assign(Object.assign({}, opts), {
      // Fix for Jest runtime issues (inline require)
      // https://github.com/gribnoysup/setup-polly-jest/issues/23#issuecomment-890494186
      adapters: [require("@pollyjs/adapter-fetch")],
      persister: require("@pollyjs/persister-fs"),
      flushRequestsOnStop: true,
      adapterOptions: {
        fetch: {
          context: globalThis,
        },
      },
      persisterOptions: {
        fs: {
          recordingsDir: path_1.default.resolve("./recordings"),
        },
      },
      matchRequestsBy: {
        url: {
          protocol: true,
          username: true,
          password: true,
          hostname: true,
          port: true,
          pathname: true,
          query: true,
          hash: false,
        },
        body: true,
        order: true,
        method: true,
        headers: false,
      },
    })
  );
};
exports.setupRecording = setupRecording;
exports.consoleTypes = ["log", "debug", "info", "warn", "error"];
function disableConsole(logType) {
  if (process.env.DEBUG) return;
  const types = Array.isArray(logType) ? logType : [logType];
  types.forEach((type) => {
    jest.spyOn(console, type).mockImplementation(() => {});
  });
}
exports.disableConsole = disableConsole;
