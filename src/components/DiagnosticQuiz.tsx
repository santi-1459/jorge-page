import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface Question {
  question: string;
  optionA: string;
  optionB: string;
}
const QUESTIONS: Question[] = [
{
  question: '¿Qué haces cuando un proyecto sale de tu control?',
  optionA: 'Me estreso y presiono más.',
  optionB: 'Hago mi parte y suelto el resultado.'
},
{
  question: '¿Qué te motiva a tomar decisiones importantes?',
  optionA: 'El reconocimiento y el miedo a fallar.',
  optionB: 'El propósito y servir a los demás.'
},
{
  question: '¿Cómo comienzas tus mañanas?',
  optionA: 'Revisando urgencias y redes.',
  optionB: 'Agradeciendo y alineando mi día con Dios.'
},
{
  question: '¿Cómo administras tu agenda?',
  optionA: 'Siempre estoy ocupado corriendo.',
  optionB: 'Tengo tiempos sagrados de silencio.'
},
{
  question: 'Ante una crisis, ¿cuál es tu estado mental?',
  optionA: 'Ansiedad y necesidad de control.',
  optionB: 'Paz sabiendo que no estoy solo.'
}];

const RESULT_A = `Aplica lo que dice Jorge: "Entregar tu vida no es rendirte, es soltar el peso que nunca fue tuyo". Estás cargando demasiado y operando desde el control. Necesitas pausar y alinear tus mañanas. Versículo guía: "Vengan a mí todos ustedes que están cansados y agobiados, y yo les daré descanso." - Mateo 11:28.`;
const RESULT_B = `¡Vas por excelente camino! Estás aplicando la enseñanza de Jorge: "Las personas en paz tomamos mejores decisiones". Mantén esa paz estratégica y sigue liderando desde el servicio, dejando que Dios multiplique tus esfuerzos. Versículo guía: "Pon en manos del Señor todas tus obras, y tus proyectos se cumplirán." - Proverbios 16:3.`;
export function DiagnosticQuiz() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const handleAnswer = (questionIndex: number, answer: string) => {
    if (showResults) return;
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer
    }));
  };
  const isComplete = Object.keys(answers).length === QUESTIONS.length;
  const getResult = () => {
    const aCount = Object.values(answers).filter((a) => a === 'A').length;
    return aCount >= 3 ? RESULT_A : RESULT_B;
  };
  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
  };
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          className="bg-serene-50 rounded-3xl p-8 md:p-12 shadow-sm border border-serene-100">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Diagnóstico Personal
            </h2>
            <p className="text-serene-700 font-medium">¿Desde dónde operas?</p>
          </div>

          <div className="space-y-8">
            {QUESTIONS.map((q, qIdx) => {
              const questionNum = qIdx + 1;
              return (
                <div key={qIdx} className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-800">
                    {questionNum}. {q.question}
                  </h3>
                  <div className="space-y-3">
                    {/* Option A */}
                    <label
                      onClick={() => handleAnswer(questionNum, 'A')}
                      className={`flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${answers[questionNum] === 'A' ? 'border-serene-500 bg-white shadow-md' : 'border-transparent bg-white/60 hover:bg-white hover:shadow-sm'}`}>

                      <div className="flex-shrink-0 mt-0.5">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${answers[questionNum] === 'A' ? 'border-serene-500' : 'border-slate-300'}`}>

                          {answers[questionNum] === 'A' &&
                          <motion.div
                            initial={{
                              scale: 0
                            }}
                            animate={{
                              scale: 1
                            }}
                            className="w-2.5 h-2.5 rounded-full bg-serene-500" />

                          }
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-700 text-sm">
                          {q.optionA}
                        </span>
                      </div>
                    </label>

                    {/* Option B */}
                    <label
                      onClick={() => handleAnswer(questionNum, 'B')}
                      className={`flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${answers[questionNum] === 'B' ? 'border-serene-500 bg-white shadow-md' : 'border-transparent bg-white/60 hover:bg-white hover:shadow-sm'}`}>

                      <div className="flex-shrink-0 mt-0.5">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${answers[questionNum] === 'B' ? 'border-serene-500' : 'border-slate-300'}`}>

                          {answers[questionNum] === 'B' &&
                          <motion.div
                            initial={{
                              scale: 0
                            }}
                            animate={{
                              scale: 1
                            }}
                            className="w-2.5 h-2.5 rounded-full bg-serene-500" />

                          }
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-700 text-sm">
                          {q.optionB}
                        </span>
                      </div>
                    </label>
                  </div>
                </div>);

            })}
          </div>

          <div className="mt-10 text-center">
            {!showResults ?
            <button
              onClick={() => setShowResults(true)}
              disabled={!isComplete}
              className={`px-8 py-3 rounded-full font-medium transition-all ${isComplete ? 'bg-serene-600 text-white hover:bg-serene-700 hover:shadow-lg hover:shadow-serene-500/30 active:scale-95' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}>

                Ver mi diagnóstico
              </button> :

            <AnimatePresence>
                <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeOut'
                }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-serene-100 text-left">

                  <h4 className="text-lg font-semibold text-serene-700 mb-3">
                    Tu Diagnóstico:
                  </h4>
                  <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                    {getResult()}
                  </p>
                  <button
                  onClick={handleReset}
                  className="mt-6 text-sm text-slate-500 hover:text-slate-800 underline underline-offset-4 transition-colors">

                    Volver a intentar
                  </button>
                </motion.div>
              </AnimatePresence>
            }
          </div>
        </motion.div>
      </div>
    </section>);

}