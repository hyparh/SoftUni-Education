const router = require("express").Router(); //modular router
const cubeService = require("../services/cubeService");

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  const { 
    name, 
    description, 
    imageUrl, 
    difficultyLevel 
} = req.body; //destructuring the request

  await cubeService.create({ 
    name,
    description, 
    imageUrl, 
    difficultyLevel: Number(difficultyLevel) });
  res.redirect("/");
});

//this here show perfectly the MVC pattern
router.get("/:cubeId/details", async (req, res) => {
  const cube = await cubeService.getOne(req.params.cubeId).lean(); //"lean" says: don't return me a document, return me an object

  if (!cube) {
    return res.redirect("/404");
  }

  res.render("details", { cube });
});

module.exports = router;