//this is a global error handler which is not important for the lecture, it's just a bonus
const { extractErrorMessages } = require('../utils/errorHelpers');

module.exports = (err, req, res, next) => {
    const errorMessages = extractErrorMessages(err);

    res.render('404', { errorMessages });
};