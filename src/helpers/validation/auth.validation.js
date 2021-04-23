/* * email * password * username * */
import { validationMessages } from ".";
import * as  yup from "yup";

export const usernameValidator = () => yup.string()
    .min(3)
    .required(validationMessages.isRequired);

export const emailValidator = () => yup.string()
    .min(3)
    .email(validationMessages.emailFormat)
    .required(validationMessages.isRequired);


export const passwordValidator = () => yup.string()
    .min(3, validationMessages.maxLength(3, "رمز عبور"))
    .required(validationMessages.isRequired);


export  default {
    usernameValidator,
    emailValidator,
    passwordValidator
};