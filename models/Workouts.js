const { Model,DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Workouts extends Model { }

Workouts.init({
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      Model: "user",
      key: "id"
    }
  },

  ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false

  }

},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "workouts"
  }
);

module.exports = Workouts;