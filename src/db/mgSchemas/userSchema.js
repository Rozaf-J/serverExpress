const mg = require("mongoose");
const Schema = mg.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});
const user = mg.model("users", userSchema);

module.exports = { Users: user };
