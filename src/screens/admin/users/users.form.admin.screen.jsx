//default
import React from "react";
import { userFormConfig } from "../../../common/form/config";
import { FormPanel } from "../../../components/form";
import { UserModel } from "../../../models";

const UsersFormAdminScreen = () => {
  const buildInitialModel = (formValue = {}) => {
    const v = formValue;
    const user = new UserModel(
      v.first_name || "",
      v.last_name || "",
      v.username || "",
      v.email || "",
      v.password || "",
      v.is_active || false,
      v.is_superuser || false,
      v.is_staff || false
    );

    return user.Model;
  };

  const buildFormModel = (formId, values) => {
    const user = new UserModel(
      values.first_name,
      values.last_name,
      values.username,
      values.email,
      values.password,
      values.is_active,
      values.is_superuser,
      values.is_staff
    );

    user.setFormModel(formId, values.username);
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
