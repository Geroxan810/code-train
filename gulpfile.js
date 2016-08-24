var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('autoprefixer', function() {
  gulp.src('app/css/styles.css')
   .pipe(autoprefixer({
   browsers: ['last 5 versions'],
   cascade: false
  }))
  .pipe(gulp.dest('dist/css'))
});
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
   .pipe(sass())
   .pipe(gulp.dest('app/css'))
   .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('browserSync', function() {
  browserSync.init({
   server: {
   baseDir: 'app',
   port: 3000,
  },

  })
})



gulp.task('watch', ['sass', 'browserSync', 'autoprefixer'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/css/*.css', ['autoprefixer']);
 // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
