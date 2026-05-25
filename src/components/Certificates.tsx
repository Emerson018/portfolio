import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Eye, X, ExternalLink, Images, ChevronLeft, ChevronRight } from 'lucide-react';

import flaskCertImg from '../assets/certificates/flask_certificado.png';
import estatisticaCertImg from '../assets/certificates/estatistica_certificado.png';
import pythonOOCertImg from '../assets/certificates/python_oo_certificado.png';

import cert1 from '../assets/certificates/certificado1.png';
import cert2 from '../assets/certificates/certificado2.jpg';
import cert3 from '../assets/certificates/certificado3.jpg';
import cert4 from '../assets/certificates/certificado4.jpg';
import cert5 from '../assets/certificates/certificado5.jpg';
import cert6 from '../assets/certificates/certificado6.png';

import ifrsBdCertImg from '../assets/certificates/ifrs_bd_certificado.png';
import vivaeIaCertImg from '../assets/certificates/vivae_ia_certificado.png';
import vivaeMobileCertImg from '../assets/certificates/vivae_mobile_certificado.png';
import philipsRelatoriosAdmCertImg from '../assets/certificates/philips_relatorios_adm_certificado.png';
import excelClubDashboardsCertImg from '../assets/certificates/excel_club_dashboards_certificado.png';

interface Certificate {
  id: string;
  titulo: string;
  instituicao: string;
  tag: 'Desenvolvimento' | 'Business Intelligence' | 'Ciência de Dados' | 'Banco de Dados' | 'Automação & IA' | 'Estatística' | 'Certificado' | 'Mobile' | 'Relatório' | 'Power BI & Excel';
  imageSrc: string;
  images?: string[];
  credentialUrl?: string;
}

