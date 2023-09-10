"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
const ui_kit_1 = require("@saleor/ui-kit");
const Section = ({ children, title }) => (
  <div className="mb-6">
    <ui_kit_1.Text weight="bold" color="secondary" className="mb-2">
      {title}
    </ui_kit_1.Text>
    {children}
  </div>
);
exports.Section = Section;
