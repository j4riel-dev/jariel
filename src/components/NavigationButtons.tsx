import { motion } from "framer-motion";
import { User, FolderOpen, Wrench, Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  delay: number;
  gradient: string;
}

const NavButton = ({ icon, label, to, delay, gradient }: NavButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
      <Link to={to}>
        <motion.div
          className="group relative flex flex-col items-center gap-2 p-4 md:p-5 rounded-2xl neo-button cursor-pointer"
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Gradient background on hover */}
          <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${gradient}`} />
          
          {/* Icon container */}
          <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-secondary/80 group-hover:bg-card/90 transition-colors duration-300">
            <div className="text-foreground/70 group-hover:text-primary transition-colors duration-300">
              {icon}
            </div>
          </div>
          
          {/* Label */}
          <span className="relative z-10 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
            {label}
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const NavigationButtons = () => {
  const navItems = [
    {
      icon: <User className="w-6 h-6" />,
      label: "Sobre mim",
      to: "/me",
      gradient: "bg-gradient-to-br from-pastel-pink/20 to-transparent",
    },
    {
      icon: <FolderOpen className="w-6 h-6" />,
      label: "Projetos",
      to: "/projects",
      gradient: "bg-gradient-to-br from-pastel-blue/20 to-transparent",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      label: "Habilidades",
      to: "/skills",
      gradient: "bg-gradient-to-br from-pastel-green/20 to-transparent",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Contato",
      to: "/contact",
      gradient: "bg-gradient-to-br from-pastel-lilac/20 to-transparent",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {navItems.map((item, index) => (
        <NavButton
          key={item.label}
          icon={item.icon}
          label={item.label}
          to={item.to}
          delay={0.8 + index * 0.1}
          gradient={item.gradient}
        />
      ))}
    </div>
  );
};

export default NavigationButtons;
