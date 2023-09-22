module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      height: {
        128: '32rem',
      },
    },
  },
  plugins: [require('daisyui')],
};
