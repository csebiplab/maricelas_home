/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: ["class"],
    theme: {
        screens: {
            // => beshi choto screen mobile 639-280px
            // => moddhom screen mobile 767-640px
            'xs': '280px',

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }
            // => tablet screen 1023px-768px

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            // => mid level desktop screen 1279-1024px

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            // => Extra desktop screen 1439px-1280px

            '2xl': '1440px',
            // => @media (min-width: 1536px) { ... }

            // 2(dui gun extra screen) ==> 1535px-1440px

            '3xl': '1536px',

            '4xl': '1736px',

            '5xl': '1920px',
        },

        extend: {
            colors: {
                primary: {
                    DEFAULT: "#880769",
                    50: "#C477B1",
                    100: "#54042C",
                    200: "#54042C",
                    300: "#54042C",
                    400: "#54042C",
                    500: "#54042C",
                    600: "#54042C",
                    700: "#54042C",
                },
                secondary: {
                    DEFAULT: "#049E43",
                    50: "#049E43",
                },
                info: {
                    DEFAULT: "#33475B",
                    50: "#89A3BD",
                },
                success: {
                    DEFAULT: "#049E43",
                    50: "#89A3BD",
                },
                warning: {
                    DEFAULT: "#FBCC21",
                    50: "#FBCD22",
                },
                danger: {
                    DEFAULT: "#DC0000",
                },
                dark: {
                    DEFAULT: "#000000",
                    50: "#111111",
                    100: "#1B1B1B",
                    200: "#1F1F1F",
                    300: "#535455",
                    400: "#333333",
                    500: "#040404",
                },
                gray: {
                    DEFAULT: "#D9D9D9",
                },
            },
            spacing: {
                '24': "6.5rem",
                "1": "2px"
            },

            "gray-1": "var(--gray-1)",
            "gray-2": "var(--gray-2)",
            "gray-3": "var(--gray-3)",
            background: "var(--background-color)",
            foreground: "var(--foreground)",

            tremor: {
                background: {
                    DEFAULT: "var(--background-color)",
                },
                border: {
                    DEFAULT: "var(--gray-2)",
                },
                ring: {
                    DEFAULT: "var(--gray-2)",
                },
                content: {
                    subtle: "var(--gray-2)",
                    DEFAULT: "var(--gray-1)",
                    emphasis: "var(--foreground)",
                },
            },
        },

    },
    plugins: [],
});
