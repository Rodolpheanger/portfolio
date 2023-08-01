import Image from 'next/image';
import Link from 'next/link';
import type { Techno } from '~/datas/technos';
import { technos } from '~/datas/technos';
import pdfIcon from '~/public/icons/pdf.png';
import AboutTechnos from './AboutTechnos';

const About = () => {
  const technosArray: Techno[] = Object.entries(technos).map(([, value]) => ({
    name: value.name,
    icon: value.icon,
  }));
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-12 sm:gap-24"
    >
      <h2 className="font-bebas-neue text-4xl text-text-light underline decoration-tertiary underline-offset-8  sm:text-6xl lg:underline-offset-[10px]">
        A propos
      </h2>
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-8">
        <h3 className="text-xl font-bold underline font-montserrat text-text-light sm:text-2xl">
          Mes Technos & Outils
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8 p-4 bg-white/10 backdrop-blur-sm md:w-2/3 md:p-10 xl:w-1/3">
          {technosArray.map((techno) => (
            <AboutTechnos key={techno.name} techno={techno} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-4 sm:gap-8">
        <h3 className="text-xl font-bold underline font-montserrat text-text-light sm:text-2xl">
          Mon CV
        </h3>

        <Image src={pdfIcon} alt="CV" width={96} height={96} />
        <Link
          href="/documents/CV_Rodolphe_ANGER.pdf"
          target="_blank"
          className="flex flex-col items-center gap-4"
        >
          <button className="w-full px-8 py-2 text-xs transition duration-500 scale-100 bg-secondary font-montserrat hover:scale-105 hover:bg-tertiary hover:text-white sm:max-w-xs md:text-base">
            Télécharger
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
