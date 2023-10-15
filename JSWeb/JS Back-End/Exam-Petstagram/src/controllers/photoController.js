const router = require("express").Router();

const photoService = require("../services/photoService");
const { getErrorMessage } = require("../utils/errorHelpers");

router.get("/create", (req, res) => {
  res.render("photos/create"); //folder/handlebars file
});

router.post("/create", async (req, res) => {
  const { photoData } = req.body;

  try {
    await photoService.create(photoData);

    res.redirect("/photos");
  } catch (err) {
    res.render("photos/create", { error: getErrorMessage(err) }); //this is all necessary error handling
  }
});

module.exports = router;