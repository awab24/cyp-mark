import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { ProviderModel } from '../models/ProviderModel.js';
import { ClientModel } from '../models/ClientModel.js';
import { RentAppartment } from '../models/RentAppartment.js';
import { SellPosition } from '../models/SellPosition.js';
import { RentCar } from '../models/RentCar.js';
import { SellCar } from '../models/SellCar.js';
let providerOrClientId;

export const handleClientSignIn = async (req, res, next) => {
    try {
      const { phoneNumber, password } = req.body;
      const findUser = await ClientModel.findOne({ phoneNumber });
  
      if (findUser) {
        const compare = await bcryptjs.compare(password, findUser.password);
        if (!compare) {
          return res.status(401).json({ redirectUrl: 'http://localhost:3000/cancel' });
        }
        const token = jwt.sign({ _id: findUser._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        providerOrClientId = findUser._id;
        return res.json({ token });
      }
  
      return res.status(404).json({ error: 'User not found' });
    } catch (error) {
      console.error('Error in handleClientSignIn:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };

  export const handleProviderSignIn = async (req, res, next) => {
    try {
      const { phoneNumber, password } = req.body;
      const findUser = await ProviderModel.findOne({ phoneNumber });
  
      if (findUser) {
        const compare = await bcryptjs.compare(password, findUser.password);
        if (!compare) {
          return res.status(401).send('phoneNumber or password is incorrect');
        }
        const token = jwt.sign({ _id: findUser._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        providerOrClientId = findUser._id;
        return res.json({ token });
      }
  
      return res.status(404).json({ error: 'User not found' });
    } catch (error) {
      console.error('Error in handleProviderSignIn:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };



  export const handleClientSignUp = async(req, res) => {

    const findProviderUser = await ProviderModel.findOne({phoneNumber: req.body.phoneNumber})   
    const findClientUser = await ClientModel.findOne({phoneNumber: req.body.phoneNumber})  
    providerOrClientId = req.body._id                                          
   if (findProviderUser || findClientUser){
       res.send(false)
    }else{
          const salt = await bcryptjs.genSalt(10);
          const hashedPwd = await bcryptjs.hash(req.body.password, salt)
          await ClientModel.insertMany({
              _id: providerOrClientId,
              name: req.body.name,
              surname: req.body.surname,
              phoneNumber: req.body.phoneNumber,
              password: hashedPwd,
              newMessage: false
  
          })
  
          const findUser2 = await ClientModel.findOne({phoneNumber: req.body.phoneNumber})
          const token =  jwt.sign({_id: findUser2?._id}, process.env.SECRET_KEY, {expiresIn: '1h'})
          providerOrClientId = findUser2?._id
          res.json(token)
  
          
      
      }
  
  
  }
  
  export const handleProviderSignUp = async(req, res) => {
    console.log(req.body)
     const findProviderUser = await ProviderModel.findOne({phoneNumber: req.body.phoneNumber})   
     const findClientUser = await ClientModel.findOne({phoneNumber: req.body.phoneNumber})                                            
    if (findProviderUser || findClientUser){
        res.send(false)
     }else{
       const salt = await bcryptjs.genSalt(10);
         const hashedPwd = await bcryptjs.hash(req.body.password, salt)
         providerOrClientId = req.body._id  
    
         await ProviderModel.insertMany({
              _id: providerOrClientId,
          name: req.body.name,
          surname: req.body.surname,
          phoneNumber: req.body.phoneNumber,
          password: hashedPwd,
          newMessage: false
  
      }) 
      const findUser2 = await ProviderModel.findOne({phoneNumber: req.body.phoneNumber})
      console.log('findUser2 => '+findUser2)
      const token = jwt.sign({_id: findUser2?._id}, process.env.SECRET_KEY, {expiresIn: '1h'})
      console.log(token)
      res.json({token})
  
     }
  }
  
  export const insertRentAppartment = async (req, res) => {
    try {
      // Log the request body to check what data is being received
      console.log('req.body ==================================>>>>>   ', req.body);
  
      // Since you're sending the image URLs from Firebase in the request body, get the 'photos' from req.body
      const photoUrls = req.body.photos;
  
      // Now insert the data into MongoDB, including the photo URLs
      await RentAppartment.insertMany({
        city: req.body.city,
        size: req.body.size,
        price: req.body.price,
        numberOfPersons: req.body.numberOfPersons,
        photos: photoUrls, // Store the Firebase image URLs
        nationalities: req.body.nationalities,
        rentalPeriod: req.body.rentalPeriod,
        depositAmount: req.body.depositAmount,
        sex: req.body.sex,
        description: req.body.description,
      });
  
      res.status(201).json({ message: 'Apartment inserted successfully' });
    } catch (error) {
      console.error('Error inserting apartment: ', error.message);
      res.status(500).json({ error: 'Failed to insert apartment', details: error.message });
    }
  };
  
  
  
  
  export const insertSellPosition = async (req, res) => {
    try {
      // Log the request body to check what data is being received
      console.log('req.body sell position ==================================>>>>>   ', req.body);
  
      // Since you're sending the image URLs from Firebase in the request body, get the 'photos' from req.body
      const photoUrls = req.body.photos;
  
      // Now insert the data into MongoDB, including the photo URLs
      await SellPosition.insertMany({
        city: req.body.city,
        size: req.body.size,
        price: req.body.price,
        numberOfPersons: req.body.numberOfPersons,
        photos: photoUrls, // Store the Firebase image URLs
        nationalities: req.body.nationalities,
        rentalPeriod: req.body.rentalPeriod,
        depositAmount: req.body.depositAmount,
        sex: req.body.sex,
        description: req.body.description,
        roomShared: req.body.sharedRoom
      });
  
      res.status(201).json({ message: 'Apartment inserted successfully' });
    } catch (error) {
      console.error('Error inserting apartment: ', error.message);
      res.status(500).json({ error: 'Failed to insert apartment', details: error.message });
    }
  };
  
  
  
  export const insertRentCar = async (req, res) => {
    try {
      // Log the request body to check what data is being received
      console.log('req.body sell position ==================================>>>>>   ', req.body);
  
      // Since you're sending the image URLs from Firebase in the request body, get the 'photos' from req.body
      const photoUrls = req.body.photos;
  
      // Now insert the data into MongoDB, including the photo URLs
      await RentCar.insertMany({
        make: req.body.make,
        model: req.body.model,
        yearOfManufacture: req.body.year,
        fuelType: req.body.fuelType,
        transmission: req.body.machineType,
        numberOfSeats: req.body.numberOfSeats,
        rentalPeriod: req.body.rentalPeriod,
        price: req.body.price,
        photos: photoUrls,
      });
  
      res.status(201).json({ message: 'Apartment inserted successfully' });
    } catch (error) {
      console.error('Error inserting apartment: ', error.message);
      res.status(500).json({ error: 'Failed to insert apartment', details: error.message });
    }
  };
  
  
  
  export const insertSellCar = async (req, res) => {
    try {
      // Log the request body to check what data is being received
      console.log('req.body sell position ==================================>>>>>   ', req.body);
  
      // Since you're sending the image URLs from Firebase in the request body, get the 'photos' from req.body
      const photoUrls = req.body.photos;
  
      // Now insert the data into MongoDB, including the photo URLs
      await SellCar.insertMany({
        make: req.body.make,
        model: req.body.model,
        yearOfManufacture: req.body.year,
        fuelType: req.body.fuelType,
        transmission: req.body.machineType,
        numberOfSeats: req.body.numberOfSeats,

        price: req.body.price,
        photos: photoUrls,
      });
  
      res.status(201).json({ message: 'Apartment inserted successfully' });
    } catch (error) {
      console.error('Error inserting apartment: ', error.message);
      res.status(500).json({ error: 'Failed to insert apartment', details: error.message });
    }
  };
  
  export const insertSeller = async(req, res) => {
    console.log(req.body)
     const findProviderUser = await ProviderModel.findOne({phoneNumber: req.body.phoneNumber})   
     const findClientUser = await ClientModel.findOne({phoneNumber: req.body.phoneNumber})                                            
    if (findProviderUser || findClientUser){
        res.send(false)
     }else{
       const salt = await bcryptjs.genSalt(10);
         const hashedPwd = await bcryptjs.hash(req.body.password, salt)
         providerOrClientId = req.body._id  
    
         await ProviderModel.insertMany({
              _id: providerOrClientId,
          name: req.body.name,
          surname: req.body.surname,
          phoneNumber: req.body.phoneNumber,
          password: hashedPwd,
          paied: false
  
      }) 
      const findUser2 = await ProviderModel.findOne({phoneNumber: req.body.phoneNumber})
      const token = jwt.sign({_id: findUser2?._id}, process.env.SECRET_KEY, {expiresIn: '1h'})
      res.json({token})
  
     }
  }

  export const verify = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log('token ==========>================>================> ' + token);
    
    if (!token) {
      return res.status(403).send('Token not provided');
    }
  
    const bearerToken = token.split(' ')[1];
  
    jwt.verify(bearerToken, process.env.SECRET_KEY, (err, authData) => {
      if (err) {
        return res.status(403).send('Invalid token');
      }
      req.authData = authData;
      res.json({ permission: 'true' });
      return; // Stop execution after sending response
    });
  };


  export const getAppartmentCompetitors = async (req, res) => {
    try {
      // Fetch all documents from the rentAppartment collection
      const apartments = await RentAppartment.find();
  
      // Send the result as a JSON response
      res.status(200).json(apartments);
    } catch (error) {
      // Handle errors
      res.status(500).json({ message: 'Error fetching apartments', error });
    }
  };
  
  export const getSellPositionCompetitors = async (req, res) => {
    try {
      // Fetch all documents from the rentAppartment collection
      const apartments = await SellPosition.find();
  
      // Send the result as a JSON response
      res.status(200).json(apartments);
    } catch (error) {
      // Handle errors
      res.status(500).json({ message: 'Error fetching apartments', error });
    }
  };
  
  //Filter

  export const getAppartmentsFilter = async (req, res) => {
    try {
      const { city, size, price, people, nationality, sex, rentalPeriod, deposit } = req.query;
      
      // Build the filter object dynamically
      const filter = {};
      if (city && city !== 'any') filter.city = city;
      if (size && size !== 'any') filter.size = size;
      if (price && price !== 'any') filter.price = price;
  
      if (people && people !== 'any') {
        filter.numberOfPersons = { $in: [parseInt(people)] };
      }
  
      // Check if the selected nationality exists in the nationalities array in the database
      if (nationality && nationality !== 'any') {
        filter.nationalities = { $regex: new RegExp(`\\b${nationality}\\b`, 'i') }; // case-insensitive match
      }
  
  
      if (sex && sex !== 'any') {
        filter.$or = [
          { sex: sex },        // Match specific sex
          { sex: 'any' }       // Also include apartments where sex is 'any'
        ];
      }
      if (rentalPeriod && rentalPeriod !== 'any') filter.rentalPeriod = rentalPeriod;
      if (deposit && deposit !== 'any') filter.depositAmount = deposit;
  
      const apartments = await RentAppartment.find(filter);
      res.status(200).json(apartments);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching apartments', error });
    }
  };
  

  
  export const getPositionsFilter = async (req, res) => {
    try {
      const { city, size, price, people, nationality, sex, rentalPeriod, deposit, sharedRoom } = req.query;
      
      // Build the filter object dynamically
      const filter = {};
      if (city && city !== 'any') filter.city = city;
      if (size && size !== 'any') filter.size = size;
      if (price && price !== 'any') filter.price = price;
  
      if (people && people !== 'any') {
        filter.numberOfPersons = { $in: [parseInt(people)] };
      }
  
      // Check if the selected nationality exists in the nationalities array in the database
      if (nationality && nationality !== 'any') {
        filter.nationalities = { $regex: new RegExp(`\\b${nationality}\\b`, 'i') }; // case-insensitive match
      }
  
  
      if (sex && sex !== 'any') {
        filter.$or = [
          { sex: sex },        // Match specific sex
          { sex: 'any' }       // Also include apartments where sex is 'any'
        ];
      }
      if (rentalPeriod && rentalPeriod !== 'any') filter.rentalPeriod = rentalPeriod;
      if (deposit && deposit !== 'any') filter.depositAmount = deposit;
  
      if (sharedRoom && sharedRoom !== 'any') {
        filter.roomShared = sharedRoom === 'Yes' ? 'Yes' : 'No'; // Exact matching between Yes and No
      }
      

      const apartments = await SellPosition.find(filter);
      res.status(200).json(apartments);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching apartments', error });
    }
  };
  
  export const getCarsFilter = async (req, res) => {
    try {
      const { make, model, year, fuelType, rentalPeriod, price,seats, machineType } = req.query;
  
      // Build the filter object dynamically
      const filter = {};
  
      // Apply the filtering based on provided query parameters
      if (make && make !== 'any') filter.make = make;
      if (model && model !== 'any') filter.model = model;
      if (year && year !== 'any') filter.yearOfManufacture = year;
      if (fuelType && fuelType !== 'any') filter.fuelType = fuelType;
      if (machineType && machineType !== 'any') filter.machineType = machineType;
      if (rentalPeriod && rentalPeriod !== 'any') filter.rentalPeriod = rentalPeriod;
      if (machineType && machineType !== 'any' ) filter.numberOfSeats = seats;
      
  
      // Handle price filtering with ranges
      if (price && price !== 'any') {
        if (price === 'Less than $70') {
          filter.price = 'Less than $70'; // Exact string match for this case
        } else if (price === '$1000 and more') {
          // Custom filter for prices that are "$1000 and more"
          filter.price = { $regex: /^$1000/ }; // Will match all entries that start with "$1000"
        } else {
          // Handle the price ranges, for example: "$70 - $100"
          const priceRange = price.split(' - ').map(p => p.replace('$', '').trim());
          filter.price = {
            $gte: `$${priceRange[0]}`, // Match as string values, but these could be numeric-like
            $lte: `$${priceRange[1]}`
          };
        }
      }
      
  
      // Fetch cars based on the constructed filter
      const cars = await RentCar.find(filter);
      res.status(200).json(cars);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching cars', error });
    }
  };
  
  
  // export const getAppartmentsFilter = async (req, res) => {
  //   try {
  //     const { city, size, price, people, nationalities, sex, rentalPeriod, deposit } = req.query;
      
  //     // Build the filter object dynamically
  //     const filter = {};
  //     if (city && city !== 'any') filter.city = city;
  //     if (size && size !== 'any') filter.size = size;
  //     if (price && price !== 'any') filter.price = price;
  //     if (people && people !== 'any' && people.length > 0) filter.numberOfPersons = { $in: people.split(',') };
  //     if (nationalities && nationalities !== 'any' && nationalities.length > 0) filter.nationalities = { $in: nationalities.split(',') };
  //     if (sex && sex !== 'any') {
  //       filter.$or = [
  //         { sex: sex },        // Match specific sex
  //         { sex: 'any' }       // Also include apartments where sex is 'any'
  //       ];
  //     };
      
  //     if (rentalPeriod && rentalPeriod !== 'any') filter.rentalPeriod = rentalPeriod;
  //     if (deposit && deposit !== 'any') filter.depositAmount = deposit;
  
  //     const apartments = await RentAppartment.find(filter);
  //     res.status(200).json(apartments);
  //   } catch (error) {
  //     res.status(500).json({ message: 'Error fetching apartments', error });
  //   }
  // };
  
  

  export const paid= async (req, res) => {
    await ProviderModel.findByIdAndUpdate(
      providerOrClientId,
      {
        $set: {
          paid: true
        }
      },
      {new: true}
    )
  }

  export const checkIfPaid = async(req, res) => {
    const provider = await ProviderModel.findById(providerOrClientId)
    res.json({isPaid: provider?.paid})
  }

  

  export const setPaidToFalse = async(req, res) => {
    await ProviderModel.findByIdAndUpdate(
      providerOrClientId,
      {
        $set: {
          paid: false
        }
      },
      {
       new: true
      }
 
    )
  }

  export const insertBuyer = async(req, res) => {
    console.log(req.body)
     const findProviderUser = await ProviderModel.findOne({phoneNumber: req.body.phoneNumber})   
     const findClientUser = await ClientModel.findOne({phoneNumber: req.body.phoneNumber})                                            
    if (findProviderUser || findClientUser){
        res.send(false)
     }else{
       const salt = await bcryptjs.genSalt(10);
         const hashedPwd = await bcryptjs.hash(req.body.password, salt)
         providerOrClientId = req.body._id  
    
         await ClientModel.insertMany({
              _id: providerOrClientId,
          name: req.body.name,
          surname: req.body.surname,
          phoneNumber: req.body.phoneNumber,
          password: hashedPwd,

  
      }) 
      const findUser2 = await ClientModel.findOne({phoneNumber: req.body.phoneNumber})
      const token = jwt.sign({_id: findUser2?._id}, process.env.SECRET_KEY, {expiresIn: '1h'})
      res.json({token})
  
     }
  }

  export const getCarsBuyFilter = async (req, res) => {
    try {
      const { make, model, year, fuelType, price,seats, machineType } = req.query;
  
      // Build the filter object dynamically
      const filter = {};
  
      // Apply the filtering based on provided query parameters
      if (make && make !== 'any') filter.make = make;
      if (model && model !== 'any') filter.model = model;
      if (year && year !== 'any') filter.yearOfManufacture = year;
      if (fuelType && fuelType !== 'any') filter.fuelType = fuelType;
      if (machineType && machineType !== 'any') filter.machineType = machineType;

      if (machineType && machineType !== 'any' ) filter.numberOfSeats = seats;
      
  
      // Handle price filtering with ranges
      if (price && price !== 'any') {
        if (price === 'Less than $70') {
          filter.price = 'Less than $70'; // Exact string match for this case
        } else if (price === '$1000 and more') {
          // Custom filter for prices that are "$1000 and more"
          filter.price = { $regex: /^$1000/ }; // Will match all entries that start with "$1000"
        } else {
          // Handle the price ranges, for example: "$70 - $100"
          const priceRange = price.split(' - ').map(p => p.replace('$', '').trim());
          filter.price = {
            $gte: `$${priceRange[0]}`, // Match as string values, but these could be numeric-like
            $lte: `$${priceRange[1]}`
          };
        }
      }
      
  
      // Fetch cars based on the constructed filter
      const cars = await RentCar.find(filter);
      res.status(200).json(cars);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching cars', error });
    }
  };
  