import mongoose from 'mongoose';
const courseSchema = mongoose.Schema(
  {
    givenName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    declaration: { type: String, required: true },
    phone: { type: String, required: true },
    level: { type: String, required: true },
    city: { type: String, required: true },
    course: { type: String, required: true },
    training: { type: String, required: true },
  },
  { timestamps: true }
);
const courses =
  mongoose.models.Courses || mongoose.model('Courses', courseSchema);
export default courses;
