const gulp = require('gulp');
var rename = require('gulp-rename');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var runTimestamp = Math.round(Date.now()/1000);
var fontName = 'icon'; 

const paths = {
  srcDir : './src/assets/iconfont',
  dstDir : './dist/assets/images'
}

gulp.task('iconfont', function(){
  return gulp.src([paths.srcDir + '/svg/*.svg'])
  .pipe(iconfont({
    fontName: fontName, // required
    timestamp: runTimestamp,
    formats: ['ttf','eot','woff','svg']
  }))
  .on('glyphs', function(glyphs, options) {
    engine = 'lodash',
    consolidateOptions = {
      glyphs: glyphs,
      fontName: fontName,
      appendUnicode: true,
      fontPath: './../fonts/', 
      className: 'iconfont',
    }
    // アイコンフォント用のscssを作成(実装用)
    gulp.src('src/assets/iconfont/templates/iconfont.scss')
    .pipe(consolidate(engine, consolidateOptions))
    .pipe(rename({ basename: '_' + fontName }))
    .pipe(gulp.dest('src/assets/styles/iconfont'));
    // アイコンフォント用のcssを作成(プレビュー用)
    gulp.src('src/assets/iconfont/templates/iconfont.css')
    .pipe(consolidate(engine, consolidateOptions))
    .pipe(rename({ basename:fontName }))
    .pipe(gulp.dest('src/assets/iconfont/')); 
    // アイコンフォント一覧のサンプルHTMLを作成(プレビュー用)
    gulp.src('src/assets/iconfont/templates/iconfont.html')
    .pipe(consolidate(engine, consolidateOptions))
    .pipe(rename({ basename:'sample' }))
    .pipe(gulp.dest('src/assets/iconfont/')); 
  })
  .pipe(gulp.dest('dist/assets/fonts/'));
});