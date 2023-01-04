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
  name: {
    type: DataTypes.STRING,
    allowNull: false
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