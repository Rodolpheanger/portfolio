import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <Hero />
      </div>
      <main className="flex justify-center">
        <h1 className="font-bebas-neue text-6xl text-text-dark">Main</h1>
      </main>
    </>
  );
}
