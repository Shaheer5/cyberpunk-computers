/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        blender400: ["BlenderBook400", "sans-serif"],
        blender700: ["BlenderBold700", "sans-serif"],
        refinery700: ["RefineryBold700", "sans-serif"],
      },
      colors: {
        'red': 'var(--red)',
        'black': 'var(--black)',
        'cyan': 'var(--cyan)',
        'yellow': 'var(--yellow)',
        'grey': 'var(--grey)',
        'darkred': 'var(--dark-red)',
      },
      backgroundColor: {
        '--red': 'var(--red)',
        '--cyan': 'var(--cyan)',
        '--yellow': 'var(--yellow)',
        '--darkred': 'var(--dark-red)',
        '--grey': 'var(--grey)',
        '--white': 'var(--white)',
      },
      screens: {
        'xs': '320px',
        // => @media (min-width: 640px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}