"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockUrqlProvider = void 0;
const urql_1 = require("urql");
const getMockUrqlProvider = (mockedResponseState) => {
  const MockProvider = ({ children }) => (
    <urql_1.Provider value={mockedResponseState}>{children}</urql_1.Provider>
  );
  return MockProvider;
};
exports.getMockUrqlProvider = getMockUrqlProvider;
