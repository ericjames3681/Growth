const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema(
  {
    name: String,
    sci_name: String,
    duration: String,
    img: String,
    ownedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    wateredOn: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Plant", plantSchema);
