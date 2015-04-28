var gulp = require('gulp');

var jslint = require('gulp-jslint'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

// Lint our javascript.
gulp.task('lint', function () {
    return gulp.src(['app/**/*.js'])
        .pipe(jslint({
            brower: true,
            maxlen: 80,
            predef: ['angular', '$'],
            errorsOnly: false
        }))
        .on('error', function (error) {
            console.log(String(error));
        });
});

//Concatenate Angular files.
gulp.task('angular', function () {
    return gulp.src('app/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app'));
});

// Compile sass files.
gulp.task('sass', function () {
    return gulp.src('assets/styles/sass/custom.sass')
        .pipe(sass({indentedSyntax: true}))
        .pipe(gulp.dest('assets/styles/css'));
});

// Watch for changes.
gulp.task('watch', function () {
    gulp.watch('app/**/*.js', ['lint', 'angular']);
    gulp.watch('assets/styles/sass/*.sass', ['sass']);
});

gulp.task('default', ['lint', 'sass', 'watch']);
