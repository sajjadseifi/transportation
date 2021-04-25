import { createValidator } from "revalidate";

export const createGraterDateValidator = () =>
    createValidator(
        (message) => (value) =>
            value && new Date(value) < new Date() ? undefined : message,
        (field) => `${field} Error`
    );
export const createLesserDateValidator = () =>
    createValidator(
        (message) => (value) =>
            value && new Date(value) > new Date() ? undefined : message,
        (field) => `${field} Error`
    );
export const strickLengthValidator = (number = 0) => createValidator(
    (message) => (value) => (value && number && value.length != number ? message : undefined),
    (field) => `${field} Error`
);

export default {
    createGraterDateValidator,
    createLesserDateValidator,
    createValidator
};
