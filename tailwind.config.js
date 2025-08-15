module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '400px',   // デフォルトは 640px
      md: '800px',   // デフォルトは 768px
      lg: '1024px',  // デフォルトは 1024px
      xl: '1280px',  // デフォルトは 1280px
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}