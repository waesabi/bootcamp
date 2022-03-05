const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Show all bootcamps",
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Create new bootcamp",
  });
});

router.get("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Get bootcamp with id ${req.params.id}`,
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update bootcamp with id ${req.params.id}`,
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootcamp with id ${req.params.id}`,
  });
});

module.exports = router;
