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
}) => {
  const AfterFields = afterFields;
  const BeformFileds = beformFileds;
  return (
    <FinalForm
      initialValues={{ ...initialValues, solam: "Chtori" }}
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, invalid, pristine, values, error, errors }) => (
        <Form className={formClass} onSubmit={handleSubmit}>
          {console.log({ values })}
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
