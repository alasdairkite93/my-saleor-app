"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const Footer_1 = require("../Footer");
const Navbar_1 = require("../Navbar");
function Layout({ children }) {
  return (
    <>
      <Navbar_1.Navbar />
      <div className="align-middle flex flex-col flex-grow">{children}</div>
      <Footer_1.Footer />
    </>
  );
}
exports.Layout = Layout;
exports.default = Layout;
