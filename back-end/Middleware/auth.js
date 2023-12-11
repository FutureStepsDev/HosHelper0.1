exports.isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return next(new ErrorResponse('You must Log In...', 401));
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log('Decoded token:', decoded);

        const user = await User.findByPk(decoded.id);

        console.log('Found user:', user);

        if (!user) {
            return next(new ErrorResponse('User not found', 404));
        }
        req.user = user;
        next();
    } catch (error) {
        console.error('Error in isAuthenticated middleware:', error);
        return next(new ErrorResponse('You must Log In', 401));
    }
};
