const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');

const path = {
  dstDir: './dist',
  srcDir: './src/**/*.ejs',
  rmSrcDir: '!./src/**/_*.ejs'
}


gulp.task( "build:ejs", function () {
  return gulp.src([path.srcDir, '!' + "./src/**/_*.ejs"])
        .pipe(ejs())
        .pipe(rename({ extname: '.html' }))
        .pipe(gulp.dest(path.dstDir));
});

gulp.task('watch:ejs', function() {

  const ejsOptions = {
    pretty: true // 圧縮はしないでネスト上で出力
  };

  return gulp.src([path.srcDir, path.rmSrcDir])
    .pipe(ejs(ejsOptions))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest(path.dstDir))
})
