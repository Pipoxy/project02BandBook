const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User")

class Workouts extends Model {}

Workouts.init({
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      Model : "user",
      key: "id"
    }
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Workouts