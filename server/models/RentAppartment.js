import mongoose from "mongoose";

const schema = mongoose.Schema;

const RentAppartmentSchema = new schema({
  city: String,
  size: String,
  price: Number,
  numberOfPersons: String,
  photos: [{ type: String }], // Array of strings for storing photo URLs or file paths
  nationalities: [{ type: String }], // Array of strings for storing nationalities
  rentalPeriod: String,
  depositAmount: String,
  sex: String,
  description: String,
});

export const RentAppartment = mongoose.model('RentAppartment', RentAppartmentSchema);
