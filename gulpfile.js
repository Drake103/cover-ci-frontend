var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var jade = require('gulp-jade');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var pkg = require('./package.json');
var rename = require('gulp-rename');
var symlink = require('gulp-symlink');
var babelify = require('babelify');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var gulpFilter = require('gulp-filter');
var bourbon = require('node-bourbon');
var neat = require('node-neat');
var express = require('express');

var SYMLINKS = {
  //config: './config > node_modules',
};

var createSymlink = function(key, path) {
  path = path.split('>');
  gulp
    .src(path[0].trim())
    .pipe(symlink(path[1].trim() + '/' + key, { force: true }));
};

gulp.task('symlink', function() {
  for (var key in SYMLINKS) {
    createSymlink(key, SYMLINKS[key]);
  }
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './public',
    },
  });
});

gulp.task('static-server', function() {
  var app = express();
  app.use(express.static('./public'));
  var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
  });
});

gulp.task('sass:build', function() {

  gulp.src('./styles/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ includePaths: neat.includePaths }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./styles/**/*.scss', ['sass:build']);
});

gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('public/fonts'));
});

gulp.task('images:build', function() {
  gulp.src('./images/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./public/images'));
});

gulp.task('images:watch', function() {
  gulp.watch('./images/**/*', ['images:build']);
});

gulp.task('js:lint', function() {
  gulp.src('/app/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task('js:build', function() {
  var bundle = browserify({
    entries: ['./app/index.js'],
    paths: ['./node_modules'],
    debug: true,
  });

  bundle.transform(babelify, { presets: ['es2015'] });

  bundle.bundle()
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(source('script.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('js:watch', function() {
  gulp.watch('./app/**/*.js', ['js:build']);
});

gulp.task('jade:build', function() {
  gulp.src(['./app/**/*.jade', '!./app/**/_*.jade'])
      .pipe(jade({
        pretty: true,
      }))
      .on('error', console.log)
  .pipe(gulp.dest('./public'));
});

gulp.task('jade:watch', function() {
  gulp.watch('./app/**/*.jade', ['jade:build']);
});

gulp.task('watch', ['images:watch', 'js:watch', 'sass:watch', 'jade:watch']);

gulp.task('default', ['images:build', 'js:build', 'sass:build', 'jade:build', 'fonts']);

gulp.task('serve', ['default', 'static-server', 'watch']);
