const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp/tasks', {recurse: true});

gulp.task('server', gulp.series('browser-sync'));

gulp.task('build', gulp.series('build:ejs', 'build:scss','typescript', 'imagemin', 'fonts', 'iconfont'));


gulp.task('default',gulp.series('build:ejs'));