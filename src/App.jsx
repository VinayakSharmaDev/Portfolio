import { useEffect, useState } from 'react';
import Reveal from './components/Reveal';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Resume from './sections/Resume';
import Footer from './sections/Footer';
import './App.css';


function App() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const scrollHendler = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      const currentScroll = scrollTop / (docHeight - winHeight) * 100;

      setShowButton(currentScroll > 20);
    };

    window.addEventListener("scroll", scrollHendler);

    return () => {
      window.removeEventListener('scroll', scrollHendler);
    }



  }, []);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='max-w-410 mx-auto p-2 text-sm'>
      <Header />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Contact /></Reveal>
      <Reveal><Resume /></Reveal>
      <Reveal><Footer /></Reveal>
      {<button className={`size-12 pb-2 bg-[#c75b12] hover:bg-amber-700 rounded-2xl border-2 fixed bottom-15 right-12 text-3xl cursor-pointer flex items-center justify-center transition-all duration-300 
      ${showButton ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 pointer-events-none scale-75 translate-y-10'}`}
        onClick={scrollToTop}>↑</button>}
    </div>
  )
}

export default App

