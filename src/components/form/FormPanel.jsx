//default
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, withRouter, Link } from "react-router-dom";
import { combineValidators } from "revalidate";
import { FormPersonal, FormPanelTop } from ".";
import ButtonForm from "../UI/button/button.form";
import { Icon, Loader } from "rsuite";
import { FlexBox } from "../box";
import { roleType } from "../../constants";
import { Security } from "../../core/security";
import { FormModel } from "../../models";
import * as formActions from "../../@redux/actions/form.actions";
import * as formActionTypes from "../../@redux/@types/form.action.types";
import ActionsFormPanel from "./form-panel/actions.form.panel";
import SquareSpinnerCodepen from "../codepen/square.spinner.codepen";
import { NinjaConditionWrappr, ShowingWrapper } from "../wrapper";

//default validate
const validateDemo = combineValidators({});

const FormPanel = ({
  label,
  singleName = "",
  formTitle = "",
  displayProperty = "",
  formUpdateTitle = "",
  formKey = "",
  beformFileds = () => <></>,
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
  formAction = (isUpdate) => {},
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
      console.log("CLEARED");
      dispatch(formActions.removeFormByKey(formKey));
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
        restFormHandler,
        formKey
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
        redirectPath,
        formKey
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
      <NinjaConditionWrappr condition={!forms[formKey] && loading}>
        <FlexBox justCenter>
          <SquareSpinnerCodepen lable="درحال بارگذاری..." />
        </FlexBox>
        <div className="form-panel-body">
          <FormPersonal
            onChange={onChangeForm}
            // validate={validate}
            initialValues={initialValues}
            formClass="w-100"
            beformFileds={beformFileds}
            {...{ column, formOptions, validate, onSubmit }}
            afterFields={({ disabled }) => (
              <div className="py-5  d-flex align-items-center  justify-content-between">
                <ActionsFormPanel
                  {...{
                    loading,
                    removeFormState,
                    addFormPath,
                    singleName,
                    deleteHandler,
                    isUpdate,
                    disabled,
                    deleteLoading,
                    isFormExist: !!forms[formKey],
                  }}
                />
              </div>
            )}
          />
        </div>
      </NinjaConditionWrappr>
    </div>
  );
};

export default withRouter(FormPanel);
