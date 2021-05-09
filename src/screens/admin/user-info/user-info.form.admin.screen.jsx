//default
import React from "react";
import { useState } from "react";
import { userInfoFormConfig } from "../../../common/form/config";
import { userInfoFormOption } from "../../../common/form/option";
import { FormPanel } from "../../../components/form";
import { ROLETYPE } from "../../../constants";
import { userApi, userInfoApi } from "../../../core/api";
import { UserInfoModel } from "../../../models";

const UserInfoFormAdminScreen = () => {
  const [role, setRole] = useState(1);
  const [formConfig, setFormConfig] = useState(userInfoFormConfig);

  const buildInitialModel = (formValue = {}) => {
    const userInfo = UserInfoModel.GenerateWithFormValues(formValue);
    console.log(userInfo.FormObject);
    return userInfo.FormObject;
  };

  const buildFormModel = (formId, values) => {
    const userInfo = UserInfoModel.GenerateWithFormValues(values);
    userInfo.setFormModel(formId, userInfo.username);
    return userInfo;
  };
  const onChangeForm = (values) => {
    // return;
    checkAccessInputs(values.role);
  };

  const checkAccessInputs = (formRole) => {
    if (+role == +formRole) return;
    console.log({ role, formRole });

    let dNone = +formRole != ROLETYPE.driver;
    let updateFormOpt = [...userInfoFormOption];

    if (dNone) {
      const usersOpts = userInfoFormOption[0][0];
      const pic = userInfoFormOption[2][0];
      updateFormOpt[0] = [{ ...usersOpts }];
      updateFormOpt[2] = [{ ...pic }];
      updateFormOpt[3] = [];
      // updateFormOpt[3]=updateFormOpt[4];
    }

    setRole(+formRole);

    setFormConfig((prev) => ({
      ...prev,
      formOptions: updateFormOpt,
    }));
  };

  const formAction = (isUpdate) => {
    let formOptions = [...userInfoFormOption];
    if (isUpdate) {
      formOptions[0][0].agentList = userInfoApi.list;
      formOptions[0][0].disabled = true;
    } else {
      formOptions[0][0].disabled = false;
      formOptions[0][0].agentList = userApi.list;
    }
    setFormConfig((prev) => ({ ...prev, formOptions }));
  };

  const props = {
    buildFormModel,
    buildInitialModel,
    onChangeForm,
    formAction,
    ...formConfig,
  };
  return <FormPanel {...props} />;
};

export default UserInfoFormAdminScreen;
