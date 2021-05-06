//default
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
const BurgerIcon = ({ clicked = (opened) => {} }) => {
  const ref = useRef();
  const [toogle, setToggle] = useState(false);
  const clickedHandler = () => {
    setToggle((prev) => !prev);
    clicked(!toogle);
  };

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    if (toogle) node.classList.add("opened");
    else node.classList.remove("opened");

    node.setAttribute("aria-expanded", toogle);
  }, [toogle]);

  return (
    <label className="burger-icon" htmlFor="check">
      <input onChange={clickedHandler} type="checkbox" id="check" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default BurgerIcon;
