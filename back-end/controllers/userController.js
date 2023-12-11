
const db = require('../models/model.js'); 
const User = db.models.users;
const ErrorResponse = require('../utilis/errorresponse.js');


exports.signup
 = async (req, res, next) => {
  const { email } = req.body;

  try {
    const userExist = await User.findOne({ where: { email : email } });

    if (userExist) {
      return next(new ErrorResponse('E-mail already registered', 400));
    }

    // Create a new user
    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isMatched = await user.comparePassword(password);

    if (!isMatched) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error in signin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




const sendTokenResponse = async (user, codeStatus, res) => {
  console.log("send token");
  try {
    const token = await user.getJwtToken();
    console.log("token =", token);
    const options = { maxAge: 60 * 60 * 1000, httpOnly: true };

    res
      .status(codeStatus)
      .cookie('token', token, options)
      .json({
        success: true,
        id: user.id,
        role: user.role,
      });
  } catch (error) {
    console.error("Error sending token response:", error);
    res.status(400).json({ error: 'Token response error' });
  }
};


exports.logout = (req, res, next) => {
  res.clearCookie('token');
  res.status(200).json({
    success: true,
    message: 'Logged out',
  });
};


exports.userProfile = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      return next(new ErrorResponse('User not found', 404));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};