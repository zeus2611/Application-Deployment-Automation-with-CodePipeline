import React from "react";
import "./HeaderDashboard.scss";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { makeStyles } from "@mui/styles";
import { images } from "../../config/images";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import { useHistory } from "react-router";

const useHeader = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  // paper: {
  //   marginRight: theme.spacing(2),
  // },
}));

function HeaderDashboard() {
  const classesheader = useHeader();
  const [open, dropOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  let history = useHistory();
  let userData = Cookie.get("college_data");
  if (userData) userData = JSON.parse(userData);

  function refreshPage() {
    window.location.reload(false);
  }

  const logout = e => {
    e.preventDefault();
    Cookie.remove("college_data");
    history.push("/");
    refreshPage();
  };
  const dropToggle = () => {
    dropOpen(prevOpen => !prevOpen);
  };

  const dropClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    dropOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      dropOpen(false);
    }
  }

  return (
    <header className="header-dashboard">
      <div className="container">
        <div className="header-left">
          <a className="logo" href="/">
            <img className="img-full" src={images.logo} alt="" />
          </a>
        </div>
        <div className="header-right">
          <div className="user-login-block">
            <div className="user-block">
              <div className="admin-name">
                <label>Hello</label>
                <span>{userData?.name?.first}</span>
              </div>
              <Button className="header-dropdown" ref={anchorRef} aria-controls={open ? "menu-list-grow" : undefined} aria-haspopup="true" onClick={dropToggle}>
                <figure>
                  <img className="img-full" src={images.user} alt="" />
                </figure>
                <i className="icon icon-dropdown"></i>
              </Button>
            </div>
            <div className={classesheader.root}>
              <Paper className={classesheader.paper}></Paper>
              <div>
                <Popper className="drop-down" open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin: placement === "bottom" ? "center top" : "center bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={dropClose}>
                          <MenuList className="drop-down-list" autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                            <div className="title">
                              Hello, <span>{userData?.name?.first}</span>
                            </div>
                            <div className="logout-link">
                              <Link className="btn btn-log-out" onClick={e => logout(e)} to="/">
                                Logout
                              </Link>
                            </div>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderDashboard;
