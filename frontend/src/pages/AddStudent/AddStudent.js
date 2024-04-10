import React, { useState } from "react";
import Layout from "../../Layout";
import "./AddStudent.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { registerStudent } from "../../services/Student";
import Swal from "sweetalert2";

const ToastAlert = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
});

const AddStudent = () => {
  const [values, setValues] = useState({
    student_name: "",
    student_email: "",
    branch_name: "",
    error: "",
    success: false,
  });
  let history = useHistory();

  const { student_name, student_email, branch_name } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = () => {
    setValues({ ...values, error: false });
    registerStudent(student_name, student_email, branch_name)
      .then(async data => {
        if (data?.status === "success") {
          ToastAlert.fire({
            icon: "success",
            title: `Student Registered Successfully`,
          });
        }
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            student_name: "",
            student_email: "",
            branch_name: "",
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
    <Layout>
      <div className="main-content add-user-page">
        <div className="container-small">
          <div className="breadcrumbs">
            <div className="links">
              <Link to={"/dashboard"}>Back to Students</Link>/<span>Add Students</span>
            </div>
            <div className="sub-title">Add a New Student</div>
          </div>
          <div className="details-block">
            <form action="#" onSubmit={handleSubmit}>
              <div className="input-box-group">
                <div className="input-box">
                  <label>
                    Student Name <span>*</span>
                  </label>
                  <input type="text" placeholder="E.g. John" onChange={handleChange("student_name")} required value={student_name} />
                </div>
                <div className="input-box">
                  <label>
                    Student Email <span>*</span>
                  </label>
                  <input type="email" placeholder="E.g. john@gmail.com" onChange={handleChange("student_email")} required value={student_email} />
                </div>
                <div className="input-box">
                  <label>
                    Branch Name <span>*</span>
                  </label>
                  <input type="text" placeholder="E.g. Computer Science" onChange={handleChange("branch_name")} required value={branch_name} />
                </div>
              </div>
              <button type="submit" className="btn btn-student btn-orange">
                Add Student
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddStudent;
