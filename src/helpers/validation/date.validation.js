/* * startdate * enddate * rangedate * moder.. */
import { parse, isDate } from "date-fns";
import * as  yup from "yup";


function parseDateString(value, originalValue) {

    const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "yyyy-MM-dd", new Date());

    return parsedDate;
}

export const dateValidator = () => yup.date().transform(parseDateString);

export const startdateValidator = () => dateValidator().min(new Date());

export const endateValidator = () => dateValidator().max(new Date());

export const rangedateValidator = () => { };


export default {
    startdateValidator,
    endateValidator,
    rangedateValidator,
    dateValidator
};