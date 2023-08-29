import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// css
import './App.css';
/**  @type {import('tailwindcss').Config} */
// pages
import Navigation from './components/Navigation/Navigation';
import Signin from "./components/Login/SignIn/SignIn";
import HomePage from "./components/HomePage/HomePage";
// import { Component } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation/>}>
      <Route index element={<HomePage/>}/>
      <Route path="Company"/>
      <Route path="WhyGreen"/>
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
