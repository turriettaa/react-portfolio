import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#345',
    color: '#fff',
    padding: '10px',
  };

  return (
    <header style={headerStyle}>
      <div className="header">
        <div className="row align-items-top">
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
