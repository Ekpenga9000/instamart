const mongoose = require("mongoose");
const { Schema } = mongoose;

const BaseListingSchema = new Schema(
  {
    seller: { type: Schema.Types.ObjectId, ref: "User", required: true },
    description: String,
    price: { type: Number, required: true, min: 0 },
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
    discriminatorKey: "__t",
  }
);

const Listing = mongoose.model("Listing", BaseListingSchema);

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
