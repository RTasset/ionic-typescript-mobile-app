var all = require('require-dir')('.');

/*************************/
/*      TEMPLATES        */
/*************************/
all.plugins.gulp.task('templates', function () {
    return all.plugins.gulp.src(all.variables.paths.templates.src)
        .pipe(all.plugins.templateCache({standalone:true}))
        .pipe(all.plugins.gulp.dest(all.variables.paths.templates.output));
});