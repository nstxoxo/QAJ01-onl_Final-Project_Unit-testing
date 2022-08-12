import { RegistrationForm } from "../registrationForm/registrationForm";
import { expect } from "chai";
import { INPUT_VALUE } from "../fixtures/inputValue";
import { EXPECTED_VALUE } from "../fixtures/expectedValue";

describe("Testing the registration form: positive", () => {
  it("Phone Number testing 1", () => {
    expect(
      RegistrationForm.ValidatePhoneNumber(
        INPUT_VALUE.inputFirstPositivePhoneNumber
      )
    ).to.be.eql(EXPECTED_VALUE.expectedFirstPositivePhoneNumber);
  });

  it("Phone Number testing 2", () => {
    expect(
      RegistrationForm.ValidatePhoneNumber(
        INPUT_VALUE.inputSecondPositivePhoneNumber
      )
    ).to.be.eql(EXPECTED_VALUE.expectedSecondPositivePhoneNumber);
  });

  it("Email testing 1", () => {
    expect(
      RegistrationForm.ValidateEmail(INPUT_VALUE.inputFirstPositiveEmail)
    ).to.be.eql(EXPECTED_VALUE.expectedFirstPositiveEmail);
  });

  it("Email testing 2", () => {
    expect(
      RegistrationForm.ValidateEmail(INPUT_VALUE.inputSecondPositiveEmail)
    ).to.be.eql(EXPECTED_VALUE.expectedSecondPositiveEmail);
  });

  it("Password testing 1", () => {
    expect(
      RegistrationForm.ValidatePassword(INPUT_VALUE.inputFirstPositivePassword)
    ).to.be.eql(EXPECTED_VALUE.expectedFirstPositivePassword);
  });

  it("Password testing 2", () => {
    expect(
      RegistrationForm.ValidatePassword(INPUT_VALUE.inputSecondPositivePassword)
    ).to.be.eql(EXPECTED_VALUE.expectedSecondPositivePassword);
  });

  it("Password testing 3", () => {
    expect(
      RegistrationForm.ValidatePassword(INPUT_VALUE.inputThirdPositivePassword)
    ).to.be.eql(EXPECTED_VALUE.expectedThirdPositivePassword);
  });
});
