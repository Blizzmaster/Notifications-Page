/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing:
      {
        'mobile': '375px',
        'desktop': '1440px'
      },
      colors:
      {
        'primary-red': 'hsl(1, 90%, 64%)',
        'primary-blue': 'hsl(219, 85%, 26%)',

        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-very-light-grayish-blue': 'hsl(210, 60%, 98%)',
        'neutral-light-grayish-blue-1': 'hsl(211, 68%, 94%)',
        'neutral-light-grayish-blue-2': 'hsl(205, 33%, 90%)',
        'neutral-grayish-blue': 'hsl(219, 14%, 63%)',
        'neutral-dark-grayish-blue': 'hsl(219, 12%, 42%)',
        'neutral-very-dark-blue': 'hsl(224, 21%, 14%)'
      },
    },
  },
  plugins: [],
}

