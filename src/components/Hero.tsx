import { motion } from "motion/react";
import { Plus, LayoutDashboard, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-floss-pink/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-floss-purple/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-floss-pink mb-8">
            <Sparkles className="w-3 h-3" />
            The Next Generation Discord Bot
          </div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15, delay: 0.2 }}
            className="relative inline-block mb-10"
          >
            <div className="absolute inset-0 bg-floss-pink/20 blur-3xl rounded-full" />
            <img 
              src="https://cdn.discordapp.com/avatars/994111697738551357/a_d2d729d86fd39e4a43eab007b866a1e5.gif?size=1024" 
              alt="Floss Bot" 
              className="w-32 h-32 md:w-48 md:h-48 rounded-full relative z-10 shadow-2xl border-4 border-white/5"
            />
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
            FLOSS — THE <br />
            <span className="text-gradient">ULTIMATE</span> EXPERIENCE
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Elevate your Discord server with high-quality music, powerful moderation, 
            and engaging social features. All in one beautifully crafted bot.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
              href="https://discord.com/api/oauth2/authorize?client_id=994111697738551357&permissions=8&scope=applications.commands%20bot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-4 rounded-2xl bg-gradient-to-r from-floss-pink to-floss-purple text-white font-bold text-lg shadow-xl shadow-floss-pink/20 flex items-center justify-center gap-3"
            >
              <Plus className="w-5 h-5" />
              Invite to Server
            </motion.a>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-20"
        >
          <div className="w-px h-40 bg-gradient-to-b from-transparent via-floss-pink to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
