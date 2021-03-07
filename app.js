const express = require("express");
const apiRouter = require("./routes/index");
var cors = require("cors");

const app = express();
// app.set("views", __dirname+ "/views");

// app.engine("html", require("ejs").renderFile);
// app.set("view engine", "html");

app.use(cors());

// use router
app.use("/", apiRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));