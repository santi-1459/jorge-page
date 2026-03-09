import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
const VIDEOS = [
{
  id: 'tab1',
  title: 'Video 1: La Clave',
  embedUrl: 'https://www.youtube.com/embed/I22KPaejcTI',
  moments: [
  {
    time: '06:24',
    seconds: 384,
    title: 'El error de controlarlo todo',
    quote:
    'Entregar tu vida no es rendirte, es soltar el peso que nunca fue tuyo.'
  },
  {
    time: '12:55',
    seconds: 775,
    title: 'Entregar es alineación',
    quote: 'Es levantarte después de orar, y planear después de confiar.'
  },
  {
    time: '16:15',
    seconds: 975,
    title: 'La paz como estrategia',
    quote:
    'Las personas en paz tomamos mejores decisiones; Dios ya está en tu futuro.'
  },
  {
    time: '19:35',
    seconds: 1175,
    title: 'Transforma tus mañanas',
    quote: 'Cambia el orden: primero alineación, luego acción.'
  },
  {
    time: '21:13',
    seconds: 1273,
    title: 'Del éxito al propósito',
    quote:
    'El verdadero éxito es saber para quién vives y para quién lo logras.'
  }]

},
{
  id: 'tab2',
  title: 'Video 2: El Centro',
  embedUrl: 'https://www.youtube.com/embed/-ZgRp6iZR5w',
  moments: [
  {
    time: '02:40',
    seconds: 160,
    title: 'La autosuficiencia te engaña',
    quote: 'Te hace fuerte por fuera pero débil por dentro.'
  },
  {
    time: '05:40',
    seconds: 340,
    title: 'Redefine tu éxito',
    quote:
    'Ya no compites con el mundo, te alías con tu visión y propósito.'
  },
  {
    time: '08:18',
    seconds: 498,
    title: 'Sometimiento del Ego',
    quote:
    'El poder real aparece cuando sometes el ego; esto es protección contra ti mismo.'
  },
  {
    time: '12:00',
    seconds: 720,
    title: 'Fe Activa',
    quote:
    'La fe real es activa, es actuar con dirección. Tú haces lo natural, Dios lo sobrenatural.'
  },
  {
    time: '15:12',
    seconds: 912,
    title: 'Redefine el tiempo',
    quote:
    'Dejas de vivir como si la vida fuera infinita y dejas de estar solo "ocupado".'
  }]

}];

export function VideoTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [iframeSrc, setIframeSrc] = useState<string>(
    VIDEOS[0].embedUrl + '?enablejsapi=1'
  );
  const [activeMoment, setActiveMoment] = useState<number | null>(null);
  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setIframeSrc(VIDEOS[index].embedUrl + '?enablejsapi=1');
    setActiveMoment(null);
  };
  const handleSeek = (seconds: number, momentIndex: number) => {
    const baseUrl = VIDEOS[activeTab].embedUrl;
    setIframeSrc(`${baseUrl}?start=${seconds}&autoplay=1`);
    setActiveMoment(momentIndex);
  };
  return (
    <section id="contenido" className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
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
          className="flex flex-col items-center">

          {/* Tabs Navigation */}
          <div className="flex p-1 bg-white rounded-full shadow-sm mb-10 border border-slate-100">
            {VIDEOS.map((video, index) =>
            <button
              key={video.id}
              onClick={() => handleTabChange(index)}
              className={`relative px-6 py-3 text-sm md:text-base font-medium rounded-full transition-colors ${activeTab === index ? 'text-white' : 'text-slate-600 hover:text-slate-900'}`}>

                {activeTab === index &&
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-serene-600 rounded-full"
                transition={{
                  type: 'spring',
                  bounce: 0.2,
                  duration: 0.6
                }} />

              }
                <span className="relative z-10">{video.title}</span>
              </button>
            )}
          </div>

          {/* Tab Content */}
          <div className="w-full bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{
                  opacity: 0,
                  y: 10
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: -10
                }}
                transition={{
                  duration: 0.3
                }}
                className="p-6 md:p-8">

                {/* Video Embed */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 mb-8 shadow-inner">
                  <iframe
                    key={iframeSrc}
                    src={iframeSrc}
                    title={VIDEOS[activeTab].title}
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />

                </div>

                {/* Key Moments */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-6 px-2">
                    Momentos Clave
                  </h3>
                  <div className="space-y-4">
                    {VIDEOS[activeTab].moments.map((moment, idx) =>
                    <motion.div
                      key={idx}
                      initial={{
                        opacity: 0,
                        x: -10
                      }}
                      animate={{
                        opacity: 1,
                        x: 0
                      }}
                      transition={{
                        delay: idx * 0.1
                      }}
                      onClick={() => handleSeek(moment.seconds, idx)}
                      className={`group flex gap-4 items-start p-4 rounded-2xl transition-colors cursor-pointer ${activeMoment === idx ? 'bg-serene-50 ring-1 ring-serene-200' : 'hover:bg-serene-50'}`}>

                        <button
                        className={`flex-shrink-0 flex flex-col items-center justify-center w-12 h-12 rounded-full shadow-sm transition-all ${activeMoment === idx ? 'bg-serene-600 text-white border-serene-600' : 'bg-white border border-slate-200 text-serene-600 group-hover:bg-serene-600 group-hover:text-white group-hover:border-serene-600'}`}>

                          <Play className="w-5 h-5 ml-0.5" />
                        </button>
                        <div className="flex-1 pt-1">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-sm font-medium text-serene-600 bg-serene-100 px-2 py-0.5 rounded-md">
                              {moment.time}
                            </span>
                            <h4 className="font-semibold text-slate-900">
                              {moment.title}
                            </h4>
                          </div>
                          <p className="text-slate-600 text-sm md:text-base italic">
                            &ldquo;{moment.quote}&rdquo;
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>);

}