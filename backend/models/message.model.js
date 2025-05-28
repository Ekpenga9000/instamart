const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
