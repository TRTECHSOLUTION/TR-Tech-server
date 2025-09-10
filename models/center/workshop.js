const mongoose = require("mongoose");

const workshopSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: String,
      required: true
    },
    heading: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    file: {
      type: String,
      required:true
    },
    joinNow: {
      type: String ,
      required : true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("addWorkshop", workshopSchema);
