import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// css
import './App.css';
/**  @type {import('tailwindcss').Config} */
// pages
import Navigation from './components/Navigation/Navigation';
import HomePage from "./components/Pages/HomePage/HomePage";
import NotFound from "./components/NotFound";
import WhyGreen from "./components/Pages/WhyGreen/WhyGreen";
import ContactUs from "./components/Pages/Contacts/ContactUs";
import FaqP from "./components/Pages/Contacts/Faq_p";
import FaqU from "./components/Pages/Contacts/Faq_u";
// registration and login
//  import Signin from "./components/Login/SignIn/SignIn";
//  import SignUp from "./components/Login/SignUp/SignUp";

// import ReactGA from "react-ga4";
// ReactGA.initialize("G-997BJVMK2H");

// import { Component } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Navigation/>} errorElement={<NotFound/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/whyvileaf" element={<WhyGreen/>} />
      <Route path="/faq_p" element={<FaqP/>}/>
      <Route path="/faq_u" element={<FaqU/>}/>

      {/* <Route path="login" element={<Signin/>}/>
        <Route path="signup" element={<SignUp/>}/> */}

    </Route>
  )
)


function App(){
     return (

      <div>
          <RouterProvider router={router}/>
      </div>
    );
  }

export default App;
