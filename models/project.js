const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String,
    required: true, 
    lowercase: true 
  },
  contactnumber: { 
    type: String, 
    required: true 
  },
  message: { 
    type: String, 
    required: true
  }
}, 
{ 
  timestamps: true 
});

module.exports = mongoose.model("Project", projectSchema);

