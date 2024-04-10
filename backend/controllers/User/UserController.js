const { KnexDB } = require("../../config/db");
const tblStudents = "students";

exports.createUser = async (req, res, next) => {
  try {
    const userData = req.userData;
    const parent_id = userData.userId;
    const { student_name, student_email, branch_name } = req.body;

    const nameArr = student_name.split(" ");
    const firstName = nameArr[0];
    const lastName = nameArr.slice(1).join(" ");

    const existingUser = await KnexDB(tblStudents).where({ email: student_email.toLowerCase() }).count("email", { as: "count" });

    if (existingUser[0].count !== 0) {
      res.json({
        status: "success",
        msg: "Student Email already exists",
        data1: null,
      });
      return;
    }

    const student = await KnexDB(tblStudents)
      .insert({
        email: student_email.toLowerCase(),
        firstname: firstName,
        lastname: lastName,
        branch_name: branch_name,
        parent_id: parent_id,
      })
      .returning("*");

    const student_data = await KnexDB(tblStudents).where({ id: student[0] }).first();

    res.json({
      status: "success",
      msg: "Student Registration successfull",
      data: {
        student_id: student_data.id,
        student_email: student_data.email,
        firstname: student_data.firstname,
        lastname: student_data.lastname,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const userData = req.userData;
    const parent_id = userData.userId;

    const studentList = await KnexDB(tblStudents).where({ parent_id: parent_id }).select("*");

    res.json({
      status: "success",
      msg: "Student List",
      data: studentList,
    });
  } catch (error) {
    next(error);
  }
};
