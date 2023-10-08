const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);
            
            req.user = decodedToken;
            res.locals.user = decodedToken;
            req.locals.isAuthenticated = true; //to access it in the views

            next();
        } catch (err) {
            res.clearCookie('auth');
            res.redirect('/users/login');
        }
    } else {
        next();
    } 
};

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/users/login');
    }

    next();
};