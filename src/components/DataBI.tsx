import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, Clock, X, BarChart3, ArrowUpRight } from 'lucide-react';

interface Dashboard {
  id: string;
  titulo: string;
  descricao: string;
  iframeSrc: string;
  tag: string;
  icon: React.ReactNode;
}

export default function DataBI() {
  const dashboards: Dashboard[] = [
    {
      id: 'news',
      titulo: 'Vigilância IPCS (Auditoria Clínica)',
      descricao:
        'Dashboard para análise de adequação de decisões clínicas. O desafio envolveu o uso avançado de funções de contexto de filtro no DAX (como a função ALL) para garantir que os cartões de KPI interajam dinamicamente sem retornar valores em branco durante a filtragem da janela de tempo dos sinais vitais.',
      iframeSrc: 'https://app.powerbi.com/view?r=eyJrIjoiZTIxMDY4MGQtNjhmZS00NjVhLTkyNjctY2YzOTZiYjJmYWRmIiwidCI6IjM2NWQxNWNjLTFkNGItNGQ5Ni04NWZhLTZmZGQxZTBjMzA4OCJ9',
      tag: 'Auditoria Clínica',
      icon: <Activity className="w-5 h-5 text-red-500" />,
    },
    {
      id: 'custos',
      titulo: 'Análise de Custos e Faturamento',
      descricao:
        "Painel construído após auditoria de automação de logs hospitalares. Implementei regras de agregação robustas no Power Query para lidar com redundâncias sistêmicas, evitando a soma de valores duplicados na coluna 'valor_unit_hospital' e garantindo o processamento correto ao mapear a variável 'PROCEDIMENTO'.",
      iframeSrc: 'https://app.powerbi.com/view?r=eyJrIjoiMmMwYmZjNmItOTZjYS00NDkwLWI1Y2MtYzM0MjgxMjliMzAzIiwidCI6IjM2NWQxNWNjLTFkNGItNGQ5Ni04NWZhLTZmZGQxZTBjMzA4OCJ9',
      tag: 'Financeiro / Power Query',
      icon: <Database className="w-5 h-5 text-indigo-400" />,
    },
    {
      id: 'requisicoes',
      titulo: 'Monitoria de Requisições de TI',
      descricao:
        'Integração de dados do FreshService e ERP Tasy. O painel rastreia SLAs de incidentes e requisições da equipe, proporcionando uma visão gerencial do volume de chamados resolvidos e tempo médio de atendimento.',
      iframeSrc: 'https://app.powerbi.com/view?r=eyJrIjoiZTgyZGRhZDItOTBiYi00YzRmLWE3ZjUtYzQzNDIwZjIzZGI0IiwidCI6IjM2NWQxNWNjLTFkNGItNGQ5Ni04NWZhLTZmZGQxZTBjMzA4OCJ9',
      tag: 'Infra & FreshService',
      icon: <Clock className="w-5 h-5 text-emerald-400" />,
    },
  ];

  const [activeDashboard, setActiveDashboard] = useState<Dashboard>(dashboards[0]);
  const [modalDashboard, setModalDashboard] = useState<Dashboard | null>(null);

  // Animation config for sliding from right to left
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
    <section className="snap-align-start h-screen w-full flex flex-col justify-between px-6 sm:px-12 lg:px-24 relative overflow-y-auto lg:overflow-hidden bg-[#0B0B0F] border-t border-[#272835] py-12 lg:py-16">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#151550] opacity-35 blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[250px] h-[250px] rounded-full bg-indigo-500/10 opacity-30 blur-[100px]"></div>
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
          Business Intelligence & Analytics
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-3 leading-tight">
          Transformando Dados Hospitalares em Decisões
        </h2>
      </motion.div>

      {/* DESKTOP LAYOUT: 30% left / 70% right grid */}
      <div className="max-w-7xl w-full mx-auto hidden lg:flex flex-row gap-8 lg:gap-12 items-stretch z-10 flex-1 my-8 overflow-hidden">
        
        {/* Left Column (30%): Tab Navigation Menu */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          variants={slideInVariants}
          className="w-[30%] flex flex-col gap-4 bg-[#0D0C22] border border-[#272835] rounded-3xl p-5 shadow-xl justify-start overflow-y-auto"
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#272835]">
            <BarChart3 className="w-5 h-5 text-indigo-400" />
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Painéis Disponíveis</span>
          </div>

          <div className="flex flex-col gap-3">
            {dashboards.map((dash) => {
              const isActive = activeDashboard.id === dash.id;
              return (
                <button
                  key={dash.id}
                  onClick={() => setActiveDashboard(dash)}
                  className={`w-full text-left p-4 rounded-2xl border-l-4 transition-all duration-300 flex flex-col gap-2 relative ${
                    isActive
                      ? 'bg-[#151550] border-[#44444A] text-white shadow-lg'
                      : 'bg-[#0D0C22] border-transparent text-gray-400 hover:text-white hover:bg-[#151550]/40'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {dash.icon}
                    <span className="text-sm font-bold truncate">{dash.titulo}</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block ml-7">
                    {dash.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column (70%): Iframe Only */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          variants={slideInVariants}
          className="w-[70%] flex flex-col justify-stretch overflow-hidden"
        >
          {/* Iframe Box */}
          <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden border border-[#272835] shadow-2xl bg-[#0D0C22] relative group">
            {/* Performance optimization: Only active dashboard's iframe is rendered */}
            <iframe
              key={activeDashboard.id}
              src={activeDashboard.iframeSrc}
              title={activeDashboard.titulo}
              className="w-full h-full border-0 transition-opacity duration-300"
              allowFullScreen
            ></iframe>
            
            {/* Elegant overlay to preview layout */}
            <div className="absolute inset-0 bg-[#0D0C22]/5 pointer-events-none group-hover:bg-transparent transition-all duration-300"></div>
          </div>
        </motion.div>

      </div>

      {/* MOBILE LAYOUT: Fullscreen Modal & Card Lists */}
      <div className="max-w-7xl w-full mx-auto lg:hidden flex flex-col gap-6 z-10 my-6">
        {dashboards.map((dash, index) => (
          <motion.div
            key={dash.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={index * 0.1}
            variants={slideInVariants}
            className="p-5 bg-[#0D0C22] border border-[#272835] rounded-3xl flex flex-col justify-between shadow-xl"
          >
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {dash.icon}
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{dash.tag}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mt-1">{dash.titulo}</h3>
            </div>

            <button
              onClick={() => setModalDashboard(dash)}
              className="mt-5 w-full bg-[#151550] hover:bg-[#151550]/80 text-white border border-[#272835] px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5"
            >
              <span>Visualizar Painel</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* MOBILE FULLSCREEN MODAL */}
      {modalDashboard && (
        <div className="fixed inset-0 z-50 bg-[#0B0B0F]/98 flex flex-col p-4 md:p-6 backdrop-blur-lg">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#272835]">
            <div className="flex items-center gap-2 truncate max-w-[70%]">
              {modalDashboard.icon}
              <h4 className="font-extrabold text-white text-sm sm:text-base truncate">
                {modalDashboard.titulo}
              </h4>
            </div>
            <button
              onClick={() => setModalDashboard(null)}
              className="p-2 bg-[#0D0C22] hover:bg-[#151550] border border-[#272835] text-white rounded-full transition-all duration-300 flex items-center justify-center"
              aria-label="Fechar visualizador"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          {/* Modal Iframe Container */}
          <div className="flex-1 w-full rounded-2xl overflow-hidden border border-[#272835] bg-[#0D0C22] shadow-2xl">
            <iframe
              src={modalDashboard.iframeSrc}
              title={modalDashboard.titulo}
              className="w-full h-full border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Tiny separator spacing to align with scroll snapping container layout */}
      <div className="h-2 w-full lg:block hidden"></div>
      
    </section>
  );
}
