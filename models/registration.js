import mongoose from 'mongoose';
const registrationSchema = mongoose.Schema(
  {
    corectEmail: String,
    phone: String,
    country: String,
    amount: String,
  },
  { timestamps: true }
);
const Registrations =
  mongoose.models.Registrations || mongoose.model('Registrations', registrationSchema);
export default Registrations;
