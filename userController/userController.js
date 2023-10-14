const user = require("../model/userSchema");
const bcrypt = require("bcrypt");

const userRegistraion = async (req, res) => {
  try {
    const { name, username, phone, email, password } = req.body;

    console.log("req body ----------", req.body);

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new user({
      name: name,
      fatername: username,
      password: hashedPassword,
      email: email,
      phoneNumber: phone,
    });

    await newUser.save();

    res.status(200).json({
      status: "success",
      message: " user registred successfully",
    });
  } catch (error) {
    res.json({
      status: "failed to register",
      message: error.message,
    });
  }
};

module.exports = {
  userRegistraion,
};
