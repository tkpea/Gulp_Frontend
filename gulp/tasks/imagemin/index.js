const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
const changed = require('gulp-changed');
const webp     = require('gulp-webp');

const paths = {
  srcDir : './src/assets/images',
  dstDir : './dist/assets/images'
}

gulp.task('imagemin', function(){
  const srcGlob = paths.srcDir + '/**/*.+(jpg|jpeg|png|gif|svg)';
  const dstGlob = paths.dstDir;
  const options = [
    pngquant({
      quality: [0.65,0.80],
    }),
    mozjpeg({
      quality: 0.70,
    }),
    imagemin.svgo(),
    imagemin.optipng(),
    imagemin.gifsicle()
  ]

  return gulp.src(srcGlob)
    .pipe(changed(dstGlob))
    .pipe(imagemin(options))
    .pipe(webp())  
    .pipe(gulp.dest(dstGlob));
});
