import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, MessageSquare, Plus } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Commands", href: "#commands" },
    { name: "Support", href: "#" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-black/80 backdrop-blur-lg border-b border-white/5" : "py-6 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#" 
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src="https://cdn.discordapp.com/avatars/994111697738551357/a_d2d729d86fd39e4a43eab007b866a1e5.gif?size=1024" 
            alt="Floss Logo" 
            className="w-10 h-10 rounded-full shadow-lg shadow-floss-pink/20 group-hover:shadow-floss-pink/40 transition-all"
          />
          <span className="text-2xl font-bold tracking-tighter">Floss</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-4">
            <a 
              href="https://discord.gg/eXjCRtQuz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-bold"
            >
              <MessageSquare className="w-4 h-4" />
              Support
            </a>
            <a 
              href="https://discord.com/api/oauth2/authorize?client_id=994111697738551357&permissions=8&scope=applications.commands%20bot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-floss-pink to-floss-purple shadow-lg shadow-floss-pink/20 hover:shadow-floss-pink/40 transition-all text-sm font-bold"
            >
              <Plus className="w-4 h-4" />
              Invite Bot
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-gray-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <a 
                  href="https://discord.gg/eXjCRtQuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold"
                >
                  <MessageSquare className="w-4 h-4" />
                  Support
                </a>
                <a 
                  href="https://discord.com/api/oauth2/authorize?client_id=994111697738551357&permissions=8&scope=applications.commands%20bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-floss-pink to-floss-purple text-sm font-bold"
                >
                  <Plus className="w-4 h-4" />
                  Invite Bot
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
