const router = require("express").Router(); //modular router

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
