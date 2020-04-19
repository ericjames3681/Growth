const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema(
  {
    name: String,
    sci_name: String,
    duration: String,
    family: String,
    img: String,
    // wateredOn: Date,
    owners: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Plant", plantSchema);
