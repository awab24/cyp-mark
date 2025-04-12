import mongoose from "mongoose";

const schema =  mongoose.Schema
const ProviderSchema = new schema({
  _id: String,
    name: String, 
    surname: String, 
    password: String, 
    confirmPassword: String,
    phoneNumber: Number,
    RentAppartments: [
      {
        city: String,
        size: String,
        price: Number,
        numberOfPersons: String,
        photos: [{type: String}],
        nationalities: [{type: String}],
        rentalPeriod: String,
        depositAmount: String,
        sex: String,
        description: String,
      }
    ], 
    paid: Boolean,

    
 

})

export const ProviderModel = mongoose.model('provider', ProviderSchema)
