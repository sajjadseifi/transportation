//default
import React from "react";
import { ListMapper } from "../../../components/mapper";
import InputForm from "./input.form";
import { Icon } from "rsuite";

const SelectFormPanel = (props) => {
  const { options, placeholder, input, val } = props;

  if (!input.value && val) {
    input.onChange({ target: { value: val } });
  }

  const onCahgneIndex = (dir) => {
    let findIndex = [...options].findIndex((x) => x.value == input.value);

    findIndex = (findIndex + dir) % options.length;

    if (findIndex < 0) findIndex = options.length - 1;

    console.log({index:findIndex});
    const val = options[findIndex].value;

    input.onChange({ target: { value: val } });
  };

  return (
    <InputForm {...props}>
      <div className="select-box-ctn">
        <select
          className="custom-select form-control form-panel-input "
          id={input.name}
          placeholder={placeholder}
          {...input}
        >
          <ListMapper list={options}>
            {({ item }) => <option value={item.value}>{item.label}</option>}
          </ListMapper>
        </select>
        <div className="select-arrow">
          <Icon
            onClick={() => onCahgneIndex(-1)}
            size="1x"
            className="arrow-icon"
            icon="arrow-up"
          />
          <Icon
            onClick={() => onCahgneIndex(1)}
            size="1x"
            className="arrow-icon"
            icon="arrow-down"
          />
        </div>
      </div>
    </InputForm>
  );
};

export default SelectFormPanel;
