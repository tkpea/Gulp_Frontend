const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const path = {
  dstDir: './dist/assets/scripts/',
  srcDir: './src/assets/scripts/main.ts'
}

gulp.task('typescript', function() {
  return browserify()
  .add(path.srcDir)
  .plugin('tsify', {
    target: 'ES5',
    removeComments: true
})
.bundle()
.pipe(source('main.js'))
.pipe(gulp.dest(path.dstDir));  
});

gulp.task('babel:compress', function() {
  return gulp.src('./dist/assets/scripts/main.js')
    .pipe(uglify())
    .pipe(gulp.dest(path.dstDir));
});