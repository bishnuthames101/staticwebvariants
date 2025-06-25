/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF8FF',
          100: '#DBEEFF',
          200: '#B7DDFF',
          300: '#84C5FF',
          400: '#4DA9FF',  // Main primary color
          500: '#2B8AE5',
          600: '#1A6CBD',
          700: '#10508C',
          800: '#0A3B66',
          900: '#072544',
        },
        secondary: {
          50: '#F0F4F8', // Main gray color
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#102A43',
        },
        accent: {
          50: '#FFFAEB',
          100: '#FEEFC3',
          200: '#FDE58A',
          300: '#FDD43F',
          400: '#FDC500',
          500: '#E8B000',
          600: '#BB8E00',
          700: '#8F6A00',
          800: '#624700',
          900: '#3D2C00',
        },
        success: {
          500: '#22C55E',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};