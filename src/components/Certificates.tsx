import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Eye, X } from 'lucide-react';

interface Certificate {
  id: string;
  titulo: string;
  instituicao: string;
  tag: 'Desenvolvimento' | 'Business Intelligence' | 'Ciência de Dados' | 'Banco de Dados' | 'Automação & IA';
  imageSrc: string;
}

export default function Certificates() {
  const certificates: Certificate[] = [
    {
      id: 'react-dev',
      titulo: 'Desenvolvimento Web Moderno (React)',
      instituicao: 'Rocketseat / Alura',
      tag: 'Desenvolvimento',
      imageSrc: 'https://placehold.co/800x600/0d0c22/ffffff/png?text=Certificado+React+Developer',
    },
    {
      id: 'power-bi',
      titulo: 'Microsoft Certified: Power BI Data Analyst',
      instituicao: 'Microsoft / Data Science Academy',
      tag: 'Business Intelligence',
      imageSrc: 'https://placehold.co/800x600/0d0c22/ffffff/png?text=Certificado+Power+BI+Analyst',
    },
    {
      id: 'python-ds',
      titulo: 'Python para Ciência de Dados & Machine Learning',
      instituicao: 'Data Science Academy',
      tag: 'Ciência de Dados',
      imageSrc: 'https://placehold.co/800x600/0d0c22/ffffff/png?text=Certificado+Python+Data+Science',
    },
    {
      id: 'sql-db',
      titulo: 'Modelagem e Consulta Avançada de Banco de Dados SQL',
      instituicao: 'Udemy / SQL Training',
      tag: 'Banco de Dados',
      imageSrc: 'https://placehold.co/800x600/0d0c22/ffffff/png?text=Certificado+SQL+Advanced',
    },
    {
      id: 'n8n-automation',
      titulo: 'Orquestração de Fluxos e Automação de Processos',
      instituicao: 'n8n Community',
      tag: 'Automação & IA',
      imageSrc: 'https://placehold.co/800x600/0d0c22/ffffff/png?text=Certificado+N8N+Automation',
    },
    {
      id: 'react-native',
      titulo: 'Desenvolvimento Mobile Avançado (React Native & Expo)',
      instituicao: 'Rocketseat',
      tag: 'Desenvolvimento',
      imageSrc: 'https://placehold.co/800x600/0d0c22/ffffff/png?text=Certificado+React+Native+Mobile',
    },
  ];

  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const getTagStyles = (tag: Certificate['tag']) => {
    switch (tag) {
      case 'Desenvolvimento':
        return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
      case 'Business Intelligence':
        return 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
      case 'Ciência de Dados':
        return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
      case 'Banco de Dados':
        return 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20';
      case 'Automação & IA':
        return 'bg-purple-500/10 text-purple-400 border border-purple-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border border-gray-500/20';
    }
  };

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
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-card opacity-25 blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-indigo-500/10 opacity-30 blur-[100px]"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl w-full mx-auto text-center lg:text-left z-10"
      >
        <span className="text-sm font-semibold tracking-wider text-white bg-indigo-500/25 border border-indigo-400/20 px-3 py-1 rounded-full uppercase">
          Conquistas & Estudos
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-3 leading-tight">
          Certificados & Reconhecimentos
        </h2>
      </motion.div>

      {/* Grid List */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center z-10 my-8 flex-1 overflow-y-auto lg:overflow-visible py-2">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={index * 0.08}
            variants={slideInVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 bg-[#0D0C22] border border-[#272835] rounded-3xl flex flex-col justify-between h-[210px] shadow-md hover:border-[#44444A] transition-colors duration-300 relative group"
          >
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <span className={`text-[10px] font-semibold tracking-wider px-2.5 py-0.5 rounded-full uppercase ${getTagStyles(cert.tag)}`}>
                  {cert.tag}
                </span>
                <Award className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {cert.titulo}
                </h3>
                <p className="text-xs text-gray-400 mt-1 font-medium">
                  {cert.instituicao}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedCert(cert)}
              className="mt-4 flex items-center justify-center gap-1.5 w-full py-2.5 bg-secondary/80 hover:bg-[#151550]/40 border border-[#272835] hover:border-[#44444A] text-xs font-semibold text-gray-300 hover:text-white rounded-2xl transition-all duration-300"
            >
              <Eye className="w-4 h-4" />
              <span>Ver Credencial</span>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Spacing/Footer Separator */}
      <div className="h-2 w-full lg:block hidden"></div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-[-50px] right-0 md:right-[-10px] p-2 bg-[#0D0C22] hover:bg-red-500/10 hover:text-red-400 border border-[#272835] text-white rounded-full transition-all duration-300 flex items-center justify-center z-55 shadow-lg"
                aria-label="Fechar certificado"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Certificate Image Frame */}
              <div className="bg-[#0D0C22] border border-[#272835] p-3 rounded-3xl shadow-2xl flex flex-col items-center overflow-hidden">
                <img
                  src={selectedCert.imageSrc}
                  alt={`Certificado de ${selectedCert.titulo}`}
                  className="max-w-full max-h-[75vh] object-contain rounded-2xl"
                  loading="lazy"
                />
                
                {/* Certificate info footer */}
                <div className="w-full mt-3 px-3 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-2">
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-white">{selectedCert.titulo}</h4>
                    <p className="text-[10px] text-gray-400">{selectedCert.instituicao}</p>
                  </div>
                  <span className={`text-[9px] font-semibold px-2.5 py-0.5 rounded-full uppercase ${getTagStyles(selectedCert.tag)}`}>
                    {selectedCert.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
