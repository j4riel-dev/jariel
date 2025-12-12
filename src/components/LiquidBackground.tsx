import { motion } from "framer-motion";

const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      
      {/* Animated blobs */}
      <motion.div
        className="absolute top-0 -left-4 w-72 h-72 md:w-96 md:h-96 bg-pastel-pink rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-0 -right-4 w-72 h-72 md:w-96 md:h-96 bg-pastel-blue rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <motion.div
        className="absolute -bottom-8 left-20 w-72 h-72 md:w-96 md:h-96 bg-pastel-lilac rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        animate={{
          x: [0, 70, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 md:w-80 md:h-80 bg-pastel-green rounded-full mix-blend-multiply filter blur-3xl opacity-60"
        animate={{
          x: [0, -40, 0],
          y: [0, -60, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[500px] md:h-[500px] bg-pastel-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Subtle noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
    </div>
  );
};

export default LiquidBackground;
