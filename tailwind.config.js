/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontSize: {
              'xxs': '0.65rem'
            },
            colors: {
                'primary': '#1d4ed8',
                'success': '#22c55e',
                'success-dark': '#166534',
                'title': '#09090b',
                'caption': '#4b5563',
                'mirage': '#17171c'
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
                'YekanBakh-SemiBold': 'YekanBakh SemiBold',
                'YekanBakh-Black': 'YekanBakh Black',
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

