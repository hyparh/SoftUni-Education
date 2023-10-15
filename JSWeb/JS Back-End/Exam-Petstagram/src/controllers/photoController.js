const router = require("express").Router();

const photoService = require("../services/photoService");
const { getErrorMessage } = require("../utils/errorHelpers");

router.get('/', async (req, res) => {
    const photos = await photoService.getAll().lean();

    res.render('photos', { photos: [] }); //here 'photos' is the folder and it finds index.js inside, because of default behavior of handlebars
});

router.get("/create", (req, res) => {
  res.render("photos/create"); //folder/handlebars file
});

router.post("/create", async (req, res) => {
  const photoData = {
    ...req.body,
    owner: req.user._id
  };

  try {
    await photoService.create(photoData);

    res.redirect("/photos");
  } catch (err) {
    res.render("photos/create", { error: getErrorMessage(err) }); //this is all necessary error handling
  }
});

module.exports = router;
