const User = require("./User");
const Workouts = require("./Workouts");

User.hasMany(Workouts, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Workouts.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Workouts };
