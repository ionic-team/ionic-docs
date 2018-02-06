var gulp = require('gulp');
var markdown = require('gulp-markdown');
var hljs = require('highlight.js');
gulp.task('default', function() {
  return gulp
    .src('./docs-md/**/*.md')
    .pipe(gulp.dest('./www/docs-content'));
});
