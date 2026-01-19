/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FF9933",
                secondary: "#991b1b", // Red-800
                accent: "#f59e0b", // Amber-500
                surface: "#fffaf0",
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
                serif: ['Playfair Display', 'Georgia', 'serif'],
            }
        },
    },
    plugins: [],
}
