var all = require('require-dir')('.');
var tsProject = all.plugins.ts.createProject('tsconfig.json', { outFile: 'app.js' });

all.plugins.gulp.task('scripts', ['scripts:typings', 'scripts:typescript']);


all.plugins.gulp.task('scripts:typings', function () {
    all.plugins.sh.exec('typings install');
});

all.plugins.gulp.task('scripts:typescript', function () {
    function prefixSources(prefix) {
        function process(file, encoding, callback) {

            if (file.sourceMap) {
                for (i in file.sourceMap.sources) {
                    var source = file.sourceMap.sources[i];
                    file.sourceMap.sources[i] = prefix + source;
                }
            }

            this.push(file);
            return callback();
        }

        return all.plugins.through.obj(process);
    }

    var tsResult = tsProject.src()
        .pipe(all.plugins.sourcemaps.init())
        .pipe(all.plugins.ts(tsProject));

    return tsResult.js
        .pipe(all.plugins.ngAnnotate())
        .pipe(prefixSources('../../js/'))
        .pipe(all.plugins.sourcemaps.write('.', { sourceRoot: "", includeContent: false }))
        .pipe(all.plugins.gulp.dest('www/js'));
});
