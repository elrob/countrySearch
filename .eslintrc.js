module.exports = {
  "env": {
    "browser": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6
  },
  "rules": {
    "indent": ["error", 2],
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "comma-spacing": "error",
    "keyword-spacing": "error",
    "comma-dangle": ["error", "never"],
    "space-unary-ops": ["error", { "overrides": { '!': true } }],
    "space-infix-ops": "error",
    "no-shadow": "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-trailing-spaces": "error",
    "no-multiple-empty-lines": ["error", { "max": 2, "maxBOF": 0 }],
    "quote-props": ["error", "as-needed"],
    "max-len": ["error", 110, { "ignoreStrings": true }]
  }
};
