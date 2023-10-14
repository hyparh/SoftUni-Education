const router = require("express").Router();

const userService = require("../services/userService");
const { TOKEN_KEY } = require("../config/config");

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const token = await userService.login(username, password);

  res.cookie(TOKEN_KEY, token);

  res.redirect("/");
});

router.get("/register", (req, res) => {
  res.render("users/register");
});

router.post("/register", async (req, res) => {
  const { username, email, password, repeatPassword } = req.body;

  await userService.register({ username, email, password, repeatPassword });

  res.redirect("/users/login");
});

router.get('/logout', (req, res) => {
    res.clearCookie(TOKEN_KEY);

    res.redirect('/');
});

module.exports = router;
