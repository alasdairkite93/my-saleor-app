"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encryption_1 = require("@/saleor-app-checkout/backend/configuration/encryption");
describe("@/saleor-app-checkout/backend/configuration/encryption", () => {
  describe("obfuscateValue", () => {
    it("obfuscates first part of value", () => {
      expect((0, encryption_1.obfuscateValue)("12345")).toBe("•••• 5");
      expect((0, encryption_1.obfuscateValue)("123456")).toBe("•••• 56");
      expect((0, encryption_1.obfuscateValue)("1234567")).toBe("•••• 567");
      expect((0, encryption_1.obfuscateValue)("123456789")).toBe("•••• 6789");
      expect((0, encryption_1.obfuscateValue)("1234567__qwe$%#%^!@#89abcd")).toBe("•••• abcd");
    });
    it("obfuscates everything for value length shorter than 4", () => {
      expect((0, encryption_1.obfuscateValue)("1")).toBe("••••");
      expect((0, encryption_1.obfuscateValue)("12")).toBe("••••");
      expect((0, encryption_1.obfuscateValue)("123")).toBe("••••");
      expect((0, encryption_1.obfuscateValue)("1234")).toBe("••••");
    });
  });
});
