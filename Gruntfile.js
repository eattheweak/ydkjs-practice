// Generated on 2015-05-18 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        rootPath: require('./bower.json').rootPath || '/',
        dist: grunt.option('deploy') || grunt.option('devdeploy') || grunt.option('testdeploy') || 'dist',
        tmp: '.tmp',
        test: 'test'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            //bower: {// commenting out to reduce processor load
            //    files: ['bower.json'],
            //    tasks: ['wiredep']
            //},
            js: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            //jsTest: {// commenting out to reduce processor load
            //    files: ['test/spec/{,*/}*.js'],
            //    tasks: ['newer:jshint:test', 'karma']
            //},
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            //gruntfile: {// commenting out to reduce processor load
            //    files: ['Gruntfile.js']
            //},
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/{,*/}*.html',
                    '<%= yeoman.app %>/{,*/}config.json',
                    '.tmp/styles/{,*/}*.css',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: 'http://localhost:9000' + appConfig.rootPath,
                    middleware: function (connect) {
                        return [
                            connect().use(appConfig.rootPath, connect.static('.tmp')),
                            connect().use(
                                appConfig.rootPath + 'bower_components',
                                connect.static('./bower_components')
                            ),
                            connect().use(
                                appConfig.rootPath + 'app/styles',
                                connect.static('./app/styles')
                            ),
                            connect().use(appConfig.rootPath, connect.static(appConfig.app))
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>'
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= yeoman.app %>/scripts/{,*/}*.js',
                    '!<%= yeoman.app %>/scripts/kendoui/**/*.js'
                ]
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/{,*/}*',
                        '!<%= yeoman.dist %>/.git{,*/}*',
                        '.sass-cache'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            server: {
                options: {
                    map: true
                },
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },


        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= yeoman.app %>/index.html', '<%= yeoman.app %>/report-viewer.html'],
                ignorePath: /\.\.\//
            },
            test: {
                devDependencies: true,
                src: '<%= karma.unit.configFile %>',
                ignorePath: /\.\.\//,
                fileTypes: {
                    js: {
                        block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
                        detect: {
                            js: /'(.*\.js)'/gi
                        },
                        replace: {
                            js: '\'{{filePath}}\','
                        }
                    }
                }
            },
            sass: {
                src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                ignorePath: /(\.\.\/){1,2}bower_components\//
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: './bower_components/',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false,
                raw: 'Sass::Script::Number.precision = 10\n'
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeoman.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    sourcemap: true
                }
            }
        },

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= yeoman.dist %>/scripts/{,*/}*.js',
                    '<%= yeoman.dist %>/styles/{,*/}*.css',
                    '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '!<%= yeoman.dist %>/images/{,*/}spinner_black_16.gif',
                    '<%= yeoman.dist %>/styles/fonts/*'
                ]
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            index: {
                src: ['<%= yeoman.app %>/index.html', '<%= yeoman.app %>/report-viewer.html'],
                options: {
                    dest: '<%= yeoman.dist %>',
                    flow: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        useminPrepareDev: {
            index: {
                src: ['<%= yeoman.app %>/index.html', '<%= yeoman.app %>/report-viewer.html'],
                options: {
                    dest: '<%= yeoman.dist %>',
                    flow: {
                        steps: {
                            js: ['concat'],
                            css: ['concat']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: [
                    '<%= yeoman.dist %>',
                    '<%= yeoman.dist %>/images',
                    '<%= yeoman.dist %>/styles'
                ]
            }
        },

        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        cssmin: {
            noKendo: {
                files: [{
                    dest: '<%= yeoman.dist %>/styles/vendor.css',
                    src: ['.tmp/concat/styles/vendor.css']
                }, {
                    dest: '<%= yeoman.dist %>/styles/main.css',
                    src: ['.tmp/concat/styles/main.css']
                }, {
                    dest: '<%= yeoman.dist %>/styles/reportviewervendor.css',
                    src: ['.tmp/concat/styles/reportviewervendor.css']
                }, {
                    dest: '<%= yeoman.dist %>/styles/reportviewermain.css',
                    src: ['.tmp/concat/styles/reportviewermain.css']
                }]
            }
        },
        uglify: {
            noKendo: {
                files: [{
                    dest: '<%= yeoman.dist %>/scripts/vendor.js',
                    src: ['.tmp/concat/scripts/vendor.js']
                }, {
                    dest: '<%= yeoman.dist %>/scripts/scripts.js',
                    src: ['.tmp/concat/scripts/scripts.js']
                }, {
                    dest: '<%= yeoman.dist %>/scripts/reportviewervendor.js',
                    src: ['.tmp/concat/scripts/reportviewervendor.js']
                }, {
                    dest: '<%= yeoman.dist %>/scripts/reportviewermain.js',
                    src: ['.tmp/concat/scripts/reportviewermain.js']
                }]
            }
        },
        // concat: {
        //   dist: {}
        // },

        //imagemin: {
        //    dist: {
        //        files: [{
        //            expand: true,
        //            cwd: '<%= yeoman.app %>/images',
        //            src: '{,*/}*.{png,jpg,jpeg,gif}',
        //            dest: '<%= yeoman.dist %>/images'
        //        }]
        //    }
        //},

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html', 'views/{,*/}*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
                }]
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/*.html']
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt,json,xml}',
                        '.htaccess',
                        '*.html',
                        'config.json',
                        'views/{,*/}*.html',
                        'images/{,*/}*.{webp,jpg,png,gif,json}',
                        'images/*.json',
                        'styles/fonts/{,*/}*.*',
                        'styles/Bootstrap{,*/}*.*',
                        'scripts/helpers.js',
                        'scripts/errors/authentication-error.js'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    src: ['generated/*'],
                    dest: '<%= yeoman.dist %>/images'
                }, {
                    expand: true,
                    cwd: 'bower_components/fontawesome/fonts',
                    src: ['*.*'],
                    dest: '<%= yeoman.dist %>/fonts'
                }, {
                    expand: true,
                    cwd: 'bower_components/fontawesome/fonts',
                    src: ['*.*'],
                    dest: '<%= yeoman.tmp %>/fonts'
                }, {
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts/kendoui/ReportViewer/templates',
                    src: 'telerikReportViewerTemplate-9.1.15.731.html',
                    dest: '<%=yeoman.dist %>/',
                    rename: function (dest, src) {
                        return dest + src.replace(/[\-\d\.]+\.html/, '.html');
                    }
                }, {
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts/kendoui/ReportViewer/templates',
                    src: 'telerikReportViewerTemplate-9.1.15.731.html',
                    dest: '<%=yeoman.tmp %>/',
                    rename: function (dest, src) {
                        return dest + src.replace(/[\-\d\.]+\.html/, '.html');
                    }
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            },
            generated: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: ['*.*'],
                    dest: '<%= yeoman.dist %>/scripts'
                }, {
                    expand: true,
                    cwd: '.tmp/concat/styles',
                    src: ['*.*'],
                    dest: '<%= yeoman.dist %>/styles'
                }]
            },
            kendoJS: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: ['kendo.js'],
                    dest: '<%= yeoman.dist %>/scripts'
                }, {
                    expand: true,
                    cwd: '.tmp/concat/styles',
                    src: ['kendo.css'],
                    dest: '<%= yeoman.dist %>/styles'
                }]
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'compass:server'
            ],
            test: [
                'compass'
            ],
            dist: [
                'compass:dist',
                //'imagemin',
                'svgmin'
            ]
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        }
    });

    /**
     * Exec bower to install dependencies
     */
    grunt.registerTask('bowerinstall', 'install bower packgaes', function () {
        var exec = require('child_process').exec;
        var cb = this.async();
        exec('bower install', { cwd: '.' }, function (err, stdout, stderr) {
            console.log(stdout);
            if (typeof stderr !== 'undefined') {
                console.error(stderr);
            }
            cb();
        });
    });

    grunt.registerTask('useminPrepareDev', function () {
        var useminPrepareDevConfig = grunt.config('useminPrepareDev');
        grunt.config.set('useminPrepare', useminPrepareDevConfig);
        grunt.task.run('useminPrepare');
    });

    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'wiredep',
            'concurrent:server',
            'autoprefixer:server',
            'copy:dist',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('test', [
        'newer:jshint',
        'clean:server',
        'wiredep',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'wiredep',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'ngAnnotate',
        'copy:dist',
        'cdnify',
        'cssmin:noKendo',
        'uglify:noKendo',
        'copy:kendoJS',
        'filerev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('devbuild', [
        'clean:dist',
        'wiredep',
        'useminPrepareDev',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'ngAnnotate',
        'copy:dist',
        'copy:generated',
        'cdnify',
        'filerev',
        'usemin',
        'htmlmin'
    ]);

    if (grunt.option('deploy')) {
        grunt.registerTask('default', [
            'bowerinstall',
            'build'
        ]);
    } else if (grunt.option('devdeploy')) {
        grunt.registerTask('default', [
            'bowerinstall',
            'devbuild'
        ]);
    }
};
