var all = require('require-dir')('.');

all.plugins.gulp.task('clean', ['clean:www','clean:vcxproj']);

// Delete any .vcxproj to prevent KoreBuild from finding them
all.plugins.gulp.task('clean:www', function () {
    return all.plugins.del(all.variables.paths.clean.www);
});

// Delete any .vcxproj to prevent KoreBuild from finding them
all.plugins.gulp.task('clean:vcxproj', function () {
    return all.plugins.del(all.variables.paths.clean.vcxproj);
});