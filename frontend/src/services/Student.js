import Axios from "axios";
import Cookie from "js-cookie";
const BASE_URL = process.env.REACT_APP_BASE_API_URL;

let userData = Cookie.get("college_data");
if (userData) userData = JSON.parse(userData);

export const registerStudent = async (studentName, studentEmail, branch) => {
  try {
    const config = {
      method: "post",
      url: `${BASE_URL}/user/create-student`,
      headers: {
        authorization: userData?.token,
      },
      data: {
        student_name: studentName,
        student_email: studentEmail,
        branch_name: branch,
      },
    };
    const resp = await Axios(config);
    return resp.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getStudents = async () => {
  try {
    const config = {
      method: "get",
      url: `${BASE_URL}/user/student-list`,
      headers: {
        authorization: userData?.token,
      },
    };
    const resp = await Axios(config);
    return resp.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
