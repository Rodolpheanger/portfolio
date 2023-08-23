'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '~/datas/projects';

const Projects = () => {
  const [reversedProjects, setReversedProjects] = useState(
    projects.reverse().slice(0, 4)
  );
  const [showAllButton, setShowAllButton] = useState(true);

  const handleClick = () => {
    setReversedProjects(projects.reverse());
    setShowAllButton(false);
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-12 sm:gap-24 "
    >
      <h2 className=" font-bebas-neue text-4xl text-text-light underline decoration-tertiary underline-offset-8 sm:text-6xl lg:underline-offset-[10px]">
        Mes Réalisations
      </h2>
      <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:flex-wrap">
        {reversedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {showAllButton && (
        <button
          className="scale-100 bg-secondary px-10 py-2 font-montserrat text-xs transition duration-500 hover:scale-105 hover:bg-tertiary hover:text-white sm:max-w-xs sm:px-20 md:text-base "
          onClick={handleClick}
        >
          Voir tous les projets
        </button>
      )}
    </section>
  );
};

export default Projects;
