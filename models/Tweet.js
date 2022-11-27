import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema(
  {
    text: String,
    media: [String],
    tweetId: String,
    tweetCreatedAt: Date,
  },
  { timestamps: true }
);

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;
