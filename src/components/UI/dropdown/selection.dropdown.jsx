//default
import React from "react";
import { Dropdown } from "rsuite";
import "./dropdown.scss";

const SelectionDropDown = ({
  items = [],
  onSelect = (item) => {
    console.log(item);
  },
  selected,
  ...props
}) => {
  return (
    <Dropdown {...props} className="my-dropdown">
      {items.map((item, key) => (
        <Dropdown.Item className={key==selected?"selected":"" + " my-dropdown-item"} onSelect={() => onSelect(item, key)} key={key}>
          {item}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default SelectionDropDown;

//   {/* <CustomDropdown title="Hover" trigger="hover" /> */}
//   {/* <CustomDropdown title="Click" trigger="click" /> */}
//   {/* <CustomDropdown title="Right Click" trigger="contextMenu" /> */}
//   {/* <CustomDropdown title="Click and Hover" trigger={['click', 'hover']} /> */}
