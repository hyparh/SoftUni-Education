const router = require("express").Router(); //modular router
const cubeService = require("../services/cubeService");
const accessoryService = require("../services/accessoryService");

router.get("/create", (req, res) => {
  console.log(req.user);
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
    difficultyLevel: Number(difficultyLevel),
    owner: req.user._id,
  });

  res.redirect("/");
});

//this here show perfectly the MVC pattern
router.get("/:cubeId/details", async (req, res) => {
  const cube = await cubeService.getOneWithAccessories(req.params.cubeId).lean(); //"lean" says: don't return me a document, return me an object

  if (!cube) {
    return res.redirect("/404");
  }

  res.render("details", { cube });
});

router.get('/:cubeId/attach-accessory', async (req, res) => {
  const cube = await cubeService.getOne(req.params.cubeId).lean();
  const accessories = await accessoryService.getOthers(cube.accessories).lean();

  const hasAccessories = accessories.length > 0;

  res.render('accessory/attach', { cube, accessories, hasAccessories });
});

router.post('/:cubeId/attach-accessory', async (req, res) => {
  const { accessory } = req.body; //accessory here is the Id of a single accessory
  const cubeId = req.params.cubeId;

  await cubeService.attachAccessory(cubeId, accessory);

  res.redirect(`/cubes/${cubeId}/details`);
});

module.exports = router;