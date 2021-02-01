import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.mjs',
  output: {
    file: 'dist/cookie-consent.js',
    format: 'umd',
    name: 'CookieConsent'
  },
  plugins: [
    nodeResolve(),
    commonjs()
  ]
};
