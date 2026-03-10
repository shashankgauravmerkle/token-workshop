const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

module.exports = {
  extends: ['next/core-web-vitals', require.resolve('./react-internal')],
  parserOptions: { project },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
}
