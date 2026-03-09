import React from 'react';
export function Footer() {
  return (
    <footer className="py-12 px-6 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Este es un pequeño aporte anónimo para la comunidad. Hecho con amor{' '}
          <span className="text-red-500">❤️</span>.
          <br className="hidden md:block" />
          <span className="mt-2 md:mt-0 block md:inline md:ml-1">
            Todo el crédito del contenido y sabiduría a Jorge Serratos.
          </span>
        </p>
      </div>
    </footer>);

}