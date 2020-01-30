const mongoose = require("mongoose");
const { Schema } = mongoose;

const playerSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"], minlength: 2, maxlength:15 },
    number: {type: Number},
    preferedPosition: {type: String, required:[true, "Preffered Position is required"]}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", playerSchema);
