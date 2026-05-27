import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-7xl w-full mx-auto border-t border-[#272835]/40 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 z-10 mt-auto"
    >
      <span>&copy; 2026 Emerson Viçosa de Lima. Todos os direitos reservados.</span>
      
      <div className="flex items-center gap-6">
        <a
          href="mailto:emersonvicosa@gmail.com"
          className="flex items-center gap-1.5 hover:text-white transition-colors group"
        >
          <Mail className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
          <span>emersonvicosa@gmail.com</span>
        </a>
        <a
          href="https://www.linkedin.com/in/emerson-vi%C3%A7osa-de-lima-1b51041ba/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-white transition-colors group"
        >
          <FaLinkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
          <span>LinkedIn</span>
        </a>
      </div>
    </motion.div>
  );
}
