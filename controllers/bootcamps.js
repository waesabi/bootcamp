exports.getBootCamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Show all bootcamps",
  });
};

exports.getBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Get bootcamp with id ${req.params.id}`,
  });
};

exports.createBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Create new bootcamp",
  });
};

exports.updateBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update bootcamp with id ${req.params.id}`,
  });
};

exports.deleteBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootcamp with id ${req.params.id}`,
  });
};
