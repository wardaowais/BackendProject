const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        minlength:3,
        trim :true
    },
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[]
    },
    orders :{
        type:Array,
        default:[]
    },
    contsct :Number,
    picture : String
})


module.exports= mongoose.model("user",userSchema)
