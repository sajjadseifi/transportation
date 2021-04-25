//default
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { combineValidators } from "revalidate";
import { FormPersonal } from ".";
import { ButtonAuthForm } from "../../common/form";
import { loginFormOption } from "../../common/form.option";
import * as formActions from "../../@redux/actions/form.actions";
import { useState } from "react";

//default validate
const validate = combineValidators({});

const FormPanel = ({
  formTitle = "",
  formKey = "",
  agentForm = async (id) => {},
  createAgent = async (temp) => {},
  updateAgent = async (id, temp) => {},
  deleteAgent = async (id) => {},
  validate = validate,
  buildFormModel = (formId, values) => {},
  buildInitialModel = (values) => {},
  formOptions = [],
  column = false,
}) => {
  const history = useHistory();
  const { formId } = history.location.state;
  console.log({ formId });

  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(buildInitialModel() || {});
  const { loading: fromLoading, deleteLoading, forms } = useSelector(
    (state) => state.form
  );

  const isUpdate = !(formId == undefined || formId == null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isUpdate) {
      //fetch data to show list....
      console.log("GET FORM");
      dispatch(formActions.getFormById(formId, agentForm, formKey));
    }
    return () => dispatch(formActions.removeFormByKey(formId));
  }, [formId]);

  useEffect(() => {
    if (!forms || !forms[formKey]) return;
  }, [forms]);

  const onSubmit = (values) => {
    const formModel = buildFormModel(formId, values);

    dispatch(formActions.formSubmit(formModel, createAgent, updateAgent));
  };
  const deleteHandler = () => {
    console.log("DELETE : ", formId);
    if (!formId) return;

    dispatch(formActions.formDelete(formId, deleteAgent, ""));
  };

  const formButtonTitle = isUpdate ? "ویرایش" : "ثبت";
  const formClass = "w-100";
  return (
    <div className="form-panel px-5">
      <div className="form-panel-top  m-3">
        <h3 className="form-panel-title p-5 mx-5">
          <span>{formTitle}</span>
        </h3>
        <div className="progress">
          <div
            className={`progress-bar progress-bar-striped ${
              loading ? "progress-bar-animated  bg-info" : "opacity-0"
            }`}
            role="progressbar"
            ariaValuenow="75"
            ariaValuemin="0"
            ariaValuemax="100"
            style={{ width: "100%", height: 20 }}
          ></div>
        </div>
      </div>

      <div className="form-panel-body">
        <FormPersonal
          {...{ column, formOptions, validate, onSubmit, formClass }}
          afterFields={({ disabled }) => (
            <>
              <ButtonAuthForm
                className="mt-5"
                title={formButtonTitle}
                {...{ disabled, loading }}
              />
              {isUpdate && <span onClick={deleteHandler}>حذف</span>}
            </>
          )}
        />
      </div>
    </div>
  );
};

export default FormPanel;
