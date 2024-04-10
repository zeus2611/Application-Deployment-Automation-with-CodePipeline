import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { images } from "../../config/images";
import Cookie from "js-cookie";

const Header = () => {


  return (
    <header className="header">
      <div className="container-big">
        <div className="header-left">
          <Link className="logo" to="/">
            <img className="img-full" src={images.logo} alt="" />
          </Link>
        </div>
        <div className="header-right">
          <div className="login-group">
            <Link className="btn link-demo" to="/signin">
              Sign in <i className="icon-arrow-right"></i>
            </Link>
            <Link className="btn link-signin" to="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
