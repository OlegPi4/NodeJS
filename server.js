const express = require("express");
//const chalk = require("chalk");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const methodOverride = require("method-override");
const postRoutes = require("./routes/post-routes");
const postApiRouters = require("./routes/api-post-routes");
const contactRoutes = require("./routes/contact-routes");
const createPath = require("./helpers/create-path");

//const errorMsg = chalk.bgKeyword("white").redBright;
//const successMsg = chalk.bgKeyword("green").white;

const app = express();

app.set("view engine", "ejs");

//const PORT = 3000;
// const db =
//   "mongodb+srv://OlegPi4:Admfse01@cluster0.kjs3yzf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Connected to DB"))
  .catch((error) => console.log(error));

app.listen(process.env.PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${process.env.PORT}`);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.urlencoded({ extended: false }));
app.use(express.static("styles"));
app.use(methodOverride("_method"));

let basePath = "";

app.get("/", (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
});

app.use(postRoutes);
app.use(postApiRouters);
app.use(contactRoutes);

app.use((req, res) => {
  const title = "Error page";
  res.status(404).render(createPath("error"), { title });
});
