import { createValidator } from "revalidate";


export const createRegexsValidator = (regex) => createValidator(
    (message) => (value) =>
        value && !regex.test(value) ? message : undefined,
    (field) => `${field} Error`
);

export default {
    username: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    fullname: /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/,
    password: /^[A-Za-z\d]{8,}$/,
    birthday: /^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|([1-2][0-9])|(0[1-9]))))$/,
    nationalId: /^\d{10}$/,
    phoneNumber: /^(\+\d{2,3}|\d{2,3}|0)?\d{10}$/,
};

