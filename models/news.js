import mongoose from 'mongoose';
const newsSchema = mongoose.Schema(
  {
    bio: { type: String, required: true },
    author: { type: String, required: true },
    title1: { type: String, required: true },
    title2: { type: String, required: true },
    paragraph1: { type: String, required: true },
    paragraph3: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    authorImage: { type: String, required: true },
    paragraph2: { type: String, required: true },
  },
  { timestamps: true }
);
const News = mongoose.models.News || mongoose.model('News', newsSchema);
export default News;
