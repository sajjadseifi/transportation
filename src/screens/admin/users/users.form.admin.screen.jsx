//default
import React from "react";
import { userFormConfig } from "../../../common/form/config";
import { FormPanel } from "../../../components/form";
import { UserModel } from "../../../models";

const UsersFormAdminScreen = () => {
  const buildInitialModel = (formValue = {}) => {
    const user = UserModel.GenerateWithFormValues(formValue);
    return user.Model;
  };
  
  const buildFormModel = (formId, values) => {
    const user = UserModel.GenerateWithFormValues(values);
    user.setFormModel(formId, user.username);
    return user;
  };

  const getDisplayNameFromForm = (form) => form.username;

  const props = {
    buildFormModel,
    buildInitialModel,
    getDisplayNameFromForm,
    ...userFormConfig,
  };
  return <FormPanel {...props} />;
};

export default UsersFormAdminScreen;
