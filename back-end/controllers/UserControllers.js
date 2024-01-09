const { sequelize } = require("../models/index");

const User = require("../models/User")(sequelize);

const sendErrorResponse = (res, statusCode, message) => {
  res.status(statusCode).json({ success: false, error: message });
};

exports.signup = async (req, res, next) => {
  try {
    const { email, UserName, password, role, image } = req.body;

    const userExist = await User.findOne({ where: { email } });

    if (userExist) {
      return next(sendErrorResponse(res, 400, "E-mail already registered"));
    }

    const user = await User.create({
      UserName,
      email,
      password,
      role,
      image,
    });

    res.status(201).json({
      success: true,
      user
    });
  } catch (error) {
    console.error("Sequelize Validation Errors:", error.errors);
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
    sendTokenResponse(user, 200, res);

  } catch (error) {
    console.error("Error in signin:", error);
    sendErrorResponse(res, 500, "Internal Server Error");
  }
};

const sendTokenResponse = async (user, codeStatus, res) => {
  const token = await user.getJwtToken();
  const options = { maxAge: 60 * 60 * 1000, httpOnly: true };
  options.secure = true;
  
  res
      .status(codeStatus)
      .cookie('token', token, options)
      .json({
          success: true,
          id: user.id,
          role: user.role
      })
}

exports.logout = (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "Logged out",
  });
};

exports.userProfile = async (req, res, next) => {
  
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] },
    });
    res.status(200).json({
      success: true,
      user
  })
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