import About from './components/About/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

export default function Home() {
  return (
    <>
      <div className="mb-[5vh] h-screen">
        <Header />
        <Hero />
      </div>
      <main className="flex flex-col justify-center gap-12 sm:gap-24">
        <Projects />
        <About />
      </main>
    </>
  );
}
