const sequelize = require("sequelize");
const { User, Workouts } = require("../models");

// requirer the json files for the data

const seedDatabase = async () => {
  await sequelize.sync({ focus: true });

  const users = await User.bulkCreate(userData, {
    individualHook: true,
    returning: true,
  });
};

for (const workout of workoutData) {
  await Workouts.create({
    ...workout,
    user_id: users[Math.floor(Math.random() * users.length)].id,
  });
}

process.exit(0);
};

seedDatabase();