import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
export function HeroSection() {
  const scrollToContent = () => {
    const element = document.getElementById('contenido');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-white">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-serene-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 12
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}
          className="mb-8">

          <span className="inline-block px-5 py-2 rounded-full border border-serene-200 bg-serene-50 text-serene-700 text-sm md:text-base font-semibold tracking-wide">
            Basado en las enseñanzas de{' '}
            <span className="font-bold text-serene-800">Jorge Serratos</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">

          Pon a DIOS primero y <span className="text-serene-600">TODO</span> lo
          demás funcionará.
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: 'easeOut'
          }}
          className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">

          Pasa de la presión y el control a una paz que sobrepasa todo
          entendimiento. Sigue el camino y los pasos prácticos de{' '}
          <span className="font-bold text-slate-800">Jorge Serratos</span>.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: 'easeOut'
          }}>

          <button
            onClick={scrollToContent}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-serene-600 text-white font-medium text-lg rounded-full overflow-hidden transition-all hover:bg-serene-700 hover:shadow-lg hover:shadow-serene-500/30 active:scale-95">

            <span>Ver y Aplicar hoy</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>);

}