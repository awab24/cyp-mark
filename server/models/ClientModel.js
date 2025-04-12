import mongoose from "mongoose";



const schema =  mongoose.Schema;
const ClientSchema = new schema({
  _id: String,
    name: String, 
    surname: String, 
    password: String, 
    confirmPassword: String,
    phoneNumber: Number,
  
        


})

export const ClientModel = mongoose.model('client', ClientSchema)