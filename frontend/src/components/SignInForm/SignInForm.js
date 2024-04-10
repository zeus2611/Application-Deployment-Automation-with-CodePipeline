import React, { useState, useEffect } from "react";
import { signInApi } from "../../services/Auth";
import "./SignInForm.scss";
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

const SignInForm = props => {
  let history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { email, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = () => {
    setValues({ ...values, error: false });
    signInApi(email, password)
      .then(data => {
        if (data?.status === "success") {
          Cookie.set("college_data", JSON.stringify(data?.data));
          ToastAlert.fire({
            icon: "success",
            title: `Sign In Done Successfully`,
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
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <div className="sign-in-block">
      <div className="sign-container">
        <div className="sign-header">
          <div className="title">Sign in</div>
        </div>
        <div className="sign-content">
          <form action="#" onSubmit={handleSubmit}>
            <div className="input-box-group">
              <div className="input-box">
                <input type="email" placeholder="Email" onChange={handleChange("email")} required value={email} />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Create a Password" onChange={handleChange("password")} required value={password} />
              </div>
            </div>
            <button type="submit" className="btn btn-orange">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
