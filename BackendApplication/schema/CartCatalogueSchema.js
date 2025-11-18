const mongoose = require('mongoose');

const productData = new mongoose.Schema({
    productID:{
        type: String,
        required: true
    },
    productName: {
        type:String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    }
})

const userdetail = new mongoose.Schema({
    userID: {
        type: String,
        required:true
    },
    userName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    products:[productData]
});

module.exports = mongoose.model('userDetails', userdetail, "CartCollection");