export default function Certificates() {
  const certificates: Certificate[] = [
    {
      id: 'leroy-merlin-reconhecimento',
      titulo: 'Certificado de Elogio e Reconhecimento dos clientes',
      instituicao: 'Leroy Merlin',
      tag: 'Certificado',
      imageSrc: cert1,
      images: [cert1, cert2, cert3, cert4, cert5, cert6]
    },
    {
      id: 'flask-dev',
      titulo: 'Flask: avançando no desenvolvimento web com Python',
      instituicao: 'Alura',
      tag: 'Desenvolvimento',
      imageSrc: flaskCertImg,
      credentialUrl: 'https://cursos.alura.com.br/certificate/emersonvicosa/flask-desenvolvimento-web',
    },
    {
      id: 'estatistica-python',
      titulo: 'Estatística com Python: frequências e medidas',
      instituicao: 'Alura',
      tag: 'Estatística',
      imageSrc: estatisticaCertImg,
      credentialUrl: 'https://cursos.alura.com.br/certificate/emersonvicosa/estatistica-distribuicoes-e-medidas',
    },
    {
      id: 'python-oo',
      titulo: 'Python: Orientação a objetos',
      instituicao: 'Alura',
      tag: 'Desenvolvimento',
      imageSrc: pythonOOCertImg,
      credentialUrl: 'https://cursos.alura.com.br/certificate/emersonvicosa/python-3-avancando-orientacao-objetos',
    },
    {
      id: 'ifrs-bd',
      titulo: 'Banco de Dados 1: fundamentos',
      instituicao: 'Instituto Federal do Rio Grande do Sul',
      tag: 'Banco de Dados',
      imageSrc: ifrsBdCertImg,
      credentialUrl: 'https://drive.google.com/drive/u/0/folders/136lUGy72jTOv3W3CUXbe_mOrqfTQH2sl',
    },
    {
      id: 'vivae-ia',
      titulo: 'Inteligência Artificial: Potencialize sua Carreira',
      instituicao: 'VivaE',
      tag: 'Automação & IA',
      imageSrc: vivaeIaCertImg,
      credentialUrl: 'https://drive.google.com/drive/u/0/folders/1Ywk9QvNCQrjASHtGLcOXb6zW26240nRm',
    },
    {
      id: 'vivae-mobile',
      titulo: 'Fundamentos Desenvolvimento Mobile',
      instituicao: 'VivaE',
      tag: 'Mobile',
      imageSrc: vivaeMobileCertImg,
      credentialUrl: 'https://drive.google.com/drive/u/0/folders/1Ywk9QvNCQrjASHtGLcOXb6zW26240nRm',
    },
    {
      id: 'philips-relatorios-adm',
      titulo: 'Gerenciador de Relatórios Conhecendo a Função',
      instituicao: 'Philips',
      tag: 'Relatório',
      imageSrc: philipsRelatoriosAdmCertImg,
      credentialUrl: 'https://drive.google.com/drive/u/0/folders/1o2GCuArvofuUpDb5NVeim8dcojqPWmEA',
    },
    {
      id: 'excel-club-dashboards',
      titulo: 'Dashboards no Excel e Power BI',
      instituicao: 'Excel Club',
      tag: 'Power BI & Excel',
      imageSrc: excelClubDashboardsCertImg,
      credentialUrl: 'https://drive.google.com/drive/u/0/folders/136lUGy72jTOv3W3CUXbe_mOrqfTQH2sl',
    },
  ];

  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);

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
      case 'Estatística':
        return 'bg-rose-500/10 text-rose-400 border border-rose-500/20';
      case 'Certificado':
        return 'bg-teal-500/10 text-teal-400 border border-teal-500/20';
      case 'Mobile':
        return 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20';
      case 'Relatório':
        return 'bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20';
      case 'Power BI & Excel':
        return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
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

  const handlePrevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCert || !selectedCert.images) return;
    setCurrentImgIndex((prev) => (prev === 0 ? selectedCert.images!.length - 1 : prev - 1));
  };

  const handleNextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCert || !selectedCert.images) return;
    setCurrentImgIndex((prev) => (prev === selectedCert.images!.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="snap-align-start min-h-screen lg:h-screen w-full flex flex-col justify-between px-6 sm:px-12 lg:px-24 relative overflow-visible lg:overflow-hidden bg-[#0B0B0F] border-t border-[#272835] py-12 lg:py-16">
      
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
          Certificados & Cursos
        </h2>
      </motion.div>

      {/* Grid List */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center z-10 my-8 flex-1 overflow-visible py-2">
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
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-semibold tracking-wider px-2.5 py-0.5 rounded-full uppercase ${getTagStyles(cert.tag)}`}>
                    {cert.tag}
                  </span>
                  {cert.images && (
                    <span className="text-[9px] font-medium px-2 py-0.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                      {cert.images.length} fotos
                    </span>
                  )}
                </div>
                {cert.images ? (
                  <Images className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
                ) : (
                  <Award className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
                )}
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

            <div className="mt-4 flex gap-2 w-full">
              <button
                onClick={() => {
                  setSelectedCert(cert);
                  setCurrentImgIndex(0);
                }}
                className={`flex items-center justify-center gap-1.5 py-2.5 bg-secondary/80 hover:bg-[#151550]/40 border border-[#272835] hover:border-[#44444A] text-xs font-semibold text-gray-300 hover:text-white rounded-2xl transition-all duration-300 ${cert.credentialUrl ? 'flex-1' : 'w-full'}`}
              >
                <Eye className="w-4 h-4" />
                <span>Visualizar</span>
              </button>
              
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 hover:border-indigo-500/40 text-xs font-semibold text-indigo-400 hover:text-white rounded-2xl transition-all duration-300 flex-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Validar</span>
                </a>
              )}
            </div>
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
              <div className="bg-[#0D0C22] border border-[#272835] p-4 rounded-3xl shadow-2xl flex flex-col items-center overflow-hidden w-full relative">
                {/* Navigation Arrows for Gallery */}
                {selectedCert.images && selectedCert.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImg}
                      className="absolute left-6 top-[40%] transform -translate-y-1/2 p-2.5 bg-[#0D0C22]/80 hover:bg-indigo-500/20 border border-[#272835] hover:border-indigo-500/40 text-white rounded-full transition-all duration-300 z-10 flex items-center justify-center backdrop-blur-sm"
                      aria-label="Imagem anterior"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={handleNextImg}
                      className="absolute right-6 top-[40%] transform -translate-y-1/2 p-2.5 bg-[#0D0C22]/80 hover:bg-indigo-500/20 border border-[#272835] hover:border-indigo-500/40 text-white rounded-full transition-all duration-300 z-10 flex items-center justify-center backdrop-blur-sm"
                      aria-label="Próxima imagem"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Interactive Image Frame */}
                <div className="relative w-full flex items-center justify-center min-h-[40vh] max-h-[70vh] overflow-hidden rounded-2xl bg-[#070614]/60 border border-[#1f202b]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedCert.images ? selectedCert.images[currentImgIndex] : selectedCert.imageSrc}
                      src={selectedCert.images ? selectedCert.images[currentImgIndex] : selectedCert.imageSrc}
                      alt={`Certificado de ${selectedCert.titulo} - Imagem ${currentImgIndex + 1}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="max-w-full max-h-[70vh] object-contain"
                      loading="lazy"
                    />
                  </AnimatePresence>
                </div>

                {/* Thumbnail indicators */}
                {selectedCert.images && selectedCert.images.length > 1 && (
                  <div className="flex gap-2 mt-4 justify-center items-center flex-wrap">
                    {selectedCert.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImgIndex(idx);
                        }}
                        className={`w-12 h-8 rounded-lg overflow-hidden border transition-all duration-300 ${
                          currentImgIndex === idx 
                            ? 'border-indigo-400 scale-105 shadow-md shadow-indigo-500/10' 
                            : 'border-[#272835] opacity-50 hover:opacity-80'
                        }`}
                      >
                        <img src={img} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
                
                {/* Certificate info footer */}
                <div className="w-full mt-3 px-3 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-3">
                  <div className="flex flex-col max-w-[70%]">
                    <h4 className="text-sm font-bold text-white truncate md:whitespace-normal">
                      {selectedCert.titulo}
                      {selectedCert.images && ` (${currentImgIndex + 1} de ${selectedCert.images.length})`}
                    </h4>
                    <p className="text-[10px] text-gray-400">{selectedCert.instituicao}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {selectedCert.credentialUrl && (
                      <a
                        href={selectedCert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 hover:border-indigo-500/50 text-[10px] font-semibold text-indigo-300 hover:text-white rounded-xl transition-all duration-300"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>
                          {selectedCert.credentialUrl.includes('alura.com.br') 
                            ? 'Validar na Alura' 
                            : 'Validar Credencial'}
                        </span>
                      </a>
                    )}
                    <span className={`text-[9px] font-semibold px-2.5 py-0.5 rounded-full uppercase ${getTagStyles(selectedCert.tag)}`}>
                      {selectedCert.tag}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
