import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { FaBars, FaUserCircle, FaRegArrowAltCircleRight } from "react-icons/fa";
import logo from "../../assets/img/profile.jpg";
import { sessionRemove } from "../../helper/SessionHelper";

const MasterLayout = (props) => {
  const [show, setShow] = useState(false);

  const onLockOut = () => {
    sessionRemove();
  };

  return (
    <Fragment className="main">
      <Navbar className={`header ${!show ? "header-close" : null}`}>
        <div className="header-nav">
          <div className="header-toggle" onClick={() => setShow(!show)}>
            <FaBars className="menu-icon" />

            <span>Task Manager</span>
          </div>
        </div>
        <div className="dropdown">
          <img src={logo} className="nav-logo" alt="" />
          <div className="dropdown-content">
            <img src={logo} className="logo-profile" alt="" />
            <h4>Tushar Ahmed</h4>
            <div className="detelis">
              <span>
                <FaUserCircle className="profile-icon" />
                <a to="/Profile">Profile</a>
              </span>
              <span>
                <FaRegArrowAltCircleRight className="profile-icon" />
                <a onClick={onLockOut} to="/Login">
                  LockOut
                </a>
              </span>
            </div>
          </div>
        </div>
      </Navbar>
      <div className="sidebar-content">
        <div className={`sidebar ${show ? "sidebar-close" : null}`}>
          <NavLink className="nav-item" to="/" end>
            <span className="nav-list">DashBoard</span>
          </NavLink>
          <NavLink className="nav-item" to="/Create" end>
            <span>Create Pages</span>
          </NavLink>
          <NavLink className="nav-item" to="/All" end>
            <span>New Create</span>
          </NavLink>
          <NavLink className="nav-item" to="/Progress" end>
            <span>In Progress</span>
          </NavLink>
          <NavLink className="nav-item" to="/Completed" end>
            <span>Completed</span>
          </NavLink>
          <NavLink className="nav-item" to="/Canceled" end>
            <span>Canceled</span>
          </NavLink>
        </div>
        <div className={`content p-4 ${show ? "content-close" : null}`}>
          {props.children}
        </div>
      </div>
    </Fragment>
  );
};

export default MasterLayout;
