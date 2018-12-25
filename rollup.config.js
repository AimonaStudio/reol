import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'

// local config
import pkg from './package.json'

const isProd = process.env.NODE_ENV === 'production'

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: !isProd }
  ],
  external: id => [
    '@kuen',
    '@babel/runtime',
    'lodash'
  ].some(s => id.includes(s)),
  plugins: [
    VuePlugin(),
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
    })
  ],
  watch: {
    include: 'src/**'
  }
}
