errHandler = (err, req, res, next) => {
  if (err) {
    console.log("err2");
    res.sendStatus(400);
  } else next();
};

module.exports = errHandler;
