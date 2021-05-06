//default
import React from "react";
import { discountFormConfig } from "../../common/form/config";
import { FormPanel } from "../../components/form";
import {  DisCountModel } from "../../models";

const DiscountFormScreen = () => {
  const buildInitialModel = (formValue = {}) => {
    const discount = DisCountModel.GenerateWithFormValues(formValue);
    return discount.Model;
  };

  const buildFormModel = (formId, values) => {
    const discount = DisCountModel.GenerateWithFormValues(values);
    discount.setFormModel(formId, discount.code);
    return discount;
  };

  const props = {
    buildFormModel,
    buildInitialModel,
    ...discountFormConfig,
  };

  return <FormPanel {...props} />;
};

export default DiscountFormScreen;
