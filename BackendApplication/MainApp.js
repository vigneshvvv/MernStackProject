const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const loginRouter = require('./Routers/loginRouter');
const productRouter = require('./Routers/ProductRouter');
const cartRouter = require('./Routers/CartRouter');
const server = express();
mongoose.connect('mongodb://localhost:27017/localData').
then(() => console.log("Connection Established successfully"))
.catch((err) => console.log("Error occured while establishing mongoDB connection", err));

server.use(parser.json());
server.use("/api/v1", loginRouter);
server.use("/api/v1",productRouter);
server.use("/api/v1", cartRouter);

server.listen(8080);

