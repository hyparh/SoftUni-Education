const router = require("express").Router(); //modular router
const cubeService = require("../services/cubeService");

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", (req, res) => {
  const { 
    name, 
    description, 
    imageUrl, 
    difficultyLevel 
} = req.body; //destructuring the request

  cubeService.create({ 
    name, 
    description, 
    imageUrl, 
    difficultyLevel: Number(difficultyLevel) });
  res.redirect("/");
});

//this here show perfectly the MVC pattern
router.get("/:cubeId/details", (req, res) => {
  const cube = cubeService.getOne(req.params.cubeId);

  if (!cube) {
    return res.redirect("/404");
  }

  res.render("details", { cube });
});

module.exports = router;