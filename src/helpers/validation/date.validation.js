/* * startdate * enddate * rangedate * moder.. */
import { parse, isDate } from "date-fns";
import yup from "yup";


function parseDateString(value, originalValue) {
    
    const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "yyyy-MM-dd", new Date());

    return parsedDate;
}

const dateValidator = () => yup.date().transform(parseDateString);

const startdateValidator = () => dateValidator().min(new Date());

const endateValidator = () => dateValidator().max(new Date());

const rangedateValidator = () => { };


export {
    startdateValidator,
    endateValidator,
    rangedateValidator,
    dateValidator
};