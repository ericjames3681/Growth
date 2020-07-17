const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema(
  {
    name: String,
    sci_name: String,
    family: String,
    img: {
      type: String,
      default:
        "https://i.pinimg.com/236x/cf/79/0d/cf790d318088a962f7db227a4263af35.jpg",
    },
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
