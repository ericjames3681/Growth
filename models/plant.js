const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema(
  {
    name: String,
    sci_name: String,
    duration: String,
    img: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Plant", plantSchema);
