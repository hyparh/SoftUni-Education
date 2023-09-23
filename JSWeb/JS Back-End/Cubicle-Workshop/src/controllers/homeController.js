const router = require("express").Router(); //modular router
const cubeService = require("../services/cubeService");

router.get("/", (req, res) => {
  const cubes = cubeService.getAll();

  res.render("index", { cubes });
});

router.get("/about", (req, res)  => {
    res.render("about");
});

module.exports = router;
