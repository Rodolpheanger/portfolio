import Image from 'next/image';
import Link from 'next/link';
import photo from '~/public/image/photo_rodolphe.png';

const Hero = () => {
  return (
    <section className="flex flex-col items-center h-5/6 justify-evenly">
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
            <span className="mb-4 underline decoration-tertiary underline-offset-4 lg:underline-offset-[10px]">
              Développeur
            </span>
            <span className="self-end underline decoration-tertiary underline-offset-4 lg:underline-offset-[10px]">
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
      <Link
        href="/#projects"
        className="block w-2/5 px-4 py-2 mb-8 text-xs text-center transition duration-500 scale-100 bg-secondary font-montserrat hover:scale-105 hover:bg-tertiary hover:text-white sm:max-w-xs md:text-base"
      >
        En savoir plus
      </Link>
    </section>
  );
};

export default Hero;
