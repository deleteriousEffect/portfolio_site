'use strict';
var gulp = require('gulp');

var jslint = require('gulp-jslint'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    karma = require('gulp-karma'),
    uncss = require('gulp-uncss'),
    minifyCss = require('gulp-minify-css'),
    ngmin = require('gulp-ngmin'),
    minifyHTML = require('gulp-minify-html'),
    replace = require('gulp-replace'),
    rename = require('gulp-rename');

// Lint our javascript.
gulp.task('lint', function () {
    return gulp.src(['app/**/*.js', '!app/app.js'])
        .pipe(jslint({
            brower: true,
            maxlen: 120,
            predef: ['angular', '$'],
            errorsOnly: false
        }))
        .on('error', function (error) {
            console.log(String(error));
        });
});

//Concatenate Angular files.
gulp.task('angular', function () {
    return gulp.src(['app/**/*.js', '!app/app.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app'));
});

// Compile sass files.
gulp.task('sass', function () {
    return gulp.src('assets/styles/sass/custom.sass')
        .pipe(sass({indentedSyntax: true,
                    errLogToConsole: true
            }))
        .pipe(gulp.dest('assets/styles/css'));
});

// Remove Unused CSS and minify.
gulp.task('uncss', function () {
    return gulp.src(['assets/styles/css/custom.css'])
        .pipe(concat('main.min.css'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(uncss({
            html: ['app/**/*.html'],
            ignore: [
                '.clearfix',
                'main',
                '.BSOD',
                '.BSOD p:not(:first-child):not(:last-child)',
                '.BSOD p:first-child',
                '.BSOD p:last-child',
                'noscript'
            ]
        }))
        .pipe(gulp.dest('dist'));
});

// Minify Angular souce.
gulp.task('ngmin', function () {
    return gulp.src('app/app.js')
        .pipe(ngmin())
        .pipe(uglify({mangle: false}))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('dist/app'));
});

    // Minify HTML.
gulp.task('minHTML', function () {
    return gulp.src('index.html')
        .pipe(replace(/(<script.*)\.js/g, '$1.min.js'))
        .pipe(replace('assets/styles/css/custom.css', 'main.min.css'))
        .pipe(minifyHTML())
        .pipe(gulp.dest('dist'));
});

// Minify views.
gulp.task('minViews', function () {
    return gulp.src('app/**/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('dist/app'));
});

// Copy font-mfizz assets to dist.
gulp.task('mfizz', function () {
    return gulp.src([
        'assets/font-mfizz/*',
        '!assets/font-mfizz/*.txt',
        '!assets/font-mfizz/*.md',
        '!assets/font-mfizz/*.html'
    ])
        .pipe(gulp.dest('dist/assets/font-mfizz'));
});

// Copy images to dist.
gulp.task('imgs', function () {
    return gulp.src('assets/imgs/*')
        .pipe(gulp.dest('dist/assets/imgs'));
});

// Run test runner.
gulp.task('test', function () {
    return gulp.src('test/*.js')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function (err) {
            console.log(err);
        });
});

// Watch for changes.
gulp.task('watch', function () {
    gulp.watch('app/**/*.js', ['angular', 'ngmin', 'lint']);
    gulp.watch('assets/styles/sass/*.sass', ['sass']);
    gulp.watch('assets/styles/css/*.css', ['uncss']);
    gulp.watch('index.html', ['minHTML']);
    gulp.watch('app/**/*.html', ['minViews']);
    gulp.watch('assets/imgs/*', ['imgs']);
});

gulp.task('default', ['sass', 'angular', 'ngmin', 'uncss', 'minHTML', 'minViews', 'lint', 'mfizz', 'imgs', 'watch']);
