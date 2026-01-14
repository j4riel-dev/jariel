import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import LiquidBackground from "@/components/LiquidBackground";

const Projects = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <LiquidBackground />

      {/* Back button */}
      <motion.div
        className="absolute top-6 left-6 z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link to="/">
          <motion.div
            className="flex items-center gap-2 px-4 py-2 rounded-full neo-button text-foreground/70 hover:text-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Voltar</span>
          </motion.div>
        </Link>
      </motion.div>

      <div className="relative z-10 max-w-2xl w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Projetos
          </h1>
          <p className="text-muted-foreground">
            Confira meus projetos e contribuições
          </p>
        </motion.div>

        {/* GitHub Card */}
        <motion.a
          href="https://github.com/j4riel-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="neo-card p-8 md:p-10 rounded-3xl cursor-pointer group"
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col items-center text-center">
              {/* GitHub Icon */}
              <div className="w-20 h-20 rounded-2xl bg-secondary/80 group-hover:bg-primary/10 flex items-center justify-center mb-6 transition-colors duration-300">
                <Github className="w-10 h-10 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-foreground mb-2">
                GitHub
              </h2>

              {/* Username */}
              <p className="text-primary font-medium mb-4">
                @j4riel-dev
              </p>

              {/* Description */}
              <p className="text-foreground/70 mb-6">
                Explore meus repositórios, projetos pessoais e contribuições para a comunidade open source.
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-primary font-medium">
                <span>Ver perfil</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        </motion.a>
      </div>
    </div>
  );
};

export default Projects;
