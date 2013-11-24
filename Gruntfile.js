'use strict';

var fs = require('fs'),
    path = require('path'),
    lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
    proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    var runMode = grunt.option('mode') || 'deployed';

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist',
        connect: {
            debug: {
                mainPort: 8888
            },
            deployed: {
                mainPort: 9000
            }
        }
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            compass: {
                files: ['<%= yeoman.app %>/css/{,*/}*.{scss,sass}'],
                tasks: ['compass:server']
            },
            livereload: {
                files: [
                    '<%= yeoman.app %>/{,*/}*.html',
                    '<%= yeoman.app %>/views/{,*/}*.html',
                    '<%= yeoman.app %>/views/partials/{,*/}*.html',
                    '{.tmp,<%= yeoman.app %>}/css/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/js/{,*/}*.js',
                    '<%= yeoman.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                tasks: ['livereload']
            }
        },
        connect: {
            options: {
                port: yeomanConfig.connect[runMode].mainPort,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            proxySnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%= connect.options.port %>/admin'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/js/{,*/}*.js'
            ]
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/css',
                cssDir: '.tmp/css',
                imagesDir: '<%= yeoman.app %>/img',
                fontsDir: '<%= yeoman.app %>/css/fonts',
                javascriptsDir: '<%= yeoman.app %>/js',
                // importPath: '<%= yeoman.app %>/components',
                raw: 'http_images_dir = "img"; http_fonts_dir = "css/fonts/";',
                relativeAssets: true
            },
            dist: {
                options: {
                    raw: 'http_images_dir = "admin/img"; http_fonts_dir = "admin/css/fonts/";',
                    relativeAssets: false
                }
            },
            server: {
                options: {
                    raw: 'http_images_dir = "img"; http_fonts_dir = "css/fonts/";',
                    relativeAssets: false,
                    debugInfo: true
                }
            }
        },
        concat: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/js/js.js': [
                        '.tmp/js/{,*/}*.js',
                        '<%= yeoman.app %>/js/{,*/}*.js'
                    ]
                }
            }
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/css/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/img',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/img'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/css/main.css': [
                        '<%= yeoman.app %>/css/{,*/}*.css',
                        '.tmp/css/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                     // https://github.com/yeoman/grunt-usemin/issues/44
                     //collapseWhitespace: true,
                     collapseBooleanAttributes: true,
                     removeAttributeQuotes: true,
                     removeRedundantAttributes: true,
                     useShortDoctype: true,
                     removeEmptyAttributes: true,
                     removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: ['*.html', 'views/**/*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/*.html']
            }
        },
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>/js',
                    src: '*.js',
                    dest: '<%= yeoman.dist %>/js'
                }]
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/js/js.js': [
                        '<%= yeoman.dist %>/js/js.js'
                    ]
                }
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/js/{,*/}*.js',
                        '<%= yeoman.dist %>/css/{,*/}*.css',
                        '<%= yeoman.dist %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= yeoman.dist %>/css/fonts/*'
                    ]
                }
            }
        },
        copy: {
            build: {
                files: [{
                    expand: true,
                    flatten: true,
                    dot: true,
                    src: ['<%= yeoman.constantsDir %>/constants.js'],
                    dest: '<%= yeoman.app %>/js/'
                }],
            },
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        // 'components/**/*',
                        'bin/**/*',
                        'old_vendor/**/*',
                        'js/vendor/**/*',
                        'js/constants.js',
                        'img/{,*/}*.{gif,webp,svg}',
                        'css/fonts/**/*'
                    ]
                }]
            }
        }
    });

    grunt.renameTask('regarde', 'watch');

    grunt.registerTask('server', [
        'clean:server',
        'copy:build',
        'compass:server',
        // 'karma:unit',
        'configureProxies',
        'livereload-start',
        'connect:livereload',
        'watch'
    ]);

    grunt.registerTask('test', [
        'clean:server',
        'copy:build',
        'compass',
        'connect:test',
//        'karma:unit'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'copy:build',
        //'jshint',
        // 'karma:unit',
        'compass:dist',
        'useminPrepare',
        'concat:dist',
        'imagemin',
        'cssmin',
        'htmlmin',
        'copy:dist',
        // 'cdnify',
        'ngmin',
        'uglify',
        //'rev',
        'usemin'
    ]);

    grunt.registerTask('default', ['build']);
};
