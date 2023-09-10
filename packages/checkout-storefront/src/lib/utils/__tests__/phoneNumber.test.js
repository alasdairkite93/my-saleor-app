"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const phoneNumber_1 = require("@/checkout-storefront/lib/utils/phoneNumber");
const countryCode = "PL";
describe("isValidPhoneNumber", () => {
  it("should return true for valid phone numbers", () => {
    expect((0, phoneNumber_1.isValidPhoneNumber)("+48172268096", countryCode)).toEqual(true);
    expect((0, phoneNumber_1.isValidPhoneNumber)("172268096", countryCode)).toEqual(true);
  });
  it("should return false for invalid phone numbers", () => {
    expect((0, phoneNumber_1.isValidPhoneNumber)("+4172268096", countryCode)).toEqual(false);
    expect((0, phoneNumber_1.isValidPhoneNumber)("+48111111111", countryCode)).toEqual(false);
    expect((0, phoneNumber_1.isValidPhoneNumber)("123", countryCode)).toEqual(false);
    expect((0, phoneNumber_1.isValidPhoneNumber)("foobar", countryCode)).toEqual(false);
    expect((0, phoneNumber_1.isValidPhoneNumber)("+48", countryCode)).toEqual(false);
  });
});
describe("getPhoneNumberWithCountryCode", () => {
  it("should return phone with added country code for valid phone with no code provided", () => {
    expect((0, phoneNumber_1.getPhoneNumberWithCountryCode)("172268096", countryCode)).toEqual(
      "+48172268096"
    );
  });
  it("should return unchanged phone for valid phone with code provided", () => {
    expect((0, phoneNumber_1.getPhoneNumberWithCountryCode)("+48172268096", countryCode)).toEqual(
      "+48172268096"
    );
  });
  it("should return unchanged phone number for invalid number", () => {
    expect((0, phoneNumber_1.getPhoneNumberWithCountryCode)("+4172268096", countryCode)).toEqual(
      "+4172268096"
    );
    expect((0, phoneNumber_1.getPhoneNumberWithCountryCode)("+48111111111", countryCode)).toEqual(
      "+48111111111"
    );
    expect((0, phoneNumber_1.getPhoneNumberWithCountryCode)("123", countryCode)).toEqual("123");
    expect((0, phoneNumber_1.getPhoneNumberWithCountryCode)("foobar", countryCode)).toEqual(
      "foobar"
    );
    expect((0, phoneNumber_1.getPhoneNumberWithCountryCode)("+48", countryCode)).toEqual("+48");
  });
});
