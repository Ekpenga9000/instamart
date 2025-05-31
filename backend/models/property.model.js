const mongoose = require("mongoose");
const { Schema } = mongoose;
const Listing = require("../models/listing.model");

// Property Schema
const propertySchema = new Schema(
  {
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    squareFootage: Number,
    propertyType: {
      type: String,
      enum: [
        "Single Family Home",
        "Townhouse",
        "Condo",
        "Duplex",
        "Apartment",
        "other",
      ],
    },
    yearBuilt: Number,
    address: {
      street: String,
      city: String,
      province: String,
    },
    parking: {
      type: String,
      enum: [
        "Garage parking",
        "Street Parking",
        "Off-street Parking",
        "other",
        "None",
      ],
    },
    amenities: {
      type: [String],
      enum: ["Pool", "Gym", "BBQ Area"],
    },
    washingMachineAndDryer: {
      type: String,
      enum: [
        "Private Washing Machine and Dryer",
        "Shared Laundry",
        "Launderette in the building",
        "None",
      ],
    },
    airConditioning: {
      type: String,
      enum: [
        "Central Air Conditioning",
        "Window Unit Air Conditioning",
        "Portable Air Conditioning",
        "None",
      ],
    },
    heating: {
      type: String,
      enum: [
        "Central Heating",
        "Baseboard Heating",
        "Radiant Floor Heating",
        "Electric Heating",
        "Gas Heating",
        "None",
      ],
    },
  },
  {
    discriminatorKey: "purpose",
  }
);

const PropertyListing = Listing.discriminator("Property", propertySchema);

// Property for sale schema

const propertySaleSchema = new Schema({
  salePrice: {
    type: Number,
    required: true,
  },
});

const PropertySale = PropertyListing.discriminator("Sale", propertySaleSchema);

// Property for rent schema
const propertRentalSchema = new Schema({
  rentalPrice: {
    type: Number,
    required: true,
  },
  leaseTerm: {
    type: String,
    enum: [
      "Month-to-Month",
      "6 Months",
      "1 Year",
      "2 Years",
      "3 Years",
      "Greater than 3 Years",
    ],
  },
  leaseType: {
    type: String,
    enum: ["Rent", "Lease", "Sublease", "Subrent"],
  },
  petFriendly: Boolean,
  adultsOnly: Boolean,
});

const PropertyRental = PropertyListing.discriminator(
  "Rental",
  propertRentalSchema
);

module.exports = {
  PropertyListing,
  PropertyRental,
  PropertySale,
};
