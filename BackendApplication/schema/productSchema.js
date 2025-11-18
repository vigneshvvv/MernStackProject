const mongoose = require('mongoose');

const dimensions = new mongoose.Schema({
    width:{
        type: String,
        required:true,
    },
    height:{
        type:String,
        required: true
    },
     depth:{
        type:String,
        required: true
     }
})

const product = new mongoose.Schema({
    id:{
        type: Number,
        require: true
    },
    title:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required:true
    }, 
    price: {
        type: Number,
        required: true
    },
    discountPercentage: {
        type: Number,
        required: true    
    },
    dimension: dimensions

});

module.exports = mongoose.model('product', product, "productsDetailCollection");