const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  skills:{
    type: [],
    required: false
  },
  interests:{
    type: [],
    required: false
  },
  institution:{
    type: String,
    required: true
  },
  course:{
    type: String,
    required: true
  },
  eventId:[{
    type: String,
    required: false
  }],
  achieveId:[{
    type: String,
    required: false
  }],
  tiesId:[{
    type: String,
    required: false
  }],
  timeline:[{
    eveId: String,
    message: String,
    date: {
      type: Date,
      default: Date.now()
    },
    pointsAwarded : Number,
    messageType : String 
  }]
});

const User = module.exports = mongoose.model('User', UserSchema);
