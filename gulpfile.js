const { src, dest, series, parallel } = require('gulp')
const del = require('del')

const loadPlugins = require('gulp-load-plugins')
const plugins = loadPlugins()

const clean = () => {
  return del(['dist', 'temp'])
}

const style = () => {
  return src('src/*.scss', { base: 'src' })
    .pipe(plugins.sass({ outputStyle: 'expanded' }))
    .pipe(dest('dist'))
}

const script = () => {
  return src('src/*.js', { base: 'src' })
    .pipe(plugins.babel({ presets: ['@babel/preset-env'] }))
    .pipe(dest('dist'))
}

const page = () => {
  return src('src/*.html', { base: 'src' })
    .pipe(plugins.useref({ searchPath: ['src', '.' ]}))
    .pipe(dest('dist'))
}

const build = series(clean, parallel(style, script, page))

module.exports = {
  build
}
