import Image from 'next/image';
import photo from '~/public/image/photo_rodolphe_compress.png';

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
        <div className="flex flex-col items-center gap-[4vh] sm:w-[50vw]">
          <h1 className=" flex flex-col font-bebas-neue text-4xl tracking-widest text-secondary sm:text-[6vw] sm:leading-[6vw]">
            <span className="mb-4 border-b-4 border-b-tertiary lg:border-b-8">
              Développeur
            </span>
            <span className="self-end border-b-4 border-b-tertiary lg:border-b-8">
              Web
            </span>
          </h1>
          <p className="w-3/4 gap-[4vh] text-justify font-montserrat text-xs text-text-light sm:text-base">
            Salut, moi c’est{' '}
            <span className="font-bold text-secondary">Rodolphe</span>, passionné
            d’informatique et ayant déjà eu l’occasion de me frotter aux joies du
            code, j’ai entamé une reconversion en 2021 après 20 ans dans
            l'automobile.. Depuis l’obtention de mon diplôme, je me perfectionne au
            quotidien dans diverses technologies du développement web...
          </p>
        </div>
      </div>
      <button className="mb-8 block w-3/4 scale-100 bg-tertiary px-4 py-2 font-montserrat text-xs text-white transition duration-500 hover:scale-105 hover:bg-tertiary-dark sm:max-w-xs md:px-8 md:py-4 md:text-base">
        en savoir plus
      </button>
    </section>
  );
};

export default Hero;
