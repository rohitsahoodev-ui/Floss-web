import { motion } from "motion/react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-[#0a0a0a] flex flex-center items-center justify-center"
    >
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <img
            src="https://cdn.discordapp.com/avatars/994111697738551357/a_d2d729d86fd39e4a43eab007b866a1e5.gif?size=1024"
            alt="Floss Logo"
            className="w-24 h-24 rounded-full shadow-2xl shadow-floss-pink/40 border-2 border-floss-pink/20"
          />
        </motion.div>
        
        {/* Glowing ring */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-floss-pink/20 blur-2xl rounded-full -z-0"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tighter text-gradient">FLOSS</h2>
          <div className="mt-2 flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-1.5 h-1.5 rounded-full bg-floss-pink"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
