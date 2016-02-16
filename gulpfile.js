var gulp = require('gulp');
var bower = require('gulp-bower');
var clean = require('gulp-clean');
var filter = require('gulp-filter');
var install = require('gulp-install');

var LIB = 'js/';

gulp.task('default', ['install'], function() {
});

gulp.task('clean', function () {
    return gulp.src([LIB], {read: false})
        .pipe(clean());
});

gulp.task ('install', function() {
    gulp.src(['./bower.json', './package.json'])
        .pipe(install());

    return bower()
        .pipe(filter(['**/*.js']))
        .pipe(gulp.dest('js/'));
});
