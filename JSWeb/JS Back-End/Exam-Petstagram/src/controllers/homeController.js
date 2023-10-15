const router = require("express").Router();

const photoService = require("../services/photoService"); //for the bonus only

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/404", (req, res) => {
  res.render("404");
});

//this is for the bonus only - profile
router.get("/profile", async (req, res) => {
  const photos = await photoService.getByOwner(req.user._id).lean();

  res.render("profile", { photos, photoCount: photos.length });
});

module.exports = router;
