const express = require('express');
const path = require('path');

function expressConfig(app) {
    app.use(express.static(path.resolve(__dirname, '../public')));
    app.use(express.urlencoded({ extended: false })); // body parser - parses data through the request to ordinary object
};

module.exports = expressConfig;