import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    darkMode: "class",
    theme: {
        extend: {
            colors: {
                p1: "#F9f7f5",
                p2: "#D4AF37",
                p3: "#A67C52",
                p4: "#E8DCCA",
                p5: "#9A7D56",
                s1: "#614E3E",
                s2: "#444444",
                s3: "#8B4513",
                s4: "#C9B037",
                s5: "#F5F5F5",
                s6:"#475569",
                
                black: {
                    DEFAULT: "#000000",
                    100: "#05091D",
                },
            },
            boxShadow: {
                100: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD",
                200: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 4px 10px #3391FF",
                300: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD",
                400: "inset 0px 2px 4px 0 rgba(255, 255, 255, 0.05)",
                500: "0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(40, 51, 111, 0.7)",
            },
            keyframes: {
                "arrow-pulse": {
                    "0%, 100%": { transform: "translateX(0)" },
                    "50%": { transform: "translateX(4px)" },
                },
                "border-rotate": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
            },
            animation: {
                "arrow-pulse": "arrow-pulse 1.5s ease-in-out infinite",
                "border-rotate": "border-rotate 4s linear infinite",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },
            transitionProperty: {
                borderColor: "border-color",
            },
            spacing: {
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "3/20": "15%",
                "7/20": "35%",
                "9/20": "45%",
                "11/20": "55%",
                "13/20": "65%",
                "15/20": "75%",
                "17/20": "85%",
                "19/20": "95%",
                22: "88px",
                100: "100px",
                512: "512px",
                330: "330px",
                388: "388px",
                400: "400px",
                440: "440px",
                640: "640px",
                960: "960px",
                1230: "1230px",
            },
            zIndex: {
                1: "1",
                2: "2",
                4: "4",
            },
            lineHeight: {
                12: "48px",
            },
            borderRadius: {
                14: "14px",
                20: "20px",
                40: "40px",
                half: "50%",
                "7xl": "40px",
            },
            flex: {
                50: "0 0 50%",
                320: "1px 0 320px",
                300: "0 0 300px",
                540: "0 0 540px",
                280: "0 0 280px",
                256: "0 0 256px",
                100: "0 0 100%",
            },
        },
    },

    plugins: [forms],
};
