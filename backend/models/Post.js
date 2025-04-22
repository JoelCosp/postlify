const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 500
  },
  img: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  hashtags: [
    {
      type: String,
      required: true
    }
  ]
},
{
  versionKey: false // You should be aware of the outcome after set to false
}
);

module.exports = mongoose.model('Post', postSchema);