/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       
        
        'about_bg': "url('/src/assets/Images/Png/about-img.png')",
        'our_team_Shadow': "url('/src/assets/Images/Png/our-team-shadow.png')",
        'client_bg_img': "url('/src/assets/Images/Png/clients-bg-img.png')",
      },
      screens: {
        'xs': '480px', 
      },
    },
  },
  plugins: [],
}