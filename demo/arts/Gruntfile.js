module.exports = function(grunt) {
    "use strict";


    grunt.initConfig({

        less: {
            compileCore: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: 'bootstrap.css.map',
                    sourceMapFilename: 'assets/css/bootstrap.css.map'
                },
                files: {
                    'assets/css/bootstrap.css': 'assets/less/bootstrap/bootstrap.less'
                }
            },
            compileTheme: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: 'bootstrap-theme.css.map',
                    sourceMapFilename: 'assets/css/bootstrap-theme.css.map'
                },
                files: {
                    'assets/css/bootstrap-theme.css': 'assets/less/bootstrap/theme.less'
                }
            },
            style:{

                files: {
                    'assets/css/style.css': 'assets/less/style.less'
                }
            },
            minify: {
                options: {
                    cleancss: true,
                    report: 'min'
                },
                files: {
                    'assets/css/bootstrap.min.css': 'assets/css/bootstrap.css',
                    'assets/css/bootstrap-theme.min.css': 'assets/css/bootstrap-theme.css'
                }
            }
        }


    });



    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-mincss');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-image-embed');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-imageoptim');




};
