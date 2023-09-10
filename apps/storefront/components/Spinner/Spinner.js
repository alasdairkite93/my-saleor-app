"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const outline_1 = require("@heroicons/react/outline");
function Spinner() {
  return (
    <div className="flex items-center justify-center w-full h-full flex-grow gap-2">
      <outline_1.RefreshIcon className="animate-spin w-5 h-5" data-testid="spinner" />
    </div>
  );
}
exports.Spinner = Spinner;
exports.default = Spinner;
