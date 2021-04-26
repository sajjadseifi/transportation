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
  const inputRef = useRef();
  useEffect(() => {
    if (!ref || !ref.current) return;

    ref.current.input.placeholder = placeholder;
  }, [ref]);
  const onDateChange = (value) => setState(value);

  useEffect(() => {
    if (!state) return;
    
    inputRef.current.value=momentJalaali(state._d).format(jformat);
  
  }, [state]);
  return (
    <InputForm {...props}>
      <input className="d-none"  ref={inputRef} {...props.input} />
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
