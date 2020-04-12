var Score = require("../models/lists");

module.exports = {
  create,
};

async function create(req, res) {
  console.log("user: ", req.user);
  try {
    await Score.create(req.body);
    // Use the highScores action to return the list
    highScores(req, res);
  } catch (err) {
    res.json({ err });
  }
}
