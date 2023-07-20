import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
       <Navigation/>
       {/* <Register/>
       <SignIn/>
       <Profile/>  */}
      </div>
    )
  }
  
}

export default App;
