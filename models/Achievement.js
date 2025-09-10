const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  imageurl: {
    type: String,
    required: true,
  },
  smallDescription: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Achievement', achievementSchema);
