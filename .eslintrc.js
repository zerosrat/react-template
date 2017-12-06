module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'standard-jsx'],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'jsx-quotes': ['error', 'prefer-double']
  }
}
