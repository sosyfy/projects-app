
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode : 'class',
  theme: {
    colors: {
      "green-dark": "#00ad45",
      "green-light": "#05ce91" ,
      "slate-light": "#f5f6f7",
      "slate-dark": "#e3e1de",
      "black-light": "#343433",
      "black-dark": "#020202",
      "white-text": "#f6f6f8",
      "white": "#ffffff",
      "gray-dark": "#d6d6d6",
      "gray-light": "#f2f2f2",
      "dark-primary": "#121212",
      "dark-secondary": "#000000e0",
      "black" : "#000000"
    },
    fontFamily: {
      'jsans': ['Josefin+Sans', 'sans-serif'],
      'mulish': ['Mulish', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        'sans': ['Mulish', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
};
