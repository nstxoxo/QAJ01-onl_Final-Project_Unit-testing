import { RegistrationForm } from "../registrationForm/registrationForm";
import { expect } from "chai";
import { INPUT_VALUE } from "../fixtures/inputValue";
import { EXPECTED_VALUE } from "../fixtures/expectedValue";

describe("Registration form: negative tests", () => {
  it("Phone Number testing 1", () => {
    expect(
      RegistrationForm.ValidatePhoneNumber(
        INPUT_VALUE.inputFirstNegativePhoneNumber
      )
    ).to.be.eql(EXPECTED_VALUE.expectedFirstNegativePhoneNumber);
  });

  it("Phone Number testing 2", () => {
    expect(
      RegistrationForm.ValidatePhoneNumber(
        INPUT_VALUE.inputSecondNegativePhoneNumber
      )
    ).to.be.eql(EXPECTED_VALUE.expectedSecondNegativePhoneNumber);
  });

  it("Email testing 1", () => {
    expect(
      RegistrationForm.ValidateEmail(INPUT_VALUE.inputFirstNegativeEmail)
    ).to.be.eql(EXPECTED_VALUE.expectedFirstNegativeEmail);
  });

  it("Email testing 2", () => {
    expect(
      RegistrationForm.ValidateEmail(INPUT_VALUE.inputSecondNegativeEmail)
    ).to.be.eql(EXPECTED_VALUE.expectedSecondNegativeEmail);
  });

  it("Password testing 1", () => {
    expect(
      RegistrationForm.ValidatePassword(INPUT_VALUE.inputFirstNegativePassword)
    ).to.be.eql(EXPECTED_VALUE.expectedFirstNegativePassword);
  });

  it("Password testing 2", () => {
    expect(
      RegistrationForm.ValidatePassword(INPUT_VALUE.inputSecondNegativePassword)
    ).to.be.eql(EXPECTED_VALUE.expectedSecondNegativePassword);
  });

  it("Password testing 3", () => {
    expect(
      RegistrationForm.ValidatePassword(INPUT_VALUE.inputThirdNegativePassword)
    ).to.be.eql(EXPECTED_VALUE.expectedThirdNegativePassword);
  });
});
