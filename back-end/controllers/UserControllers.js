const db = require("..//models/index");
const User = db.User;
const Patient = db.Patient;
const Doctor = db.Doctor

const sendErrorResponse = (res, statusCode, message) => {
  res.status(statusCode).json({ success: false, error: message });
};

exports.signup = async (req, res, next) => {
  try {
    const { email, UserName, password, role, image, Gender, Weight, Height, specification, hospitalsRelations } = req.body;

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
 Gender,
 Weight,
 Height,
});

if (role === 'Patient') {
 await Patient.create({
    UserName,
    email,
    Gender,
    Weight,
    Height,
    userId: user.id, 
 });
} else if (role === 'Doctor') {
 await Doctor.create({
    UserName,
    email,
    specification,
    hospitalsRelations,
    userId: user.id, 
 });
}

    res.status(201).json({
      success: true,
      user,
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

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error in signin:", error);
    sendErrorResponse(res, 500, "Internal Server Error");
  }
};

const sendTokenResponse = async (user, codeStatus, res) => {
  console.log("send token");
  try {
    const token = await user.getJwtToken();
    console.log("token =", token);
    const options = { maxAge: 60 * 60 * 1000, httpOnly: true };

    res.status(codeStatus).cookie("token", token, options).json({
      success: true,
      id: user.id,
      role: user.role,
    });
  } catch (error) {
    console.error("Error sending token response:", error);
    sendErrorResponse(res, 400, "Token response error");
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
exports.deleteProfile = async (req, res) => {
  try {
    const userId = req.params.id;

    // Check if the user exists
    const user = await User.findByPk(userId);
    if (!user) {
      return sendErrorResponse(res, 404, "User not found");
    }

    
    await User.destroy({
      where: { id: userId }
    });

   
    if (user.role === 'Patient') {
      await Patient.destroy({
        where: { UserId: userId }
      });
    } else if (user.role === 'Doctor') {
      await Doctor.destroy({
        where: { UserId: userId }
      });
    }

    res.status(200).json({
      success: true,
      message: "Profile deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user profile:", error);
    sendErrorResponse(res, 500, "Internal Server Error");
  }
};