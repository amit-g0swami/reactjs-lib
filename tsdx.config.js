const replace = require('@rollup/plugin-replace')
const postcss = require('rollup-plugin-postcss')
const peerDepsExternal = require('rollup-plugin-peer-deps-external')

module.exports = {
  rollup(config, opts) {
    config.plugins = [
      peerDepsExternal(),
      ...config.plugins.map((p) =>
        p.name === 'replace'
          ? replace({
              'process.env.NODE_ENV': JSON.stringify(opts.env),
              preventAssignment: true
            })
          : p
      ),
      postcss({
        plugins: [require('tailwindcss'), require('autoprefixer')],
        inject: true, // inject CSS into the <style> tags in the head
        extract: false // disable file extraction for library
      })
    ]
    return config
  }
}
