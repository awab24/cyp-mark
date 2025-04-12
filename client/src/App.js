import logo from './logo.svg';
import './App.css';
import SellMainHome from './sell/SellMainHome/SellMainHome';
import { Route, Router, Routes } from 'react-router-dom';
import RentAppartment from './sell/rentAppartment/RentAppartment';
import SellCar from './sell/sellCar/SellCar';
import RentCar from './sell/rentCar/RentCar';
import SellPosition from './sell/sellPosition/SellPosition';
import SiteUploadSellPosition from './sell/sellPosition/siteUploadSellPosition/SiteUploadSellPosition';
import SiteUploadAppartment from './sell/rentAppartment/siteUploadAppartment/SiteUploadAppartment';
import SelfUploadRentCar from './sell/rentCar/selfUploadRentCar/SelfUploadRentCar';
import SiteUploadRentCar from './sell/rentCar/siteUploadRentCar/SiteUploadRentCar';
import SelfUploadSellCar from './sell/sellCar/selfUploadSellCar/SelfUploadSellCar';
import SiteUploadSellCar from './sell/sellCar/siteUploadSellCar/SiteUploadSellCar';
import SelfUploadSellPosition from './sell/sellPosition/selfUploadSellPosition/SelfUploadSellPosition';
import DefiningPage from './definigFolder/DefiningPage';
import SSignUpDetails from './auth/sellerSignUp/SSignUpDetails';
import SelfUploadRentAppartment from './sell/rentAppartment/SelfUploadRentAppartment/SelfUploadRentAppartment';
import ReviewSelfUploadAppartment from './sell/rentAppartment/SelfUploadRentAppartment/ReviewSelfUploadRentAppartment';
import ThankUSelfUploadRentAppartment from './sell/rentAppartment/SelfUploadRentAppartment/ThankUSelfUploadRentAppartment';
import DetermineSignUp from './auth/DetermineSignUp';
import SSignUpCategory from './auth/sellerSignUp/SSignUpCategory';
import SSignUpPicture from './auth/sellerSignUp/SSignUpPicture';
import WorkWithUs from './WorkWithUs/WorkWithUs';
import ContactUs from './ContactUs/ContactUs';
import LearnMorePage from './auth/LearnMore/LearnMorePage';
import SignIn from './auth/sellerSignUp/SignIn';
import AwabAppartUpload from './sell/rentAppartment/AwabAppartUpload/AwabAppartUpload';
import SelfUploadRentAppartmentCompetitors from './sell/rentAppartment/SelfUploadRentAppartmentCompetitors/SelfUploadRentAppartmentCompetitors';
import DetermineUploadRentAppartment from './sell/rentAppartment/RentAppartment';
import BuyMainHome from './buy/buyMainHome/buyMainHome';
import { Renderer } from 'leaflet';
import BuyCar from './buy/buyCar/BuyCar';
import BuyElectronics from './buy/buyElectronics/BuyElectronics';
import BuyPosition from './buy/buyPosition/BuyPosition';
import BSignUpDetails from './auth/buyerSignUp/BSignUpDetails';
import BSignUpCategory from './auth/buyerSignUp/BSignUpCategory';
import BSignUpPicture from './auth/buyerSignUp/BSignUpPicture';
import BRentAppartment from './buy/rentAppartment/RentAppartment';
import BRentCar from './buy/rentCar/RentCar';
import AwabSellPosition from './sell/rentAppartment/AwabAppartUpload/AwabSellPosition';
import SellPositionCompetitors from './sell/sellPosition/sellPositionCompetitors/SellPositionCompetitors';
import AwabRCar from './sell/rentAppartment/AwabAppartUpload/AwabRCar';
import AwabSCar from './sell/rentAppartment/AwabAppartUpload/AwabSCar';


