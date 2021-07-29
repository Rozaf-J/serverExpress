const yup = require("yup");

let userSchema = yup.object().shape({
  name: yup.string().min(2).max(100).required(),
  age: yup.number().required().positive().integer(),
});

module.exports = userSchema;
