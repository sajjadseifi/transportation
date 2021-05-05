//default
import React from "react";
import { carFormConfig } from "../../common/form/config";
import { FormPanel } from "../../components/form";
import { CarModel } from "../../models";

const DiscountFormScreen = () => {
  const buildInitialModel = (formValue = {}) => {
    const {} = formValue;
    return formValue;
  };

  const buildFormModel = (formId, values) => {
    const temp = new CarModel(
      values.name,
      values.brand,
      values.number_of_wheels,
      values.tonnage,
      values.tanker,
      values.refrigerator,
      values.transit,
      values.created_at,
      values.updated_at
    );
    temp.setFormModel(formId, values.name);
  };

  const props = {
    buildFormModel,
    buildInitialModel,
    ...carFormConfig,
  };
  
  return <FormPanel {...props} />;
};

export default DiscountFormScreen;
