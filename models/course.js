const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  contactnumber: {
    type: String,
    required: true,
    trim: true,
  },
  course: {
    type: String,
    required: true,
    trim: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);
