const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");
const User = require("./User");

class Workouts extends Model {}

Workouts.init({
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: {
      name: "user_id",
      references: {
        model: User,
        key: "id",
      },
    },
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
