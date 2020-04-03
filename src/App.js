import React from 'react';
import logo from './logo.svg';
import './App.css';
import Employees from "./pages/Employee"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       
          <Employees />
        
      </header>
    </div>
  );
}

export default App;
