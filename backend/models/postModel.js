import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  author: String,
  body: String,
	date: { type: Date, default: Date.now },
});

export default mongoose.model('Post', postSchema);
