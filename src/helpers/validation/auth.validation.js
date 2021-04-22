import { validationMessages } from ".";

/* * email * password * username * */
const yup = require("yup");
require("yup-password")(yup);




const usernameValidator = () => yup.string()
.min(3)
.required(validationMessages.isRequired);

const emailValidator = () => yup.string()
.min(3)
.email(validationMessages.emailFormat)
.required(validationMessages.isRequired);


const passwordValidator = () => yup.string()
.min(3,validationMessages.maxLength(3,"رمز عبور"))
.required(validationMessages.isRequired);


export {
    usernameValidator,
    emailValidator,
    passwordValidator
};