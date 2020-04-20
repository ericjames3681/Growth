const Plant = require("../models/plant");
const User = require("../models/user");

module.exports = {
  create,
  delete: deleteOne,
  index,
};

async function index(req, res) {
  console.log(req.user);
  try {
    const plants = await Plant.find({ owners: { "$in": req.user._id } }).populate("owners");
    console.log(plants);
    res.json(plants);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

async function create(req, res) {
  try {
    const plant = await Plant.create(req.body);
    plant.owners.push(req.user._id);
    await plant.save();
    res.json("Plant added to your garden!");
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
