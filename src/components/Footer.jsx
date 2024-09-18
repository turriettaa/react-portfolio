import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
      <div>
        <a href="https://github.com/turrietta" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
