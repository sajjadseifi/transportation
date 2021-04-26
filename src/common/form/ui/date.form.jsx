import React from "react";
import momentJalaali from "moment-jalaali";
import DatePicker from "react-datepicker2";

export default class component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: momentJalaali(),
      isGregorian: false,
    };
  }
  render() {
    return (
      <div>
        <DatePicker
          value={this.state.value}
          isGregorian={this.state.isGregorian}
          onChange={(value) => this.setState({ value })}
        />
      </div>
    );
  }
}
