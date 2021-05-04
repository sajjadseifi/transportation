//default
import React from "react";
import { ListMapper } from "../../../components/mapper";
import InputForm from "./input.form";

const SelectFormPanel = (props) => {
  const { options, input } = props;
  return (
    <InputForm {...props}>
      <select
        className="custom-select form-control form-panel-input "
        id={input.name}
        {...input}
      >
        <ListMapper list={options}>
          {({ item }) => <option value={item.value}>{item.label}</option>}
        </ListMapper>
      </select>
    </InputForm>
  );
};

export default SelectFormPanel;
