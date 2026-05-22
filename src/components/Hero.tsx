import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import profilePic from '../assets/profile.jpg';
import profileVid from '../assets/videos/eu_video.mp4';

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      // Force play when the component becomes active to avoid browser-stalled states
      videoRef.current.play().catch(err => {
        console.warn("Video playback was prevented:", err);
      });
    }
  }, [showVideo]);

  const scrollToNext = () => {
    // Scroll 1 view height down
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowVideo(false);
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
            Desenvolvedor Full-Stack <span className="text-accent hidden sm:inline px-2">|</span> <br className="sm:hidden" />
            <span className="text-gray-400">Analista de Dados</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Estudante de Ciência da Computação apaixonado por otimizar processos através de código e visualização de dados.
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
              onClick={!showVideo ? handlePlayVideo : undefined}
              className={`absolute inset-0 bg-secondary rounded-[3rem] border border-border overflow-hidden flex items-center justify-center shadow-2xl transition-all duration-500 ${
                !showVideo ? 'cursor-pointer hover:-translate-y-2 hover:translate-x-2' : ''
              }`}
            >
              <AnimatePresence mode="wait">
                {!showVideo ? (
                  <motion.div
                    key="photo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full relative"
                  >
                    <img 
                      src={profilePic} 
                      alt="Emerson Viçosa de Lima" 
                      className="w-full h-full object-cover rounded-[3rem]"
                    />
                    
                    {/* Hover indicator overlay */}
                    <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 rounded-[3rem]">
                      <div className="p-4 bg-white/20 backdrop-blur-md rounded-full border border-white/40 text-white animate-pulse">
                        <Play className="w-8 h-8 fill-white" />
                      </div>
                      <span className="text-white text-xs font-bold uppercase tracking-wider text-center px-4">
                        Assistir Apresentação
                      </span>
                    </div>

                    {/* Corner play badge */}
                    <div className="absolute bottom-4 right-4 bg-primary/95 border border-border p-2.5 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-4 h-4 fill-white" />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full relative bg-black"
                  >
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover rounded-[3rem]"
                      autoPlay
                      muted
                      playsInline
                      controls
                    >
                      <source src={profileVid} type="video/mp4" />
                      Seu navegador não suporta reprodução de vídeos.
                    </video>
                    
                    {/* Exit button */}
                    <button
                      onClick={handleCloseVideo}
                      className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black/90 border border-white/20 hover:border-white/50 text-white rounded-full transition-all duration-300 flex items-center justify-center shadow-lg"
                      title="Voltar para foto"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
