import { useState, useRef, useEffect } from 'react';
import { motion as motionFramer, AnimatePresence } from 'framer-motion';
import { Smartphone, Table, Bot, Mic, Mail, ArrowUpRight, Play, X } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import nexstyleLogo from '../assets/nexstyle_logo.png';
import nexstyleVideo from '../assets/videos/nexstyle_apresentacao.mp4';

export default function SoftwareDev() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.warn("Video playback was prevented:", err);
      });
    }
  }, [showVideo]);

  const slideInVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: (customDelay: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: customDelay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="snap-align-start h-screen w-full flex flex-col justify-between px-6 sm:px-12 lg:px-24 relative overflow-y-auto lg:overflow-hidden bg-card border-t border-border/40 py-12 lg:py-16">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-primary opacity-20 blur-[130px]"></div>
        <div className="absolute bottom-[20%] left-[-15%] w-[300px] h-[300px] rounded-full bg-secondary opacity-40 blur-[110px]"></div>
      </div>

      {/* Header Container */}
      <motionFramer.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl w-full mx-auto text-center lg:text-left z-10"
      >
        <span className="text-sm font-semibold tracking-wider text-white bg-indigo-500/25 border border-indigo-400/20 px-3 py-1 rounded-full uppercase">
          Dev Web & Mobile
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-3">
          Engenharia de Software & Aplicativos
        </h2>
      </motionFramer.div>

      {/* Projects Grid */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center z-10 my-8 lg:my-0">
        
        {/* Card 1: NexStyle */}
        <motionFramer.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          custom={0}
          variants={slideInVariants}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          onClick={() => setShowVideo(true)}
          className="p-6 bg-secondary/85 border border-border/40 rounded-3xl flex flex-col justify-between h-[390px] shadow-2xl relative group cursor-pointer animate-fade-in"
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 rounded">
                React Native + Expo
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-1 group-hover:text-amber-400 transition-colors">
                NexStyle
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Aplicativo mobile premium de barbearia e salão de beleza. Oferece agendamentos, escolha de profissionais, catálogo de serviços e pagamentos integrados.
              </p>
            </div>
          </div>

          {/* Visual Mockup - NexStyle App Phone (Dark Gold) */}
          <div className="flex justify-center items-center h-40 overflow-hidden relative mt-4 select-none">
            <div className="w-28 h-40 bg-[#121214] rounded-t-2xl border border-amber-500/20 p-2 flex flex-col gap-2 shadow-inner transform translate-y-3 transition-transform group-hover:translate-y-1 duration-300 relative">
              {/* Speaker & Sensor */}
              <div className="flex justify-center items-center gap-1">
                <div className="w-6 h-0.5 bg-zinc-800 rounded-full"></div>
                <div className="w-0.5 h-0.5 bg-zinc-800 rounded-full"></div>
              </div>
              
              {/* Logo Area */}
              <div className="flex justify-center items-center py-1 mt-1">
                <img 
                  src={nexstyleLogo} 
                  alt="NexStyle Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>

              {/* Service Selection buttons */}
              <div className="flex gap-1 justify-center mt-1">
                <div className="flex-1 bg-amber-500/10 border border-amber-500/30 text-[5px] text-amber-400 p-1 rounded font-bold text-center">
                  Barbearia
                </div>
                <div className="flex-1 bg-zinc-800 border border-zinc-700 text-[5px] text-zinc-400 p-1 rounded font-bold text-center">
                  Salão
                </div>
              </div>

              {/* Action Banner */}
              <div className="mt-1 bg-zinc-900 border border-zinc-800 rounded p-1 text-[5px] text-zinc-400 text-center flex flex-col items-center justify-center gap-0.5">
                <span className="font-bold text-white text-[5.5px]">Agende seu Horário</span>
                <span className="text-[4px] text-zinc-500">Corte & Estilo com especialistas</span>
              </div>

              {/* Hover Play Button Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1 rounded-t-2xl">
                <div className="p-2 bg-amber-500 rounded-full text-black shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-4 h-4 fill-black text-black ml-0.5" />
                </div>
                <span className="text-[8px] font-bold text-white uppercase tracking-wider">
                  Assistir Vídeo
                </span>
              </div>

            </div>
          </div>
        </motionFramer.div>

        {/* Card 2: Dashboard Interativo CRUD */}
        <motionFramer.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          custom={0.15}
          variants={slideInVariants}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="p-6 bg-secondary/85 border border-border/40 rounded-3xl flex flex-col justify-between h-[390px] shadow-2xl relative group"
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400">
                <Table className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded">
                DRF + React
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-1 group-hover:text-purple-400 transition-colors">
                Dashboard CRUD
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Sistema seguro de gestão cadastral administrativa. Integra Django Rest Framework para validação de dados críticos no backend e React para a interface do dashboard.
              </p>
            </div>
          </div>

          {/* Visual Mockup - White Browser */}
          <div className="flex justify-center items-center h-40 overflow-hidden relative mt-4 select-none">
            <div className="w-36 h-28 bg-white rounded-t-xl border border-gray-300/40 flex flex-col shadow-inner transform translate-y-3 transition-transform group-hover:translate-y-1 duration-300">
              {/* Browser Header */}
              <div className="bg-gray-100 px-2 py-1 flex items-center gap-1 border-b border-gray-200">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <div className="w-20 h-2.5 bg-white border border-gray-200 rounded flex items-center px-1 ml-2 text-[5px] text-gray-400">
                  localhost:3000
                </div>
              </div>
              {/* Content Panel */}
              <div className="flex flex-1 overflow-hidden p-1.5 gap-1.5">
                {/* Mini Sidebar */}
                <div className="w-10 bg-gray-50 border-r border-gray-200 flex flex-col gap-1 p-0.5">
                  <div className="h-2 bg-indigo-500/10 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                </div>
                {/* Main Table */}
                <div className="flex-1 flex flex-col gap-1">
                  <div className="text-[6px] font-bold text-gray-700">Tabela de Usuários</div>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <th className="text-[4px] text-gray-500 p-0.5 font-bold">Nome</th>
                        <th className="text-[4px] text-gray-500 p-0.5 font-bold">Status</th>
                        <th className="text-[4px] text-gray-500 p-0.5 font-bold">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="text-[4px] text-gray-800 p-0.5">Administrador</td>
                        <td className="text-[4px] text-green-600 p-0.5 font-semibold">Ativo</td>
                        <td className="text-[3px] text-blue-500 p-0.5 font-bold">Editar</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="text-[4px] text-gray-800 p-0.5">Suporte TI</td>
                        <td className="text-[4px] text-yellow-600 p-0.5 font-semibold">Pendente</td>
                        <td className="text-[3px] text-blue-500 p-0.5 font-bold">Editar</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motionFramer.div>

        {/* Card 3: Automação & IA */}
        <motionFramer.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          custom={0.3}
          variants={slideInVariants}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="p-6 bg-secondary/85 border border-border/40 rounded-3xl flex flex-col justify-between h-[390px] shadow-2xl relative group"
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded">
                OpenAI + SQL
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-1 group-hover:text-emerald-400 transition-colors">
                Automação & IA
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Desenvolvimento de fluxos integrados e inteligência artificial de orquestração de áudio, convertendo comandos de voz diretamente em consultas estruturadas de banco de dados.
              </p>
            </div>
          </div>

          {/* Visual Mockup - White IA Card */}
          <div className="flex justify-center items-center h-40 overflow-hidden relative mt-4 select-none">
            <div className="w-36 h-28 bg-white rounded-t-xl border border-gray-300/40 p-2 flex flex-col justify-between shadow-inner transform translate-y-3 transition-transform group-hover:translate-y-1 duration-300">
              {/* Mic Icon & Waveform */}
              <div className="flex items-center gap-2 border-b border-gray-100 pb-1.5">
                <div className="p-1 bg-red-50 text-red-500 rounded-full border border-red-200">
                  <Mic className="w-2.5 h-2.5 animate-pulse" />
                </div>
                {/* Voice waveform mock */}
                <div className="flex gap-0.5 items-center">
                  <div className="w-0.5 h-1.5 bg-gray-300 rounded-full"></div>
                  <div className="w-0.5 h-3 bg-indigo-500 rounded-full"></div>
                  <div className="w-0.5 h-4.5 bg-indigo-500 rounded-full"></div>
                  <div className="w-0.5 h-2 bg-indigo-500 rounded-full"></div>
                  <div className="w-0.5 h-3 bg-indigo-500 rounded-full"></div>
                  <div className="w-0.5 h-1 bg-gray-300 rounded-full"></div>
                </div>
                <span className="text-[5px] text-gray-400 ml-auto">Gravando...</span>
              </div>
              {/* Conversation bubbles */}
              <div className="flex flex-col gap-1.5 flex-1 justify-center mt-1">
                {/* User Input Bubble */}
                <div className="bg-gray-100 text-gray-700 text-[5px] p-1 rounded-lg self-start max-w-[80%] font-medium">
                  "Mostre as consultas críticas"
                </div>
                {/* AI generated SQL Bubble */}
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-[4.5px] p-1 rounded-lg self-end font-mono max-w-[90%] leading-normal">
                  SELECT * FROM incidentes WHERE severidade = 'alta';
                </div>
              </div>
            </div>
          </div>
        </motionFramer.div>

      </div>

      {/* Footer (Rodapé) */}
      <motionFramer.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl w-full mx-auto border-t border-border/40 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 z-10"
      >
        <span>&copy; {new Date().getFullYear()} Emerson Viçosa de Lima. Todos os direitos reservados.</span>
        
        <div className="flex items-center gap-6">
          <a
            href="mailto:emerson.vicosa.lima@gmail.com"
            className="flex items-center gap-1.5 hover:text-white transition-colors group"
          >
            <Mail className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            <span>emerson.vicosa.lima@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/emerson-vicosa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors group"
          >
            <FaLinkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            <span>LinkedIn</span>
          </a>
        </div>
      </motionFramer.div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {showVideo && (
          <motionFramer.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0B0B0F]/90 flex items-center justify-center p-4 md:p-6 backdrop-blur-md"
            onClick={() => setShowVideo(false)}
          >
            <motionFramer.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-[#0D0C22] rounded-3xl overflow-hidden border border-[#272835] shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-[#272835] bg-[#0B0B0F]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-sm sm:text-base">
                      NexStyle - Barbearia & Salão
                    </h4>
                    <p className="text-[10px] text-gray-400">Vídeo de Apresentação do Aplicativo</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowVideo(false)}
                  className="p-2 bg-[#0D0C22] hover:bg-red-500/10 hover:text-red-400 border border-[#272835] text-white rounded-full transition-all duration-300 flex items-center justify-center"
                  aria-label="Fechar vídeo"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Container (Flexible Height) */}
              <div className="relative w-full bg-black flex items-center justify-center overflow-hidden">
                <video
                  ref={videoRef}
                  src={nexstyleVideo}
                  className="w-full h-auto max-h-[72vh] object-contain"
                  style={{
                    transform: 'translate3d(0,0,0)',
                    WebkitTransform: 'translate3d(0,0,0)',
                    imageRendering: 'auto',
                    backfaceVisibility: 'hidden',
                  }}
                  autoPlay
                  controls
                  playsInline
                  preload="auto"
                >
                  Seu navegador não suporta a reprodução de vídeos.
                </video>
              </div>
            </motionFramer.div>
          </motionFramer.div>
        )}
      </AnimatePresence>

    </section>
  );
}
