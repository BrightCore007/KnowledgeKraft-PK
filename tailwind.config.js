tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Indigo-500 equivalent
        secondary: "#a855f7", // Purple-500
        accent: "#f97316", // Orange-500
        "background-light": "#f8fafc",
        "background-dark": "#0f172a",
        "surface-light": "#ffffff",
        "surface-dark": "#1e293b",
      },
      fontFamily: {
        display: ["'Outfit'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "slide-image": "slideImage 25s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        // Synchronized horizontal slide animation for 6 slides (5 unique + 1 clone)
        // Percentages are based on 1/6th (16.666%) increments of the container width
        slideImage: {
          "0%, 16%": { transform: "translateX(0%)" },
          "20%, 36%": { transform: "translateX(-16.666667%)" },
          "40%, 56%": { transform: "translateX(-33.333333%)" },
          "60%, 76%": { transform: "translateX(-50%)" },
          "80%, 96%": { transform: "translateX(-66.666667%)" },
          "100%": { transform: "translateX(-83.333333%)" },
        },
      },
    },
  },
};
