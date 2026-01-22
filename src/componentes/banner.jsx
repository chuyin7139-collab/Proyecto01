import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black to-gray-900 text-white">
      
      {/* Animación 1: Entrada del texto */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Bienvenido a tu app preferida
      </motion.h1>

      {/* Animación 2: Botón con escala */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="px-6 py-3 bg-red-600 rounded-xl text-xl hover:bg-red-700"
      >
        Ver servicios
      </motion.button>

    </section>
  );
};

export default Banner;