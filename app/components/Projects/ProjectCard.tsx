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
  const technos = project.technos?.map((techno, index) => (
    <Image
      className="h-7 w-7 sm:h-12 sm:w-12"
      key={index}
      src={techno.icon}
      alt={`Icône ${techno.name}`}
      title={techno.name}
      width={50}
      height={50}
    />
  ));
  return (
    <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-5 sm:gap-10">
      <h3 className="font-montserrat text-2xl font-bold text-text-light">
        {project.name}
      </h3>
      <div className="">
        {!showDescription && (
          <Image
            src={project.imgMin}
            alt={`Miniature du projet ${project.name}`}
            className="aspect-video object-cover object-top"
          />
        )}
        {showDescription && (
          <div className="flex aspect-video flex-col items-center justify-between gap-2 bg-white/50 p-6 font-montserrat text-sm sm:p-8 sm:text-base">
            <p className="text-justify">{project.description}</p>
            {project.technos && (
              <div className="text-center">
                <h4 className="p-2 font-semibold underline">Technos utilisées:</h4>
                <div className="flex justify-center gap-5">{technos}</div>
              </div>
            )}
            <div className="flex w-full flex-col items-center gap-2 ">
              <div className="text-white ">
                {project.gitHubUrl && (
                  <Link href={project.gitHubUrl} target="_blank">
                    <button className="px-4 hover:underline">Vers le GitHub</button>
                  </Link>
                )}
                {project.webSiteUrl && (
                  <Link href={project.webSiteUrl} target="_blank">
                    <button className="px-4 hover:underline">Vers le site</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={() => setShowDescription(!showDescription)}
        className="mb-4 block w-1/2 scale-100 bg-secondary px-4 py-2 font-montserrat text-xs transition duration-500 hover:scale-105 hover:bg-tertiary hover:text-white sm:max-w-xs md:px-8 md:py-4 md:text-base"
      >
        {showDescription ? "Afficher l'image" : 'En savoir plus'}
      </button>
    </div>
  );
};

export default ProjectCard;
