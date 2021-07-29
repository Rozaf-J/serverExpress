errHandler = (err, req, res, next) => {
  if (err) {
    console.log("err2");
    res.sendStatus(400).redirect("/alarm");
  } else next();
};

module.exports = errHandler;
