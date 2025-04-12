import mongoose from "mongoose";

const schema = mongoose.Schema;

const SellCarSchema = new schema({
  make: String,
  model: String,
  yearOfManufacture: String,
  fuelType: String,
  machineType: String,
  numberOfSeats: String,
  price: String,
  photos: [{ type: String }], // Array of strings for storing photo URLs or file paths
  
});

export const SellCar = mongoose.model('SellCar', SellCarSchema);
