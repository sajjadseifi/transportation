import React from "react";
import { Field } from "react-final-form";

const FormFieldList = ({ column, formOptions = [], serverErrors = {} }) => {
  const rowClasses = !column ? "d-flex  align-items-center" : "";
  const colClasses = "flex-1 mx-3 font-ir w-100";
  return (
    <div className="app-form-final">
      {formOptions.map((optList = [], index) => (
        <div key={index} className={rowClasses}>
          {optList.map((opt, index) => {
            return (
              <div key={index} className={colClasses}>
                <Field {...opt} serverError={serverErrors[opt.name] || ""} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FormFieldList;
