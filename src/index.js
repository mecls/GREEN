import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
// import i18n (needs to be bundled ;)) 
import './i18n';
import { Suspense } from 'react';
import './index.css';
import App from './App';

const loadingMarkup =(
  <div className='py-4 text-center'>
    <h3>Loadinf ...</h3>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const { error } = require('console');
// const express = require('express');
// const nodemailer = require('nodemailer');
// const send = require('send');
// const app = express();
// const port = 5000;

// function sendEmail(){

//     return new Promise((resolve ,reject) =>{
//         var transporter = nodemailer.createTransport({
//             service:'gmail',
//             auth:{
//                 user:myemail,
//                 pass:mypass
//             }
//         })
//         const mail_configs = {
//             from:'green.ajuda@gmail.com',
//             to:'zakusenshi@gmail.com',
//             subject: 'Testing sending email',
//             text: 'checking if email will be sent'
//         }
//         transporter.sendMail(mail_configs, function(error, info){
//             if(error){
//                 console.log(error)
//                 return reject({message: "An error has occured"})
//             }
//             return resolve({message: "Email sent successfuly"})
//         })
//     })
// }

// app.get('/', (req,res) =>{  
//     sendEmail()
//     .then(response => res.send(response.message))
//     .catch(error => res.status(500).send(error.message))
// })

// app.listen(port, () =>{
//     console.log(`is listening at port ${port}`);
// })

// const myemail = "green.ajuda@gmail.com"
// const mypass = "uahmtfcarfdsfjzc"