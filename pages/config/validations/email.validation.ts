import { REGEX_EMAIL } from "../constants/email-regex.constants";

export const emailValidation = (email: string) => {
  const regex = new RegExp(REGEX_EMAIL);
  return regex.test(email);
}
