/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2b57c5",
        accent: "#0B7D5B",
        baseClr1: "#f0f2f7",
        denger: "#f05959",
        natural1: "#ba9e9f",
        natural2: "#332c23",
        natural3: "#ffff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "contact-image": "url('https://unsplash.it/1000/1000?image=789')",
      },
      minHeight: {
        "custom-min-h": "500px",
        "custom-h-form": "600px",
      },
      minWidth: {
        "custome-w": "400px",
      },
      gridTemplateColumns: {
        footerLayout: "repeat(auto-fit, minmax(14rem, 1fr))",
        productLayout: "repeat(auto-fit,minmax(13rem, 1fr))",
        productLayoutTop: "repeat(auto-fit,minmax(13rem, 1fr))",
        relatedProductLayout: "repeat(auto-fit,minmax(200px, 1fr))",
        collectionLayout: "repeat(auto-fit, minmax(12rem, 1fr))",
        homepageLayoutHero: "repeat(auto-fit, minmax(22rem, 1fr))",
        homepageLayoutHero1: "repeat(auto-fit, minmax(18rem, 1fr))",
        userLayout: "repeat(auto-fit, minmax(5rem, 1fr))",
      },
      fontSize: {
        extraSmall: "8px",
        small: "10px",
      },
    },
  },
  plugins: [],
};
3;
