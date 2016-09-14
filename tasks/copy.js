var all = require('require-dir')('.');

all.plugins.gulp.task('copy', function (callback) {
    return all.plugins.sequence('clean:www', ['copy:libs', 'copy:ionic'], callback);
});

all.plugins.gulp.task('copy:ionic', function (callback) {
    return all.plugins.sequence('copy:ionic:fonts', 'copy:ionic:sass', callback);
});

all.plugins.gulp.task('copy:ionic:fonts', function () {
    return all.plugins.gulp.src(all.variables.paths.copy.ionic.fonts.src, { base: all.variables.paths.copy.ionic.fonts.base })
       .pipe(all.plugins.gulp.dest(all.variables.paths.copy.ionic.fonts.dest));
});
all.plugins.gulp.task('copy:ionic:sass', function () {
    return all.plugins.gulp.src(all.variables.paths.copy.ionic.scss.src, { base: all.variables.paths.copy.ionic.scss.base })
       .pipe(all.plugins.gulp.dest(all.variables.paths.copy.ionic.scss.dest));
});
all.plugins.gulp.task('copy:libs', function () {
    return all.plugins.gulp.src([
       'node_modules/angular-translate/dist/angular-translate.min.js',
       'node_modules/angular-messages/angular-messages.min.js',
       'node_modules/angular-messages/angular-messages.min.js.map',
       'node_modules/ionic-angular/release/js/ionic.bundle.min.js',
       'node_modules/systemjs/dist/system-polyfills.js',
       'node_modules/systemjs/dist/system.js',
       'node_modules/ripple/ripple.js'
    ], { base: all.variables.paths.copy.libs.base })
       .pipe(all.plugins.gulp.dest(all.variables.paths.copy.libs.dest));
});