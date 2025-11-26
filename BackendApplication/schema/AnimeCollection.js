const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true   // this will store "naruto.jpg", "gojo.jpeg", etc.
    }
}, { versionKey: false });

module.exports = mongoose.model('Anime', animeSchema, "AnimeCollection");