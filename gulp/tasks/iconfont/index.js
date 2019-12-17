const gulp = require('gulp');
var rename = require('gulp-rename');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var runTimestamp = Math.round(Date.now()/1000);
var fontName = 'icon'; // アイコンフォント名

const paths = {
  srcDir : './src/assets/iconfont',
  dstDir : './dist/assets/images'
}
//アイコンフォント作成タスク
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
      fontPath: './../fonts/', // cssからのフォントパスを指定 ※cssからの相対パスでフォントを指定してもOK
      className: 'iconfont', // cssのフォントのクラス名を指定
    }
    // アイコンフォント用のscssを作成(実装用)
    gulp.src('src/assets/iconfont/templates/iconfont.scss')
    .pipe(consolidate(engine, consolidateOptions))
    .pipe(rename({ basename: '_' + fontName }))
    .pipe(gulp.dest('src/assets/styles/iconfont')); // scssの吐き出し先を指定
    // アイコンフォント用のcssを作成(プレビュー用)
    gulp.src('src/assets/iconfont/templates/iconfont.css')
    .pipe(consolidate(engine, consolidateOptions))
    .pipe(rename({ basename:fontName }))
    .pipe(gulp.dest('src/assets/iconfont/')); // scssの吐き出し先を指定
    // アイコンフォント一覧のサンプルHTMLを作成(プレビュー用)
    gulp.src('src/assets/iconfont/templates/iconfont.html')
    .pipe(consolidate(engine, consolidateOptions))
    .pipe(rename({ basename:'sample' }))
    .pipe(gulp.dest('src/assets/iconfont/')); // サンプルhtmlの吐き出し先を指定
  })
  .pipe(gulp.dest('dist/assets/fonts/'));
});