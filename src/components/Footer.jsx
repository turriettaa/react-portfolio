import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <p>&copy; {new Date().getFullYear()} Alejandro Turrietta. All rights reserved.</p>
        <div>
          <a href="https://github.com/turrietta" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/alex-t-175921272" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
