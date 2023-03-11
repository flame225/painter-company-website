const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new error("Invalid email! put in right email")
        }
    }
  },
 name:{
    type: String,
    require:true,
    miniLength:3
 },
 message:{
    type: String,
    require:true,
    miniLength:3
 },
 subject:{
    type: String,
    require:true,
    miniLength:3
 }
});


const User = mongoose.model('user', userSchema);

module.exports = User;