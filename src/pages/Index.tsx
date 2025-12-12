import { motion } from "framer-motion";
import LiquidBackground from "@/components/LiquidBackground";
import Avatar3D from "@/components/Avatar3D";
import AskMeInput from "@/components/AskMeInput";
import NavigationButtons from "@/components/NavigationButtons";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      <LiquidBackground />
      
      <div className="relative z-10 flex flex-col items-center gap-8 md:gap-10 max-w-4xl mx-auto">
        {/* Avatar */}
        <Avatar3D />
        
        {/* Title Section */}
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Hey, I'm Raphael{" "}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
            >
              👋
            </motion.span>
          </h1>
          <p className="text-xl md:text-2xl font-medium bg-gradient-to-r from-primary via-pastel-pink to-pastel-blue bg-clip-text text-transparent">
            AI Portfolio
          </p>
        </motion.div>
        
        {/* Subtitle */}
        <motion.p
          className="text-muted-foreground text-center max-w-md text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Full-stack developer passionate about AI, design, and creating beautiful digital experiences.
        </motion.p>
        
        {/* Ask Me Input */}
        <AskMeInput />
        
        {/* Navigation Buttons */}
        <div className="mt-4 md:mt-8">
          <NavigationButtons />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
