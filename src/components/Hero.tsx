import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from '../assets/profile.jpg';

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="snap-align-start h-screen w-full flex items-center justify-center px-6 sm:px-12 lg:px-24 relative overflow-hidden bg-primary">
      {/* Background ambient light */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-card opacity-50 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full bg-secondary opacity-80 blur-[80px]"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-sm">
            Emerson <br className="hidden lg:block" /> Viçosa de Lima
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300">
            Analista de Dados <span className="text-accent hidden sm:inline px-2">|</span> <br className="sm:hidden" />
            <span className="text-gray-400">Desenvolvedor Full-Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Estudante de Ciência da Computação e autodidata, entusiasta por transformar processos complexos em fluxos otimizados através de IA generativa, automação e análise de dados.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">
            <button
              onClick={scrollToNext}
              className="group flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10"
            >
              Ver Projetos
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <a
              href="https://github.com/Emerson018"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-accent/50 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-accent transition-all duration-300 border border-border hover:border-gray-400 shadow-lg"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/emerson-vi%C3%A7osa-de-lima-1b51041ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-accent/50 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-accent transition-all duration-300 border border-border hover:border-gray-400 shadow-lg"
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right: Profile Photo & Interactive Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-card rounded-[3rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-70"></div>
            
            {/* Main Interactive Container */}
            <div 
              className="absolute inset-0 bg-secondary rounded-[3rem] border border-border overflow-hidden flex items-center justify-center shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:translate-x-2"
            >
              <img
                src={profilePic}
                alt="Emerson Viçosa de Lima"
                className="w-full h-full object-cover rounded-[3rem]"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
