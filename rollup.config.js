import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import alias from 'rollup-plugin-alias'
import { uglify } from 'rollup-plugin-uglify'
import VuePlugin from 'rollup-plugin-vue'

import path from 'path'

// local config
import pkg from './package.json'

const isProd = process.env.NODE_ENV === 'production'

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: !isProd }
  ],
  external: id => [
    'rxjs',
    '@babel/runtime',
  ].some(s => id.includes(s)),
  plugins: [
    VuePlugin(),
    alias({
      '@': path.resolve(__dirname, './src'),
      '~@': path.resolve(__dirname, './node_modules')
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    isProd && uglify()
  ],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**'
  }
}
