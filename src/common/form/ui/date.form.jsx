import React, { useEffect, useState, useRef } from "react";
import moment from "moment-jalaali";
import DatePicker from "react-datepicker2";
import { InputForm } from ".";
const persanDate = require("persian-date");
const DateForm = ({
  placeholder,
  inputJalaaliFormat = "",
  isDate,
  isTime,
  isAPM,
  ...props
}) => {
  const inputRef = useRef();
  const [state, setState] = useState();
  const ref = useRef();

  let jformat = inputJalaaliFormat;
  if (!jformat) {
    if (isDate) jformat += "jYYYY/jM/jD";
    if (isTime) jformat += jformat ? "" : " " + "hh:mm:ss";
    if (isAPM) jformat += jformat ? "" : " " + "a";
  }
  if (!state && props.input.value) {
    const d = new Date(props.input.value).toISOString();
    const jDate = moment(d, "YYYY-MM-DDTHH:mm:ssZ");
    setState(jDate);
  } else if (state && !props.input.value) {
    setState();
  }

  useEffect(() => {
    if (!ref || !ref.current) return;
    ref.current.input.placeholder = placeholder;
  }, [ref]);

  useEffect(() => {
    if (!state) return;
    props.input.onChange({ target: { value: state._d } });
    // inputRef.current.value = state._d;
  }, [state]);

  const onDateChange = (value) => setState(value);

  return (
    <InputForm {...props}>
      <input
        className="d-none"
        onChange={({ target: {} }) => {}}
        ref={inputRef}
        {...props.input}
      />
      <div className="form-control form-panel-input">
        <DatePicker
          ref={ref}
          timePicker={isTime}
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
