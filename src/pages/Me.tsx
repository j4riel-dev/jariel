import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Music, Code, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import LiquidBackground from "@/components/LiquidBackground";

const Me = () => {
  const interests = [
    { label: "Música Pop", icon: <Music className="w-4 h-4" /> },
    { label: "Programação", icon: <Code className="w-4 h-4" /> },
    { label: "Aprendizado", icon: <Sparkles className="w-4 h-4" /> },
  ];

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

      <div className="relative z-10 max-w-4xl w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Jariel Alves
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Arapiraca, Alagoas • 17 anos</span>
          </div>
        </motion.div>

        {/* Bio Card */}
        <motion.div
          className="neo-card p-6 md:p-8 rounded-3xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed text-lg">
              Meu nome é Jariel Alves, tenho 17 anos e sou natural de Arapiraca, em Alagoas. 
              Sou uma pessoa curiosa, que gosta de aprender coisas novas e de se desafiar constantemente. 
              No meu tempo livre, gosto bastante de escutar música, principalmente Pop.
            </p>
            
            <p className="text-foreground/80 leading-relaxed text-lg">
              Atualmente, a programação vem ganhando um espaço muito importante na minha vida. 
              Trabalho com HTML, CSS e JavaScript, áreas nas quais estou em constante aprendizado e evolução. 
              Através da programação, venho desenvolvendo habilidades como lógica, criatividade e resolução de problemas, 
              além de descobrir novas possibilidades para o meu futuro profissional. 
              Estou no início dessa jornada, mas bastante motivado a crescer e aprimorar meus conhecimentos na área de tecnologia.
            </p>
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {interests.map((interest, index) => (
            <motion.div
              key={interest.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full neo-button text-foreground/70"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              {interest.icon}
              <span className="text-sm font-medium">{interest.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Me;
