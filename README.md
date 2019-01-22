# Gulp 4 Boilerplate

A simple Gulp 4 Template

## Plugins
* gulp-sass **SCSS -> CSS**
* gulp-csscomb **Make your CSS beautifull**
* gulp-cssbeautify **Make your CSS beautifull**
* gulp-autoprefixer **CSS Autoprefixing (webkit-, moz-,...)**
* gulp-rename **Rename File**
* gulp-csso **CSS Minification**
* gulp-babel-minify **JS Minification**
* gulp-htmlmin **HTML Minification**
* gulp-concat **Concatenation of file**
* gulp-imagemin **Image Optimisation**
* gulp-webserver **Gulp Server**
* gulp-sourcemaps **SourceMaps**
* gulp-babel **ES6 -> ES5 (const to var,...)**

## Instalation 

```
npm install
```

It will install all the dependencies that gulp will need.

## Usage 

### From gulp
In order to use gulp you simply need to use gulp + the name of the task you want to use.

Tasks Available :

* sass
* css
* minify
* js
* img
* html
* server
* static
* watch
* dev
* build

**sass** : It will transform your scss file(s) from your 'src/scss' folder into css file, it will add prefix (moz-,webkit-,...) to 'dist/css'

**css** : It will copy your css file(s) from your 'src/css' folder. Mainsly use for the reset.css file (it has been already prefixed.

**minify** : It will take all your css file from 'dist/css' and will minify them, it will also add a .min suffix.

**js** : It will transform your JS file(s) from 'src/js', with babel it will make compatible with ES5, it will add SourceMaps, and will minify the JS. Finaly it will put it in 'dist/js'

options : You can disable the JS minification or you can merge all the JS file into a single global.min.js, you just need to go into the gulpfile.js and see the js function (it will be explain in the comment)

**img** : It will take all the images from the folder 'src/img', it will optimize the img and put it in 'dist/img

**html** : It will take your html file(s) and will minify them. You can disable the minification into the gulfile.js conf file into the html function by turning collapseWhitespaces to false.

**server** : It will launch a server, you can disable the live reload by turning it to false in the server function from the gulpfile.js file, you can also disable the automatic open browser by turning to false the 'open' parameter

**static** : Simply copy all the files of the static file ('src/static').

**watch** : It will monitor for every change for the tasks sass, css, html and js.

**dev** : It will launch the server and watch task at the same time. 

**build** : It will launch sass,js,img,html,css,static,minify

Use dev when you want to code, and build when you want to receive the final folder to put it in your server.

 
#### Exemples : 
```
gulp build
gulp dev
gulp watch
gulp server
...
```



### From npm 
If you want to use the gulp task with the npm command line : 


```
npm run build
npm run dev
npm run watch
npm run server
```



