const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { KnexDB } = require("../../config/db");
const saltRounds = 10;
const tblUsers = "users";

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const nameArr = name.split(" ");
    const firstName = nameArr[0];
    const lastName = nameArr.slice(1).join(" ");

    const existingUser = await KnexDB(tblUsers).where({ email: email.toLowerCase() }).count("email", {as: "count"});

    if (existingUser[0].count !== 0) {
      res.json({
        status: "success",
        msg: "User already exists",
        data1: null,
      });
      return;
    }

    const encPass = await bcrypt.hashSync(password.trim(), saltRounds);

    const user = await KnexDB(tblUsers)
      .insert({
        username: email.toLowerCase(),
        email: email.toLowerCase(),
        password: encPass,
        firstname: firstName,
        lastname: lastName,
        role: 2,
      })
      .returning("*");

    const user_data = await KnexDB(tblUsers).where({ id: user[0] }).first();

    const token = jwt.sign({ userId: user_data.id, user_email: user_data.email, user_name: user_data.username, role: user_data.role }, process.env.JWT_SECRET, {
      expiresIn: `1y`,
      audience: `Whizlabs User`,
      subject: `${user_data.email}`,
    });

    res.json({
      status: "success",
      msg: "Registration successfull",
      data: {
        token,
        user_id: user_data.id,
        user_email: user_data.email,
        name: {
          first: user_data.firstname,
          last: user_data.lastname,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.sayHi = async (req, res, next) => {
  try {
    if (req.query.name) {
      return res.json({ msg: `Hiii,  ${req.query.name}`, status: true });
    } else {
      return res.json({
        status: 400,
        body: "Please pass a name on the query string or in the request body",
      });
    }
  } catch (error) {
    next(error);
  }
};
