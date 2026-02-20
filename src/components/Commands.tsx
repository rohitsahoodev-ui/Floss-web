import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

const commands = [
  { name: "play", desc: "Play music from YouTube, Spotify, etc.", usage: "!!play <song/url>" },
  { name: "skip", desc: "Skip the current playing track.", usage: "!!skip" },
  { name: "queue", desc: "View the current music queue.", usage: "!!queue" },
  { name: "stop", desc: "Stop the music and clear the queue.", usage: "!!stop" },
  { name: "volume", desc: "Change the music volume.", usage: "!!volume <0-100>" },
  { name: "ban", desc: "Ban a member from the server.", usage: "!!ban <user> [reason]" },
  { name: "kick", desc: "Kick a member from the server.", usage: "!!kick <user> [reason]" },
  { name: "clear", desc: "Delete a specified amount of messages.", usage: "!!clear <amount>" },
  { name: "giveaway", desc: "Start a new giveaway.", usage: "!!giveaway start <time> <winners> <prize>" },
  { name: "rank", desc: "Check your current level and XP.", usage: "!!rank [user]" },
  { name: "leaderboard", desc: "View the server XP leaderboard.", usage: "!!leaderboard" },
  { name: "help", desc: "View the list of all available commands.", usage: "!!help" },
];

export default function Commands() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="commands" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-4">Powerful <span className="text-gradient">Commands</span></h2>
          <p className="text-gray-400">The prefix is <span className="text-floss-pink font-mono font-bold">!!</span>. Click any command to copy it.</p>
        </div>
        <a 
          href="https://discord.gg/eXjCRtQuz"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium"
        >
          View All Commands
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {commands.map((cmd, i) => (
          <motion.div
            key={cmd.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onClick={() => copyToClipboard(cmd.usage, cmd.name)}
            className="bg-[#151515] border border-white/5 rounded-xl p-5 hover:border-floss-pink/30 transition-all group cursor-pointer active:scale-95 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-floss-pink font-mono font-bold">!!{cmd.name}</span>
              <div className="flex items-center gap-2">
                <AnimatePresence mode="wait">
                  {copiedId === cmd.name ? (
                    <motion.div
                      key="check"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                    >
                      <Check className="w-4 h-4 text-green-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      className="group-hover:opacity-100 transition-opacity"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">{cmd.desc}</p>
            <div className="bg-black/40 rounded-lg p-2 font-mono text-[10px] text-gray-500 group-hover:text-gray-300 transition-colors flex justify-between items-center">
              <span>{cmd.usage}</span>
              {copiedId === cmd.name && (
                <span className="text-green-500 text-[8px] font-bold uppercase tracking-widest">Copied!</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
