/* * startdate * enddate * rangedate * moder.. */
import { validationMessages,  } from ".";
import { composeValidators, isRequired } from "revalidate";
import regexPattern, { createRegexsValidator } from "../regex/pattern";
import * as validatorCreator from "./validator";

// date condition
const datePattern = createRegexsValidator(regexPattern.birthday);

const deteIsGrater = validatorCreator.createGraterDateValidator();

const deteIsLesser = validatorCreator.createLesserDateValidator();
//

export const dateValidator = composeValidators(
    datePattern(validationMessages.datePattern)
)({ multiple: true });

export const startdateValidator = composeValidators(
    isRequired(validationMessages.isRequeredField("تاریخ")),
    datePattern(validationMessages.datePattern),
    deteIsGrater(validationMessages.dateIsGrater)
)({ multiple: true });

export const endateValidator = composeValidators(
    isRequired(validationMessages.isRequeredField("تاریخ")),
    datePattern(validationMessages.datePattern),
    deteIsLesser(validationMessages.dateIsLesser)
)({ multiple: true });

export const rangedateValidator = () => { };


export default {
    startdateValidator,
    endateValidator,
    rangedateValidator,
    dateValidator
};