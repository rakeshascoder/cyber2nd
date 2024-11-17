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
      },
    },
  },
  plugins: [],
}