/* * email * password * username * */
import { validationMessages } from ".";
import { composeValidators, hasLengthGreaterThan, hasLengthLessThan, isRequired } from "revalidate";
import regexPattern, { createRegexsValidator } from "../regex/pattern";


//-----------------username

const usernamePattern = createRegexsValidator(regexPattern.username);

console.log(validationMessages.isRequeredField("نام کاربری"));
export const usernameValidator = composeValidators(
    isRequired(validationMessages.isRequeredField("نام کاربری")),
    // isRequired({ message: "فیلد پسورد اجباری میباشد" }),
    hasLengthGreaterThan(8)(validationMessages.minLength("نام کاربری", 8)),
    hasLengthLessThan(20)(validationMessages.maxLength("نام کاربری", 20)),
    usernamePattern(validationMessages.usernameFortam)
)({ multiple: true });

//-------email----------
const emailPttern = createRegexsValidator(regexPattern.email);

export const emailValidator = composeValidators(
    isRequired(validationMessages.isRequeredField("ایمیل")),
    hasLengthGreaterThan(7)(validationMessages.minLength("ایمیل", 7)),
    emailPttern(validationMessages.emailFormat)
)({ multiple: true });
//--------password----------
const passwordPttern = createRegexsValidator(regexPattern.password);

export const passwordValidator = composeValidators(
    isRequired(validationMessages.isRequeredField("گذرواژه")),
    hasLengthGreaterThan(2)(validationMessages.minLength("گذرواژه", 8)),
    hasLengthLessThan(30)(validationMessages.maxLength("گذرواژه", 30)),
    passwordPttern(validationMessages.passwordFortam)
)({ multiple: true });


export default {
    usernameValidator,
    emailValidator,
    passwordValidator
};