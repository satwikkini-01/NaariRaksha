const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const staticRouter = require("./routes/staticRoute");
const helplineRouter = require("./routes/helpline");
const registerACaseRouter = require("./routes/registerACase");
const safetyRouter = require("./routes/safety");
const communityRouter = require("./routes/community");
const locationRouter = require("./routes/location");

const app = express();
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("MongoDB Connected"))
  .catch((error) => {
    console.log("Error Connecting MongoDB", error);
  });

app.use(express.static(path.resolve("./public")));
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/", staticRouter);
app.use("/helpline", helplineRouter);
app.use("/registerACase", registerACaseRouter);
app.use("/safety", safetyRouter);
app.use("/community", communityRouter);
app.use("/location", locationRouter);

app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});