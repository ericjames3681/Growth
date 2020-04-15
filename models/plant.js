const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    species: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Plant", plantSchema);
