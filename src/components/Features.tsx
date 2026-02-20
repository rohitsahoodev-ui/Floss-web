import { motion } from "motion/react";
import { 
  Music, 
  Shield, 
  Zap, 
  Settings, 
  Users, 
  Volume2, 
  Gift, 
  Star, 
  Info, 
  Filter, 
  ListMusic, 
  Smile,
  Coins,
  FileText,
  Lock,
  UserPlus,
  Activity,
  Globe
} from "lucide-react";

const features = [
  { icon: Info, title: "Information", desc: "Get detailed info about servers, users, and the bot itself." },
  { icon: Music, title: "Music", desc: "High-quality audio streaming from multiple sources with zero lag." },
  { icon: Filter, title: "Filters", desc: "Apply bassboost, nightcore, and other audio effects in real-time." },
  { icon: ListMusic, title: "Playlist", desc: "Save and load your favorite tracks into custom playlists." },
  { icon: Settings, title: "Settings", desc: "Highly customizable prefix, language, and behavior settings." },
  { icon: Volume2, title: "Voice", desc: "Advanced voice channel management and 24/7 mode." },
  { icon: Shield, title: "Moderation", desc: "Keep your server safe with powerful auto-mod and manual tools." },
  { icon: Zap, title: "Admin", desc: "Streamlined server administration and configuration commands." },
  { icon: Gift, title: "Giveaway", desc: "Host fair and automated giveaways with ease." },
  { icon: Star, title: "Welcome", desc: "Customizable welcome images and messages for new members." },
  { icon: Coins, title: "Economy", desc: "Engage users with a full-featured global economy system." },
  { icon: FileText, title: "Logs", desc: "Detailed logging for messages, members, and server updates." },
  { icon: Lock, title: "Anti-Link", desc: "Protect your server from unwanted links and spam automatically." },
  { icon: UserPlus, title: "Auto-Role", desc: "Assign roles to new members automatically upon joining." },
  { icon: Activity, title: "Status", desc: "Real-time bot status and performance monitoring." },
  { icon: Globe, title: "Multi-Lang", desc: "Support for multiple languages to serve a global community." },
  { icon: Zap, title: "Extra", desc: "Utility tools like weather, translation, and more." },
  { icon: Smile, title: "Fun", desc: "Engage your community with games, memes, and social commands." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Everything You <span className="text-gradient">Need</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Floss comes packed with features to make your Discord server more engaging, safe, and fun.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass p-6 rounded-2xl group cursor-default relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-floss-pink/5 to-floss-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-floss-pink to-floss-purple flex items-center justify-center mb-4 shadow-lg group-hover:shadow-floss-pink/20 transition-all">
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-floss-pink transition-colors">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
