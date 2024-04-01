/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

    theme: {
        extend: {
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1440px",
            },
            colors: {
                "p-black": "hsla(0, 0%, 0%, 1)",
                "p-black-lighter": "hsl(0deg 0% 0% / 30%)",
                "p-gray": "hsla(0, 0%, 49%, 1)",
                "p-light-gray": "hsla(0, 0%, 90%, 1)",
                "p-very-light-gray": "hsla(0, 0%, 95%, 1)",
                "p-white": "hsla(0, 0%, 100%, 1)",
            },
            container: {
                center: true,
                padding: "10px",
                screens: {
                    sm: "540px",
                    md: "720px",
                    lg: "960px",
                    xl: "1140px",
                    "2xl": "1320px",
                },
            },
            gridTemplateColumns: {
                "main-grid-cols": "repeat(auto-fill, minmax(250px, 1fr))",
            },
            transform: {
                imageScaling: "rotate(5deg) scale(1.1)",
            },
        },
    },
    plugins: [],
};
