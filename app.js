const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");

const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api", authRouter);
require("dotenv").config();

// Connection with db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernflix", {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection
  .once("open", () => console.log("databse connection success"))
  .on("error", (err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Welcome to mernflix Server");
});

app.listen(port, () => {
  console.log("server is listening to port 4000");
});
