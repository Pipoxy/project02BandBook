const User = require("./User");
const Workouts = require("./Workouts");
const Exercises = require("./Exercises");

User.hasMany(Workouts, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Workouts.belongsTo(User, {
  foreignKey: "user_id",
});

Workouts.hasMany(Exercises, {
  foreignKey: "workout_id",
  onDelete: "CASCADE",
});

Exercises.belongsTo(Workouts, {
  foreignKey: "workout_id",
});

module.exports = { User, Workouts, Exercises };
