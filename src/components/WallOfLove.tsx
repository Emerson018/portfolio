import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Image as ImageIcon, X } from 'lucide-react';

import cert1 from '../assets/certificates/certificado1.jpg';
import cert2 from '../assets/certificates/certificado2.jpg';
import cert3 from '../assets/certificates/certificado3.jpg';
import cert4 from '../assets/certificates/certificado4.jpg';
import cert5 from '../assets/certificates/certificado5.png';
import cert6 from '../assets/certificates/certificado6.png';

interface Feedback {
  id: string;
  texto: string;
  autor: string;
  empresa: string;
  fotoOriginalUrl: string;
}

export default function WallOfLove() {
  const feedbacks: Feedback[] = [
    {
      id: 'feedback-1',
      texto: '"Emerson demonstrou excelente agilidade e comprometimento no desenvolvimento das soluções. Sua postura proativa e domínio técnico ajudaram a agilizar as entregas da equipe."',
      autor: 'Gerência de TI',
      empresa: 'Leroy Merlin',
      fotoOriginalUrl: cert1,
    },
    {
      id: 'feedback-2',
      texto: '"Excelente profissional! Teve papel fundamental na reestruturação dos nossos relatórios, automatizando consultas complexas e facilitando as decisões diárias da operação."',
      autor: 'Coordenação de Operações',
      empresa: 'Leroy Merlin',
      fotoOriginalUrl: cert2,
    },
    {
      id: 'feedback-3',
      texto: '"Gostaria de parabenizar o Emerson pela dedicação e pelo espírito de colaboração. Sempre disposto a buscar melhorias técnicas e apoiar os colegas diante de desafios."',
      autor: 'Colega de Equipe',
      empresa: 'Leroy Merlin',
      fotoOriginalUrl: cert3,
    },
    {
      id: 'feedback-4',
      texto: '"O comprometimento e a qualidade técnica demonstrados no projeto foram incríveis. Uma entrega sólida que superou nossas expectativas de performance e usabilidade."',
      autor: 'Product Owner',
      empresa: 'Leroy Merlin',
      fotoOriginalUrl: cert4,
    },
    {
      id: 'feedback-5',
      texto: '"Emerson conduziu a otimização dos processos com maestria. Seu foco em usabilidade e performance transformou a produtividade de toda a nossa área."',
      autor: 'Gestão de Processos',
      empresa: 'Leroy Merlin',
      fotoOriginalUrl: cert5,
    },
    {
      id: 'feedback-6',
      texto: '"Sua capacidade de entender as necessidades da operação e traduzi-las em soluções eficientes foi um diferencial gigante para o nosso setor."',
      autor: 'Supervisão de Logística',
      empresa: 'Leroy Merlin',
      fotoOriginalUrl: cert6,
    },
  ];

  const [selectedFeedbackImg, setSelectedFeedbackImg] = useState<string | null>(null);

  const slideInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: customDelay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="snap-align-start h-screen w-full flex flex-col justify-between px-6 sm:px-12 lg:px-24 relative overflow-y-auto bg-[#151550] border-t border-[#272835] py-12 lg:py-16">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-indigo-500/10 opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-emerald-500/10 opacity-25 blur-[120px]"></div>
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
          Wall of Love
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-3 leading-tight">
          Mural de Reconhecimento
        </h2>
      </motion.div>

      {/* Masonry CSS Columns Container */}
      <div className="max-w-7xl w-full mx-auto columns-1 md:columns-3 gap-6 space-y-6 z-10 my-8 flex-1 overflow-y-auto lg:overflow-visible py-2">
        {feedbacks.map((fb, index) => (
          <motion.div
            key={fb.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={index * 0.08}
            variants={slideInVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="break-inside-avoid bg-[#0B0B0F] border border-[#272835] rounded-3xl p-6 flex flex-col justify-between hover:border-[#44444A] transition-colors duration-300 relative group shadow-lg"
          >
            <div>
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Feedback Text */}
              <p className="text-sm italic text-gray-300 leading-relaxed">
                {fb.texto}
              </p>
            </div>

            {/* Author and Verification Button */}
            <div className="mt-6">
              <div className="border-t border-[#272835] pt-4 flex flex-col">
                <span className="text-sm font-bold text-white">
                  {fb.autor}
                </span>
                <span className="text-xs font-medium text-gray-400 mt-0.5">
                  {fb.empresa}
                </span>
              </div>

              <button
                onClick={() => setSelectedFeedbackImg(fb.fotoOriginalUrl)}
                className="mt-5 flex items-center justify-center gap-1.5 w-full py-2.5 bg-secondary/80 hover:bg-[#151550]/40 border border-[#272835] hover:border-[#44444A] text-xs font-semibold text-gray-300 hover:text-white rounded-2xl transition-all duration-300"
              >
                <ImageIcon className="w-4 h-4" />
                <span>Ver prova original</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Spacing/Footer Separator */}
      <div className="h-2 w-full lg:block hidden"></div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedFeedbackImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedFeedbackImg(null)}
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
                onClick={() => setSelectedFeedbackImg(null)}
                className="absolute top-[-50px] right-0 md:right-[-10px] p-2 bg-[#0D0C22] hover:bg-red-500/10 hover:text-red-400 border border-[#272835] text-white rounded-full transition-all duration-300 flex items-center justify-center z-55 shadow-lg"
                aria-label="Fechar prova"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Frame */}
              <div className="bg-[#0D0C22] border border-[#272835] p-3 rounded-3xl shadow-2xl flex flex-col items-center overflow-hidden">
                <img
                  src={selectedFeedbackImg}
                  alt="Prova original do elogio"
                  className="max-w-full max-h-[75vh] object-contain rounded-2xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
