var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');

gulp.task('watch', function() {
   // Watch less files
  watch('./assets/less/style.less', function() {
    gulp.start('less');
    });
 });

 gulp.task('less', function() {
    // If changes are detected in less files, compile less into css file on save
    return gulp.src('./assets/less/style.less')
        .pipe(less())
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('default', ['watch']);
