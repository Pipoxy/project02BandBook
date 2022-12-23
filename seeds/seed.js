const sequelize = require("sequelize");
const { User, Workout} = require("../models");

// requirer the json files for the data

const seedDatabase = async () => {
  await sequelize.sync({ focus: true });

  const users = await User.bulkCreate(userData, {
    individualHook: true,
    returning: true,
  });
};

for (const workout of workoutData)