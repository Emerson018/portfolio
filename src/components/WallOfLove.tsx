import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

interface Feedback {
  id: string;
  texto: string;
  autor: string;
  empresa: string;
}

export default function WallOfLove() {
  const feedbacks: Feedback[] = [
    {
      id: 'feedback-1',
      texto: '"O Emerson tem se revelado um verdadeiro diferencial para a nossa equipe. Sua trajetória é marcada por um comprometimento exemplar e uma assiduidade impecável. Mais do que apenas cumprir tarefas, ele demonstra um desejo genuíno de evolução, absorvendo com profundidade o conhecimento compartilhado pelos nossos colaboradores. Sua curva de aprendizado é acelerada, o que o permite dominar novas funções com uma agilidade impressionante e uma facilidade notável."',
      autor: 'Supervisora de TI',
      empresa: 'Hospital Ernesto Dornelles',
    },
    {
      id: 'feedback-2',
      texto: '"Emerson no seu dia a dia sempre procura fazer o seu melhor, se empenha para buscar os seus resultados e da sua seção, sempre entusiasmado com as conquistas e disposto a buscar. Muito obrigada Emerson pela tua dedicação à seção de Elétrica e à nossa loja. Muito orgulho de te ter em minha equipe."',
      autor: 'Gerente de loja',
      empresa: 'Leroy Merlin',
    },
    {
      id: 'feedback-3',
      texto: '"Meu amigo Emerson, me ajudou muito nesses 2 meses em que me mudei para a seção de elétrica, é uma pessoa que era um pouco introvertida, mas que busca primeiramente conhecer ao redor para poder dar abertura, tem sido meu grande amigo, a quem vou ser eternamente grata por toda compaixão, carisma e ensinamentos sobre os produtos."',
      autor: 'Coordenadora de loja',
      empresa: 'Leroy Merlin',
    },
    {
      id: 'feedback-4',
      texto: '"Emerson um cara sempre disposto a ajudar, super inteligente, sempre por dentro das novidades. Como colega dentro desses quase 3 anos trabalhando na mesma sessão, vejo além de um colega um grande amigo."',
      autor: 'Colaborador',
      empresa: 'Leroy Merlin',
    },
  ];

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

  const proofLink = "https://drive.google.com/drive/folders/1ho6x9QoFarjkbm_5-Z48MU4m-JBpLPXr";

  return (
    <section className="snap-align-start min-h-screen lg:h-screen w-full flex flex-col justify-between px-6 sm:px-12 lg:px-24 relative overflow-visible lg:overflow-hidden bg-[#151550] border-t border-[#272835] py-12 lg:py-16">
      
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

      {/* Grid Container (2x2 on desktop for symmetry with 4 items) */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 z-10 my-8 flex-1 overflow-visible py-2">
        {feedbacks.map((fb, index) => (
          <motion.div
            key={fb.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={index * 0.08}
            variants={slideInVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#0B0B0F]/90 border border-[#272835] rounded-3xl p-6 flex flex-col justify-between hover:border-[#44444A] transition-colors duration-300 relative group shadow-lg"
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

              <a
                href={proofLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-1.5 w-full py-2.5 bg-secondary/80 hover:bg-[#151550]/40 border border-[#272835] hover:border-[#44444A] text-xs font-semibold text-gray-300 hover:text-white rounded-2xl transition-all duration-300 text-center"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Ver feedbacks</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Spacing/Footer Separator */}
      <div className="h-2 w-full lg:block hidden"></div>

    </section>
  );
}
