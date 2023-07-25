import './App.css';
import Navigation from './components/Navigation/Navigation';
import Email from './components/EmailSubscription/Email';
// import { Component } from 'react';
/**  @type {import('tailwindcss').Config} */

function App(){
    return (
      <div className="App text-center">
       <Navigation/>
       <Email/>
       {/* <Register/>
       <SignIn/>
       <Profile/>  */}
      </div>
    );
  }

export default App;
