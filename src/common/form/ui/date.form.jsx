import React, { useEffect, useState, useRef } from "react";
import momentJalaali from "moment-jalaali";
import DatePicker from "react-datepicker2";
import { InputForm } from ".";
import { updateObject } from "../../../core/utils";
const DateForm = ({
  placeholder,
  inputJalaaliFormat = "",
  isDate,
  isTime,
  isAPM,
  ...props
}) => {
  let jformat = inputJalaaliFormat;
  if (isDate) jformat += "YYYY/MM/DD";
  if (isTime) jformat += jformat ? " " : "" + "hh:mm:ss";
  if (isAPM) jformat += jformat ? " " : "" + "a";

  const [state, setState] = useState();
  const ref = useRef();
  useEffect(() => {
    if (!ref || !ref.current) return;

    // ref.current.input = updateObject(ref.current.input, props.input);

    // ref.current.input.value = placeholder;
    ref.current.input.placeholder = placeholder;
  }, [ref]);
  const onDateChange = (value) => {
    // momentJalaali()
    setState(value);
    const date= new Date(value._d);
    props.input.onChange(date);
    console.log({value});
  };
  // let props = { ...input };
  // if (isDate) {
  //   if (props.value)
  //     props.value = new persianDate(props.value).format("dddd, DD MMMM YYYY");
  // }

  return (
    <InputForm {...props}>
        <input {...props.input} />
      <div className="form-control form-panel-input">
        <DatePicker
          ref={ref}
          persianDigits={true}
          className="w-100"
          isGregorian={false}
          value={state}
          onChange={onDateChange}
          inputJalaaliFormat={jformat}
        />
      </div>
    </InputForm>
  );
};

export default DateForm;
