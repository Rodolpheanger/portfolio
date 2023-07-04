import ProjectCard from './ProjectCard';
import { projects } from '~/datas/projects';

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-12 sm:gap-24"
    >
      <h2 className=" font-bebas-neue text-4xl text-text-light underline decoration-tertiary underline-offset-8 sm:text-6xl lg:underline-offset-[10px]">
        Mes Projets
      </h2>
      <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:flex-wrap">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
