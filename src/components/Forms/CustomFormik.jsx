import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Forms from "../Form/Form";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { authValidation } from "../../helpers/validation";

const yup = require("yup");
require("yup-password")(yup);

const defaultSchema = yup.object().shape({
  // email: authValidation.emailValidator,
  // password: authValidation.passwordValidator,
});

const CustomFormik = ({
  validationSchema = defaultSchema,
  initialValues = {},
  AsyncFunction = (values) => {},
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={AsyncFunction}
    >
      {({ errors, handleChange, touched, isValid, dirty }) => {
        return (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <button disabled={!isValid || !dirty} type="submit">
              Submit
            </button>
            Typescript changes
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
