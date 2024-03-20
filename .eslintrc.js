module.exports = {
  extends: ["@pro-vision/eslint-config-pv/typescript", "@pro-vision/eslint-config-pv/prettier"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/unbound-method": "off",
    "import/extensions": "off",
    "no-console": "off",
  },
  overrides: [
    {
      files: ["src/**/*.js", "src/**/*.ts", "src/**/*.json"],
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "no-proto": "off",
      },
    },
  ],
};
