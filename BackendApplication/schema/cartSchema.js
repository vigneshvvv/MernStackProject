const mongoose = require('mongoose');

const products = new mongoose.Schema({
    product_id:{
        type: Number,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    quantity:{
        type:Number,
        required: true
    }
})

const userData = new mongoose.Schema({
    username: {
        type:String,
        required: true
    },
    email:{
        type:String
    },
    products:[products]
});

module.exports = mongoose.model('userData', userData, "ProductCartCollection");