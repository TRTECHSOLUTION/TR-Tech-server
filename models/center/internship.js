const mongoose = require("mongoose");

const addinternshipSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  image: { 
    type: String, 
    required: true 
  },
  heading: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  file: { 
    type: String  
   },
  joinNow: { 
    type: String 
  }
}, 
{ 
    timestamps: true 
});

module.exports = mongoose.model("addinternship", addinternshipSchema);