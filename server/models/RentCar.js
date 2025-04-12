import mongoose from "mongoose";

const schema = mongoose.Schema;

const RentCarSchema = new schema({
  make: String,
  model: String,
  yearOfManufacture: String,
  fuelType: String,
  machineType: String,
  numberOfSeats: String,
  rentalPeriod: String,
  price: String,
  photos: [{ type: String }], // Array of strings for storing photo URLs or file paths
  
});

export const RentCar = mongoose.model('RentCar', RentCarSchema);
