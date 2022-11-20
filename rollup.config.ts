import { RollupOptions } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import { getScopedNameGenerator } from './utils/generateScopedName';

const prod = process.env.NODE_ENV === 'production';

const config: RollupOptions = {
  input: 'src/index.tsx',
  output: {
    file: prod ? 'dist/index.prod.js' : 'dist/index.dev.js',
    format: 'iife',
    sourcemap: !prod,
  },
  plugins: [
    copy({
      targets: [
        {
          src: 'src/index.html',
          dest: 'dist',
          transform: (contents) => contents.toString().replace('__SCRIPT__', `/index.${prod ? 'prod' : 'dev'}.js`),
        },
      ],
      verbose: true,
    }),
    resolve(),
    commonjs(),
    eslint(),
    replace({
      preventAssignment: true,
      values: { 'process.env.NODE_ENV': prod ? '"production"' : '"development"' },
    }),
    typescript({
      include: 'src/**/*.{js,ts,jsx,tsx}',
      ...(prod
        ? {}
        : {
            compilerOptions: {
              noUnusedLocals: false,
              noUnusedParameters: false,
              sourceMap: true,
              inlineSources: true,
            },
          }),
    }),
    prod && terser(),
    postcss({
      sourceMap: !prod,
      minimize: prod,
      modules: {
        generateScopedName: getScopedNameGenerator(prod ? '[hash:8]' : '[name]__[local]__[hash:5]'),
      },
      namedExports: true,
      use: ['sass'],
    }),
  ],
};

export default config;
