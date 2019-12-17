const gulp = require('gulp');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require('babelify');

const path = {
  dstDir: './dist/assets/scripts',
  srcDir: './src/assets/scripts/main.js'
}

gulp.task('babel', function() {
  return browserify(path.srcDir)
    .transform(babelify.configure({
      presets: ["@babel/env"],
      sourceType: "module"
    }))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(path.dstDir));
});

gulp.task('babel:compress', function() {
  return gulp.src('./dist/assets/scripts/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest(path.dstDir));
});