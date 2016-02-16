var gulp = require('gulp');
var clean = require('gulp-clean');
var cssnano = require('gulp-cssnano');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
//var liveReload = require('gulp-livereload');

var fs = require("fs");

var DEST = 'build/';
var DIST = 'dist/';
var SRC = 'src/';

gulp.task('default', ['compile'], function() {
});

gulp.task('compile', ['minify'], function() {
    var css = fs.readFileSync(DEST + "/collect-plus-returns-label.min.css", "utf8");
    return gulp.src(SRC + '/collect-plus-returns-label.js')
        .pipe(replace('##css##', css))
        .pipe(gulp.dest(DEST))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(DEST));
});

gulp.task('minify', function() {
    return gulp.src(SRC + '/collect-plus-returns-label.css')
        .pipe(cssnano())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(DEST));
});

gulp.task('clean', function () {
    return gulp.src([DEST, DIST], {read: false})
        .pipe(clean());
});

gulp.task('dist', ['clean', 'default'], function() {
    return gulp.src([DEST + '/*.js', 'README.md', 'LICENSE.md'])
        .pipe(gulp.dest(DIST))
});

gulp.task('watch', function() {
    gulp.watch('./src/*', ['compile']);
});