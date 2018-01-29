module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: "airbnb",
  parser: "babel-eslint",
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 4],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: true
      }
    ],
    "react/jsx-indent": ["error", 4],
    "react/prop-types": false
  }
};
