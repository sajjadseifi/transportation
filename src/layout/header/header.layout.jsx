//default
import React from "react";
import { Navbar } from "../menu";
import { BurgerIcon } from "../../components/UI/icon";
import { menuActions } from "../../@redux/actions";
import { useDispatch } from "react-redux";
const HeaderLayout = (props) => {
  const dispatch = useDispatch();
  const sideBarController = (isOpen) => {
    console.log({isOpen});
    dispatch(menuActions.menuActivity(isOpen));
  };
  return (
    <header className="violet-gradient d-flex align-items-center px-4">
      <BurgerIcon clicked={sideBarController} />
      <Navbar />
    </header>
  );
};

export default HeaderLayout;
