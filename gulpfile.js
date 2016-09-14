var all = require('require-dir')('./tasks');

all.plugins.gulp.task('default', function (callback) {
    all.plugins.sequence('clean', 'copy', ['sass', 'scripts', 'templates'])    
});