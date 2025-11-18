const validateLoginDetails = {
    username:{
        notEmpty:{
            errorMessage: "The name must not be Empty"
        },
        isLength:{
            options: {min: 3, max: 20},
            errorMessage: "The Username is too short"
        },
        isString:{
            errorMessage: "The username must be valid String"
        }
    },
      password:{
        notEmpty:{
            errorMessage: "The name must not be Empty"
        },
        isLength:{
            options: {min: 3, max: 20},
            errorMessage: "The Username is too short"
        }
    },
}

module.exports = validateLoginDetails;