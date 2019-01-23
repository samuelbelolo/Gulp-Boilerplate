/*
* Imports
*/

// Gulp
const gulp = require('gulp')

// Plugins
const sassGulp = require('gulp-sass')
const csscomb = require('gulp-csscomb')
const cssbeautify = require('gulp-cssbeautify')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const csso = require('gulp-csso')
const minifyJS = require('gulp-babel-minify')
const concat = require('gulp-concat')
const image = require('gulp-imagemin')
const htmlmin = require('gulp-htmlmin')
const webServer = require('gulp-webserver')
const sourceMaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')

/*
* Config 
*/

// Browser Array For Autoprefixing
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
]

// Path Variables
const source = './src'
const destination = './dist'

/*
* Gulp Function  
*/

// SCSS
const sass = () => {
  return gulp.src(source + '/scss/**/*.scss')
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(sassGulp())
    .pipe(csscomb())
    .pipe(cssbeautify({indent: '  '}))
    .pipe(gulp.dest(destination + '/css/'))
}

// Copy CSS File
const css = () => {
  return gulp.src(source + '/css/**/*.css')
    .pipe(gulp.dest(destination + '/css/'))
}

// Minify CSS
const minify = () => {
  return gulp.src(destination + '/css/**/*.css')
    .pipe(rename({suffix:'.min'}))
    .pipe(csso())
    .pipe(gulp.dest(destination + '/css/'))
}

// JS
const js = () => {
  return gulp.src(source + '/js/**/*.js')
      .pipe(sourceMaps.init())
        .pipe(babel({
          presets: ['@babel/env']
        }))
        .pipe(minifyJS())
        // Uncomment the next line if you want to merge all your JS file into one that will be global.min.js
        // .pipe(concat('global.min.js'))
      .pipe(sourceMaps.write('../sourcemaps'))
      .pipe(gulp.dest(destination + '/js/'))
}

// IMG
const img = () => {
  return gulp.src(source + '/img/**/*.{png,jpg,jpeg,gif,svg}')
    .pipe(image())
    .pipe(gulp.dest(destination + '/img'))
}

// HTML
const html = () => {
  return gulp.src(source + '/**/*.html')
    // Turn collapseWhitespace to false in order to not minimify the HTML
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(destination))
}

// Server
const server = () => {
  return gulp.src(destination)
    .pipe(webServer({
      fallback: 'index.html',
      // Turn livereload to false if you don't want that your browser auto reload on change
      livereload: true,
      directoryListing: {
        enable : true,
        path : destination
      },
      // Change open to false if you want to disable the opening of the browser
      open: true
    }))
}

// Copy File from Static Folder
const static = () => {
  return gulp.src([source + '/static/**/.*', source + '/static/**/*'])
    .pipe(gulp.dest(destination + '/static'))
}

// Watch File 
const watch = () => {
  gulp.watch(source + '/scss/**/*.scss', sass)
  gulp.watch(source + '/css/**/*.css', css)
  gulp.watch(source + '/**/*.html', html)
  gulp.watch(source + '/js/**/*.js', js)
}


/*
* Exports
*/

exports.sass = sass
exports.css = css
exports.minify = minify
exports.js = js
exports.img = img
exports.html = html
exports.server = server
exports.static = static
exports.watch = watch
exports.dev = gulp.parallel(server,watch)
exports.build = gulp.series(sass,css,minify,js,img,html,static)

  