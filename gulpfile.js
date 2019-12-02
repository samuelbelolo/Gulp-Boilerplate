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
const sourceMaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')

/*
* Config 
*/

// Path Variables
const source = './src'
const destination = './dist'

/*
* Gulp Function  
*/

// SCSS
const sass = () => {
  return gulp.src(source + '/scss/**/*.scss')
    .pipe(autoprefixer())
    .pipe(sassGulp())
    .pipe(csscomb())
    .pipe(cssbeautify({indent: '  '}))
    .pipe(gulp.dest(destination + '/css/'))
}
// PHP
const php = () => {
  return gulp.src(source + '/**/*.php')
    .pipe(gulp.dest(destination))
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

// Copy File from Static Folder
const static = () => {
  return gulp.src([source + '/static/**/.*', source + '/static/**/*'])
    .pipe(gulp.dest(destination + '/static'))
}

// Watch File 
const watch = () => {
  gulp.watch(source + '/scss/**/*.scss', sass)
  gulp.watch(source + '/css/**/*.css', css)
  gulp.watch(source + '/**/*.php', php)
  gulp.watch(source + '/**/*.html', html)
  gulp.watch(source + '/js/**/*.js', js)
}


/*
* Exports
*/

exports.php = php
exports.sass = sass
exports.css = css
exports.minify = minify
exports.js = js
exports.img = img
exports.html = html
exports.static = static
exports.watch = watch
exports.build = gulp.series(sass,php,js,img,html,css,static,minify)

  