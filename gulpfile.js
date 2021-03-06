const gulp = require('gulp'), rename = require('gulp-rename'), uglycss = require('gulp-clean-css'), uglyjs = require('gulp-uglify'), sass= require('gulp-sass'), concat = require('gulp-concat'), babel = require('gulp-babel');

gulp.task
gulp.task('scss', function(){
	gulp.src('./scss/**/*.scss')
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
gulp.task('es6', () => {
   gulp.src('./js/*.js')
     .pipe(babel({presets: ['es2015']}))
     .pipe(uglyjs())
     .pipe(concat('all.js'))
     .pipe(gulp.dest('./build/js'));
});
gulp.task('default',function(){
	gulp.watch('./scss/**/*.scss',['scss']);
	gulp.watch('./js/*.js', ['js'])
})
