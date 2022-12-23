const router = require("express").Router();
const { Workout, User } = require("../models");
const authorized = require("../helpers/authorized");

router.get("/", async (req, res) => {
  try {
    // Get all Workouts and JOIN with user data
    const workoutData = await Workout.findAll({
      include: [
        {
          model: User,
          attributes: [""],
        },
      ],
    });

    const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    res.render("homepage", {
      workouts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
