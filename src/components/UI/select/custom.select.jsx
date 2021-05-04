//default
import React from "react";
import { ListMapper } from "../../mapper";
const opts = [
  {
    value: "T1",
    label: "t1",
  },
  {
    value: "T2",
    label: "t2",
  },
  {
    value: "T3",
    label: "t3",
  },
  {
    value: "T4",
    label: "t5",
  },
];
const CustomSelect = ({ input,value, options = opts }) => {
  return (
    <div class="form-group">
      <label className="text-muted-light" htmlFor={input.name}>
        نمونه انتخاب
      </label>
      <select className="form-control " id={input.name} {...input}>
        <ListMapper list={options}>
          {({ item }) => <option value={item.value}>{item.label}</option>}
        </ListMapper>
      </select>
    </div>
  );
};

export default CustomSelect;
