const router = require('express').Router();

const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const electronicsController = require('./controllers/electronicsController');

router.use(homeController);
router.use('/users', userController);
router.use('/electronics', electronicsController);
router.get('*', (req, res) => { //this is good to be commented out during development of functionality
    res.redirect('/404');
});

module.exports = router;