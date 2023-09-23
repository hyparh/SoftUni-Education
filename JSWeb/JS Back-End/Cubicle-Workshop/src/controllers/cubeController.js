const router = require("express").Router(); //modular router
const cubeService = require("../services/cubeService");

router.get("/create", (req, res) => {
    console.log(cubeService.getAll());
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

module.exports = router;
