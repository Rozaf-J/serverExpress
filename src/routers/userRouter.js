const userCont = require("../controlers/Users");
const validate = require("../middleware/validators/validationMiddleware");
const userSchema = require("../middleware/validators/Schemas/userValidation");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  next();
});

router
  .route("/")
  .get(userCont.viewUsers)
  .post(validate.validation(userSchema), userCont.addUser)
  .delete(userCont.deleteUser)
  .put(userCont.updateUser);

router.route("/alarm").get((req, res) => {
  res.render("../views/Alarm.pug");
});

module.exports = router;
