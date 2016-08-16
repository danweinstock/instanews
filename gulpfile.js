var gulp = require('gulp'), rename = require('gulp-rename'), uglycss = require('gulp-clean-css'), uglyjs = require('gulp-uglify'), sass= require('gulp-sass'), concat = require('gulp-concat');

gulp.task
gulp.task('scss', function(){
	gulp.src(['./scss/*.scss','./scss/layouts/*.scss','./scss/components/*.scss'])
	.pipe(sass())
	.pipe(uglycss())
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./build/css'))
});
gulp.task('js', function(){
	gulp.src('./js/*.js')
	.pipe(uglyjs())
	.pipe(rename({extname:".min.js"}))
	.pipe(gulp.dest('./build/js'))
})
gulp.task('css',function(){
	gulp.src('./css/*.css')
	.pipe(uglycss())
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./build/css'))
})