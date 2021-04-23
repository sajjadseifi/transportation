import React from "react";
import { Field } from "react-final-form";

const FormFieldList = ({ fullRow, formOptions = [], serverErrors = {} }) => {
  const rowClasses = !fullRow ? "d-flex  align-items-center" : "";
  const colClasses = "flex-1 mx-3 font-ir";
  return (
    <div className="app-form-final">
      {formOptions.map((optList = [], index) => (
        <div key={index} className={rowClasses}>
          {optList.map((opt, index) => {
            return (
              <div key={index} className={colClasses}>
                <Field {...opt} serverError={serverErrors[opt.name]} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FormFieldList;
