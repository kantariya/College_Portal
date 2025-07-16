import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  role: { type: String, enum: ['student', 'teacher', 'admin'], required: true },

  name: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  birthDate: { type: Date },
  bloodGroup: { type: String },

  contact: {
    mobile: { type: String, required: true },
    email: { type: String, required: true, unique: true }
  },

  passwordHash: { type: String, required: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
