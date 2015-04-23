var gulp = require('gulp');

var jslint = require('gulp-jslint'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

// Lint our javascript.
gulp.task('lint', function () {
    return gulp.src(['app/app.js'])
        .pipe(jslint({
            brower: true,
            maxlen: 80,
            predef: ['angular', '$'],
            errorsOnly: false
        }))
        .on('error', function (error) {
            console.error(String(error));
        });
});

gulp.task('default', ['lint']);
