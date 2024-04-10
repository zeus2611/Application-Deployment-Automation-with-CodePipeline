import React from "react";
import "./Sidebar.scss";
import { SidebarProps } from "../Props/SidebarProps";
import { Link, NavLink } from "react-router-dom";
import Shape from "../Shape/Shape";
import Tooltip from "@mui/material/Tooltip";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Shape />
      <div className="copyright-link">
        {SidebarProps.txt} <Link to="/">{SidebarProps.txt_link}</Link>
      </div>
      <div className="links-block">
        <ul>
          {SidebarProps.links_first.map((nav_list, index) => {
            return (
              <li key={index}>
                <Tooltip title={nav_list.nav_link} placement="right">
                  <NavLink exact to={nav_list.path} activeClassName="active">
                    <i className={`${nav_list.icon}`}></i>
                    <span>{nav_list.nav_link}</span>
                  </NavLink>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
