import mongoose from "mongoose";
const registrationSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    correctEmail: String,
    city: String,
    delegate: String,
    country: String,
    amount: String,
    paymentMethode: String,
    paymentStatus: String,
    whatsApp: String,
  },
  { timestamps: true }
);
const Registrations =
  mongoose.models.Registrations ||
  mongoose.model("Registrations", registrationSchema);
export default Registrations;
