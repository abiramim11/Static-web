import React from 'react';
import './App.css';  // Assuming you're styling in App.css

function App() {
  return (
    <div className="header">
      <nav className="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Ready to Order</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <div className="title">
        <h1>Welcome to Our Cake Shop</h1>
      </div>
    </div>
  );
}

export default App;
