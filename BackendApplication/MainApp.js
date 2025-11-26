const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const loginRouter = require('./Routers/loginRouter');
const productRouter = require('./Routers/ProductRouter');
const cartRouter = require('./Routers/CartRouter');
const Anime = require('./schema/AnimeCollection');
require('dotenv').config({path: '.env.prod'});

const server = express();
const PORT = process.env.PORT;
console.log(PORT);
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`).
then(() => console.log("Connection Established successfully"))
.catch((err) => console.log("Error occured while establishing mongoDB connection", err));

server.use(parser.json());
server.use("/api/v1", loginRouter);
server.use("/api/v1",productRouter);
server.use("/api/v1", cartRouter);
server.get("/ai/getAllContent", async (req, res) => {
    const result = await Anime.find();
    return res.send(result);
})

server.listen(PORT);

