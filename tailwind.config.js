module.exports = {
  purge: ['./components/**/*.jsx', './pages/**/*.jsx', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'firstview': "url('/images/firstview.webp')",
        'running': "url('/images/running.webp')",
        'beach': "url('/images/beach.webp')",
        'store': "url('/images/store.webp')",
        'sheep': "url('/images/sheep.webp')",
      }),
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
    scale: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
      '200': '2',
    },
  },
  variants: {
    extend: {},
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    transitionTimingFunction: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
