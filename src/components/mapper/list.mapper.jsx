//default
import React from "react";
const ListMapper = ({ list = [], children: Component }) => {
  return (
    <>
      {list.map((item, index) => (
        <Component key={index} item={item} index={index} />
      ))}
    </>
  );
};

export default ListMapper;
