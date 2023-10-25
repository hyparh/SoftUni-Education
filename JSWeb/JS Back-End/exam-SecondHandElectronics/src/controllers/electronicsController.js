const router = require("express").Router();

const electronicsService = require("../services/electronicsService");
const { getErrorMessage } = require("../utils/errorHelpers");
const { isAuth } = require("../middlewares/authMiddleware");
const Electronics = require("../models/Electronics");

router.get("/", async (req, res) => {
  const electronics = await electronicsService.getAll().lean();

  res.render("electronics", { electronics }); //here 'electronics' is the folder and it finds index.js inside, because of default behavior of handlebars
});

router.get("/create", isAuth, (req, res) => {
  res.render("electronics/create"); //folder/handlebars file
});

router.post("/create", isAuth, async (req, res) => {
  const electronicsData = {
    ...req.body,
    owner: req.user._id,
  };

  try {
    await electronicsService.create(electronicsData);

    res.redirect("/electronics");
  } catch (err) {
    res.render("electronics/create", { error: getErrorMessage(err) }); //this is all necessary error handling
  }
});

router.get("/:electronicsId/details", async (req, res) => {
  const electronicsId = req.params.electronicsId;
  const electronics = await electronicsService.getOne(electronicsId).lean();
  const isOwner = req.user?._id == electronics.owner._id;

  res.render("electronics/details", { electronics, isOwner });
});

router.get("/:electronicsId/edit", isAuth, async (req, res) => {
  const electronics = await electronicsService
    .getOne(req.params.electronicsId)
    .lean();

  res.render("electronics/edit", { electronics });
});

router.post("/:electronicsId/edit", isAuth, async (req, res) => {
  const electronicsId = req.params.electronicsId;
  const electronicsData = req.body;

  try {
    await electronicsService.edit(electronicsId, electronicsData);

    res.redirect(`/electronics/${electronicsId}/details`);
  } catch (err) {
    res.render("electronics/edit", { error: getErrorMessage(err) });
  }
});

router.get("/:electronicsId/delete", isAuth, async (req, res) => {
  const electronicsId = req.params.electronicsId;

  try {
    await electronicsService.delete(electronicsId);

    res.redirect("/electronics");
  } catch (err) {
    res.render("/electronics/details", {
      error: "Unsuccessful electronics deletion",
    });
  }
});

//for the buy
router.get("/:electronicsId/buy-electronics", isAuth, async (req, res) => {
  const electronicsId = req.params.electronicsId;
  const userId = req.user._id;

  const electronic = await Electronics.findById(electronicsId);
  const isBought = electronic.buyingList.includes(userId); //this catches correctly if the user has bought the product or not

  try {
    await electronicsService.buyElectronics(electronicsId, userId, isBought);

    res.redirect(`/electronics/${electronicsId}/details`);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error during purchase", error: error.message });
  }
});

module.exports = router;
