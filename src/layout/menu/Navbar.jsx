import React from "react";
import { useSelector } from "react-redux";
import ProfileNav from "../../components/profile/profile.nav";
const navbarStyle = {
  width: "80%",
  height: 80,
};
const NavBar = ({}) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <ProfileNav />
    </div>
  );
};

export default NavBar;
