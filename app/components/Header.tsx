import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-4 md:px-8 md:py-6">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