function App() {
  return (
    <Routes >
      <Route path="/" element={<DefiningPage/>}/>
      <Route path="/auth" element={<DetermineSignUp/>}/>
      <Route path="/auth/seller-sign-up" element={<SSignUpDetails/>}/>
      <Route path="/auth/seller-sign-up/category" element={<SSignUpCategory/>}/>
      <Route path="/auth/seller-sign-up/category/picture" element={<SSignUpPicture/>}/>
     <Route path="/sell-main-home" element={<SellMainHome/>} />
     <Route path="/rent-your-appartment" element={<RentAppartment/>}/>
     <Route path="/rent-your-appartment/self-upload" element={<SelfUploadRentAppartment/>}/>
     <Route path="/rent-your-appartment/self-upload/review" element = {<ReviewSelfUploadAppartment/>}/>
     <Route path="/rent-your-appartment/self-upload/review/deadend" element={<ThankUSelfUploadRentAppartment/>}/>
     <Route path="/rent-your-appartment/site-upload" element={<SiteUploadAppartment/>}/>
     <Route path="/sell-your-car" element={<SellCar/>}/>
     <Route path="/rent-your-car" element={<RentCar/>}/>
     <Route path="/sell-your-position" element={<SellPosition/>}/>

     <Route path="/rent-your-appartment/upload-appartment" element={<SiteUploadAppartment/>}/>

     <Route path="/rent-your-car/self-upload-car-rent" element={<SelfUploadRentCar/>}/>
     <Route path="/rent-your-car/upload-car-rent" element={<SiteUploadRentCar/>}/>
     <Route path="/sell-your-car/self-upload-car-sell" element={<SelfUploadSellCar/>}/>
     <Route path="/sell-your-car/upload-car-sell" element={<SiteUploadSellCar/>}/>
     <Route path="/sell-your-position/self-upload-position" element={<SelfUploadSellPosition/>}/>
     <Route path="/sell-your-position/upload-position" element={<SiteUploadSellPosition/>}/>
     <Route path="/seller-sign-up" element={<SSignUpDetails/>}/>
     <Route path="/self-upload-rent-appartment" element={<SelfUploadRentAppartment/>}/>
     <Route path="/self-upload-rent-appartment/review" element={<ReviewSelfUploadAppartment/>}/>
     <Route path="/self-upload-rent-appartment/deadend" element={<ThankUSelfUploadRentAppartment/>}/>
     <Route path="/work-with-us" element={<WorkWithUs/>}/>
     <Route path="/contact-us" element={<ContactUs/>}/>
     <Route path="/learn-more" element={<LearnMorePage/>}/>
     <Route path="/sign-in" element={<SignIn/>}/>
     <Route path="/aw2024" element={<AwabAppartUpload/>}/>
     <Route path="/rent-appartment-competitors" element={<SelfUploadRentAppartmentCompetitors/>}/>




     <Route path="buy-main-home" element={<BuyMainHome/>}/>
     <Route path="/auth/buyer-sign-up/category" element={<BSignUpCategory/>}/>
     <Route path="/auth/buyer-sign-up/category/picture" element={<BSignUpPicture/>}/>
     <Route path="/rent-appart" element={<BRentAppartment/>}/>
          <Route path="/rent-car" element={<BRentCar/>}/>
            <Route path="buy-car" element={<BuyCar/>}/>
              <Route path="buy-electronics" element={<BuyElectronics/>}/>
                <Route path="buy-position" element={<BuyPosition/>}/>
                <Route path="/auth/buyer-sign-up" element={<BSignUpDetails/>}/>
    <Route path="/awSP2024" element={<AwabSellPosition/>}/>
    <Route path="/self-upload-sell-position/deadend" element={<SellPositionCompetitors/>}/>
    <Route path="/buy-position" element={<BuyPosition/>}/>
    <Route path="/awRC2024" element={<AwabRCar/>}/>
    <Route path="/awSC2024" element={<AwabSCar/>}/>
    
{/* 
     <Route path="/rent-your-appartment/self-upload-appartment" element={<SUACity/>}/>
     <Route path="/rent-your-appartment/self-upload-appartment/Lefkoşa" element={<Lefkosa/>}/>
     <Route path="/rent-your-appartment/self-upload-appartment/Lefkoşa/1+1" element={<Lefkosa1Plus1/>}/>
     <Route path="/rent-your-appartment/self-upload-appartment/Lefkoşa/1+1/450" element={<Lefkosa1Plus1Price450/>}/>
   
     <Route path="/rent-your-appartment/self-upload-appartment/Lefkoşa/1+1/500" element={<Lefkosa1Plus1Price500/>}/>
     <Route path="/rent-your-appartment/self-upload-appartment/Lefkoşa/1+1/550" element={<Lefkosa1Plus1Price550/>}/>
     <Route path="/rent-your-appartment/self-upload-appartment/Lefkoşa/1+1/600" element={<Lefkosa1Plus1Price600/>}/>
     <Route path="/rent-your-appartment/self-upload-appartment/Lefkoşa/1+1/650" element={<Lefkosa1Plus1Price650/>}/> */}
    </Routes> 
  );
}

export default App;
