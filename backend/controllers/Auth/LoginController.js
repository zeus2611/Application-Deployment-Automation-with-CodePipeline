const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const md5 = require("md5");
const { KnexDB } = require("../../config/db");
const saltRounds = 10;
const tblUser = "users";

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await KnexDB(tblUser).select("id", "email", "password", "username", "firstname", "lastname", "role").where({ email: email }).first();

    if (user && user.password == null) {
      return res.json({
        status: false,
        msg: "Login Failed",
        data: "Invalid credentials!",
      });
    }
    if (!user) {
      return res.json({
        status: false,
        msg: "Login Failed",
        data: "Invalid credentials!",
      });
    }

    const passMatch = await bcrypt.compare(password, user.password);

    if (!passMatch) {
      var checked = md5(password) === user.password;
      if (!checked) {
        return res.json({
          status: false,
          msg: "Login Failed",
          data: "Invalid credentials!",
        });
      } else {
        const encPass = await bcrypt.hashSync(password.trim(), saltRounds);
        await KnexDB("users").update({ password: encPass }).where({
          id: user.id,
        });
      }
    }

    const token = jwt.sign({ userId: user.id, user_email: user.email, user_name: user.username, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: `1y`,
      audience: `Timesheet User`,
      subject: `${user.email}`,
    });
    res.json({
      status: "success",
      msg: "Login successfull",
      data: {
        token,
        user_id: user.id,
        user_email: user.email,
        role: user.role,
        name: {
          first: user.firstname,
          last: user.lastname,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};
