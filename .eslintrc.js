module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
		'prettier/prettier': 'error',
		'react/state-in-constructor': 0,
		'react/static-property-placement': [
			'warn', 'static public field'
		],
		'react/jsx-filename-extension': [
			'warn',
			{ extensions: ['.jsx', '.js'] }
		],
		'import/prefer-default-export': 'off',
		'no-console': ["error", { allow: ["tron"] }]
  },
};
