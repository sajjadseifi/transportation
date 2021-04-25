/*
* firstname
* lastname
* phonenumber
* birthdate
* bio
* moder..
*/

import { composeValidators, hasLengthGreaterThan, hasLengthLessThan, isRequired } from "revalidate";
import { validationMessages } from ".";
import regexPattern, { createRegexsValidator } from "../regex/pattern";
import { strickLengthValidator } from "./validator";

export const firstnameValidator = () => { };

//-------------------phonenumber
const phoneNumberPattern = createRegexsValidator(regexPattern.phoneNumber);

export const phonenumberValidator = composeValidators(
    isRequired(validationMessages.isRequeredField("شماره همراه")),
    hasLengthGreaterThan(9)(validationMessages.minLength("شماره همراه", 9)),
    hasLengthLessThan(14)(validationMessages.maxLength("شماره همراه", 14)),
    phoneNumberPattern(validationMessages.phonenumberFortam)
)({ multiple: true });

const nationalIdPattern = createRegexsValidator(regexPattern.nationalId);

export const nationalIdValidator = composeValidators(
    isRequired(validationMessages.nationalIdFortam),
    strickLengthValidator(10)(
        validationMessages.strickengthNumeric("کد ملی", 10)
    ),
    nationalIdPattern(validationMessages.nationalIdFortam)
)({ multiple: true });

export const lastnameValidator = () => { };


export const birthdateValidator = () => { };

export const bioValidator = () => { };


export default {
    firstnameValidator,
    lastnameValidator,
    phonenumberValidator,
    birthdateValidator,
    bioValidator
};
