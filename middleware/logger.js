const logger = (req, res, next) => {
  console.log(
    `Logged ${req.method} ${req.protocol}://${req.get("host")}${
      req.originalUrl
    }`
  );
  next();
};

module.exports = logger;
