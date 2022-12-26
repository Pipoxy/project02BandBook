const router = require("express").Router();
const { Workout, User } = require("../models");
// const authorized = require("../helpers/authorized");

// get all posts for homepage
router.get('/', async (req, res) => {
  try {


    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
