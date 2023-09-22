const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  
  description: {
    type: String,
    required: true
  },
  Status: {
    type: String,
    enum: ['pending', 'ongoing', 'completed'],
    default: 'pending',
}
 
});




const User = mongoose.model('User', userSchema);

module.exports = User;
