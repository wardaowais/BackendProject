const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");
const router = express.Router();

router.get("/",function(req,res){
    let error = req.flash("error");
    res.render("index",{ error, loggedin : false})
    
});

router.get("/shop", isLoggedIn, async function(req,res){
   let products =   await productModel.find()
    res.render("shop", { products });   
});
router.get("/addtocart/:id", isLoggedIn, async function(req,res){
    
    let user = await userModel.findOne({user :req.user.email}) 
    
 });
 

router.get("/logout",isLoggedIn, function(req,res){
    res.render("shop");
})

module.exports = router;

