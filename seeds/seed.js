
const sequelize = require("../config/connection");
const { User,Workouts,Exercises } = require("../models");


const userData = require("./userData.json");
const workoutsData = require("./workouts.json");
const exercisesData = require("seeds\exercises.json");

async function seedDatabase() {
  await sequelize.sync({ focus: true });

  const users = await User.bulkCreate(userData,{
    individualHook: true,
    returning: true,
  });
  
  const workouts = await Workouts.bullCreate(workoutsData,{
    returning: true
  });

  for (const workouts of workoutsData) {
    await Workouts.create({
      ...workouts,
      user_id: users(Math.floor(math.random() * users.length)).id
    });
  }

process.exit(0);
};
seedDatabase();


