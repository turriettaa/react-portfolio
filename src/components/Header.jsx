import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#', // Change this to your desired color
    color: '#fff', // Set the text color to white or any other color you prefer
    padding: '20px', // Add some padding for spacing
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Alejandro Turrietta</h1>
          </div>
            <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
