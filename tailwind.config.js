/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      blender400: ["BlenderBook400", "sans-serif"],
      blender700: ["BlenderBold700", "sans-serif"],
      refinery700: ["RefineryBold700", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        '--red': 'var(--red)',
      },
    },
  },
  plugins: [],
}