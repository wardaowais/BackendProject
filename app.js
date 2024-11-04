const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")
const path = require("path")
const ownerRouter = require("./routes/ownersRouter")
const productsRouter = require("./routes/productRouter")
const userRouter = require("./routes/userRouter")




const db = require("./config/mongoose-connection");
const ownerModel = require("./models/owner-model");

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")

app.use("/owners", ownerRouter);
app.use("/users",userRouter);
app.use("/products",productsRouter)

app.listen(3000);


