//default
import React from "react";
import { useState } from "react";
import { userInfoFormConfig } from "../../../common/form/config";
import { userInfoFormOption } from "../../../common/form/option";
import { ImageFileForm } from "../../../common/form/ui";
import { FormPanel } from "../../../components/form";
import ImageUploader from "../../../components/upload/image.upload";
import { ROLETYPE } from "../../../constants";
import { userApi, userInfoApi } from "../../../core/api";
import { UserInfoModel } from "../../../models";

const UserInfoFormAdminScreen = () => {
  const [role, setRole] = useState(1);
  const [formConfig, setFormConfig] = useState(userInfoFormConfig);
  const [userInfo, setUserInfo] = useState(new UserInfoModel());
  const [isUpdate, setIsUpdate] = useState(false);
  const [files, setFiles] = useState({});
  const buildInitialModel = (formValue = {}) => {
    const {
      pic,
      car_license,
      car_card,
      car_insurance,
      car_technical_diagnosis,
      guarantee,
    } = formValue;
    console.log({
      pic,
      car_license,
      car_card,
      car_insurance,
      car_technical_diagnosis,
      guarantee,
    });
    let formOptions = [...userInfoFormOption];
    formOptions[3][0].uri = pic;
    formOptions[3][1].uri = car_license;
    formOptions[3][2].uri = car_card;
    formOptions[4][0].uri = car_insurance;
    formOptions[4][1].uri = car_technical_diagnosis;
    formOptions[4][2].uri = guarantee;

    setFormConfig((prev) => ({ ...prev, formOptions }));

    const userInfo = UserInfoModel.GenerateWithFormValues(formValue);
    setUserInfo(userInfo);
    return userInfo.FormObject;
  };

  const buildFormModel = (formId, values) => {
    console.log({ files });
    const userInfo = UserInfoModel.GenerateWithFormValues({
      ...values,
      pic: files.pic,
      car_license: files.car_license,
      car_card: files.car_card,
      car_insurance: files.car_insurance,
      car_technical_diagnosis: files.car_technical_diagnosis,
      guarantee: files.guarantee,
    });
    userInfo.setFormModel(formId, userInfo.username);
    setUserInfo(userInfo);
    return userInfo;
  };
  const onChangeForm = (values) => {
    // return;
    checkAccessInputs(values.role);
  };

  const checkAccessInputs = (formRole) => {
    if (role == formRole) return;
    console.log({ role, formRole });

    let dNone = +formRole != ROLETYPE.driver;
    let updateFormOpt = [...userInfoFormOption];

    if (dNone) {
      const pic = userInfoFormOption[3][0];
      if (isUpdate) {
        updateFormOpt[0] = [];
      } else {
        const usersOpts = userInfoFormOption[0][0];
        updateFormOpt[0] = [usersOpts];
      }
      updateFormOpt[3] = [pic];
      updateFormOpt[4] = [];
    }

    setRole(+formRole);

    setFormConfig((prev) => ({
      ...prev,
      formOptions: updateFormOpt,
    }));
  };

  const formAction = (isUpdate) => {
    setIsUpdate(isUpdate);
  };
  const onChanged = ({ file, acceptedFiles, name, uri }) => {
    console.log({ file, name });
    setFiles((prev) => ({
      ...prev,
      [name]: file,
    }));
  };
  const beformFileds = () => {
    return (
      <div className="p-4">
        {isUpdate && (
          <h3 className="title title-username">
            {userInfo.user || userInfo.username}
          </h3>
        )}
      </div>
    );
  };

  [...formConfig.formOptions[3], ...formConfig.formOptions[4]].forEach(
    (cel) => {
      cel.onChangeFile = onChanged;
    }
  );

  const props = {
    buildFormModel,
    buildInitialModel,
    onChangeForm,
    formAction,
    beformFileds,
    ...formConfig,
  };

  return <FormPanel {...props} />;
};

export default UserInfoFormAdminScreen;
