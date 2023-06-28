'use client';

const Nav = () => {
  return (
    <nav>
      <ul className="text-l flex justify-between gap-8 font-montserrat tracking-wide text-text-light md:gap-14 md:text-2xl">
        <li className="transform cursor-pointer border-b-4 border-b-tertiary border-opacity-0 duration-500 hover:border-b-[scale-100] hover:border-opacity-100">
          Accueil
        </li>
        <li className="transform cursor-pointer border-b-4 border-b-tertiary border-opacity-0 duration-500 hover:border-b-[scale-100] hover:border-opacity-100">
          Projets
        </li>
        <li className="transform cursor-pointer border-b-4 border-b-tertiary border-opacity-0 duration-500 hover:border-b-[scale-100] hover:border-opacity-100">
          A propos
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
