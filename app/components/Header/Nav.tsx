'use client';

import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="w-3/4 sm:w-auto">
      <ul className="text-l flex w-full justify-between font-montserrat tracking-wide text-text-light sm:gap-14 sm:text-2xl">
        <Link href="/">
          <li className="transform cursor-pointer border-b-4 border-b-tertiary border-opacity-0 duration-500 hover:border-b-[scale-100] hover:border-opacity-100">
            Accueil
          </li>
        </Link>
        <Link href="/#projects">
          <li className="transform cursor-pointer border-b-4 border-b-tertiary border-opacity-0 duration-500 hover:border-b-[scale-100] hover:border-opacity-100">
            Projets
          </li>
        </Link>
        <Link href="/#about" scroll={false}>
          <li className="transform cursor-pointer border-b-4 border-b-tertiary border-opacity-0 duration-500 hover:border-b-[scale-100] hover:border-opacity-100">
            A propos
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
