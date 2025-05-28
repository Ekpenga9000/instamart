const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    profilePictureUrl: String,

    //Human readable address plus geocoordinates for nearby searches
    address: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },
    //Geocoordinates for nearby searches
    location: {
      type: { type: String, enum: ["Point"], required: true },
      coordinates: { type: [Number], index: "2dsphere", required: true }, //[lng, lat]
    },
  },
  {
    timestamps: true,
  }
);
