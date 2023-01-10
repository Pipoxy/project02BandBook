const router = require("express").Router();
const { Workouts } = require("../../models");
const authorized = require("../../utils/auth");

router.post("/", async (req, res) => {
  try {
    const newWorkout = await Workouts.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const workoutData = await Workouts.findAll({
      limit: 3,
      order: [["id", "DESC"]],
    });

    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", authorized, async (req, res) => {
  try {
    const workoutData = await Workouts.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!workoutData) {
      res.status(404).json({ message: "No workout found!" });
      return;
    }

    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
