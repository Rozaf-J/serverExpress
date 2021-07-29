exports.validation = (schema) => (req, res, next) => {
  let body = req.body;

  schema.isValid(body).then((result) => {
    if (result === true) {
      return next();
    } else {
      console.log("error");
      res.render("../src/views/alarm.pug", { error: "Wrong Data" });
    }
  });
};
