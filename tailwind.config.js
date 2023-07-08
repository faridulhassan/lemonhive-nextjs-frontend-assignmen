/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#90E900",
        "primary-200": "#D3F699",
        secondary: "#EFE600",
        neutral: "#1E2A37",
        neutral2: "#172029",
      },
      colors: {
        primary: "#90E900",
        "primary-200": "#D3F699",
        secondary: "#EFE600",
        neutral: "#1E2A37",
        neutral2: "#172029",
      },
    },
    fontSize: {
      h1: "96px",
      h2: "64px",
      h3: "40px",
      h4: "28px",
      h5: "20px",
      base: "16px",
      ssm: "14px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};
