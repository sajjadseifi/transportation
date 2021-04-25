/* * startdate * enddate * rangedate * moder.. */
import { parse, isDate } from "date-fns";
import { composeValidators } from "revalidate";
import { validationMessages } from ".";
import { validatorCreator } from ".";
import regexPattern, { createRegexsValidator } from "../regex/pattern";
import { isRequired } from "./validation.messages";

function parseDateString(value, originalValue) {

    const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "yyyy-MM-dd", new Date());

    return parsedDate;
}
// date condition
const datePattern = createRegexsValidator(regexPattern.birthday);

const deteIsGrater = validatorCreator.createGraterDateValidator();

const deteIsLesser = validatorCreator.createLesserDateValidator()
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