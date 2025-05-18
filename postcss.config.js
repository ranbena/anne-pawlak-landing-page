module.exports = {
  plugins: {
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
      },
      browsers: ['last 2 versions', '> 0.2%', 'not dead', 'not op_mini all', 'ios >= 15'],
    },
  },
};
