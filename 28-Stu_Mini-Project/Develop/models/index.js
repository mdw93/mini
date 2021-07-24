const Trip = require('./trips');
const Location = require('./locations');
const Traveller = require('./travellers');

Traveller.belongsToMany(Location, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
});

Location.belongsToMany(Traveller, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
});





module.exports = { Trip, Location, Traveller };
