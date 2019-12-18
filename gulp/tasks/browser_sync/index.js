const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const requireDir = require('require-dir');

requireDir('../../tasks', {
  recurse: true 
});

gulp.task('browser-sync', function() {

  browserSync.init({
    server: './dist',
  });

  gulp.watch('./src/**/*.ejs', gulp.series('watch:ejs'));
  gulp.watch('dist/index.html').on('change', browserSync.reload);

  
  gulp.watch('./src/assets/styles/**/*.scss', gulp.series('watch:scss'));
  gulp.watch('dist/assets/styles/*.css').on('change', browserSync.reload);


  gulp.watch('./src/assets/scripts/**/*.ts', gulp.series('typescript'));
  gulp.watch('dist/assets/scripts/main.js').on('change', browserSync.reload);

  
  gulp.watch('./src/assets/images/**/*.+(jpg|jpeg|png|gif|svg)', gulp.series('imagemin'));

  gulp.watch('./src/assets/fonts/**/*.+(eot|ttf|woff|woff2|svg)', gulp.series('fonts'));

  gulp.watch('./src/assets/iconfont/svg/*.svg', gulp.series('iconfont'))
});
