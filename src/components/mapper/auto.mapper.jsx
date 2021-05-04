//default
import React from "react";
const AutoMapper = ({ list = [], children: Component }) => {
  return (
    <>
      {list.map((item, index) => (
        <Component key={index} item={item} index={index} />
      ))}
    </>
  );
};

export default AutoMapper;
