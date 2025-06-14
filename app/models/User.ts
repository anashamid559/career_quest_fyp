import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date },
  phone: { type: String },
  password: { type: String, required: true },
}, { timestamps: true });

const User = models.User || model('User', UserSchema);
export default User;
