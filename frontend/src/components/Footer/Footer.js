import React from "react";
import "./Footer.scss";
import { images } from "../../config/images";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-big">
        <div className="footer-top">
          <div className="copy-right">
            <figure>
              <img className="img-full" src={images.logoFooter} alt="Footer Logo" width="40" height="22" />
            </figure>
            <span>© {new Date().getFullYear()}, Whizlabs Software Pvt. Ltd.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
