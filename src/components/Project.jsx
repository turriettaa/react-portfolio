import React from 'react';

const Project = ({ title, description, image, deployedLink, repoLink }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        Deployed Application
      </a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
    </div>
  );
};

export default Project;