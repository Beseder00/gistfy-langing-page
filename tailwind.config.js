/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0A6E6C",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#FF6F61",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { boxShadow: "0 0 8px rgba(59, 130, 246, 0.15)" },
          "50%": { boxShadow: "0 0 12px rgba(59, 130, 246, 0.25)" },
        },
        "wave-animation": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "palm-sway": {
          "0%, 100%": { transform: "rotate(-2deg) scale(-1, 1)" },
          "50%": { transform: "rotate(2deg) scale(-1, 1)" },
        },
        "palm-sway-reverse": {
          "0%, 100%": { transform: "rotate(2deg)" },
          "50%": { transform: "rotate(-2deg)" },
        },
        "float-particle": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(10px, -10px)" },
          "50%": { transform: "translate(0, -20px)" },
          "75%": { transform: "translate(-10px, -10px)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%) skewX(-12deg)" },
          "100%": { transform: "translateX(200%) skewX(-12deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse 2s infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 15s infinite ease-in-out",
        "wave-slow": "wave-animation 13s ease-in-out infinite",
        "wave-medium": "wave-animation 10s ease-in-out infinite",
        "wave-fast": "wave-animation 7s ease-in-out infinite",
        "palm-sway": "palm-sway 6s ease-in-out infinite",
        "palm-sway-reverse": "palm-sway-reverse 6s ease-in-out infinite",
        "float-particle": "float-particle 6s ease-in-out infinite",
        "shimmer": "shimmer 3s infinite",
      },
      scrollSnapType: {
        x: "x mandatory",
        y: "y mandatory",
      },
      scrollSnapAlign: {
        start: "start",
        center: "center",
        end: "end",
      },
      utilities: {
        ".scrollbar-hide": {
          /* Firefox */
          "scrollbar-width": "none",
          /* IE and Edge */
          "-ms-overflow-style": "none",
          /* Chrome, Safari and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

