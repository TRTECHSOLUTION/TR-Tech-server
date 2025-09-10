const mongoose = require('mongoose');

const thesisSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  fileup: {
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
  topic: {
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

module.exports = mongoose.model("Thesis", thesisSchema);
