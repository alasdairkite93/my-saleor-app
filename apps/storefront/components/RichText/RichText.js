"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichText = void 0;
const editorjs_blocks_react_renderer_1 = __importDefault(require("editorjs-blocks-react-renderer"));
const react_1 = __importDefault(require("react"));
const util_1 = require("@/lib/util");
function RichText({ jsonStringData }) {
  const data = (0, util_1.parseEditorJSData)(jsonStringData);
  if (!data) {
    return null;
  }
  return (
    <article className="prose-2xl">
      <editorjs_blocks_react_renderer_1.default data={data} />
    </article>
  );
}
exports.RichText = RichText;
exports.default = RichText;
