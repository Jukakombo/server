import mongoose from "mongoose";
const registrationSchema = mongoose.Schema(
  {
    // user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    correctEmail: {type:String, required: true},
    city: {type:String, required: true},
    delegate: {type:String, required: true},
    country: {type:String, required: true},
    amount: {type:Number , required: true},
    paymentMethode: {type:String, required: true},
    paymentStatus: {type:String, required: true},
    whatsApp: {type:String, required: true},
  },
  { timestamps: true }
);
const Registrations =
  mongoose.models.Registrations ||
  mongoose.model("Registrations", registrationSchema);
export default Registrations;
