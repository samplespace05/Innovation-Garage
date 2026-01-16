// import type { Config } from "tailwindcss";

// const config: Config = {
//   darkMode: "class",
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         "primary": "#FF6A00",       // Sunset Orange
//         "secondary": "#D726FF",     // Hot Magenta
//         "highlight": "#E0AAFF",     // Lavender
//         "background-main": "#121212", // Charcoal
//         "surface-card": "#1E1E1E",  // Darker card surface
//         "text-main": "#FAFAFA",     // Off White
//         // Keeping previous names for compatibility if needed
//         "neon-orange": "#FF6A00",
//         "neon-magenta": "#D726FF",
//         "cyber-black": "#121212",
//       },
//       fontFamily: {
//         pixel: ['var(--font-vt323)', 'monospace'],
//         display: ['var(--font-grotesk)', 'sans-serif'],
//         funky: ['var(--font-syne)', 'sans-serif'],
//       },
//       animation: {
//         marquee: 'marquee 25s linear infinite',
//         'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//       },
//       keyframes: {
//         marquee: {
//           '0%': { transform: 'translateX(0%)' },
//           '100%': { transform: 'translateX(-100%)' },
//         }
//       },
//       backgroundImage: {
//         'scanlines': "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1))",
//         // 'grid-pattern': "radial-gradient(rgba(224, 170, 255, 0.1) 1px, transparent 1px)",
//         'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23D726FF' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E\")",
//       }
//     },
//   },
//   plugins: [
//     require('tailwind-scrollbar')({ nocompatible: true }),
//   ],
// };
// export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FF6A00",       // Sunset Orange
        "secondary": "#D726FF",     // Hot Magenta
        "highlight": "#E0AAFF",     // Lavender
        "background-main": "#121212", // Charcoal
        "surface-card": "#1E1E1E",  // Darker card surface
        "text-main": "#FAFAFA",     // Off White
        
        // Aliases for compatibility
        "neon-orange": "#FF6A00",
        "neon-magenta": "#D726FF",
        "cyber-black": "#121212",
        
        // Specifics from code1.html
        "cyber-lavender": "#E6E6FA", 
      },
      fontFamily: {
        pixel: ['var(--font-vt323)', 'monospace'],
        display: ['var(--font-grotesk)', 'sans-serif'],
        funky: ['var(--font-syne)', 'sans-serif'],
        
        // NEW: Added for code1.html
        silkscreen: ['var(--font-silkscreen)', 'cursive'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backgroundImage: {
        'scanlines': "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1))",
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23D726FF' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        // NEW: Radial pattern from code1.html
        'grid-radial': "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        // NEW: Specific shadows from code1.html
        "sunset-glow": "0 0 30px -5px rgba(255, 106, 0, 0.4)",
        "neon-hover": "0 0 15px rgba(215, 38, 255, 0.5)",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
export default config;  