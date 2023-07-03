'use client';

const Nav = () => {
  return (
    <nav className="w-3/4 sm:w-auto">
      <ul className="text-l flex w-full justify-between font-montserrat tracking-wide text-text-light sm:gap-14 sm:text-2xl">
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
