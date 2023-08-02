import Image from 'next/image';
import photo from '~/public/image/photo_rodolphe.png';
import ScrollToId from '../ScrollTo/ScrollToId';

const Hero = () => {
  return (
    <section className="flex h-5/6 flex-col items-center justify-evenly">
      <div className=" flex flex-col items-center gap-[4vh] sm:w-4/5 sm:flex-row">
        <Image
          src={photo}
          width={700}
          height={700}
          alt="Photo de moi"
          className="w-1/2 sm:w-[25vw]"
        />
        <div className="flex flex-col  items-center gap-[4vh]">
          <h1 className=" flex flex-col font-bebas-neue text-4xl tracking-widest text-secondary sm:text-[6vw] sm:leading-[6vw]">
            <span className="mb-4 underline decoration-tertiary underline-offset-4 lg:underline-offset-[10px]">
              Développeur
            </span>
            <span className="self-end underline decoration-tertiary underline-offset-4 lg:underline-offset-[10px]">
              Web
            </span>
          </h1>
          <p className="w-3/4 gap-[4vh] text-start font-montserrat text-xs text-text-light sm:text-base">
            <p className="mb-2 text-base sm:text-2xl">
              Salut, moi c’est{' '}
              <span className="font-bold text-secondary">Rodolphe</span>
              <span className="text-2xl sm:text-4xl"> 👋</span>
            </p>
            <p className="mb-2">
              Après 20 ans de bons et loyaux services dans l'après-vente automobile,
              j’ai décidé de prendre un virage à 180 degrés en 2021 et de me lancer
              dans une reconversion professionnelle.
            </p>
            <p className="mb-2">
              Passionné d'informatique, j'ai plongé tête la première dans le monde
              merveilleux de la programmation web et je suis devenu accro.
            </p>
            <p className="mb-2">
              J'ai donc décidé d'aller plus loin et de participer à une formation de
              développeur web avec <strong>OpenClassrooms</strong>.
            </p>
            <p className="mb-2">
              Et devinez quoi ? Non seulement j'ai adoré, mais en plus j'ai obtenu
              mon <strong>diplôme 🎉</strong>
            </p>
            <p className="mb-2">
              Depuis, je me perfectionne quotidiennement dans diverses technologies
              du développement web, telles que <strong>React</strong> ,
              <strong>Next.js</strong> et leur écosystème, tout en cherchant mon
              premier emploi dans ce domaine.
            </p>
          </p>
        </div>
      </div>
      <ScrollToId to="projects" smooth="easeInOutCubic" duration={500} offset={-25}>
        <div className="mb-8 mt-8 block scale-100 cursor-pointer bg-secondary px-10 py-2 text-center font-montserrat text-xs transition duration-500 hover:scale-105 hover:bg-tertiary hover:text-white sm:max-w-xs sm:px-20 md:text-base">
          En savoir plus
        </div>
      </ScrollToId>
    </section>
  );
};

export default Hero;
