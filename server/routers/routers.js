import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { checkIfPaid, getAppartmentCompetitors, getAppartmentsFilter, getCarsBuyFilter, getCarsFilter, getPositionsFilter, getSellPositionCompetitors, handleClientSignIn, handleClientSignUp, handleProviderSignIn, handleProviderSignUp, insertBuyer, insertRentAppartment, insertRentCar, insertSellCar, insertSeller, insertSellPosition, paid, verify } from '../controllers/controllers.js';
import upload from '../middlewares/upload.js';

const storage = multer.memoryStorage(); // Use memory storage for now to test




const router = express.Router()

router.post('/api/endpoints/clientSignIn',cors(), handleClientSignIn )
router.post('/api/endpoints/providerSignIn',cors(), handleProviderSignIn )
router.post('/api/endpoints/clientSignUp', cors(), handleClientSignUp)
router.post('/api/endpoints/providerSignUpData',cors(), handleProviderSignUp)
router.post('/api/endpoints/upload-rent-apartment', insertRentAppartment);

router.post('/api/endpoints/insertSeller', cors(), insertSeller)
router.get('/api/endpoints/verifyProvider', cors(), verify)
router.post('/api/endpoints/clientSignIn', cors())
router.post('/api/endpoints/providerSignIn', cors(), handleProviderSignIn)
router.get('/api/endpoints/apartments', cors(), getAppartmentCompetitors)
    //filter
    router.get('/api/endpoints/apartments-filter', cors(), getAppartmentsFilter)
router.patch('/api/endpoints/paid', cors(), paid )
router.get('/api/endpoints/isPaid', cors(), checkIfPaid)
router.patch('/api/endpoints/setPaidToFalse', cors(), )
router.post('/api/endpoints/insertBuyer', cors(), insertBuyer)
router.get('/api/endpoints/verifyClient', cors(), verify)
router.post('/api/endpoints/upload-sell-position', cors(), insertSellPosition)
router.get('/api/endpoints/sellPositions', cors(), getSellPositionCompetitors)
router.get('/api/endpoints/positions-filter', cors(), getPositionsFilter)
router.post('/api/endpoints/upload-car-rental', cors(), insertRentCar)
router.get('/api/endpoints/cars-filter', cors(), getCarsFilter)
router.post('/api/endpoints/upload-car-sale', cors(), insertSellCar)
router.get('/api/endpoints/cars-buy-filter', cors(), getCarsBuyFilter)
export default router;
