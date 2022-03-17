module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {},
        colors: {
            'my-yellow': '#cea600',
            'my-grey': 'rgba(38, 38, 38, 0.61)',
            'my-light-grey': 'rgba(207, 207, 207, 0.7)',
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
            50: '3.1rem',
            150: '9.3rem',
            250: '12.6rem',
            600: '38rem'
        },
        maxWidth: {
            150: '9.3rem',
            250: '12.6rem',
            600: '38rem'
        },
    },
    plugins: [],
};