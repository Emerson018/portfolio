import { useState, useRef, useEffect } from 'react';
import { motion as motionFramer, AnimatePresence } from 'framer-motion';
import { Smartphone, Bot, ArrowUpRight, Play, X, Database } from 'lucide-react';
import nexstyleLogo from '../assets/nexstyle_logo.png';
import nexstyleVideo from '../assets/videos/nexstyle_apresentacao.mp4';
import financyVideo from '../assets/videos/financy_apresentacao.mp4';
import Footer from './Footer';

export default function SoftwareDev() {
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (activeVideo && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.warn("Video playback was prevented:", err);
      });
    }
  }, [activeVideo]);

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
    <section className="snap-align-start min-h-screen lg:h-screen w-full flex flex-col justify-between px-6 sm:px-12 lg:px-24 relative overflow-visible lg:overflow-hidden bg-card border-t border-border/40 py-12 lg:py-16">
      
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
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 items-stretch z-10 my-8 lg:mt-16 lg:mb-8 flex-1 overflow-y-auto py-1 pr-1">
        
        {/* Card 1: NexStyle */}
        <motionFramer.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          custom={0}
          variants={slideInVariants}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          onClick={() => setActiveVideo({ url: nexstyleVideo, title: 'NexStyle - Barbearia & Salão' })}
          className="p-6 bg-secondary/85 border border-border/40 rounded-3xl flex flex-col justify-between h-[390px] shadow-2xl relative group cursor-pointer animate-fade-in"
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 rounded">
                Flutter + Stripe
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-1 group-hover:text-amber-400 transition-colors">
                NexStyle
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Aplicativo mobile de barbearia e salão de beleza desenvolvido em Flutter, com agendamentos de serviços, escolha de profissionais e pagamentos integrados via Stripe.
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

        {/* Card 2: Financy App */}
        <motionFramer.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          custom={0.1}
          variants={slideInVariants}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          onClick={() => setActiveVideo({ url: financyVideo, title: 'Financy App - Controle Financeiro' })}
          className="p-6 bg-secondary/85 border border-border/40 rounded-3xl flex flex-col justify-between h-[390px] shadow-2xl relative group cursor-pointer animate-fade-in"
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded">
                React Native + Flutter
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-1 group-hover:text-emerald-400 transition-colors">
                Financy App
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Aplicativo de finanças pessoais desenvolvido com React Native e Flutter para controle de entradas e saídas. Apresenta informações como saldo, extrato de transações e gráficos de despesas.
              </p>
            </div>
          </div>

          {/* Visual Mockup - Financy App Phone (Dark Emerald) */}
          <div className="flex justify-center items-center h-40 overflow-hidden relative mt-4 select-none">
            <div className="w-28 h-40 bg-[#0C100E] rounded-t-2xl border border-emerald-500/20 p-2 flex flex-col gap-2 shadow-inner transform translate-y-3 transition-transform group-hover:translate-y-1 duration-300 relative">
              {/* Speaker & Sensor */}
              <div className="flex justify-center items-center gap-1">
                <div className="w-6 h-0.5 bg-zinc-800 rounded-full"></div>
                <div className="w-0.5 h-0.5 bg-zinc-800 rounded-full"></div>
              </div>
              
              {/* Mini App Header */}
              <div className="flex justify-between items-center px-1 mt-1 text-[5px] text-zinc-400">
                <span>Olá, Emerson</span>
                <span className="p-0.5 bg-emerald-500/20 text-emerald-400 rounded-full">💰</span>
              </div>

              {/* Balance Card */}
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded p-1.5 flex flex-col gap-0.5">
                <span className="text-[4px] text-zinc-500 uppercase font-mono">Saldo Disponível</span>
                <span className="text-[7.5px] font-bold text-emerald-400">R$ 4.250,00</span>
              </div>

              {/* Inflow & Outflow tabs */}
              <div className="flex gap-1 justify-center">
                <div className="flex-1 bg-zinc-900 border border-zinc-800 text-[4px] text-zinc-400 p-1 rounded flex items-center justify-between">
                  <span>Receitas</span>
                  <span className="text-emerald-500">▲</span>
                </div>
                <div className="flex-1 bg-zinc-900 border border-zinc-800 text-[4px] text-zinc-400 p-1 rounded flex items-center justify-between">
                  <span>Despesas</span>
                  <span className="text-red-500">▼</span>
                </div>
              </div>

              {/* Recent Transactions List */}
              <div className="flex flex-col gap-1 overflow-hidden">
                <div className="flex justify-between items-center text-[4.5px] border-b border-zinc-900 pb-0.5">
                  <span className="text-zinc-300 font-medium">Salário</span>
                  <span className="text-emerald-400 font-semibold">+ R$ 5.000</span>
                </div>
                <div className="flex justify-between items-center text-[4.5px] border-b border-zinc-900 pb-0.5">
                  <span className="text-zinc-300 font-medium">Supermercado</span>
                  <span className="text-red-400 font-semibold">- R$ 350</span>
                </div>
              </div>

              {/* Hover Play Button Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1 rounded-t-2xl">
                <div className="p-2 bg-emerald-500 rounded-full text-black shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-4 h-4 fill-black text-black ml-0.5" />
                </div>
                <span className="text-[8px] font-bold text-white uppercase tracking-wider">
                  Assistir Vídeo
                </span>
              </div>

            </div>
          </div>
        </motionFramer.div>

        {/* Card 3: Query Builder */}
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
                <Database className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded">
                Amazon Quick + SQL
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-1 group-hover:text-purple-400 transition-colors">
                Query Builder
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Automação de chatbot que integra inteligência artificial generativa no Amazon Quick para converter linguagem natural em queries SQL, com a finalide de gerar relatórios no Tasy.
              </p>
            </div>
          </div>

          {/* Visual Mockup - Query Builder (AI + SQL + Tasy) */}
          <div className="flex justify-center items-center h-40 overflow-hidden relative mt-4 select-none">
            <div className="w-36 h-28 bg-[#0B0B0F] rounded-t-xl border border-indigo-500/20 p-2 flex flex-col justify-between shadow-inner transform translate-y-3 transition-transform group-hover:translate-y-1 duration-300">
              {/* Header: AI Prompt input */}
              <div className="bg-[#0D0C22] border border-indigo-500/10 rounded p-1 flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse"></div>
                <span className="text-[4.5px] text-gray-400 font-mono font-medium truncate">IA: "Gerar relatório Tasy"</span>
              </div>
              
              {/* Mid: Code Editor with SQL Output */}
              <div className="bg-[#050508] border border-[#272835] rounded p-1.5 font-mono text-[4.5px] text-indigo-300 leading-normal flex-1 my-1">
                <span className="text-gray-500">// SQL Gerado para o Tasy:</span>
                <br />
                <span className="text-emerald-400">SELECT</span> paciente_id, data_alta
                <br />
                <span className="text-emerald-400">FROM</span> tasy.atendimentos
                <br />
                <span className="text-emerald-400">WHERE</span> status = <span className="text-purple-400">'ativo'</span>;
              </div>

              {/* Footer: Amazon Quick Status */}
              <div className="flex justify-between items-center text-[4px] text-gray-500 pt-0.5 border-t border-[#272835]">
                <span className="text-indigo-400 font-bold font-mono uppercase tracking-wider">Amazon Quick Q</span>
                <span>Gerado com Sucesso</span>
              </div>
            </div>
          </div>
        </motionFramer.div>

        {/* Card 4: Chatbot WhatsApp */}
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
                Docker + n8n
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-1 group-hover:text-emerald-400 transition-colors">
                Chatbot WhatsApp
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Chatbot corporativo integrado para atendimento via WhatsApp, orquestrado e automatizado de ponta a ponta com n8n, hospedado de forma isolada e segura em containers Docker.
              </p>
            </div>
          </div>

          {/* Visual Mockup - WhatsApp Chatbot (Docker + n8n) */}
          <div className="flex justify-center items-center h-40 overflow-hidden relative mt-4 select-none">
            <div className="w-28 h-40 bg-[#0C100E] rounded-t-2xl border border-emerald-500/20 p-2 flex flex-col gap-2 shadow-inner transform translate-y-3 transition-transform group-hover:translate-y-1 duration-300 relative">
              {/* Speaker & Sensor */}
              <div className="flex justify-center items-center gap-1">
                <div className="w-6 h-0.5 bg-zinc-800 rounded-full"></div>
                <div className="w-0.5 h-0.5 bg-zinc-800 rounded-full"></div>
              </div>
              
              {/* Mini App Header (WhatsApp style) */}
              <div className="flex justify-between items-center px-1 mt-1 text-[5px] text-zinc-400 border-b border-zinc-900 pb-1">
                <span className="font-bold text-white text-[4.5px]">💬 Chatbot</span>
                <span className="text-[3.5px] px-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded font-mono">Docker</span>
              </div>

              {/* Chat Feed */}
              <div className="flex flex-col gap-1.5 overflow-hidden flex-1 justify-end pb-1">
                {/* User Bubble */}
                <div className="bg-[#151538] text-white text-[4px] p-1 rounded-lg self-start max-w-[85%] font-medium">
                  "Status do meu chamado"
                </div>
                {/* Bot Bubble */}
                <div className="bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-[4px] p-1 rounded-lg self-end max-w-[85%] leading-normal">
                  <span className="font-mono font-bold text-[4px] text-white block mb-0.5">n8n:</span>
                  "Chamado #1042 está em andamento no suporte."
                </div>
              </div>
            </div>
          </div>
        </motionFramer.div>

      </div>

      {/* Footer (Rodapé) */}
      <Footer />

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motionFramer.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0B0B0F]/90 flex items-center justify-center p-4 md:p-6 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
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
                  <div className={`p-2 rounded-xl ${
                    activeVideo.title.includes('Financy') 
                      ? 'bg-emerald-500/10 text-emerald-400' 
                      : 'bg-amber-500/10 text-amber-400'
                  }`}>
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-sm sm:text-base">
                      {activeVideo.title}
                    </h4>
                    <p className="text-[10px] text-gray-400">Vídeo de Apresentação do Aplicativo</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
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
                  src={activeVideo.url}
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
