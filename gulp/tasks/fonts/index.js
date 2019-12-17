const gulp = require('gulp');
const changed = require('gulp-changed');
const paths = {
  srcDir : './src/assets/fonts',
  dstDir : './dist/assets/fonts'
}

gulp.task('fonts', function() {
  const srcGlob = paths.srcDir + '/**/*.+(eot|ttf|woff|woff2|svg)';
  const dstGlob = paths.dstDir;

  return gulp.src(srcGlob)
  .pipe(changed(dstGlob))
  .pipe(gulp.dest(dstGlob)); 
  
});
