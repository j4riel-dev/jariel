import { motion } from "framer-motion";

const Avatar3D = () => {
  return (
    <motion.div
      className="relative"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Glow effect behind avatar */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink via-pastel-lilac to-pastel-blue rounded-full blur-2xl opacity-60 scale-110" />
      
      {/* Avatar container */}
      <motion.div
        className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden glass-card border-4 border-card/50 shadow-glow"
        whileHover={{ scale: 1.05 }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {/* Placeholder Memoji-style avatar - gradient circle with emoji */}
        <div className="w-full h-full bg-gradient-to-br from-pastel-peach to-pastel-pink flex items-center justify-center">
          <span className="text-6xl md:text-7xl">👨‍💻</span>
        </div>
      </motion.div>
      
      {/* Decorative rings */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-pastel-lilac/30 scale-125"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border border-pastel-blue/20 scale-150"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

export default Avatar3D;
