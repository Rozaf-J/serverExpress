UserValidation = (schema) => (req, res, next) => {
  let body = req.body;

  schema.isValid(body).then((result) => {
    if (result === true) {
      return next();
    } else {
      console.log("error");
      next(new Error("Validation error"));
    }
  });
};

module.exports = {
  UserValidation,
};
