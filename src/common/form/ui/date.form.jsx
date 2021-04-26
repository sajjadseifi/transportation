import React, { useEffect, useState, useRef } from "react";
import momentJalaali from "moment-jalaali";
import DatePicker from "react-datepicker2";
import { InputForm } from ".";
const DateForm = ({
  placeholder,
  inputJalaaliFormat = "",
  isDate,
  isTime,
  isAPM,
  ...props
}) => {
  const [state, setState] = useState();
  const ref = useRef();
  useEffect(() => {
    if (!ref || !ref.current) return;

    ref.current.input.placeholder = placeholder;
  }, [ref]);
  const onDateChange = (value) => {
    // momentJalaali()
    setState(value);
  };
  let jformat = inputJalaaliFormat;
  if (isDate) jformat += "YYYY/MM/DD";
  if (isTime) jformat += jformat ? " " : "" + "hh:mm:ss";
  if (isAPM) jformat += jformat ? " " : "" + "a";

  return (
    <InputForm
      {...props}
      render={() => (
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
      )}
    />
  );
};

export default DateForm;
