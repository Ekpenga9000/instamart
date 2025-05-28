const mongoose = require("mongoose");
const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    listing: { type: Schema.Types.ObjectId, ref: "Listing", required: true },
    participants: [
      { type: Schema.Types.ObjectId, ref: "User", required: true },
    ],
    messages: [MessageSchema],
    lastUpdated: { type: Date, default: Date.now, index: true },
  },
  {
    timestamps: true,
  }
);

const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation;
