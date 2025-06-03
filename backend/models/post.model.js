const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    caption: {
      type: String,
      required: [true, "Please enter a cation"],
    },
    imageName: {
      type: String,
      required: [true, "Please enter an image url"],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
