import Axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_API_URL;

export const signUpApi = async (name, email, password) => {
  try {
    const config = {
      method: "post",
      url: `${BASE_URL}/auth/register`,
      data: {
        name: name,
        email: email,
        password: password,
      },
    };
    const resp = await Axios(config);
    return resp.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const signInApi = async (email, password) => {
  try {
    const config = {
      method: "post",
      url: `${BASE_URL}/auth/login`,
      data: {
        email: email,
        password: password,
      },
    };
    const resp = await Axios(config);
    return resp.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
