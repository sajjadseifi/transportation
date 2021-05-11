//default
import React from "react";
import { Navbar } from "../menu";
import { BurgerIcon } from "../../components/UI/icon";
import { menuActions } from "../../@redux/actions";
import { useDispatch } from "react-redux";
import "./header.layout.scss";
import logo from "../../assets/images/logo.jpg";
const HeaderLayout = (props) => {
  const dispatch = useDispatch();
  const sideBarController = (isOpen) => {
    console.log({ isOpen });
    dispatch(menuActions.menuActivity(isOpen));
  };
  return (
    <header className="violet-gradient d-flex align-items-center justify-content-between px-4">
      <div className="d-flex align-items-center">
        <div className="px-3">
          <BurgerIcon clicked={sideBarController} />
        </div>
        <div>
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              className="rounded-circle"
              width="40"
              height="40"
              alt="logo"
            />

            <h5 className="d-inline-block px-4 text-white">سامانه حمل و نقل</h5>
          </a>
        </div>
      </div>
      <div className="mx-3" >
        <Navbar />
      </div>
    </header>
  );
};

export default HeaderLayout;
