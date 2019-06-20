var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass',  function(){
    return gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('php',  function(){
    return gulp.src('src/*.php')
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('scripts', function() {
     return gulp.src([
        'src/libs/jquery/dist/jquery.min.js',
        'src/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/js'));
});
gulp.task('css-libs', function() {
    return gulp.src('src/sass/libs.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/css'));
});
gulp.task('browser-sync',  function() {
    browserSync({
        proxy: 'archiveup',
        notify: false
    });
});
gulp.task('clean', async function () {
    return del.sync('dist');
});
gulp.task('clear', async function () {
    return cache.clearAll();
});
gulp.task('prebuild', async function() {
    var buildCss = gulp.src(['src/css/**/*'])
        .pipe(gulp.dest('dist/css'))
    var buildFonts = gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
    var buildJs = gulp.src('src/js/**/*')
        .pipe(gulp.dest('dist/js'))
    var buildHtml = gulp.src('src/*.+(php|html)')
        .pipe(gulp.dest('dist'));
});
gulp.task('img', function() {
    return gulp.src('src/img/**/*')
            .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});
gulp.task('watch',  function() {
    gulp.watch('src/sass/*.scss', gulp.parallel('sass'));
    gulp.watch('src/*.php', gulp.parallel('php'));
    gulp.watch(['app/js/common.js', 'app/libs/**/*.js'], gulp.parallel('scripts'));
});
gulp.task('build', gulp.parallel('clean','sass','scripts','prebuild', 'img'));
gulp.task('default', gulp.parallel('sass','css-libs','scripts', 'browser-sync', 'watch'));