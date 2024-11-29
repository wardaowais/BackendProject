const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();
const products = [
    {
        name: "Product 1",
        price: 1500,
        bgcolor: "#ffedd5", // Light orange
        panelcolor: "#fde68a", // Light yellow
        textcolor: "#000000", // Black text
        image: Buffer.from("base64-encoded-string-here") // Replace with actual image data
    },
    {
        name: "Product 2",
        price: 2300,
        bgcolor: "#e0f2fe", // Light blue
        panelcolor: "#93c5fd", // Medium blue
        textcolor: "#ffffff", // White text
        image: Buffer.from("base64-encoded-string-here") // Replace with actual image data
    },
    {
        name: "Product 3",
        price: 999,
        bgcolor: "#f0fdf4", // Light green
        panelcolor: "#bbf7d0", // Medium green
        textcolor: "#333333", // Dark gray text
        image: Buffer.from("base64-encoded-string-here") // Replace with actual image data
    },
    {
        name: "Product 4",
        price: 1800,
        bgcolor: "#fef2f2", // Light pink
        panelcolor: "#fecaca", // Medium pink
        textcolor: "#111111", // Black text
        image: Buffer.from("base64-encoded-string-here") // Replace with actual image data
    }
];

router.get("/",function(req,res){
    let error = req.flash("error");
    res.render("index",{error})
    
});
router.get("/shop", isLoggedIn, function(req,res){
    res.render("shop", { products });
    
});


module.exports = router;

