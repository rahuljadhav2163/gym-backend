import { model,Schema } from "mongoose";
import mongoose  from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true, 
  },
  height: { 
    type: Number, 
    required: true 
  },
  weight: { 
    type: Number, 
    required: true 
  },
  password:{
    type: String, 
    required: true 
  },
  goal: { 
    type: String, 
    required: true,
    enum: [
      'Weight Loss', 
      'Muscle Gain', 
      'Endurance', 
      'Flexibility', 
      'Overall Fitness'
    ]
  }
}, {
  timestamps: true  
});




export const User = mongoose.model('User', UserSchema);

export default User;
