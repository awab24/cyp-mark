import mongoose from "mongoose";

const schema = mongoose.Schema;

const SellPositionSchema = new schema({
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
  roomShared: String
});

export const SellPosition = mongoose.model('SellPosition', SellPositionSchema);
