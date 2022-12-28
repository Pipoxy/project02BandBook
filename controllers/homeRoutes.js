const router = require("express").Router();
const { Workout, User } = require("../models");
// const authorized = require("../helpers/authorized");

// get all posts for homepage
router.get('/', async (req, res) => {
  try {


    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  try {


    res.render('profile');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {


    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {


    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
