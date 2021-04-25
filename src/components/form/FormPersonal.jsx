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
  beformFileds = ({ loading, disabled, pristine, invalid }) => <></>,
  afterFields = ({ loading, disabled, pristine, invalid }) => <></>,
  formOptions = [],
  loading = false,
  serverErrors = [],
  column,
  formClass,
  onSubmit = async (values) => {
    console.log(values);
  },
}) => {
  const AfterFields = afterFields;
  const BeformFileds = beformFileds;

  return (
    <FinalForm
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, invalid, pristine, error, errors }) => (
        <Form className={formClass} onSubmit={handleSubmit}>
          {console.log({ error, errors })}
          <BeformFileds
            {...{ disabled: invalid || loading, pristine, loading }}
          />
          <FormFieldList {...{ formOptions, column }} />
          <AfterFields
            {...{ disabled: invalid || loading, pristine, loading }}
          />
          <div>{/* serverErrors */}</div>
        </Form>
      )}
    />
  );
};

export default FormPersonal;
