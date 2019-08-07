


const gulp = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean-css');
const uglify = require('gulp-uglify');

gulp.task('styles', function(){
    return gulp.src('styles.css')
            .pipe(concat('styles.min.css'))
            .pipe(clean())
            .pipe(gulp.dest('css'));
})

gulp.task('scripts',function(){
    return gulp.src('javascript/*.js')
            .pipe(concat('scripts.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('js'));
})

gulp.task('default', gulp.parallel('styles', 'scripts'));