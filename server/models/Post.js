import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userName: {
        type: String,
      },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      default: " ",
    },
    views: {
      type: Number,
      default: 0,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comments: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment",
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
