import React from "react";
import LayoutTwo from "../../LayoutTwo";
import "./RegisterPage.scss";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const RegisterPage = () => {
  return (
    <LayoutTwo>
      <div className="main-content login-page">
        <div className="container-big">
          <SignUpForm />
        </div>
      </div>
    </LayoutTwo>
  );
};

export default RegisterPage;
