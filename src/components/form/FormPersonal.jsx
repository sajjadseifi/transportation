//default
import React from "react";
import { Form as FinalForm } from "react-final-form";
import { combineValidators } from "revalidate";
import { FormFieldList, Form } from ".";
import { SelectFormPanel } from "../../common/form/ui";

const initialValidate = combineValidators({
  // email: valisator.emailValidateor,
  // password: valisator.passwordValidator,
});

const FormPersonal = ({
  validate = initialValidate,
  initialValues = {},
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
  onChange = (values) => {},
}) => {
  const AfterFields = afterFields;
  const BeformFileds = beformFileds;
  return (
    <FinalForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, invalid, pristine, values, error, errors }) => {
        onChange(values);
        console.log({values})
        return (
          <Form className={formClass} onSubmit={handleSubmit}>
            <BeformFileds
              {...{ disabled: invalid || loading, pristine, loading }}
            />
            <FormFieldList {...{ formOptions, column }} />
            <AfterFields
              {...{ disabled: invalid || loading, pristine, loading }}
            />
            <div>{/* serverErrors */}</div>
          </Form>
        );
      }}
    />
  );
};

export default FormPersonal;
