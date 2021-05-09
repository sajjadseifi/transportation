//default
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, withRouter, Link, useHistory } from "react-router-dom";
import { combineValidators } from "revalidate";
import { FormPersonal, FormPanelTop } from ".";
import { useState } from "react";
import ButtonForm from "../UI/button/button.form";
import swal from "sweetalert";
import { confirmRemoveSwal } from "../../common/swal";
import { Icon } from "rsuite";
import { FlexBox } from "../box";
import { roleType } from "../../constants";
import { Security } from "../../core/security";
import { FormModel } from "../../models";
import * as formActions from "../../@redux/actions/form.actions";
import * as formActionTypes from "../../@redux/@types/form.action.types";

//default validate
const validateDemo = combineValidators({});

const FormPanel = ({
  label,
  singleName = "",
  formTitle = "",
  displayProperty = "",
  formUpdateTitle = "",
  formKey = "",
  agentForm = async (id) => {},
  createAgent = async (temp) => {},
  updateAgent = async (id, temp) => {},
  deleteAgent = async (id) => {},
  validate = validateDemo,
  buildFormModel = (formId, values) => {},
  buildInitialModel = (values) => {},
  getDisplayNameFromForm = (form) => {},
  formOptions = [],
  column = false,
  addFormPath = "/",
  redirectPath = "/",
  onChangeForm = (values) => {},
  formAction=(isUpdate)=>{},
}) => {
  const { loading, deleteLoading, forms } = useSelector((state) => state.form);
  const [initialValues, setInitialValues] = useState({});
  const { id: formId } = useParams();
  const dispatch = useDispatch();

  const isUpdate = !!formId;

  useEffect(() => {
    if (isUpdate) {
      console.log("UPDATE");
      //fetch data to show list....
      dispatch(
        formActions.getFormById(formId, agentForm, formKey, redirectPath, label)
      );
    } else {
      //remove exist value
      const formObject = buildInitialModel() || {};
      setInitialValues(formObject);
    }
    formAction(isUpdate);
    return () => {
      dispatch(formActions.removeFormByKey(formId));
      setInitialValues({});
    };
  }, [dispatch, formId]);

  useEffect(() => {
    if (!isUpdate || !forms || !forms[formKey]) return;

    const formBody = buildInitialModel(forms[formKey]) || forms[formKey];
    setInitialValues(formBody);

    return () => setInitialValues({});
  }, [forms]);
  const restFormHandler = () => {
    console.log("restFormHandler");
    setInitialValues({});
  };
  const onSubmit = (values) => {
    const formModel = buildFormModel(formId, values);
    dispatch(
      formActions.formSubmit(
        formModel,
        createAgent,
        updateAgent,
        redirectPath,
        restFormHandler
      )
    );
  };

  const deleteHandler = () => {
    const dname =
      getDisplayNameFromForm(forms[formKey]) || forms[formKey][displayProperty];

    const formModel = new FormModel(formId, dname);
    dispatch(
      formActions.deleteFormQuestion(
        dname,
        formModel,
        deleteAgent,
        redirectPath
      )
    );
  };
  const removeFormState = () => {
    dispatch(formActionTypes.removeForm(formKey));
  };

  return (
    <div className="form-panel px-5 position-relative text-muted-light">
      <FormPanelTop
        {...{
          formTitle,
          loading: loading || deleteLoading,
          isUpdate,
          deleting: deleteLoading,
          formUpdateTitle,
        }}
      />

      <div className="form-panel-body">
        <FormPersonal
          onChange={onChangeForm}
          // validate={validate}
          initialValues={initialValues}
          formClass="w-100"
          {...{ column, formOptions, validate, onSubmit }}
          afterFields={({ disabled }) => (
            <div className="py-5  d-flex align-items-center  justify-content-between">
              {isUpdate && (
                <Link
                  className="px-4"
                  onClick={removeFormState}
                  to={addFormPath}
                >
                  <FlexBox alignCenter justCenter>
                    <Icon icon="arrow-left" />
                    <h4 className="px-2">{`افزودن ${singleName}`}</h4>
                  </FlexBox>
                </Link>
              )}
              <div>
                <Security role={roleType.SUPPER_ADMIN}>
                  {isUpdate && (
                    <ButtonForm
                      onClick={deleteHandler}
                      disabled={deleteLoading || loading}
                      loading={deleteLoading}
                      type="danger"
                    >
                      حذف
                    </ButtonForm>
                  )}
                </Security>
                <ButtonForm
                  IsButton
                  type={isUpdate ? "info" : "success"}
                  loading={forms[formKey] && loading}
                  disabled={disabled || deleteLoading}
                >
                  {isUpdate ? "ویرایش" : "ثبت"}
                </ButtonForm>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default withRouter(FormPanel);
