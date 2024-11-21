import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#252424",
        secondmain: "#09090b",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Inter:["Inter" ,"serif"],
        Poppins:["Poppins" , "sans-serif"],
        jetbrainsmono:["JetBrains_Mono" , "monospace"]
      },
      screens:{
        'sm':'300px',
        'md':'768px',
        
      },
    },
  },
  plugins: [],
};
export default config;
