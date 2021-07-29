const userCont = require("../controlers/Users");
const validate = require("../middleware/validators/validationMiddleware");
const validationSchemas = require("../middleware/validators/Schemas/userValidation");
const validationErrorHandler = require("../middleware/validators/validationErrorHandler");
const errorHandler = require("../middleware/errorHandler");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  next();
});

router
  .route("/")
  .get(userCont.viewUsers)
  .post(
    validate.UserValidation(validationSchemas.userSchema),
    validationErrorHandler,
    userCont.addUser
  )
  .delete(userCont.deleteUser)
  .put(
    validate.UserValidation(validationSchemas.updateUserSchema),
    userCont.updateUser
  )
  .all(errorHandler);

router.route("/alarm").get((req, res) => {
  res.render("../src/views/alarm.pug");
});

module.exports = router;
