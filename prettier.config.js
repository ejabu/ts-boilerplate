// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  singleQuote: true,
  semi: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],

  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '',
    '^@utils/(.*)$',
    '',
    '^types$',
    '',
    '^(.)/(.*)$',
    '',
    '^[./]',
    '',
    '^\\./[\\w\\-]+$',
    '',
    '^\\.\\?./',
    '',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
};