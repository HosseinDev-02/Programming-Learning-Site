/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary': '#1d4ed8',
                'success': '#22c55e',
                'title': '#09090b',
                'caption': '#4b5563'
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '0.625rem',
                    md: '1.25rem'
                }
            },
            fontFamily: {
                'YekanBakh-Regular': 'YekanBakh Regular',
                'YekanBakh-Bold': 'YekanBakh Bold',
                'YekanBakh-Medium': 'YekanBakh Medium',
                'YekanBakh-ExtraBold': 'YekanBakh ExtraBold',
                'YekanBakh-Light': 'YekanBakh Light',
                'YekanBakh-Thin': 'YekanBakh Thin'
            }
        },
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px'
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        }
    ],
}

