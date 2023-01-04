const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Workouts = require("./Workouts");

class Exercises extends Model {}

Exercises.init({
  workout_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "workouts",
      key: "id",
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  reps: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Exercises;
