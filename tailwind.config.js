/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jx,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBg: '#0a0a0c',
        accentPink: '#ff4d8d',
        accentViolet : '#B26CFF',
        accentLime:'#a3e635',
        mutedGrey: '#8e8e93',
      },

      fontFamily:{
        serif:['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui','sans-serif'],
      },

      keyframes:{
        dropInEye:{
          '0%':{transform: 'translateY(-120px) scale(0.2)', opacity: '0'},
          '70%':{transform: 'translateY(10px) scale(1.1)', opacity: '0.5'},
          '100%':{transform: 'translateY(0) scale(1)', opacity: '1'},
        },
        bloomOut:{
          '0%': {transform: 'scale(0.4) rotate(-8deg)', opacity:'0', filter:'blur(10px)'},
          '60%': { filter:'blur(0px)'},
          '100%': {transform: 'scale(01) rotate(0deg)', opacity:'1'},
        },
      },

      animation:{
        'drop-eye' :'dropInEye 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'bloom': 'bloomOut 1.1s cubic-bezier(0.16, 1, 0.3,1) 0.3s forwards',
      },

    },
  },
  plugins: [],
}

