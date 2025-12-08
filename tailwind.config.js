/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            smallMobile: "280px",
            mobile: "320px",
            tablet: "640px",
            laptop: "1024px",
            desktop: "1280px",
            largeDesktop: "1920px",
        },
        extend: {
            colors: {
                // New Palette
                primary: "#008080", // Teal
                secondary: "#87CEEB", // Sky Blue
                accent: "#D2B48C", // Tan
                neutral: {
                    100: "#F5F5F5", // White/Light Gray
                    200: "#E0E0E0",
                    800: "#333333", // Dark Gray
                    900: "#1A1A1A", // Black
                },
                glass: {
                    100: "rgba(255, 255, 255, 0.1)",
                    200: "rgba(255, 255, 255, 0.2)",
                }
            },
            animation: {
                glow: "glow 2.5s ease-in infinite;",
                float: "float 6s ease-in-out infinite",
            },
            keyframes: {
                glow: {
                    "0%": {
                        backgroundColor: "#008080",
                        boxShadow: "0 0 15px 0 #008080",
                    },
                    "50%": {
                        backgroundColor: "#87CEEB",
                        boxShadow: "0 0 15px 0 #87CEEB",
                    },
                    "100%": {
                        backgroundColor: "#008080",
                        boxShadow: "0 0 15px 0px #008080",
                    },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                }
            },
        },
    },
    plugins: [],
};
