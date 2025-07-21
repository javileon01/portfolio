/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',               // Para archivos HTML en la raíz
    './src/**/*.html',        // Para HTML dentro de src y subcarpetas
    './src/**/*.js',          // Para JS si tienes componentes/scripts usando Tailwind
  ],
  theme: {
    extend: {
      screens: {
        'lgplus': '900px', // Pantalla grande
        'xxl': '1400px', // Pantalla extra grande
        '2xs': '480px', // Pantalla extra pequeña
        '3xs': '380px', // Pantalla extra extra pequeña
      },
    },
  },
  plugins: [],
}