module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCC501",
        secondary: "#FF9900",
        100: "#3b4755",
        75: "#666f7a",
        50: "#91979e",
        25: "#bcbfc2",
        10: "#d6d7d8",
        5: "#dedfdf",
        2: "#F8FAF9",
      },
      backgroundImage: {
        cityMap: "url('/src/Components/Assets/cityMap.webp')",
        cityMap_768: "url('/src/Components/Assets/cityMap_768.webp')",
        cityMap_320: "url('/src/Components/Assets/cityMap_320.webp')",

        CityBG: "url('/src/Components/Assets/CityBG.webp')",
        CityBG_320: "url('/src/Components/Assets/CityBG_320.webp')",
        CityBG_768: "url('/src/Components/Assets/CityBG_768.webp')",
        CityBG_1024: "url('/src/Components/Assets/CityBG_1024.webp')",

        ServiceBG:"url('/src/Components/Assets/ServiceBG.webp')",
        yellowMap: "url('/src/Components/Assets/yellowMap.webp')",
      },

     
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundClip: ["text"],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ]};
