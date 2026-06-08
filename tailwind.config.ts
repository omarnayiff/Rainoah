import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Paleta extraída dos prints da Rainoah
        brand: {
          blue: "#0067B4", // azul vivo (faixa de cupom / selos)
          deep: "#004594", // azul profundo (seções 4 cabeças / FAQ)
          navy: "#011C3D", // navy escuro (gradiente "por que escolher")
          card: "#214A7D", // card navy (socorro)
          cardlight: "#2F5B90", // card azul (resultados)
          sky: "#3B9EE8", // azul claro de destaque/ícones
        },
        accent: {
          orange: "#FF4D00", // CTA laranja
          coral: "#FF5C5C", // cards "antes" (resultados)
        },
        ink: "#0F0F0F", // preto do acordeão
        toggle: "#1D1D1D", // botão toggle do acordeão
        mist: "#F5F5F5", // fundo cinza (depoimentos)
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "Arial", "sans-serif"],
        logo: ["var(--font-logo)", "cursive"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 18px 40px -18px rgba(0,0,0,0.25)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(2rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-2rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(2rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-left": "fade-in-left 0.6s ease-out forwards",
        "fade-in-right": "fade-in-right 0.6s ease-out forwards",
        "fade-in-scale": "fade-in-scale 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
