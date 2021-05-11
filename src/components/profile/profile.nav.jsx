//default
import React from "react";
import { useDispatch } from "react-redux";
import { Dropdown, FlexboxGrid, Icon } from "rsuite";
import { authActions } from "../../@redux/actions";
import { Link } from "react-router-dom";
import profileImage from "../../assets/images/profile.jpg";
import "./profile.scss";
import { history } from "../..";
const ProfileNav = ({ fullname = "نام کامل شخص", userId }) => {
  const dispatch = useDispatch();

  return (
    <nav className="text-right navbar navbar-expand-sm">
      <button
        className="navbar-toggler"
        type="button"
        dataToggle="collapse"
        dataTarget="#navbar-list-4"
        ariaControls="navbarNav"
        ariaExpanded="false"
        ariaLabel="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar-list-4">
        <ul className="navbar-nav d-flex align-items-center ">
          <li>
            <div className="text-white px-3">{fullname}</div>
          </li>
          <li className="nav-item dropdown">
            <Dropdown
              className="rtl"
              renderTitle={() => {
                return (
                  <FlexboxGrid
                    classPrefix="profile-icon"
                    align="middle"
                    className="text-white"
                  >
                    <FlexboxGrid
                      classPrefix="profile-icon"
                      align="middle"
                      className="text-white"
                    >
                      <Icon className="arr-icon px-2" icon="arrow-down" />
                      <img
                        src={profileImage}
                        width="40"
                        height="40"
                        className="rounded-circle"
                      />
                    </FlexboxGrid>
                  </FlexboxGrid>
                );
              }}
            >
              <Dropdown.Item
                onSelect={() => history.push(`/admin/profile/${userId} `)}
              >
                <Icon icon="user" />
                <span className="px-1">پروفایل</span>
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={() => dispatch(authActions.logout(userId))}
              >
                <Icon icon="collasped" />
                <span className="px-1">خروج از حساب</span>
              </Dropdown.Item>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ProfileNav;
