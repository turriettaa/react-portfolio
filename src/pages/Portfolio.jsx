import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Weather App',
      description: 'A weather app that shows todays weather and 5 day forecast.',
      image: 'https://github.com/turriettaa/Weather-Dashboard/raw/main/Screenshot%202024-09-14%20102644.png',
      deployedLink: 'https://turriettaa.github.io/Weather-Dashboard/',
      repoLink: 'https://github.com/turriettaa/Weather-Dashboard',
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          deployedLink={project.deployedLink}
          repoLink={project.repoLink}
        />
      ))}
    </section>
  );
};

export default Portfolio;
