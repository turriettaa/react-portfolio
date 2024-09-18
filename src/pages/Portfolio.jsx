import React from 'react';
//import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      image: 'https://via.placeholder.com/150',
      deployedLink: 'https://project1.com',
      repoLink: 'https://github.com/your-username/project1',
    },
    // Add more projects here
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