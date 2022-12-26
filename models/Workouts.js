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
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
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