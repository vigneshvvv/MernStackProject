const { validationResult, matchedData } = require("express-validator")

const validateLogin = (req, res, next) => {
    const errors  = validationResult(req);
    if(!errors.isEmpty){
        return res.status(400).send("Validation Error please check the input", errors);
    }
     req.validatedBody = matchedData(req);
     next();
}

module.exports = validateLogin;