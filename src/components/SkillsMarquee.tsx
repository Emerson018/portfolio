import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface AutomationSimulatorProps {
  getIcon: (name: string) => React.ReactNode;
}

function AutomationSimulator({ getIcon }: AutomationSimulatorProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 5 ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const getLogMessage = (step: number) => {
    switch (step) {
      case 1:
        return "[GATILHO] Chamado recebido no FreshService e dados registrados na planilha Excel.";
      case 2:
        return "[INTEGRAÇÃO] O webhook do n8n orquestra o fluxo e dispara a execução.";
      case 3:
        return "[IA / PROCESSAMENTO] Script Python analisa a solicitação e envia dados para o Tasy e Power BI.";
      case 4:
        return "[ARMAZENAMENTO & ANALÍTICO] Tasy ERP e Power BI recebem e processam os dados simultaneamente.";
      case 5:
        return "[CONCLUÍDO] Integração concluída com sucesso. Prontuários atualizados e relatórios em tempo real.";
      default:
        return "";
    }
  };

  const getStatusLabel = (step: number, currentStep: number) => {
    if (currentStep === step) return "Executando...";
    if (currentStep > step) return "Concluído";
    return "Aguardando...";
  };

  const renderNode = (name: string, label: string, step: number, extraClasses = "") => {
    const isActive = activeStep === step || (step === 1 && activeStep === 1);
    const isCompleted = activeStep > step;
    
    return (
      <div 
        className={`w-24 sm:w-28 bg-[#0B0B0F]/90 border rounded-2xl p-2 flex flex-col items-center justify-center gap-1 transition-all duration-500 shadow-md absolute ${extraClasses} ${
          isActive 
            ? 'border-[#6366F1] shadow-[#6366F1]/10 shadow-lg scale-105 z-10' 
            : isCompleted 
              ? 'border-emerald-500/50 shadow-emerald-500/5 shadow-md z-0 opacity-80'
              : 'border-[#272835]/40 opacity-45 z-0'
        }`}
      >
        {isActive && (
          <span className="absolute top-1.5 right-1.5 flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
          </span>
        )}
        {isCompleted && (
          <span className="absolute top-1.5 right-1.5 flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
        )}

        <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center p-1 shadow-inner">
          {getIcon(name)}
        </div>
        <div className="flex flex-col items-center mt-1">
          <span className="text-[9px] font-bold text-white leading-none text-center">{label}</span>
          <span className={`text-[6.5px] font-mono mt-1 uppercase ${
            isActive 
              ? 'text-indigo-400 font-semibold' 
              : isCompleted 
                ? 'text-emerald-400' 
                : 'text-gray-500'
          }`}>
            {getStatusLabel(step, activeStep)}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col bg-[#0D0C22] border border-[#272835]/80 rounded-3xl p-4 md:p-5 shadow-xl relative overflow-hidden h-[540px] justify-between">
      {/* Simulation Header */}
      <div className="flex items-center justify-between border-b border-[#272835]/60 pb-2.5">
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-white">Simulador de Automação & IA</h4>
          <p className="text-[9px] text-gray-400 mt-0.5">Fluxo de conectividade ativo das ferramentas de BI e automação</p>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-2 py-0.5 bg-[#0B0B0F] hover:bg-[#151550]/40 border border-[#272835] hover:border-gray-500 text-[8px] font-semibold text-white rounded-md transition-all duration-300"
          >
            {isPlaying ? 'Pausar' : 'Iniciar'}
          </button>
          <button
            onClick={() => {
              setIsPlaying(false);
              setActiveStep((prev) => (prev === 5 ? 1 : prev + 1));
            }}
            className="px-2 py-0.5 bg-indigo-600 hover:bg-indigo-500 text-[8px] font-semibold text-white rounded-md transition-all duration-300"
          >
            Avançar
          </button>
        </div>
      </div>

      {/* Connection SVG Canvas + Node Cards Container */}
      <div className="relative flex-1 w-full h-[280px] my-3">
        {/* SVG Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Excel (top-left) to n8n */}
          <motion.path
            d="M 16,25 C 20,25 22,50 26,50"
            stroke={activeStep === 1 ? '#6366F1' : '#272835'}
            strokeWidth={activeStep === 1 ? '1.5' : '1'}
            fill="none"
            strokeDasharray="4,4"
            animate={activeStep === 1 ? { strokeDashoffset: [0, -16] } : {}}
            transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
            className="transition-colors duration-500"
          />
          {/* FreshService (bottom-left) to n8n */}
          <motion.path
            d="M 16,75 C 20,75 22,50 26,50"
            stroke={activeStep === 1 ? '#6366F1' : '#272835'}
            strokeWidth={activeStep === 1 ? '1.5' : '1'}
            fill="none"
            strokeDasharray="4,4"
            animate={activeStep === 1 ? { strokeDashoffset: [0, -16] } : {}}
            transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
            className="transition-colors duration-500"
          />
          {/* n8n to Python */}
          <motion.path
            d="M 40,50 L 54,50"
            stroke={activeStep === 2 ? '#6366F1' : '#272835'}
            strokeWidth={activeStep === 2 ? '1.5' : '1'}
            fill="none"
            strokeDasharray="4,4"
            animate={activeStep === 2 ? { strokeDashoffset: [0, -16] } : {}}
            transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
            className="transition-colors duration-500"
          />
          {/* Python to Tasy */}
          <motion.path
            d="M 68,50 C 74,50 78,25 84,25"
            stroke={activeStep === 3 ? '#6366F1' : '#272835'}
            strokeWidth={activeStep === 3 ? '1.5' : '1'}
            fill="none"
            strokeDasharray="4,4"
            animate={activeStep === 3 ? { strokeDashoffset: [0, -16] } : {}}
            transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
            className="transition-colors duration-500"
          />
          {/* Python to Power BI */}
          <motion.path
            d="M 68,50 C 74,50 78,75 84,75"
            stroke={activeStep === 3 ? '#6366F1' : '#272835'}
            strokeWidth={activeStep === 3 ? '1.5' : '1'}
            fill="none"
            strokeDasharray="4,4"
            animate={activeStep === 3 ? { strokeDashoffset: [0, -16] } : {}}
            transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
            className="transition-colors duration-500"
          />
        </svg>

        {/* Node Cards overlay */}
        {renderNode('Excel', 'Excel', 1, 'left-[2%] top-[25%] -translate-y-1/2')}
        {renderNode('FreshService', 'FreshService', 1, 'left-[2%] top-[75%] -translate-y-1/2')}
        {renderNode('N8N', 'n8n Workflow', 2, 'left-[33%] top-[50%] -translate-y-1/2 -translate-x-1/2')}
        {renderNode('Python', 'Python + IA', 3, 'left-[61%] top-[50%] -translate-y-1/2 -translate-x-1/2')}
        {renderNode('Tasy', 'Tasy', 4, 'right-[2%] top-[25%] -translate-y-1/2')}
        {renderNode('Power Bi', 'Power BI Report', 4, 'right-[2%] top-[75%] -translate-y-1/2')}
      </div>

      {/* Terminal log panel */}
      <div className="w-full bg-[#070614] border border-[#272835] rounded-2xl p-2.5 font-mono text-[9px] text-gray-400 shadow-inner">
        <div className="flex items-center gap-1 border-b border-[#272835]/60 pb-1.5 mb-1.5 text-gray-500">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div>
          <span className="ml-1 text-[7.5px] uppercase tracking-wide text-gray-600">terminal_output.log</span>
        </div>
        <div className="h-8 flex flex-col justify-center gap-0.5">
          <p className="text-indigo-400 font-semibold leading-normal truncate">{getLogMessage(activeStep)}</p>
          <p className="text-gray-600 text-[7px] animate-pulse">Running simulation loop... delay=4000ms</p>
        </div>
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  const line1: Skill[] = [
    {
      name: 'Amazon Quick',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
          <polygon 
            points="12,2.5 20.5,7.5 20.5,16.5 12,21.5 3.5,16.5 3.5,7.5" 
            stroke="url(#gradient-n8n)" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M 3.5 13.5 L 12 9.5 L 12 14.5 L 20.5 10.5" 
            stroke="url(#gradient-n8n)" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      )
    },
    {
      name: 'Notion',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" fill="#000000" />
        </svg>
      )
    },
    {
      name: 'Kiro',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <rect width="24" height="24" rx="5.5" fill="#813EF6" />
          <path 
            d="M12.256 2.313c2.47.005 5.116 2.008 5.898 2.962l.244.3c1.64 1.994 3.569 4.34 3.569 6.966 0 3.719-2.98 5.808-6.158 7.508-1.433.766-2.98 1.508-4.748 1.508-4.543 0-8.366-3.569-8.366-8.112 0-.706.17-1.425.342-2.15.122-.515.244-1.033.307-1.549.548-4.539 2.967-6.795 8.422-7.408a4.29 4.29 0 01.49-.026Z" 
            fill="#ffffff" 
          />
          <ellipse cx="12.2" cy="11.2" rx="0.9" ry="1.8" fill="#000000" />
          <ellipse cx="15.2" cy="11.2" rx="0.9" ry="1.8" fill="#000000" />
        </svg>
      )
    },
    {
      name: 'Antigravity',
      icon: (
        <svg viewBox="0 0 100 100" className="w-7 h-7">
          <path 
            d="M 25,85 C 25,88 28,88 32,83 C 38,76 43,53 50,53 C 57,53 62,76 68,83 C 72,88 75,88 75,85 C 75,70 60,15 50,15 C 40,15 25,70 25,85 Z" 
            fill="url(#antigravity-grad)" 
          />
        </svg>
      )
    },
    {
      name: 'SQL',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="#10B981" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        </svg>
      )
    },
    {
      name: 'Tasy',
      icon: (
        <svg viewBox="0 0 100 100" className="w-7 h-7">
          {/* Swirls background */}
          {/* Dark Blue Swirl (Top-Right) */}
          <path 
            d="M 15,52 C 15,22 40,8 50,8 C 65,8 85,28 85,48 C 85,34 70,16 50,16 C 35,16 15,36 15,52 Z" 
            fill="url(#tasy-dark-blue)" 
          />
          {/* Light Blue Swirl (Bottom-Left) */}
          <path 
            d="M 85,48 C 85,78 60,92 50,92 C 35,92 15,72 15,52 C 15,66 30,84 50,84 C 65,84 85,64 85,48 Z" 
            fill="url(#tasy-light-blue)" 
          />

          {/* Central white circle */}
          <circle cx="50" cy="50" r="35" fill="url(#tasy-bg)" stroke="#E2E8F0" strokeWidth="0.5" />
          
          {/* Text TASY */}
          <text 
            x="51" 
            y="60" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="900" 
            fontStyle="italic" 
            fontSize="27" 
            fill="#1E65B3" 
            textAnchor="middle"
            letterSpacing="-0.5"
          >
            TASY
          </text>
        </svg>
      )
    },
    {
      name: 'Excel',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#107C41" />
          <path d="M7 7l5 5-5 5M12 7l-5 5 5 5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 7h4M14 11h4M14 15h4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Power Point',
      icon: (
        <svg viewBox="0 0 32 32" className="w-7 h-7">
          <g id="STYLE_COLOR" data-name="STYLE = COLOR">
            <path d="M17.99964,2a14.04114,14.04114,0,0,0-14,14l17.737,3.737Z" fill="#ed6c47" />
            <path d="M17.99964,2a14.04114,14.04114,0,0,1,14,14l-7,4.75791-7-4.75791Z" fill="#ff8f6b" />
            <path d="M17.99963,30a14.04114,14.04114,0,0,0,14-14h-28A14.04115,14.04115,0,0,0,17.99963,30Z" fill="#d35230" />
            <path d="M16.66644,7H7.30511a13.91368,13.91368,0,0,0,.93073,19h8.4306a1.33732,1.33732,0,0,0,1.33338-1.33337V8.33331A1.33727,1.33727,0,0,0,16.66644,7Z" fill="#000000" opacity="0.1" />
            <path d="M15.66644,8H6.53876A13.906,13.906,0,0,0,9.38434,27h6.2821a1.33732,1.33732,0,0,0,1.33338-1.33337V9.33331A1.33727,1.33727,0,0,0,15.66644,8Z" fill="#000000" opacity="0.2" />
            <path id="Back_Plate" data-name="Back Plate" d="M1.33333,8H14.66669A1.33334,1.33334,0,0,1,16,9.33334V22.66666A1.33333,1.33333,0,0,1,14.6667,24H1.33334A1.33334,1.33334,0,0,1,0,22.66666V9.33333A1.33333,1.33333,0,0,1,1.33333,8Z" fill="#c43e1c" />
            <path d="M7.9975,11a4.16771,4.16771,0,0,1,2.75484.8051,2.87757,2.87757,0,0,1,.95562,2.33129,2.72609,2.72609,0,0,1-.47255,1.58724,3.16371,3.16371,0,0,1-1.34417,1.18676,4.56975,4.56975,0,0,1-2.01976.42344H5.96025V21H4V11ZM5.96025,15.68319H7.64746a2.19382,2.19382,0,0,0,1.49118-.44444,1.10662,1.10662,0,0,0,.50407-1.02535q0-1.65921-1.93225-1.65921H5.96025Z" fill="#ffffff" />
          </g>
        </svg>
      )
    },
    {
      name: 'Word',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#104A7F" />
          <path d="M6 7l3 10 3-10M9 7l3 10 3-10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M14 9h3M14 13h3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Power Bi',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
          <rect x="4" y="14" width="3" height="6" rx="0.5" fill="#E2B100" />
          <rect x="10" y="9" width="3" height="11" rx="0.5" fill="#F2C811" />
          <rect x="16" y="4" width="3" height="16" rx="0.5" fill="#F9E03D" />
        </svg>
      )
    },
    {
      name: 'Supabase',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
          <path d="M12 2L4 13h6l-2 9 8-11h-6l2-9z" fill="#3ECF8E" />
        </svg>
      )
    }
  ];

  const line2: Skill[] = [
    {
      name: 'Dart',
      icon: (
        <svg viewBox="0 0 64 64" className="w-7 h-7">
          <path d="M17.582 17.424l-4.138-4.14.016 29.903.05 1.396c.02.66.145 1.4.345 2.17l32.775 11.56 8.2-3.63.007-.012L17.58 17.424z" fill="#00c4b3" />
          <path d="M13.856 46.753h.003c-.003-.012-.008-.026-.014-.04.007.015.007.03.01.04zm40.966 7.93l-8.2 3.63-32.77-11.56c.625 2.404 2.012 5.106 3.502 6.58l10.69 10.637 23.788.03 2.98-9.317z" fill="#22d3c5" />
          <g fill="#0075c9">
            <path d="M13.556 13.285L.813 32.53c-1.058 1.13-.53 3.462 1.173 5.18l7.356 7.416 4.624 1.63c-.2-.768-.326-1.5-.345-2.17l-.05-1.396-.015-29.903z" />
            <path d="M46.9 13.67c-.77-.195-1.508-.318-2.173-.337l-1.478-.054-29.805.007 41.392 41.386 3.636-8.2-11.57-32.8z" />
          </g>
          <path d="M46.862 13.663c.013.005.027.008.038.01v-.004c-.013-.003-.025-.003-.038-.008zm6.615 3.518c-1.505-1.515-4.17-2.9-6.577-3.508L58.47 46.47l-3.64 8.2 8.882-2.838.02-24.352-10.256-10.3z" fill="#00a8e1" />
          <path d="M45.278 9.075l-7.4-7.36C36.152.018 33.82-.512 32.7.544l-19.244 12.74 29.805-.007 1.478.054c.665.02 1.404.142 2.173.337L45.28 9.073zm-31.833 4.2" fill="#00c4b3" />
        </svg>
      )
    },
    {
      name: 'HTML',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <path d="M4 2l1.5 17L12 22l6.5-3L20 2H4z" fill="#E34F26" />
          <path d="M12 3.5v15.2l4.8-2.2.8-8.5H12" fill="#F16529" />
          <path d="M8.5 7.5h7l-.2 2.5H12v2.5h3.2l-.3 3.3-2.9 1.2-2.9-1.2-.2-2h2.2l.1 1 1 0.3 1-0.3.1-1.2H8.8l-.3-5.3z" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: 'Python',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <path d="M12 2c-2.7 0-4.5 1-4.5 3.5h3v1c0 1.4 1.1 2.5 2.5 2.5h4c1.4 0 2.5-1.1 2.5-2.5V5c0-2.5-1.8-3-4.5-3z" fill="#3776AB" />
          <path d="M12 22c2.7 0 4.5-1 4.5-3.5h-3v-1c0-1.4-1.1-2.5-2.5-2.5h-4c-1.4 0-2.5 1.1-2.5 2.5v1.5c0 2.5 1.8 3 4.5 3z" fill="#FFD43B" />
          <circle cx="10" cy="5" r="0.75" fill="#FFFFFF" />
          <circle cx="14" cy="19" r="0.75" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: 'FreshService',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <path d="M 12,2 C 6.5,2 2,6.5 2,12 C 2,17.5 6.5,22 12,22 C 17.5,22 22,17.5 22,12 L 22,2 Z" fill="#099bf7" />
          <path d="M 13.5,6 L 8.5,12.5 L 12,12.5 L 10.5,18 L 15.5,11.5 L 12,11.5 Z" fill="#ffffff" />
        </svg>
      )
    },
    {
      name: 'VS Code',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
          <path d="M17.5 2.5l-9.5 9-4.5-3.5-1.5 1L6.5 12l-4.5 3 1.5 1 4.5-3.5 9.5 9 4-2V4.5l-4-2z" fill="#007ACC" />
          <path d="M17.5 2.5L7.5 10.5 4 8v8l3.5-2.5 10 8 3-2v-15l-3-2z" fill="#23A9F2" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    },
    {
      name: 'N8N',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#FF6D5A">
          <path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632" />
        </svg>
      )
    },
    {
      name: 'Agentes de IA',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
          <rect x="4" y="5" width="16" height="13" rx="3" stroke="#8B5CF6" strokeWidth="2" />
          <circle cx="9" cy="11" r="1.5" fill="#8B5CF6" />
          <circle cx="15" cy="11" r="1.5" fill="#8B5CF6" />
          <path d="M8 15h8" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 5V2" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="2" r="1" fill="#8B5CF6" />
          <rect x="2" y="9" width="2" height="5" rx="1" fill="#8B5CF6" />
          <rect x="20" y="9" width="2" height="5" rx="1" fill="#8B5CF6" />
        </svg>
      )
    },
    {
      name: 'Inglês',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <circle cx="12" cy="12" r="10" fill="#00247D" />
          <path d="M2 12h20M12 2v20" stroke="#FFFFFF" strokeWidth="4" />
          <path d="M2 12h20M12 2v20" stroke="#CF142B" strokeWidth="2.4" />
          <path d="M4 4l16 16M4 20L20 4" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M4 4l16 16M4 20L20 4" stroke="#CF142B" strokeWidth="0.8" />
        </svg>
      )
    },
    {
      name: 'Docker',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <path 
            d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" 
            fill="#2496ED" 
          />
        </svg>
      )
    }
  ];

  const renderCard = (skill: Skill, index: number, lineId: string, marginClass = "") => (
    <div
      key={`${lineId}-${skill.name}-${index}`}
      className={`flex flex-col items-center justify-center bg-secondary/60 border border-border/20 rounded-3xl lg:rounded-2xl p-4 lg:p-3 w-28 h-28 lg:w-24 lg:h-24 hover:scale-110 hover:border-indigo-500/40 hover:bg-[#151550]/40 transition-all duration-300 group cursor-pointer shadow-md select-none shrink-0 ${marginClass}`}
    >
      <div className="w-12 h-12 lg:w-10 lg:h-10 bg-white rounded-2xl lg:rounded-xl flex items-center justify-center shadow-sm p-2 lg:p-1.5 transition-transform duration-300 group-hover:rotate-3 [&>svg]:lg:w-6 [&>svg]:lg:h-6">
        {skill.icon}
      </div>
      <span className="text-[11px] lg:text-[10px] font-medium text-gray-300 group-hover:text-white transition-colors text-center truncate w-full mt-2 lg:mt-1.5">
        {skill.name}
      </span>
    </div>
  );

  const getIcon = (name: string) => {
    const allSkills = [...line1, ...line2];
    const skill = allSkills.find(s => s.name.toLowerCase() === name.toLowerCase());
    return skill ? skill.icon : null;
  };

  return (
    <section className="snap-align-start h-screen w-full flex flex-col justify-between px-6 sm:px-12 lg:px-24 relative overflow-hidden bg-primary py-8 lg:py-10">
      {/* Global SVG Definitions to prevent ID conflicts when duplicated in Marquees */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="gradient-n8n" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="50%" stopColor="#D946EF" />
            <stop offset="100%" stopColor="#F43F5E" />
          </linearGradient>
          <linearGradient id="antigravity-grad" x1="0%" y1="100%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="25%" stopColor="#0EA5E9" />
            <stop offset="45%" stopColor="#10B981" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="80%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <radialGradient id="tasy-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </radialGradient>
          <linearGradient id="tasy-dark-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E79B9" />
            <stop offset="100%" stopColor="#1C5A96" />
          </linearGradient>
          <linearGradient id="tasy-light-blue" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B4E3FA" />
            <stop offset="100%" stopColor="#4FA8DE" />
          </linearGradient>
        </defs>
      </svg>
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-indigo-500/10 opacity-30 blur-[130px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-purple-500/10 opacity-20 blur-[110px]"></div>
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl w-full mx-auto text-center lg:text-left z-10"
      >
        <span className="text-sm font-semibold tracking-wider text-white bg-indigo-500/25 border border-indigo-400/20 px-3 py-1 rounded-full uppercase">
          Stack & Competências
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-3 leading-tight">
          Habilidades Técnicas
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-xl">
          Tecnologias, linguagens de programação e ferramentas que utilizo para otimizar processos e construir soluções modernas.
        </p>
      </motion.div>

      {/* Mobile/Tablet view: Horizontal Marquee (hidden on desktop) */}
      <div className="lg:hidden max-w-7xl w-full mx-auto flex flex-col gap-4 relative z-10 py-2">
        {/* Left and Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-primary via-primary/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-primary via-primary/80 to-transparent z-20 pointer-events-none"></div>

        {/* Track 1 */}
        <div className="relative flex overflow-hidden w-full py-1">
          <div className="flex animate-marquee-left hover:[animation-play-state:paused] whitespace-nowrap">
            {line1.map((skill, index) => renderCard(skill, index, 'l1-mob', 'mr-6'))}
            {line1.map((skill, index) => renderCard(skill, index, 'l1-mob-dup', 'mr-6'))}
          </div>
        </div>

        {/* Track 2 */}
        <div className="relative flex overflow-hidden w-full py-1">
          <div className="flex animate-marquee-right hover:[animation-play-state:paused] whitespace-nowrap">
            {line2.map((skill, index) => renderCard(skill, index, 'l2-mob', 'mr-6'))}
            {line2.map((skill, index) => renderCard(skill, index, 'l2-mob-dup', 'mr-6'))}
          </div>
        </div>
      </div>

      {/* Desktop view: Two columns layout (hidden on mobile) */}
      <div className="hidden lg:grid max-w-7xl w-full mx-auto grid-cols-[0.65fr_0.35fr] gap-8 lg:gap-12 items-center z-10 flex-1 my-4 overflow-hidden">
        {/* Left Column: Automation Simulator */}
        <div className="flex flex-col h-full justify-center">
          <AutomationSimulator getIcon={getIcon} />
        </div>

        {/* Right Column: Vertical Marquees */}
        <div className="flex gap-4 lg:gap-6 h-[540px] overflow-hidden relative pr-4 justify-center">
          {/* Top and Bottom Gradient Fades */}
          <div className="absolute left-0 right-0 top-0 h-10 bg-gradient-to-b from-primary to-transparent z-20 pointer-events-none"></div>
          <div className="absolute left-0 right-0 bottom-0 h-10 bg-gradient-to-t from-primary to-transparent z-20 pointer-events-none"></div>

          {/* Col 1: Upward */}
          <div className="w-24 overflow-hidden h-full">
            <div className="flex flex-col animate-marquee-up hover:[animation-play-state:paused] py-1">
              {line1.map((skill, idx) => renderCard(skill, idx, 'v1-desk', 'mb-4'))}
              {line1.map((skill, idx) => renderCard(skill, idx, 'v1-desk-dup', 'mb-4'))}
            </div>
          </div>

          {/* Col 2: Downward */}
          <div className="w-24 overflow-hidden h-full">
            <div className="flex flex-col animate-marquee-down hover:[animation-play-state:paused] py-1">
              {line2.map((skill, idx) => renderCard(skill, idx, 'v2-desk', 'mb-4'))}
              {line2.map((skill, idx) => renderCard(skill, idx, 'v2-desk-dup', 'mb-4'))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
