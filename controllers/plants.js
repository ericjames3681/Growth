const Plant = require("../models/plant");

module.exports = {
  create,
  delete: deleteOne,
  //   update,
  index,
};

async function index(req, res) {
  console.log("user: ", req.user);
  try {
    const plants = await Plant.find(req.user.garden[{}]);
    res.json(plants);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function create(req, res) {
  console.log(req.body);
  try {
    const plant = await Plant.create(req.body);
    await plant.save();
    res.json(plant);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteOne(req, res) {
  const deletedPlant = await Plant.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedPlant);
}

// async function update(req, res) {
//   const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   res.status(200).json(updatedPlant);
// }
