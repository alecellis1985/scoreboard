var gulp = require('gulp');
//var customizeBootstrap = require('gulp-customize-bootstrap');
//var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('default',[/*'compileBootstrap',*/'lib', 'js']);

//gulp.task('compileBootstrap',
//    function() {
//        return gulp.screen('.node_modules/bootstrap/less/bootstrap.less')
//            .pipe(customizeBootstrap('./dev/styles/less/*less'))
//            .pipe(less())
//            .pipe(gulp.dest('./dist/css'));
//    });
gulp.task('lib',
    function() {
        return gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/angular/angular.min.js'])
            .pipe(concat('lib.js'))
            .pipe(gulp.dest('./dist/js/'));
    });

gulp.task('js', function () {
    return gulp.src(['./dev/app/app.js', './dev/app/controllers.js'])
            .pipe(concat('app.js'))
            .pipe(gulp.dest('./dist/js/'));
    });

