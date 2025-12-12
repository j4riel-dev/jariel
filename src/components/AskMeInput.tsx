import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";

const AskMeInput = () => {
  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <div className="relative group">
        {/* Glow effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pastel-pink via-pastel-lilac to-pastel-blue rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
        
        {/* Input container */}
        <div className="relative flex items-center gap-3 px-5 py-4 bg-card/90 backdrop-blur-xl rounded-2xl border border-border/50 shadow-card cursor-pointer hover:border-primary/30 transition-colors duration-300">
          <Sparkles className="w-5 h-5 text-primary animate-pulse-soft" />
          <span className="flex-1 text-muted-foreground text-sm md:text-base">
            Ask me anything...
          </span>
          <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary/10 text-primary">
            <Search className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      {/* Hint text */}
      <motion.p
        className="text-center text-xs text-muted-foreground/60 mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Powered by AI • Ask about my skills, projects, or experience
      </motion.p>
    </motion.div>
  );
};

export default AskMeInput;
