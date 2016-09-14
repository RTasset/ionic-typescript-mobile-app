var all = require('require-dir')('.');

all.plugins.gulp.task('sass', ['sass:ionic', 'sass:custom']);


all.plugins.gulp.task('sass:ionic', function () {
    return all.plugins.gulp.src('app/scss/libs/ionic-angular/scss/ionic.scss')
     .pipe(all.plugins.sourcemaps.init())
     .pipe(all.plugins.sass.sync().on('error', all.plugins.sass.logError))
     .pipe(all.plugins.autoprefixer())
     .pipe(all.plugins.sourcemaps.write('.'))
     .pipe(all.plugins.gulp.dest('www/css'));
});


all.plugins.gulp.task('sass:custom', function () {
    return all.plugins.gulp.src('app/scss/custom/style.scss')
     .pipe(all.plugins.sourcemaps.init())
     .pipe(all.plugins.sass.sync().on('error', all.plugins.sass.logError))
     .pipe(all.plugins.autoprefixer())
     .pipe(all.plugins.sourcemaps.write('.'))
     .pipe(all.plugins.gulp.dest('www/css'));
});
