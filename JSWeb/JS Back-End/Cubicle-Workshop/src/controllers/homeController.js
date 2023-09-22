const router = require("express").Router(); //modular router

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res)  => {
    res.render("about");
});

module.exports = router;
