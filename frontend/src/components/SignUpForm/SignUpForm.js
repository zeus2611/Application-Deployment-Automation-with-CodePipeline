import React, { useState, useEffect } from "react";
import { signUpApi } from "../../services/Auth";
import "./SignUpForm.scss";
import Cookie from "js-cookie";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

const ToastAlert = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
});

const SignUpForm = props => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  let history = useHistory();

  const { name, email, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = () => {
    setValues({ ...values, error: false });
    signUpApi(name, email, password)
      .then(async data => {
        if (data?.status === "success") {
          Cookie.set("college_data", JSON.stringify(data?.data));
          ToastAlert.fire({
            icon: "success",
            title: `Sign Up Done Successfully`,
          });
          setTimeout(() => {
            history.push("/dashboard");
          }, 1000);
        }
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <div className="sign-up-block">
      <div className="sign-container">
        <div className="sign-header">
          <div className="title">Sign up</div>
        </div>
        <div className="sign-content">
          <form action="#" onSubmit={handleSubmit}>
            <div className="input-box-group">
              <div className="input-box">
                <input type="text" placeholder="Name" onChange={handleChange("name")} required value={name} />
              </div>
              <div className="input-box">
                <input type="email" placeholder="Email" onChange={handleChange("email")} required value={email} />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Create a Password" onChange={handleChange("password")} required value={password} />
              </div>
            </div>
            <button type="submit" className="btn btn-orange">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
