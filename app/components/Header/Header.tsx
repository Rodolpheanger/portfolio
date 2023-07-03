import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between gap-[4vh] py-4 sm:flex-row sm:px-16 sm:py-6">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;