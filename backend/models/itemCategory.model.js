// ~ The categories for the items

//Furniture
//Electronics
//Fashion
//Pet Supplies

const mongoose = require("mongoose");
const { Schema } = mongoose;
const ItemListing = require("../models/item.model");

const furnitureSchema = new Schema({
  furniturePurpose: {
    type: String,
    enum: ["Home", "Office"],
    required: true,
  },
  furnitureType: {
    type: String,
    enum: [
      "Sofa",
      "Chair",
      "Table",
      "Desk",
      "Bed",
      "Wardrobe",
      "Dresser",
      "Bookshelf",
      "TV Stand",
      "Other",
    ],
    required: true,
  },
  furnitureMaterial: {
    type: String,
    enum: ["Wood", "Metal", "Plastic", "Fabric", "Glass", "Other"],
    required: true,
  },
  furnitureColour: {
    type: String,
  },
  furnitureSize: {
    type: String,
  },
});

const FurnitureSchema = ItemListing.discriminator("Furniture", furnitureSchema);

const electronicSchema = new Schema({
  electronicType: {
    type: String,
    enum: [
      "Laptop",
      "Computing",
      "Smartphones & Mobile Devices",
      "Televisions & Home Theater",
      "Cameras & Photography",
      "Audio Equipment",
      "Gaming & VR",
      "Wearables & Smart Devices",
      "Car Electronics & GPS",
      "Home Appliances",
      "Networking & Connectivity",
      "Other",
    ],
    required: true,
  },
  electronicBrand: {
    type: String,
  },
  electronicModel: {
    type: String,
  },
});
const ElectronicSchema = ItemListing.discriminator(
  "Electronic",
  electronicSchema
);

const fashionSchema = new Schema({
  fashionType: {
    type: String,
    enum: [
      "Women's Clothing",
      "Men's Clothing",
      "Kids' Clothing",
      "Accessories",
      "Shoes",
      "Handbags & Wallets",
      "Jewelry",
      "Watches",
      "Beauty & Personal Care",
      "Other",
    ],
    required: true,
  },
  fashionBrand: {
    type: String,
  },
  size: {
    type: String,
  },
});

const FashionSchema = ItemListing.discriminator("Fashion", fashionSchema);

const petSuppliesSchema = new Schema(
  {
    petType: {
      type: String,
      enum: [
        "Dogs",
        "Cats",
        "Birds",
        "Fish",
        "Small Mammals",
        "Reptiles",
        "Amphibians",
        "Other",
      ],
      required: true,
    },
    supplyCategory: {
      type: String,
      required: true,
      enum: [
        "food",
        "treat",
        "toy",
        "bed",
        "crate",
        "collar/leash",
        "grooming",
        "healthcare",
        "accessory",
        "litter",
        "other",
      ],
    },
    supplySubcategory: {
      type: String,
      trim: true,
    },
    brand: {
      type: String,
      trim: true,
    },
    size: {
      type: String,
      trim: true,
    },
    color: {
      type: String,
      trim: true,
    },
    material: {
      type: String,
      trim: true,
    },

    // Weight (in lbs or kg) if relevant
    weight: {
      type: Number,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const PetSuppliesSchema = ItemListing.discriminator(
  "Pet supplies",
  petSuppliesSchema
);

module.exports = {
  PetSuppliesSchema,
  FurnitureSchema,
  FashionSchema,
  ElectronicSchema,
};
