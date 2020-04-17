var Plant = require("../models/lists");

module.exports = {
  create,
};

async function create(req, res) {
  console.log("user: ", req.user);
  try {
    await Plant.create(req.body);
    // Use the highScores action to return the list
    userPlants(req, res);
  } catch (err) {
    res.json({ err });
  }
}
