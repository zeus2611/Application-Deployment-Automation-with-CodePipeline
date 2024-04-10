import React from "react";
import LayoutTwo from "../../LayoutTwo";
import "./LoginPage.scss";
import SignInForm from "../../components/SignInForm/SignInForm";

const LoginPage = () => {
  return (
    <LayoutTwo>
      <div className="main-content login-page">
        <div className="container-big">
          <SignInForm />
        </div>
      </div>
    </LayoutTwo>
  );
};

export default LoginPage;
