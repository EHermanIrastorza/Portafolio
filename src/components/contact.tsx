"use client"
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.footer
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 text-center mt-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-600">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:emma225h@gmail.com" className="hover:text-primary">
            emma225h@gmail.com
          </a>
        </p>
        <p>
          <strong>Cel:</strong>{""}
          <a href="tel:+543537677021" className="hover:text-primary">
            +54 9 3537677021
          </a>
        </p>
        <p>
          <strong>Dirección:</strong> Argentina - Córdoba/Buenos Aires
        </p>
      </div>
    </motion.footer>
  );
};

export default Contact;