/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'navColor':'#4392F1',
        'searchBg':'#F2F1FA',
        'searchColor':'#767494',
        'cardColor':'#5D5A88',
        'newsColor':'#9795B5',
        'statisticBg':'#EA526F',
        'footerBg':'#4392F1',
        'commonInfo':'#BCBACD',
        'gold-text':'#D0B369'
      },
      width: {
        '1000': '1000px',
        '1220': '1220px',
        '388':'388px',
        '1140': '1140px',
        '600':'600px',
        '555':'555px',
        '500':'500px',
        '28p':'31%',
        '334':'334px',
        '23p':'23%',
        '45%':'48%',
        '711':'711px',
        '40%':'40%',
        '60%':'60%',
        '750':'750px',
        '360':'360px',
        '855':'855px',
        '284':'284px',
        '364':'364px',
        '90%':"90%"
      },
      height:{
        '600': '600px',
        '670':'670px',
        '500':'500px',
        '450':'457px',
        '540':'540px',
        '300':'300px',
        '284':'284px',
        '320':'320px',
        '520':'520px',
        '364':'364px',
        '660':'660px'
      },
      maxHeight: {
        '250': '250px',
      },
      screens: {
        'mobile':'640px',
        'laptop':'1024px'
      },
      spacing: {
        '500': '500px',
        '40%':'40%'
      },
      backgroundImage: {
        "bg-too":"url('/public/tooBg.png')"
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
