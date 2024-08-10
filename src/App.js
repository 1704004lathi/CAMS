import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";  
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Contact from './contact/Contact.js';
import Login from "./LoginPage/Login.js";
import SignIn from "./Signin page/sign";
import AboutUs from "./About/AboutUs";
import Service from "./Service/Service";
import Home from "./Home/Home";
import Navigation from "./Nav/Navigation";
import Repair from "./Repair/Repair";
 import Footer from "./Footer/Footer.js";
import ForgotPasswordPage from "./Forgot/ForgotPasswordPage.js";
import ResetPasswordPage from "./Forgot/ResetPasswordPage.js";
import Cart from './BookingPage/Cart';
import License from './License/License.js';
// import Review from './Review/Review.js';
import CarData from './CarRental/CarData.js';
import CarItem from './CarRental/CarItem.js';
import CarItems from './CarRental/CarItems.js';
import CarListing from './CarRental/CarListing.js';
import CarDetails from './CarRental/CarDetails.js';
import BookingForm from '../src/CarRental/BookingForm.js';
import ProductList from '../src/Product/ProductList.js';
import Navi from '../src/Navi/Navi.js';
import AdminDashboard from "./Dashboard/AdminDashboard.js";
import UserDashboard from "./Dashboard/UserDashboard.js";
import UserManagement from "./Dashboard/UserManagement.js";
import ReportPage from "./Dashboard/ReportPage.js";
import SettingsPage from "./Dashboard/SettingsPage.js";
import ServiceReport from "./Dashboard/ServiceReport.js";
import RentalReport from "./Dashboard/RentalReport.js";
import AccessoriesReport from "./Dashboard/AccessoriesReport.js";
import GridView from "./Dashboard/GridView.js";
import Payment from "./Product/Payment.js";
function App()
{
  return(
    <>
   {/* <Navigation/> */}
   
    <Routes>
      
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/SignIn' element={<SignIn/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
      <Route path='/Service' element={<Service/>}></Route>
      <Route path='/Repair' element={<Repair/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path="/Cart" element={<Cart />}></Route>
      <Route path="/License" element={<License />}></Route>
      <Route path="/CarData" element={<CarData />}></Route>
      <Route path="/CarItem" element={<CarItem />}></Route>
      <Route path="/CarItems" element={<CarItems />}></Route>
      <Route path="/CarListing" element={<CarListing />}></Route>
      <Route path="/CarDetails" element={<CarDetails />}></Route>
      <Route path="/BookingForm" element={<BookingForm />}></Route>
      <Route path="/Payment" element={<Payment />}></Route>
      <Route path="/ProductList" element={<ProductList />}></Route>
      <Route path="/Navi" element={<Navi />}></Route>
      <Route path="/UserDashboard" element={<UserDashboard />}></Route>
      <Route path="/AdminDashboard" element={<AdminDashboard />}></Route>  
      <Route path='/ForgotPasswordPage' element={<ForgotPasswordPage/>}></Route> 
      <Route path='/ResetPasswordPage' element={<ResetPasswordPage/>}></Route> 
      <Route path='/UserManagement' element={<UserManagement/>}></Route> 
      <Route path='/ReportPage' element={<ReportPage/>}></Route> 
      <Route path='/SettingsPage' element={<SettingsPage/>}></Route> 
      <Route path='/ServiceReport' element={<ServiceReport/>}></Route> 
      <Route path='/RentalReport' element={<RentalReport/>}></Route> 
      <Route path='/AccessoriesReport' element={<AccessoriesReport/>}></Route> 
      <Route path='/GridView' element={<GridView/>}></Route> 
     
      
      
       </Routes>
       <Footer/>
       
       
       
   
    
     </>
  );
}

//  const App = () =>
//    {
//     return(
//      <>
     
//        <Login/></>
        
//      )
//     };

   export default App;