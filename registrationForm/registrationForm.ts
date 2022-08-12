import {
  REGEXP_PHONENUMB,
  REGEXP_EMAIL,
  REGEXP_PASS,
} from "../fixtures/regexp";
import { MESSAGES } from "../fixtures/expectedResponses";

export class RegistrationForm {
  static ValidatePhoneNumber(inputPhoneNumber: string): string {
    if (inputPhoneNumber.match(REGEXP_PHONENUMB)) {
      return `${inputPhoneNumber} ${MESSAGES.positivePhoneNumber}`;
    } else {
      return `${inputPhoneNumber} ${MESSAGES.negativePhoneNumber}`;
    }
  }

  static ValidateEmail(inputEmail: string): string {
    if (inputEmail.match(REGEXP_EMAIL)) {
      return `${inputEmail} ${MESSAGES.positiveEmail}`;
    } else {
      return `${inputEmail} ${MESSAGES.negativeEmail}`;
    }
  }

  static ValidatePassword(inputPassword: string): string {
    if (inputPassword.match(REGEXP_PASS)) {
      return `${inputPassword} ${MESSAGES.positivePassword}`;
    } else {
      return `${inputPassword} ${MESSAGES.negativePassword}`;
    }
  }
}
