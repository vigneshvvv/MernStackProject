const express = require('express');
const productRouter = express.Router();
const product = require('../schema/productSchema');
const {productService, productPostService, productUpdateService, cartReceiver} = require('../service/ProductMiddleware');

productRouter.get("/getAllProducts", productService);

productRouter.put("/updateProduct", productUpdateService);

productRouter.post("/addNewroduct", productPostService);

productRouter.post("/addcart", cartReceiver);

module.exports = productRouter;