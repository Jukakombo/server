import mongoose from 'mongoose';
const contactSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
    phone: String,
  },
  { timestamps: true }
);
const Contacts =
  mongoose.models.Contacts || mongoose.model('Contacts', contactSchema);
export default Contacts;
