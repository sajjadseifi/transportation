//default
import React from "react";
import { Navbar } from "../menu";
import { BurgerIcon } from "../../components/UI/icon";
const HeaderLayout = (props) => {
  return (
    <header className="violet-gradient d-flex align-items-center px-4">
      <BurgerIcon  />
      <Navbar />
    </header>
  );
};

export default HeaderLayout;
