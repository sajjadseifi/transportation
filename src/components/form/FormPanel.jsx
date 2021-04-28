//default
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, withRouter, Link } from "react-router-dom";
import { combineValidators } from "revalidate";
import { FormPersonal, FormPanelTop } from ".";
import * as formActions from "../../@redux/actions/form.actions";
import { useState } from "react";
import ButtonForm from "../UI/button/button.form";
import swal from "sweetalert";
import { confirmRemoveSwal } from "../../common/swal";
import { Icon } from "rsuite";
import { FlexBox } from "../box";

//default validate
const validateDemo = combineValidators({});

const FormPanel = ({
  singleName = "",
  formTitle = "",
  formKey = "",
  agentForm = async (id) => {},
  createAgent = async (temp) => {},
  updateAgent = async (id, temp) => {},
  deleteAgent = async (id) => {},
  validate = validateDemo,
  buildFormModel = (formId, values) => {},
  buildInitialModel = (values) => {},
  formOptions = [],
  column = false,
  addFormPath = "/",
}) => {
  const { loading: fromLoading, deleteLoading: dl, forms } = useSelector(
    (state) => state.form
  );

  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(buildInitialModel() || {});

  const { id: formId } = useParams();

  const dispatch = useDispatch();

  const isUpdate = !!formId;

  useEffect(() => {
    if (isUpdate) {
      //fetch data to show list....
      dispatch(formActions.getFormById(formId, agentForm, formKey));
    }
    return () => dispatch(formActions.removeFormByKey(formId));
  }, [formId]);

  useEffect(() => {
    if (!forms || !forms[formKey]) return;

    setInitialValues(forms[formKey]);

    return () => setInitialValues({});
  }, [forms]);

  const onSubmit = (values) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const formModel = buildFormModel(formId, values);

      dispatch(formActions.formSubmit(formModel, createAgent, updateAgent));
    }, 2000);
  };
  const deleteHandler = () => {
    setDeleteLoading(true);
    setTimeout(() => setDeleteLoading(false), 3000);
    return;
    if (!formId) return;

    swal(confirmRemoveSwal).then((value) => {
      if (value == "remove")
        dispatch(formActions.formDelete(formId, deleteAgent, ""));
    });
  };

  return (
    <div className="form-panel px-5 position-relative text-muted-light">
      <FormPanelTop
        {...{
          formTitle,
          loading: loading || deleteLoading,
          isUpdate,
          deleting: deleteLoading,
        }}
      />

      <div className="form-panel-body">
        <FormPersonal
          initialValues={initialValues}
          formClass="w-100"
          {...{ column, formOptions, validate, onSubmit }}
          afterFields={({ disabled }) => (
            <div className="py-5  d-flex align-items-center  justify-content-between">
              {isUpdate && (
                <Link className="px-4" to={addFormPath}>
                  <FlexBox alignCenter justCenter>
                    <Icon icon="arrow-left" />
                    <h4 className="px-2">{`افزودن ${singleName}`}</h4>
                  </FlexBox>
                </Link>
              )}
              <div>
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
                <ButtonForm
                  IsButton
                  type={isUpdate ? "info" : "success"}
                  loading={loading}
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
