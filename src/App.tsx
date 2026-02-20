import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import MusicPlayer from "./components/MusicPlayer";
import Commands from "./components/Commands";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-floss-pink selection:text-white">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-floss-pink to-floss-purple z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Custom Cursor Effect (Subtle) */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,255,0.03),transparent_50%)]" />
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Features />
        <MusicPlayer />
        <Commands />
      </main>

      <Footer />
    </div>
  );
}
