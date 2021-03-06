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
* gulp-webserver **Gulp Server** (removed because of vulnerability)
* gulp-sourcemaps **SourceMaps**
* gulp-babel **ES6 -> ES5 (const to var,...)**

Other plugins can be found for your need : [Gulp Plugin Registry](https://gulpjs.com/plugins/)

## Instalation 
First go through your folder via 

```
cd Path/of/your/file
```
Then Install all dependancies

```
npm install
```
or with thee shorcut (i saw you lazy one) :

```
npm i
```

## Usage 

### From gulp

Just choose what you think your devlopment need

Tasks Available :

* sass
* css
* minify
* js
* img
* html
* server (removed because of vulnerability)
* static
* watch
* dev
* build

**gulp sass** : It will transform your scss file(s) from your 'src/scss' folder into css file, it will add prefix (moz-,webkit-,...) to 'dist/css'.
You can specify wich browsers compatibility you want in browserlist in your package.json

**gulp css** : It will copy your css file(s) from your 'src/css' folder. Mainsly use for the reset.css file (it has been already prefixed).

**gulp minify** : It will take all your css file from 'dist/css' and will minify them, it will also add a .min suffix.

**gulp js** : It will transform your JS file(s) from 'src/js', with babel it will make compatible with ES5, it will add SourceMaps, and will minify the JS. Finaly it will put it in 'dist/js'

options : You can disable the JS minification or you can merge all the JS file into a single global.min.js, you just need to go into the gulpfile.js and see the js function (it will be explain in the comment)

**gulp img** : It will take all the images from the folder 'src/img', it will optimize the img and put it in 'dist/img

**html** : It will take your html file(s) and will minify them. You can disable the minification into the gulfile.js conf file into the html function by turning collapseWhitespaces to false.

**gulp server** !!! Removed : Deprecated !!! : It will launch a server, you can disable the live reload by turning it to false in the server function from the gulpfile.js file, you can also disable the automatic open browser by turning to false the 'open' parameter

**gulp static** : Simply copy all the files of the static file ('src/static').

**gulp watch** : It will monitor for every change for the tasks sass, css, html and js.

**gulp build** : It will launch sass,js,img,html,css,static,minify

Use dev when you want to code, and build when you want to receive the final folder to put it in your server.

### Run from gulp

If you want to run directly from gulp you need first to install globally gulp & gulp-cli : 

```
sudo npm i -g gulp gulp-cli
```

Then you can run as follow : 
 
```
gulp build
gulp dev
gulp watch
gulp server
...
```

### Run from npm 

If you want to use the gulp task with the npm command line : 

Just run **npm run + ' the name of the task you want '**


```
npm run build
npm run watch
npm run js
npm run img
...
```



