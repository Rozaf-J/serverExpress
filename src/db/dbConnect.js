const mg = require("mongoose");

exports.connect = () => {
  return mg
    .connect(
      "mongodb+srv://Admin:0803@cluster0.sgcom.mongodb.net/mgTest?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("MongoDb connected");
    })
    .catch((e) => {
      console.log(e);
    });
};
