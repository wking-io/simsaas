const colors = {
  black: '#102a43',
  white: '#ffffff',
  primary: {
    light: '#791dbd',
    default: '#47116f',
  },
  grey: {
    '100': '#F0F4F8',
    '200': '#D9E2EC',
    '300': '#BCCCDC',
    '400': '#9FB3C8',
    '500': '#829AB1',
    '600': '#627D98',
    '700': '#486581',
    '800': '#334E68',
    '900': '#243B53',
  },
  highlight: '#00ff00',
};

module.exports = {
  theme: {
    fontFamily: {
      sans: [
        'Lato',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    colors,
    extend: {},
  },
  variants: {},
  plugins: [],
};
