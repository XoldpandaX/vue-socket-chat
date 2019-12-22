module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    // common
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 'off',
    'max-len': ['error', 120, 2, { ignoreUrls: true }],
    'arrow-parens': 0,
    // vue
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'LIFECYCLE_HOOKS',
        'data',
        'watch',
        'computed',
        'methods',
        ['template', 'render'],
        'renderError',
      ],
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
