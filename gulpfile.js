var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


// gulp.task('sass', function(){
//   gulp.src('./src/**/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('./dist/styles'))
// });

gulp.task('scss', function () {
  gulp.src('./src/styles/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./dist/styles'))
});

gulp.task('img', function () {
  gulp.src('./src/img/*.*')
    .pipe(gulp.dest('./dist/img'))
});

gulp.task('fonts', function(){
  gulp.src('./src/fonts/**/*.*')
  .pipe(gulp.dest('./dist/fonts'))
});

gulp.task('html', function(){
  gulp.src('./src/*.html')
  .pipe(gulp.dest('./dist'))
});

gulp.task('js', function(){
  gulp.src('./src/js/*.js')
  .pipe(gulp.dest('./dist/js'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('watch', function (){
  gulp.watch('./src/styles/**/*.scss',['scss']).on('change', browserSync.reload);
  gulp.watch('./src/*.html',['html']).on('change', browserSync.reload);
  gulp.watch('./src/img/*.*',['img']).on('change', browserSync.reload);
  gulp.watch('./src/fonts/**/*.*',['fonts']).on('change', browserSync.reload);
  gulp.watch('./src/js/*.js',['js']).on('change', browserSync.reload);
});

gulp.task('develop', ['html', 'scss', 'img', 'fonts', 'watch', 'js', 'browser-sync'])

// gulp.task('watch', function (){
//   gulp.watch('./src/**/*.scss',('scss'))
// });
