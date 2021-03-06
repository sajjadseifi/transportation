//default
import React from "react";
import { combineValidators } from "revalidate";
import { tempFormConfig } from "../../../common/form/config";
import { FormPanel } from "../../../components/form";
import CodePenSelect from "../../../components/UI/select/code-pen.select";
import CustomSelect from "../../../components/UI/select/custom.select";
import { TempModel } from "../../../models";

const validate = combineValidators({});

const TempFormAdminScreen = () => {
  //by defult set initial form state or return undefund or null
  //return yuor custom object inital value for react-final-form
  //posible change custom name in input for your managment
  //how to set inital custom vaue set value in arguman! (formValue = {}) =>  formValue = customInstance
  const buildInitialModel = (formValue = {}) => {
    //set initial  formValue with  get in redux form state in inner component
    const { name, code, price } = formValue;

    //or set form
    // formValue = { name: "", code: "", price: "" };
    console.log({ formValue });
    return formValue;
  };

  //create form model for saving data to server
  const buildFormModel = (formId, values) => {
    const { name, code, price } = values;
    //create [name]Model extended from FormModel
    const temp = new TempModel(name, code, price);
    //set id and display name for show alert and found update or create
    temp.setFormModel(formId, name);
  };

  return (
    <>
      <FormPanel
        buildFormModel={buildFormModel}
        buildInitialModel={buildInitialModel}
        {...tempFormConfig}
      />
  
    </>
  );
};

export default TempFormAdminScreen;
