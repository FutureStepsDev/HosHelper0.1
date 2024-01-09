
const jwt = require('jsonwebtoken');
const { sequelize } = require("../models/index");
const User = require("../models/User")(sequelize);

exports.isAuthenticated = async (req, res, next) => {
    const token =  req.cookies;
    if (!token) return next(new ErrorResponse(401, 'Unauthorized'));
  
    
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      next();

  } catch (error) {
      return next(new ErrorResponse('You must Log In', 401));
  }
}

class ErrorResponse extends Error {
    constructor(message, codeStatus) {
        super(message);
        this.codeStatus = codeStatus;
    }
}
