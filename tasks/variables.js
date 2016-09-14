module.exports =
    {
        paths: {
            watched:{
                sass: ['./scss/**/*.scss'],
                src: ['./app/**/*.ts', './typings/**/*.d.ts'],
                libs: ['../../libs/**/*.js'],
                html: ['./app/**/*.html'],
                ts: ['./app/**/*.ts']
            },
            clean: {
                www: ['www/app', 'www/css', 'www/libs', 'www/templates', 'www/js', 'www/fonts'],
                vcxproj: ['node_modules/**/*.vcxproj']
            },
            copy: {
                ionic: {
                    fonts: {
                        src: 'node_modules/ionic-angular/release/fonts/**/*.{ttf,woff,woff2,eot,eof,svg}',
                        base: 'node_modules/ionic-angular/release/fonts/',
                        dest: 'www/fonts'
                    },
                    scss: {
                        src: 'node_modules/ionic-angular/scss/**/*.scss',
                        base: 'node_modules',
                        dest: 'app/scss/libs'
                    },
                },
                libs: {
                    base: 'node_modules',
                    dest: "www/libs"
                }
            },
            templates: {
                src: "app/modules/**/*.html",
                output: "./www/js/"
            }

        }
    };