import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import portalBiVid from '../assets/videos/portfolio_portal_bi.mp4';

interface WebProject {
  id: string;
  titulo: string;
  descricao: string;
  tags: string[];
  videoSrc: string;
  liveUrl?: string;
  codeUrl: string;
}

export default function WebProjectsShowcase() {
  const projects: WebProject[] = [
    {
      id: 'dashboard-hospitalar',
      titulo: 'Dashboard de Gestão Hospitalar',
      descricao: 'Sistema completo de inteligência operacional desenvolvido para otimização de fluxos em ambientes hospitalares. Resolve o problema de fragmentação de logs de atendimento e monitoramento de KPIs clínicos em tempo real, fornecendo relatórios dinâmicos e exportação rápida.',
      tags: ['React', 'Django Rest Framework', 'Tailwind CSS', 'PostgreSQL'],
      videoSrc: portalBiVid,
      codeUrl: 'https://github.com/Emerson018/Django_n_power_bi',
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section className="snap-align-start min-h-screen lg:h-screen w-full flex flex-col justify-between px-6 sm:px-12 lg:px-24 relative overflow-visible lg:overflow-hidden bg-[#0D0C22] border-t border-[#272835] py-12 lg:py-16">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-indigo-500/10 opacity-20 blur-[130px]"></div>
        <div className="absolute bottom-[20%] right-[-15%] w-[300px] h-[300px] rounded-full bg-[#151550]/20 opacity-40 blur-[110px]"></div>
      </div>

      {/* Header Container */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl w-full mx-auto text-center lg:text-left z-10"
      >
        <span className="text-sm font-semibold tracking-wider text-white bg-indigo-500/25 border border-indigo-400/20 px-3 py-1 rounded-full uppercase">
          Showcase Web
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-3 leading-tight">
          Aplicações & Sistemas Web
        </h2>
      </motion.div>

      {/* Main Grid: 50/50 desktop, stacked mobile */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10 flex-1 my-8 overflow-visible lg:overflow-hidden">
        
        {/* Column 1: Mac/Chrome Browser Frame */}
        <motion.div
          key={`visual-${activeProject.id}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full flex justify-center items-center"
        >
          <div className="w-full max-w-xl aspect-video bg-[#0B0B0F] border border-[#272835] rounded-2xl overflow-hidden flex flex-col shadow-2xl">
            {/* Browser Header Bar */}
            <div className="px-4 py-3 border-b border-[#272835] bg-[#070614] flex items-center justify-between">
              {/* Three dots (Mac Style) */}
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-90"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-90"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-90"></div>
              </div>
              {/* Mock Address Bar */}
              <div className="w-[60%] sm:w-[70%] h-6 bg-[#0D0C22] border border-[#272835] rounded-md text-[10px] text-gray-500 flex items-center px-3 truncate select-none">
                https://{activeProject.id}.emersonvicosa.dev
              </div>
              <div className="w-10"></div> {/* Spacer */}
            </div>

            {/* Browser Content Area */}
            <div className="flex-1 w-full bg-[#0D0C22] relative flex items-center justify-center overflow-hidden">
              {activeProject.videoSrc ? (
                <video
                  src={activeProject.videoSrc}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                /* Fallback space for video insertion */
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#070614]/50 border border-dashed border-[#272835] m-4 rounded-xl">
                  <span className="text-xs text-gray-500 font-mono">
                    [Espaço para tag &lt;video&gt; do seu projeto]
                  </span>
                  <span className="text-[10px] text-gray-600 font-mono mt-2">
                    Defina o caminho em: activeProject.videoSrc
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Column 2: Information Column */}
        <motion.div
          key={`info-${activeProject.id}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6 text-left"
        >
          {/* Project Navigation Tabs */}
          {projects.length > 1 && (
            <div className="flex gap-2">
              {projects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                    activeIndex === idx
                      ? 'bg-white text-[#0D0C22] border-white shadow-md'
                      : 'bg-transparent text-gray-400 border-[#272835] hover:text-white hover:border-gray-500'
                  }`}
                >
                  Projeto {idx + 1}
                </button>
              ))}
            </div>
          )}

          <div>
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {activeProject.titulo}
            </h3>
            
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mt-3">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
            {activeProject.descricao}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            {/* Live Site Link */}
            {activeProject.liveUrl && (
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#151550] hover:bg-[#1a1a66] text-white text-sm font-semibold rounded-xl hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-black/20"
              >
                Visitar Site Ao Vivo
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {/* Code Link */}
            <a
              href={activeProject.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-white/5 text-white text-sm font-semibold rounded-xl border border-[#44444A] hover:border-white transition-all duration-300"
            >
              <FaGithub className="w-4 h-4" />
              Ver Código
            </a>
          </div>
        </motion.div>

      </div>

      {/* Spacing/Footer Separator */}
      <div className="h-2 w-full lg:block hidden"></div>
    </section>
  );
}
