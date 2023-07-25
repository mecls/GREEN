import React from 'react';
import './Navigation.css';
import Logo from './Logo/Logo.js';


function Navigation() {
  return (
<nav className="flex justify-between bb b--white-10 body">
  <div className="flex-grow pa3 flex items-center pl7">
  <div className="dropdown">
  <a className="f5 link dib black-80 dim mr3 mr4-ns pointer" href='#0'>Buy</a>
  <div className="dropdown-content">
    <a href="#0">Food</a>
    <a href="#0">Clothes</a>
    <a href="#0">House</a>
    <a href="#0">Beauty</a>
  </div>
</div>
<div className="dropdown">
  <a className="f5 link dib black-80 dim mr3 mr4-ns pointer" href='#0'>Sell</a>
  <div className="dropdown-content">
    <a href="#0">Seller Programe</a>
    <a href="#0">Promote Yourself</a>
    <a href="#0">Find costumers for life</a>
  </div>
</div>
  <a className="f5 link dib black-80 dim mr3 mr4-ns" href="#0">Why Green?</a>
  </div>
  <Logo/>
  <div className="flex-grow pa3 flex items-center pr7">
    <a className="f5 link dib black-80 dim mr3 mr4-ns" href="#0">Sign In</a>
    <a className="f5 dib black-80 bg-animate hover-bg-tcolor hover-tcolor no-underline pv2 ph4 br-pill ba b--black-20" href="#0">Sign Up</a>
  </div>
</nav>
  );
}

export default Navigation;