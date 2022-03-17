module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {},
        colors: {
            'my-yellow': '#cea600',
            'my-grey': 'rgba(38, 38, 38, 0.61)',
            'my-white': '#ffffff',
        },
        minHeight: {
            100: '6.25rem',
            200: '12.5rem',
        },
        maxHeight: {
            100: '6.25rem',
            200: '12.5rem',
        },
        minWidth: {
            50: '9.1rem',
            160: '9.3rem',
            600: '38rem'
        },
        maxWidth: {
            50: '38rem',
            600: '38rem'
        },
    },
    plugins: [],
};