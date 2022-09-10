const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

const cors = require("cors");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DBConnection Successful");
    app.listen(process.env.PORT || 4000, () => {
      console.log("backend server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
