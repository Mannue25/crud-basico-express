const mongoose = require("mongoose");

const cafeConnect = process.env.MONGODB_CNN;

mongoose
  .connect(cafeConnect, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log("Database is connected"))
  .catch((err) => console.error(err));
