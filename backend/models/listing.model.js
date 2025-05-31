const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BaseListingSchema = new Schema(
  {
    seller: { type: Schema.Types.ObjectId, ref: "User", required: true },
    description: String,
    images: [String], // URLs (could also store GridFS IDs or S3 keys)
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
    discriminatorKey: "listingType",
  }
);

const Listing = model("Listing", BaseListingSchema);

module.exports = Listing;
