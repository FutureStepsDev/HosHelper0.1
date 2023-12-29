const db = require("..//models/index");
const User = db.User;
const jwt = require('jsonwebtoken');


const sendErrorResponse = (res, statusCode, message) => {
  res.status(statusCode).json({ success: false, error: message });
};

exports.signup = async (req, res, next) => {
  try {
    const { email, UserName, password, role, image } = req.body;

    const userExist = await User.findOne({ where: { email } });

    if (userExist) {
      return sendErrorResponse(res, 400, "E-mail already registered");
    }

    const user = await User.create({
      UserName,
      email,
      password,
      role,
      image,
    });


  } catch (error) {
    console.error("Error in signup:", error);
    sendErrorResponse(res, 500, "Internal Server Error");
  }
};

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return sendErrorResponse(res, 401, "Invalid email or password");
    }
    const isMatched = await user.comparePassword(password);

    if (!isMatched) {
      return sendErrorResponse(res, 401, "Invalid email or password");
    }
    const token =  jwt.sign({id:user.id},process.env.JWT_SECRET);

    res
    .cookie("token", token, { httpOnly: true, path:"/" })
    .status(200)
    .json({user});
    console.log(res.getHeaders()); 

  } catch (error) {
    console.error("Error in signin:", error);
    sendErrorResponse(res, 500, "Internal Server Error");
  }
};



exports.logout = (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "Logged out",
  });
};
exports.userProfile = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return sendErrorResponse(res, 404, "User not found");
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    sendErrorResponse(res, 500, "Internal Server Error");
  }
};
exports.updateProfile = (req, res) => {
  User.update(
    {
      UserName: req.body.UserName,
      email: req.body.email,
      image: req.body.image,
      password: req.body.password,
      role: req.body.role,
    },
    { where: { id: req.params.id } }
  )
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
};
exports.getAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
