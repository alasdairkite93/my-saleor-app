"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createParseAndValidateBody =
  exports.safeJsonParse =
  exports.wrapError =
  exports.findById =
  exports.getById =
    void 0;
const getById = (idToCompare) => (obj) => obj.id === idToCompare;
exports.getById = getById;
const findById = (objList, idToCompare) => objList.find((0, exports.getById)(idToCompare));
exports.findById = findById;
const wrapError = (err) => {
  if (!err) {
    return new Error();
  }
  if (err instanceof Error) {
    return err;
  }
  if (typeof err === "string") {
    return new Error(err);
  }
  if (typeof err === "object" && "toString" in err) {
    return new Error(err.toString());
  }
  return new Error(JSON.stringify(err));
};
exports.wrapError = wrapError;
const safeJsonParse = (json) => {
  try {
    return [null, JSON.parse(json)];
  } catch (err) {
    return [(0, exports.wrapError)(err), null];
  }
};
exports.safeJsonParse = safeJsonParse;
const createParseAndValidateBody = (schema) => (reqBody) => {
  try {
    const maybeBody = typeof reqBody === "string" ? JSON.parse(reqBody) : reqBody;
    return [null, schema.validateSync(maybeBody)];
  } catch (err) {
    return [(0, exports.wrapError)(err), null];
  }
};
exports.createParseAndValidateBody = createParseAndValidateBody;
