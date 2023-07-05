'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Project } from '~/datas/projects';

type Props = {
  project: Project;
};
const ProjectCard = ({ project }: Props) => {
  const [showDescription, setShowDescription] = useState(false);
  const technos = project.technos?.map((techno) => (
    <Image
      className="h-7 w-7 sm:h-12 sm:w-12"
      key={techno.name}
      src={techno.icon}
      alt={`Icône ${techno.name}`}
      title={techno.name}
      width={50}
      height={50}
    />
  ));
  return (
    <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-5 sm:gap-10">
      <h3 className="font-montserrat text-xl font-bold text-text-light sm:text-2xl">
        {project.name}
      </h3>
      <div>
        {!showDescription && (
          <Image
            src={project.img}
            alt={`Miniature du projet ${project.name}`}
            className="aspect-video object-cover object-top"
          />
        )}
        {showDescription && (
          <div className="flex aspect-video flex-col items-center justify-between gap-2 bg-white/10 p-4 font-montserrat text-xs text-text-light sm:p-8 sm:text-base">
            <p className="text-justify">
              <span>{project.date}</span> - {project.description}
            </p>
            {project.technos && (
              <div className="text-center">
                <div className="mb-4 flex justify-center gap-5 ">{technos}</div>
              </div>
            )}

            <div className="flex w-full items-center justify-center gap-6 text-white">
              {project.gitHubUrl && (
                <Link href={project.gitHubUrl} target="_blank">
                  <button className="bg-text-dark px-6 py-1 transition duration-500 hover:bg-text-dark/50">
                    Vers le GitHub
                  </button>
                </Link>
              )}
              {project.webSiteUrl && (
                <Link href={project.webSiteUrl} target="_blank">
                  <button className="bg-text-dark px-6 py-1 transition duration-500 hover:bg-text-dark/50">
                    Vers le site
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      <button
        onClick={() => setShowDescription(!showDescription)}
        className="scale-100 bg-secondary px-10 py-2 font-montserrat text-xs transition duration-500 hover:scale-105 hover:bg-tertiary hover:text-white sm:max-w-xs sm:px-20 md:text-base "
      >
        {showDescription ? "Revenir à l'image" : 'En savoir plus'}
      </button>
    </div>
  );
};

export default ProjectCard;
