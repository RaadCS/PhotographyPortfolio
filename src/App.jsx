import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>
      <footer className="text-center py-12 border-t border-borderWarm text-muted text-sm">
        <p>&copy; 2026 Raad Al-nashri. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;