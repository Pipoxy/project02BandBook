const router = require("express").Router();
const { Workouts, User } = require("../models");
const authorized = require("../helpers/authorized");

// get all posts for homepage
router.get("/", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/workout/:id", async (req, res) => {
  try {
    const workoutData = await Workouts.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const workout = workoutData.get({ plain: true });

    res.render("workout", {
      ...workout,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", authorized, async (req, res) => {
  try {
    res.render("profile", { logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
