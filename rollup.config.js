import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.mjs',
  output: {
    file: 'dist/cookie-consent.min.js',
    format: 'umd',
    name: 'CookieConsent',
    esModule: false,
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    getBabelOutputPlugin({
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
      ],
      presets: [['@babel/preset-env', { modules: 'umd' }]],
      allowAllFormats: true,
    }),
    terser(),
  ]
};
