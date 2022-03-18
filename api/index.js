

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const User = require("./models/User");
const bodyParser = require('body-parser');
const {MongoClient, ServerApiVersion} = require("mongodb");
const { db } = require("./models/User");

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

const data = mongoose.connect(process.env.MONGO_URL);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

;

app.use(cors());
app.use(express.json());
{/*app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);*/}

app.listen(process.env.PORT || 5001, () => {
  console.log("Backend server is running!");
});
//REGISTER
app.get('/', function (req, res) {
  res.render('client/src/pages/Home', {});
});

app.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await newUser.save();
  
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
{/* Is not accessing Database despite following proper documentation*/}
app.get("/Login", async (req, res) => {
 try{
    
    console.log("error: " + data.myFirstDatabase.find({name:john}));
    
    const user = await User.findOne({ username: req.body.username, password: req.body.username});

    !user && res.status(401).json("Wrong credentials!");
    console.log(user);
    
    console.log(req.body.username);
    console.log(req.body.password);
    user.password !== req.body.password &&
      res.status(401).json("Wrong credentials!");
}
  catch (err) {
    console.log(err);
    console.log("unsucc")
  }
});
