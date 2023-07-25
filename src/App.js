import './App.css';
import Navigation from './components/Navigation/Navigation';
// import { Component } from 'react';
/**  @type {import('tailwindcss').Config} */

function App(){
    return (
      <div className="App text-center">
       <Navigation/>
       {/* <Register/>
       <SignIn/>
       <Profile/>  */}
      </div>
    );
  }

export default App;
