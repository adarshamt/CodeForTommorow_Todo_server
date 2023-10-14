const user = require("../model/userSchema");
const bcrypt = require("bcrypt");

//****************** user Registration ***************** */

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

//****************** user login ***************** */

const login = async (req, res) => {
    const { email, password } = req.body;
  
    const checkUser = await user.findOne({ email: email });
    console.log(checkUser);
   
  
    if (!checkUser) {
      return res.status(404).json({
        status: "faliure",
        message: "invalid email",
      });
    }
     const user_id = checkUser._id;
    console.log(user_id, "----------user id");
    if (!bcrypt.compare(password, checkUser.password)) {
      return res.status(404).json({
        status: "faliure",
        message: "invalid password",
      });
    }
    const token = jwt.sign({ email: user.email }, "user");
    res.json({
      status: "success",
      message: "successfully",
      email: email,
      token: token,
      user_id,
    });
  };

module.exports = {
  userRegistraion,login
};
