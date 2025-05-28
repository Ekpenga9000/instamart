const mongoose = require("mongoose");
const { Schema } = mongoose;

const listingSchema = new Schema(
  {
    seller: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true, trim: true },
    description: String,
    price: { type: Number, required: true, min: 0 },
    images: [String], // URLs (could also store GridFS IDs or S3 keys)
    category: String, // or ref to a Category collection
    // optional override location (if different from user)
    location: {
      street: String,
      city: String,
      province: String,
      postalCode: String,
      country: String,
      geo: {
        type: { type: String, enum: ["Point"], default: "Point" },
        coordinates: { type: [Number], index: "2dsphere" },
      },
    },
    status: {
      type: String,
      enum: ["active", "pending", "sold", "removed"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
