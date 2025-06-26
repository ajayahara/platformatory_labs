import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    phone: String,
    city: String,
    pincode: String,
    email: { type: String, required: true, unique: true },
    picture: String,
    fullName: String,
  },
  { timestamps: true },
);

export const userModel = mongoose.model('user', userSchema);
