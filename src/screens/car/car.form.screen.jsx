//default
import React from "react";
import { carFormConfig } from "../../common/form/config";
import { FormPanel } from "../../components/form";
import { CarModel } from "../../models";

const UsersFormAdminScreen = () => {
  const buildInitialModel = (formValues = {}) => {
    const car = CarModel.GenerateWithFormValues(formValues);
    return car.Model;
  };

  const buildFormModel = (formId, values) => {
    const car = CarModel.GenerateWithFormValues(values);
    car.setFormModel(formId, car.name);
    return car;
  };

  const getDisplayNameFromForm = (form) => form.name;

  const props = {
    buildFormModel,
    buildInitialModel,
    getDisplayNameFromForm,
    ...carFormConfig,
  };

  return <FormPanel {...props} />;
};

export default UsersFormAdminScreen;
