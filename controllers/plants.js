const Plant = require("../models/plant");
const jwt = require("jsonwebtoken");

module.exports = {
  create,
  index,
  delete: deleteOne,
  update,
};

async function index(req, res) {
  const plant = await Plant.find({});
  res.status(200).json(plant);
}

async function create(req, res) {
  const plant = await Plant.create(req.body);
  res.status(201).json(plant);
}

async function deleteOne(req, res) {
  const deletedPlant = await Plant.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedPlant);
}

async function update(req, res) {
  const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedPlant);
}