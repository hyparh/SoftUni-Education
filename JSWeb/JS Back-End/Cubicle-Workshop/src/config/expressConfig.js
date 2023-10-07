const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const { auth } = require('../middlewares/authMiddleware');

function expressConfig(app) {
    app.use(express.static(path.resolve(__dirname, '../public')));
    app.use(express.urlencoded({ extended: false })); // body parser - parses data through the request to ordinary object. We can call it with req.body
    app.use(cookieParser());
    app.use(auth);
};

module.exports = expressConfig;