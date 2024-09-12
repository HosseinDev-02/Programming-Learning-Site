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
                primary: 'rgb(var(--color-primary))',
                success: 'rgb(var(--color-success))',
                caption: 'rgb(var(--color-caption))',
                title: 'rgb(var(--color-title))',
                secondary: 'rgb(var(--color-secondary))',
                background: 'rgb(var(--color-background))',
                border: 'rgb(var(--color-border))',
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

