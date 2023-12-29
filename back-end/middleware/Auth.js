const jwt = require('jsonwebtoken');

exports.isAuthenticated = (req, res, next) => {
    const token =  req.cookies.token;
      console.log("tocken:",token)
    if (!token) return next(new ErrorResponse(401, 'Unauthorized'));
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return next(new ErrorResponse(403, 'Forbidden'));
  
      req.user = decoded;
      next();
    });
  };

class ErrorResponse extends Error {
    constructor(message, codeStatus) {
        super(message);
        this.codeStatus = codeStatus;
    }
}

