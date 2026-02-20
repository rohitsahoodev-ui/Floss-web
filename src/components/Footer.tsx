import { motion } from "motion/react";
import { Github, Twitter, MessageSquare, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="https://cdn.discordapp.com/avatars/994111697738551357/a_d2d729d86fd39e4a43eab007b866a1e5.gif?size=1024" 
              alt="Floss Logo" 
              className="w-10 h-10 rounded-full shadow-lg shadow-floss-pink/20"
            />
            <span className="text-2xl font-bold tracking-tighter">Floss</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
            The ultimate Discord experience. Music, moderation, giveaways, and more. Trusted by thousands of servers worldwide.
          </p>
          <div className="flex gap-4">
            {[Twitter, Github, MessageSquare].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-floss-pink hover:text-white transition-all text-gray-400">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-16 text-center">
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#commands" className="hover:text-white transition-colors">Commands</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="https://discord.gg/eXjCRtQuz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Support Server</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Get updates on new features and commands.</p>
            <div className="flex gap-2 max-w-xs mx-auto">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:border-floss-pink transition-colors"
              />
              <button className="bg-floss-pink px-4 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center pt-8 border-t border-white/5 gap-6 text-center">
          <div className="flex flex-col gap-2">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Floss Bot. Not affiliated with Discord Inc.
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-gray-500 text-[10px] font-medium tracking-tight">
                Web made with <span className="text-floss-pink">❤️</span> by <a href="https://rsdev.fun" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-floss-pink transition-colors">@rsdev.fun</a>
              </p>
              <p className="text-gray-500 text-[10px] font-medium tracking-tight">
                Floss made with <span className="text-floss-pink">❤️</span> by <span className="text-gray-400 hover:text-floss-pink transition-colors cursor-default">@mr_ambanigaming</span>
              </p>
            </div>
          </div>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
