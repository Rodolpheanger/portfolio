import Image from 'next/image';
import Link from 'next/link';
import { technos } from '~/datas/technos';
import pdfIcon from '~/public/icons/pdf.png';
import AboutTechnos from './AboutTechnos';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-12 sm:gap-24"
    >
      <h2 className="font-bebas-neue text-4xl text-text-light underline decoration-tertiary underline-offset-8  sm:text-6xl lg:underline-offset-[10px]">
        A propos
      </h2>
      <div className="flex flex-col items-center justify-center gap-10 sm:gap-16">
        <h3 className="font-montserrat text-xl font-bold text-text-light underline sm:text-2xl">
          Mes Technos & Outils
        </h3>
        <div className="flex flex-col items-center gap-12 bg-white/10 p-8 backdrop-blur-sm sm:p-12 md:w-2/3 md:p-10 xl:w-1/2">
          {Object.entries(technos).map(([category, categoryProperties]) => {
            return (
              <div key={category} className="flex flex-col items-center gap-8">
                <h2 className="font-montserrat text-xl font-bold text-text-light underline sm:text-2xl">
                  {categoryProperties.name}
                </h2>
                <div className="flex flex-wrap justify-evenly gap-8">
                  {Object.values(categoryProperties.list).map((techno) => (
                    <AboutTechnos key={techno.name} techno={techno} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 sm:gap-8">
        <h3 className="font-montserrat text-xl font-bold text-text-light underline sm:text-2xl">
          Mon CV
        </h3>

        <Image src={pdfIcon} alt="CV" width={96} height={96} />
        <Link
          href="/documents/CV_Rodolphe_ANGER.pdf"
          target="_blank"
          className="flex flex-col items-center gap-4"
        >
          <button className="w-full scale-100 bg-secondary px-8 py-2 font-montserrat text-xs transition duration-500 hover:scale-105 hover:bg-tertiary hover:text-white sm:max-w-xs md:text-base">
            Télécharger
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
