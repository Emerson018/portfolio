import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

export default function SkillsMarquee() {
  const line1: Skill[] = [
    {
      name: 'Notion',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <path d="M4 3.5A1.5 1.5 0 0 1 5.5 2h13A1.5 1.5 0 0 1 20 3.5v17a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20.5v-17zM5.5 3a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5h-13z" fill="#000000" opacity="0.15"/>
          <path d="M6.5 5.5h2v1h-.5L8 16.5h-.5L7 16h-.5zm11 0h-2v1h.5l.5 10h.5l.5-.5h.5zM9.5 5.5h1.2l3.8 7.2v-7.2h1.5v13h-1.2L9.5 9.3v9.2H8v-13z" fill="#000000"/>
        </svg>
      )
    },
    {
      name: 'Kiro',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <path d="M6 4h3v16H6z" fill="#4F46E5" />
          <path d="M9 12l7-8h4.5l-7.5 8.5 8.5 7.5H17z" fill="#818CF8" />
        </svg>
      )
    },
    {
      name: 'Antigravity',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
          <path d="M12 3L4 18h16L12 3z" stroke="#6366F1" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" fill="#8B5CF6" />
          <path d="M6 21h12" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" />
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
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
          <path d="M12 2v20M2 12h20" stroke="#06B6D4" strokeWidth="4" strokeLinecap="round" />
          <rect x="8" y="8" width="8" height="8" rx="1.5" fill="#3B82F6" />
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
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#C43E1C" />
          <circle cx="12" cy="12" r="5" fill="#FFFFFF" opacity="0.3" />
          <path d="M11 8v8h1.5a2.5 2.5 0 0 0 0-5H11" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
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
    }
  ];

  const line2: Skill[] = [
    {
      name: 'Dart',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
          <path d="M12 2L2 12l10 10 4-4-6-6 6-6-4-4z" fill="#00B4AB" />
          <path d="M14 2l8 8-8 8-3-3 5-5-5-5 3-3z" fill="#007ACC" />
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
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
          <path d="M12 2C7 2 3 6 3 11c0 5 4 9 9 9s9-4 9-9c0-5-4-9-9-9z" fill="#00B388" opacity="0.15" />
          <path d="M12 4c-4 0-7 3-7 7 0 4 3 7 7 7s7-3 7-7" stroke="#00B388" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M12 8c-2 0-3 1.5-3 3 0 1.5 1.5 3 3 3" stroke="#00B388" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="11" r="2" fill="#00B388" />
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
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
          <circle cx="6" cy="12" r="4" fill="#FF6D5A" />
          <circle cx="18" cy="12" r="4" fill="#1A1A1A" />
          <path d="M10 12h4" stroke="#FF6D5A" strokeWidth="3" />
        </svg>
      )
    },
    {
      name: 'Agentes de IA',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="#8B5CF6" opacity="0.15" />
          <rect x="9" y="9" width="6" height="6" rx="1" stroke="#8B5CF6" strokeWidth="2" />
          <path d="M9 11H6M9 13H6M15 11h3M15 13h3M11 9V6M13 9V6M11 15v3M13 15v3" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1" fill="#8B5CF6" />
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
    }
  ];

  const renderCard = (skill: Skill, index: number, lineId: string) => (
    <div
      key={`${lineId}-${skill.name}-${index}`}
      className="flex flex-col items-center justify-center bg-secondary/60 border border-border/20 rounded-3xl p-4 w-28 h-28 hover:scale-110 hover:border-indigo-500/40 hover:bg-[#151550]/40 transition-all duration-300 group cursor-pointer shadow-md select-none shrink-0"
    >
      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm p-2 transition-transform duration-300 group-hover:rotate-3">
        {skill.icon}
      </div>
      <span className="text-[11px] font-medium text-gray-300 group-hover:text-white transition-colors text-center truncate w-full mt-2">
        {skill.name}
      </span>
    </div>
  );

  return (
    <section className="snap-align-start h-screen w-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 relative overflow-hidden bg-primary py-12">
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
        className="max-w-7xl w-full mx-auto text-center lg:text-left z-10 mb-10"
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

      {/* Marquee Tracks Container */}
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-6 relative z-10 py-4">
        
        {/* Left and Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-primary via-primary/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-primary via-primary/80 to-transparent z-20 pointer-events-none"></div>

        {/* Track 1: Right to Left */}
        <div className="relative flex overflow-hidden w-full py-1">
          <div className="flex gap-6 animate-marquee-left hover:[animation-play-state:paused] whitespace-nowrap">
            {/* Render 1st set */}
            {line1.map((skill, index) => renderCard(skill, index, 'l1'))}
            {/* Duplicate 2nd set for seamless loop */}
            {line1.map((skill, index) => renderCard(skill, index, 'l1-dup'))}
          </div>
        </div>

        {/* Track 2: Left to Right */}
        <div className="relative flex overflow-hidden w-full py-1">
          <div className="flex gap-6 animate-marquee-right hover:[animation-play-state:paused] whitespace-nowrap">
            {/* Render 1st set */}
            {line2.map((skill, index) => renderCard(skill, index, 'l2'))}
            {/* Duplicate 2nd set for seamless loop */}
            {line2.map((skill, index) => renderCard(skill, index, 'l2-dup'))}
          </div>
        </div>

      </div>
    </section>
  );
}
