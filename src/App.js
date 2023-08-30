import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// css
import './App.css';
/**  @type {import('tailwindcss').Config} */
// pages
import Navigation from './components/Navigation/Navigation';
import Signin from "./components/Login/SignIn/SignIn";
import HomePage from "./components/Pages/HomePage/HomePage";
import NotFound from "./components/NotFound";
import WhyGreen from "./components/Pages/WhyGreen/WhyGreen";
import ContactUs from "./components/Pages/Contacts/ContactUs";
// import { Component } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation/>} errorElement={<NotFound/>}>
      <Route index element={<HomePage/>}/>
      <Route path="contactus" element={<ContactUs/>}/>
      <Route path="whygreen" element={<WhyGreen/>}/>
      <Route path="login" element={<Signin/>}/>

    </Route>
  )
)
function App(){
     return (
          <RouterProvider router={router}/>
    );
  }

export default App;
