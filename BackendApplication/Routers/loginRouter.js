const express = require('express');
const loginRouter = express.Router();
const loginValidation = require('../utils/loginUtils'); 
const {validationResult, matchedData, checkSchema} = require('express-validator');
const User = require('../schema/loginSchema');
const validateLogin = require('../service/LoginMiddlewareService');
const loginService = require('../service/LoginMongoDBService');

loginRouter.get("/login", checkSchema(loginValidation), validateLogin, loginService)

module.exports = loginRouter;