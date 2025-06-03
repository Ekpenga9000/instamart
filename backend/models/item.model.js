const mongoose = require("mongoose");
const { Schema } = mongoose;
const Listing = require("../models/listing.model");

const itemListingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    availability: {
      type: String,
      enum: ["List as a single item", "List as a in stock"],
    },
    condition: {
      type: String,
      enum: ["New", "Gently Used", "Used", "Refurbished"],
    },
    delivery: {
      type: String,
      enum: ["Free", "Paid", "Door pick-up", "Public meetup", "Not Applicable"],
    },
  },
  {
    timestamps: true,
    discriminatorKey: "category",
  }
);

const ItemListing = Listing.discriminator("Item", itemListingSchema);

module.exports = ItemListing;
