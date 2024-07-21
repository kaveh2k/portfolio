/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "mid-screen": "950px",
        "above-mid-screen": "1024px",
        "lg-mid-screen": "1412px",
      },
      keyframes: {
        "fade-in-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        wiggle: {
          "5%": {
            transform: "rotate(-5deg)",
          },
          "20%": {
            transform: "rotate(5deg)",
          },
          "40%": {
            transform: "rotate(-5deg)",
          },
          "80%": {
            transform: "rotate(5deg)",
          },
        },
        flip: {
          "0%": {
            transform: "rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg)",
          },
          "100%": {
            transform: "rotateY(0deg)",
          },
        },
        wiggle: {
          "5%": {
            transform: "rotate(-5deg)",
          },
          "20%": {
            transform: "rotate(5deg)",
          },
          "40%": {
            transform: "rotate(-5deg)",
          },
          "80%": {
            transform: "rotate(5deg)",
          },
        },
        flip: {
          "0%": {
            transform: "rotateY(-180deg)",
          },
          "50%": {
            transform: "rotateY(-90deg)",
          },
          "100%": {
            transform: "rotateY(0deg)",
          },
        },
        tada: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "10%, 20%": {
            transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          },
          "40%, 60%, 80%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
      },
      animation: {
        fadeinleft: "fade-in-left 1s ease-in-out 0.25s 1",
      },
    },
  },
  plugins: [],
};
