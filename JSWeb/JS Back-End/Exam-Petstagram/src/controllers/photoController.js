const router = require("express").Router();

router.get("/create", (req, res) => {
  res.render("photos/create"); //folder/handlebars file
});

module.exports = router;
