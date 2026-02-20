import { motion } from "motion/react";
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2 } from "lucide-react";

export default function MusicPlayer() {
  return (
    <section className="py-24 px-6 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-floss-purple/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium <span className="text-gradient">Audio</span> Experience
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Listen to your favorite tracks with crystal clear quality. Floss supports YouTube, Spotify, SoundCloud, and more. No lag, just pure music.
          </p>
          <ul className="space-y-4">
            {["High Fidelity 320kbps Audio", "24/7 Music in Voice Channels", "Custom Playlists & Saved Tracks", "Advanced Audio Filters"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-floss-pink shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 shadow-2xl border-white/10 relative"
        >
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-floss-pink/20 blur-2xl rounded-full" />
          
          <div className="flex flex-col gap-6">
            <div className="flex gap-6 items-center">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg relative group">
                <img 
                  src="https://picsum.photos/seed/music/400/400" 
                  alt="Album Art" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="fill-white text-white w-8 h-8" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">Starlight Symphony</h3>
                <p className="text-floss-pink font-medium">Celestial Echoes</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-gray-400 uppercase tracking-wider font-bold">Live</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-floss-purple/20 text-floss-purple uppercase tracking-wider font-bold">HQ Audio</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "65%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-floss-pink to-floss-purple relative"
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </motion.div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>2:45</span>
                <span>4:12</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Shuffle className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                <SkipBack className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors fill-current" />
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  <Play className="w-6 h-6 text-black fill-current ml-1" />
                </div>
                <SkipForward className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors fill-current" />
                <Repeat className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
              </div>
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-gray-400" />
                <div className="w-20 h-1 bg-white/10 rounded-full">
                  <div className="w-3/4 h-full bg-white/40 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
