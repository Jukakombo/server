import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  correctEmail: {type: String, required: true},
  city: {type: String, required: true},
  delegate: {type: String, required: true},
  country: {type: String, required: true},
  amount: {type: Number, required: true},
  paymentMethode: {type: String, required: true},
  paymentStatus: {type: String, required: true},
  whatsApp: {type: String, required: true},
});

export default mongoose.model("User", userSchema);