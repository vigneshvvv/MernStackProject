const product = require('../schema/productSchema');
const userData = require('../schema/cartSchema');

class customError extends Error{
    constructor(message, status){
        super(message);
        this.message = message;
        this.status = status;
    }
}
const productService = async (req,res, next) => {
     let productDetail = await product.find();
    if(productDetail !== null){
        return res.status(200).send(productDetail);
    }
    return res.send(500).send("No Data Found");
}

const productPostService = async (req, res,next) => {
    const input = req.body;
    const {id, title,category, price, discountPercentage, dimension} = input;

    const newproduct = new product({
        id,
        title,
        category,
        price,
        discountPercentage,
        dimension

    });

    const dbSaved = await newproduct.save();
    if(!dbSaved){
        return res.send("Error while saving the data to Database");
    }


    return res.send("product Added successfully");
}

const productUpdateService = async (req, res, next) => {
    try{
    const inputObject = req.body;
    const finudateMethod = await product.findOneAndUpdate({"id": inputObject.id}, inputObject, {new: true} );

    console.log("final output after updating", finudateMethod);
    return res.send(finudateMethod);}
    catch(err){
        throw new customError("Exception Occured"+err, 404);
    }
}


const cartReceiver = async (req, res, next) => {
    const receivedProduct = req.body;
    const filteredbody = await userData.findOne({"username": receivedProduct.username});
    // console.log(filteredbody.products);

     quantityIncrease = false;
   for(const product of filteredbody.products){
    if(product.name === receivedProduct.products[0].name){
        product.quantity = product.quantity+1;
        quantityIncrease = true;
        break;
    }
   }

   if(!quantityIncrease){
    filteredbody.products.push(receivedProduct.products[0]);
   }

    console.log(filteredbody);
    const result = await filteredbody.save();
    console.log(result);
    return res.send("Done");
}

module.exports = {productService, productPostService, productUpdateService, cartReceiver};
