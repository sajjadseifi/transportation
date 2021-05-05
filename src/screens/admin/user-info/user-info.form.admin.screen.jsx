//default
import React from "react";
import { userFormConfig } from "../../../common/form/config";
import { FormPanel } from "../../../components/form";
import { UserModel } from "../../../models";

const UserInfoFormAdminScreen = () => {
  const buildInitialModel = (formValue = {}) => {
    const {} = formValue;
    return formValue;
  };

  const buildFormModel = (formId, values) => {
    const temp = new UserModel(
      values.first_name,
      values.last_name,
      values.username,
      values.email,
      values.password,
      values.is_active,
      values.is_superuser,
      values.is_staff,
      values.date_joined
    );

    temp.setFormModel(formId, values.username);
  };

  return (
    <>
      <FormPanel
        {...{ buildFormModel, buildInitialModel }}
        {...userFormConfig}
      />
    </>
  );
};

export default UserInfoFormAdminScreen;
