const mongoose = require ('mongoose')

const paperPublicationSchema = new mongoose.Schema({
  journal: {
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
  publicationType: {  // e.g., National, International, IEEE, Scopus
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

module.exports = mongoose.model("PaperPublication", paperPublicationSchema);
