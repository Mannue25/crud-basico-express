require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const router = require("./routes/index");

// arrancar el server.
const app = express();
const port = process.env.PORT || 3000;
require("./config/database");

// middlewares
app.use(express.static(__dirname + "/public"));
// CORS
app.use(cors());
//Json Type
app.use(express.json());
app.use("/api/usuarios", router);

app.listen(port, () => {
  console.log("Server on port 3000");
});
