const sequelize = require("../config/connection");
const { User,Workouts,Exercises } = require("../models");


const userData = require("./userData.json");
const workoutsData = require("./workoutsData.json");
const exercisesData = require("./exercisesData.json");

const seedDatabase = async () => {
  await sequelize.sync({ focus: true });

  const users = await User.bulkCreate(userData,{
    individualHook: true,
    returning: true,
  });

  for (const workouts of workoutsData) {
    await Workouts.create({
      ...workouts,
      user_id: users[Math.floor(Math.random() * users.length)].id
    });

  }


  for (const exercises of exercisesData) {
    await Exercises.create({
      ...exercises,
      workout_id: workoutsData[Math.floor(Math.random() * workoutsData.length)].id
    });
  };


  process.exit(0);
};
seedDatabase();