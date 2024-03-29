import ScrollToId from '../ScrollTo/ScrollToId';

const Nav = () => {
  return (
    <nav className="w-3/4 sm:w-auto ">
      <ul className="text-l flex w-full flex-wrap items-center justify-evenly font-montserrat tracking-wide text-text-light sm:text-xl md:gap-8 lg:gap-14 lg:text-2xl">
        <ScrollToId to="home" smooth="easeInOutCubic" duration={500}>
          <li className="transform cursor-pointer border-b-4 border-b-tertiary border-opacity-0 p-2 duration-500 hover:border-b-[scale-100] hover:border-opacity-100">
            Accueil
          </li>
        </ScrollToId>
        <ScrollToId
          to="projects"
          smooth="easeInOutCubic"
          duration={500}
          offset={-25}
        >
          <li className="transform cursor-pointer border-b-4 border-b-tertiary border-opacity-0 p-2 duration-500 hover:border-b-[scale-100] hover:border-opacity-100">
            Mes réalisations
          </li>
        </ScrollToId>
        <ScrollToId to="about" smooth="easeInOutCubic" duration={1000} offset={-25}>
          <li className="transform cursor-pointer border-b-4 border-b-tertiary border-opacity-0 p-2 duration-500 hover:border-b-[scale-100] hover:border-opacity-100">
            A propos
          </li>
        </ScrollToId>
      </ul>
    </nav>
  );
};

export default Nav;
