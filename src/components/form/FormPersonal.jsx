//default
import React from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { authValidation } from "../../helpers/validation";
import { combineValidators } from "revalidate";
import { FormFieldList, Form } from ".";
import InputForm from "../../common/form/input.form";

const initialValidate = combineValidators({
  // email: valisator.emailValidateor,
  // password: valisator.passwordValidator,
});

const FormPersonal = ({
  validate = initialValidate,
  beformFileds = ({ loaing, diabled, pristine, invalid }) => <></>,
  afterFields = ({ loaing, diabled, pristine, invalid }) => <></>,
  formOptions = [],
  loading = false,
  serverErrors = [],
}) => {
  const onSubmit = (values) => {
    console.log(values);
  };
  const AfterFields = afterFields;
  const BeformFileds = beformFileds;

  return (
    <FinalForm
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, invalid, pristine, error, errors }) => (
        <Form onSubmit={handleSubmit}>
          <BeformFileds {...{ invalid, pristine, loading }} />
          <FormFieldList {...{ formOptions }} />
          <Field
            name="username"
            title="نام کاربری"
            type="text"
            placeholder="نام کاربری را وارد کنید"
            component={InputForm}
          />
          <Field
            name="password"
            title="رمز ورود"
            type="password"
            placeholder="رمز خود را وارد کنید"
            component={InputForm}
          />
          <AfterFields {...{ invalid, pristine, loading }} />
          <div>{/* serverErrors */}</div>
        </Form>
      )}
    />
  );
};

export default FormPersonal;
