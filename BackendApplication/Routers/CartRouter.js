const express = require('express');
const cartRouter = express.Router();
const userdetail = require("../schema/CartCatalogueSchema");

cartRouter.get("/getCartDetails", async (req,res,next) => {
    const users = await userdetail.find();
    console.log(users);
    res.send(users);
})

cartRouter.post("/postProduct", async(req, res, next) => {
    const user = req.body;
    const filtered = await userdetail.findOne({"userName": user.userName});
    console.log("filtered", filtered);

    let quantityIncreased = false;
    for( let product of filtered.products){
        if(product.productName === user.products[0].productName){
            product.quantity = product.quantity+1;
            quantityIncreased = true;
        }
    }

    if(!quantityIncreased){
        filtered.products.push(user.products[0]);
    }
    const savedproduct = await filtered.save();
    console.log(savedproduct);
    return res.send(savedproduct);

})
module.exports = cartRouter;