import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Sun, Heart, Clock, Moon } from 'lucide-react';
const STEPS = [
{
  icon: Sun,
  title: 'Paso 1 - Reto de 5 minutos',
  description:
  'Antes del celular, agradece y di: "Señor, este día es tuyo, guía mis decisiones".'
},
{
  icon: Heart,
  title: 'Paso 2 - Filtro del Servicio',
  description:
  'Antes de cada junta importante, pregúntate: "¿Estoy actuando desde el ego o desde el servicio?".'
},
{
  icon: Clock,
  title: 'Paso 3 - Método de 30 segundos',
  description:
  'Si llega la ansiedad en el día, pausa y repite mentalmente: "Dios, esto también está en tus manos".'
},
{
  icon: Moon,
  title: 'Paso 4 - Evaluación nocturna',
  description:
  'Antes de dormir, revisa: "¿Dónde reaccioné desde el ego hoy y qué debo ajustar mañana?".'
}];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};
export function ActionPlan() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">

            Plan de Acción
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-lg text-slate-600 max-w-2xl mx-auto">

            Un método ordenado para mantener la paz y el enfoque todos los días.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start">

                <div className="w-12 h-12 rounded-2xl bg-serene-50 text-serene-600 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>);

          })}
        </motion.div>
      </div>
    </section>);

}