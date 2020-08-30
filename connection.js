const mongoose = require("mongoose");

// localhost:27017
const uri = "mongodb://127.0.0.1:27017/mitienda";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  }).catch(err => console.log(err));

const db = mongoose.connection;

db.once("open", _ => {
  console.log("Conectado a:", uri);
});

db.on("error", err => {
  console.log(err);
});
