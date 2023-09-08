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
