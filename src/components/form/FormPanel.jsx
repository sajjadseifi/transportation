//default
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { combineValidators } from "revalidate";
import { FormPersonal } from ".";
import { ButtonAuthForm } from "../../common/form";
import { loginFormOption } from "../../common/form.option";
import * as formActions from "../../@redux/actions/form.actions";
const validate = combineValidators({});

const FormPanel = ({
  formTitle,
  formKey = "",
  agentForm,
  createAgent,
  updateAgent,
  deleteAgent,
  validate = validate,
  buildFormModel = (values) => {},
  match: { params: id },
}) => {
  const { loading, deleteLoading, form } = useSelector((state) => state.form);

  const isUpdate = !(id == undefined || id == null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isUpdate) {
      //fetch data to show list....
      dispatch(formActions.getFormById(id, agentForm, formKey));
    }
    return () => dispatch(formActions.removeFormByKey(id));
  }, [id]);

  const onSubmitHandler = (values) => {
    const formModel = buildFormModel(values);
    dispatch(
      formActions.formSubmit(formModel, createAgent, updateAgent, {
        createDisplay: "",
        updateDisplay: "",
      })
    );
  };
  const deleteHandler = () => {
    if (!id) return;

    dispatch(formActions.formDelete(id, deleteAgent, ""));
  };

  const formButtonTitle = isUpdate ? "ویرایش" : "ثبت";
  return (
    <div className="form-panel">
      <div className="form-panel-top">
        <h3 className="form-panel-title">
          <span>{formTitle}</span>
        </h3>
      </div>
      <div className="form-panel-body">
        <FormPersonal
          validate={validate}
          onSubmit={onSubmitHandler}
          formClass="w-100"
          formOptions={loginFormOption}
          afterFields={({ disabled }) => (
            <>
              <ButtonAuthForm
                className="mt-5"
                title={formButtonTitle}
                {...{ disabled, loading }}
              />
              {isUpdate && <button>حذف</button>}
            </>
          )}
        />
      </div>
    </div>
  );
};

export default withRouter(FormPanel);
