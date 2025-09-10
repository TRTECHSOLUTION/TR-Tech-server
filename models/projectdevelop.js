const mongoose = require('mongoose');

const projectDevelopSchema = new mongoose.Schema({
  fileup: {
    type: String,
    required: true
  },
  thoughts: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  emailid: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
    required: true
  },
  budget: { 
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  schedule: { 
    type: Date,
    required: true
  }
},
{
     timestamps: true 
});

module.exports = mongoose.model("ProjectDevelop", projectDevelopSchema);
