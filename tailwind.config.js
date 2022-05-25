module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [{
        light: {
          "primary": "#176F6B",
          "secondary": "#ffc000",
          "accent": "#ffedd5",
          "neutral": "#f3f4f6",
          "base-100": "#FFFFFF",
          "info": "#98a8dd",
          "success": "#1bbb70",
          "warning": "#df7e07",
          "error": "#fa5c5c",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}
