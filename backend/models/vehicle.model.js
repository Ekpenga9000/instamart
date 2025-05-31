const mongoose = require("mongoose");
const { Schema } = mongoose;
const Listing = require("../models/listing.model");

const VehicleSchema = new Schema({
  vehicleType: {
    type: String,
    enum: [
      "car/van",
      "motorcycle",
      "power sport",
      "trailer",
      "motorhome/caravan",
      "boat",
      "other",
    ],
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mileage: Number,
  bodyStyle: {
    type: String,
    enum: [
      "Sedan",
      "Saloon",
      "Hatchback",
      "Wagon",
      "Coupe",
      "Convertible",
      "SUV",
      "Truck",
      "Van",
      "Motorcycle",
      "Trailer",
      "Motorhome",
      "other",
    ],
  },
  color: String,
  condition: {
    type: String,
    enum: ["excellent", "good", "fair", "poor"],
  },
  transmission: {
    type: String,
    enum: ["automatic", "manual"],
  },
  feulType: {
    type: String,
    enum: [
      "petrol/gasoline",
      "diesel",
      "electric",
      "hybrid",
      "flex",
      "plug-in hybrid",
      "other",
    ],
  },
});

const VehicleListing = Listing.discriminator("Vehicle", VehicleSchema);

module.exports = VehicleListing;
