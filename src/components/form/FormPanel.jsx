//default
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { combineValidators } from "revalidate";
import { FormPersonal } from ".";
import { ButtonAuthForm } from "../../common/form";
import { loginFormOption } from "../../common/form.option";

const validate = combineValidators({});

const FormPanel = ({ validate = validate, match: { params: id } }) => {
  const { loading } = useSelector((state) => state.form);

  const isUpdate = !(id == undefined || id == null);

  useEffect(() => {
    if (isUpdate) {
      //fetch data to show list....
    }
    console.log({ id });
  }, [id]);

  const onSubmitHandler = () => {};
  const deleteHandler = () => {};

  return (
    <div className="form-panel">
      <div className="form-panel-top">
        <h3 className="form-panel-title">
          <span></span>
        </h3>
      </div>
      <div className="form-panel-body">
        <FormPersonal
          validate={validate}
          onSubmit={onSubmitHandler}
          formClass="w-100"
          formOptions={loginFormOption}
          afterFields={({ disabled }) => (
            <ButtonAuthForm
              className="mt-5"
              title="ورود به سامانه"
              {...{ disabled, loading }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default withRouter(FormPanel);
