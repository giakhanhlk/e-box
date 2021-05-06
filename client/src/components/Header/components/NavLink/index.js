import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import PublicIcon from "@material-ui/icons/Public";

import * as userActions from "../../../../redux/actions/userActions";
import "./NavLink.scss";

const NavLink = () => {
  const userNav = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userActions.logout());
  };

  const viewLoggedIn = () => {
    if (!userNav.data._id) {
      return (
        <li className="log-io">
          <MailOutlineOutlinedIcon fontSize="small" className="header-icon" />
          <Link to="/login">Đăng nhập</Link>
          <span style={{ margin: "0 5px" }}>hoặc</span>
          <Link to="/register">Đăng ký</Link>
        </li>
      );
    }

    return (
      <li className="log-io">
        <MailOutlineOutlinedIcon fontSize="small" className="header-icon" />
        <Link to="/profile">{userNav.data.username}</Link>
        <span style={{ margin: "0 5px" }}>hoặc</span>
        <div className="logout" onClick={handleLogout}>
          Đăng xuất
        </div>
      </li>
    );
  };

  return (
    <div className="nav-link row">
      <div className="nav-link__information col l-4 m-0 c-0">
        <ul className="list-inline">
          <li className="phone-number">
            <PhoneIcon fontSize="small" className="header-icon" />
            (+84) 903046492
          </li>
          <li className="email">
            <MailOutlineOutlinedIcon fontSize="small" className="header-icon" />
            op3616@gmail.com
          </li>
        </ul>
      </div>
      <div className="nav-link__general col l-8 m-0 c-0">
        <ul className="list-inline list-top-right">
          <li className="location">
            <MailOutlineOutlinedIcon fontSize="small" className="header-icon" />
            <Link to="/hubs">Chi nhánh làm việc</Link>
          </li>
          <li className="track-order">
            <PinDropOutlinedIcon fontSize="small" className="header-icon" />
            <Link to="/orders/track">Theo dõi đơn hàng</Link>
          </li>
          {viewLoggedIn()}
          <li className="language">
            <PublicIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavLink;
