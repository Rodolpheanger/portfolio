'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { Techno } from '~/datas/technos';

const AboutTechnos = ({ techno }: { techno: Techno }) => {
  const technoRef = useRef<HTMLDivElement>(null);
  const technoNameRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (technoRef.current && entry.isIntersecting) {
            technoRef.current.classList.remove('opacity-0');
            technoRef.current.classList.add(
              'odd:animate-appear-spin-left',
              'even:animate-appear-spin-right'
            );
            technoNameRef.current?.classList.add('animate-appear-scale');
            technoNameRef.current?.classList.remove('opacity-0');
            observer.unobserve(technoRef.current);
          }
        }
      },
      { rootMargin: '-6%' }
    );

    technoRef.current && observer.observe(technoRef.current);
  }, []);

  return (
    <div
      ref={technoRef}
      className="flex origin-[50%_30%] flex-col items-center text-xs text-text-light opacity-0  sm:text-base"
    >
      <Image
        className="h-7 w-7 sm:h-12 sm:w-12"
        src={techno.icon}
        alt={`Icône ${techno.name}`}
        width={96}
        height={96}
      />
      <p ref={technoNameRef} className="opacity-0">
        {techno.name}
      </p>
    </div>
  );
};

export default AboutTechnos;
