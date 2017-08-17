/*jslint node: true */
"use strict";


module.exports = function(grunt) {

    var dir = {
        src: 'src',
        build: 'build',
        compile: 'bin',
        dist: 'dist',
        vendor: 'vendor',
        grunt: 'grunt'
    };

    var appfiles = {
        /**
        * This is a collection of file patterns that refer to our app code (the
        * stuff in `src/`). These file paths are used in the configuration of
        * build tasks. `js` is all project javascript, less tests. `ctpl` contains
        * our reusable components' (`src/common`) template HTML files, while
        * `atpl` contains the same, but for our app's code. `html` is just our
        * main HTML file, `less` is our main stylesheet, and `unit` contains our
        * app's unit tests.
        */
        js: [dir.src + '/**/*.js', '!' + dir.src + '/**/*.spec.js', '!' + dir.src + '/assets/**/*.js'],
        assets: [dir.src + '/assets/**/*'],
        jsunit: [dir.src + '/**/*.spec.js'],

        mockDataFiles: [dir.src + '/common/dataMocks/**/*.json'],

        appTemplates: [dir.src + '/app/**/*.tpl.html'],
        commonTemplates: [dir.src + '/common/**/*.tpl.html'],

        html: [dir.src + '/index.html'],
        less: dir.src + '/less/main.less',
        lessFiles: dir.src + '**/*.less',

        toBeCopied: [dir.src + '/common/layouts/**/*.html', dir.src + '/app/**/*.html', '!' + dir.src + '/app/**/*.tpl.html']
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            all: [
                dir.build,
                dir.compile,
                dir.dist
            ],
            vendor: [
                dir.build + '/vendor'
            ],
            index: [
                dir.build + '/index.html'
            ]
        },

        mkdir: {
            dist: {
                options: {
                    create: [dir.build]
                }
            }
        },

        jshint: {
            all: [ 'Gruntfile.js', 'src/app/*.js', 'src/app/**/*.js' ]
        },

        html2js: {
            dist: {
                src: [ 'index.html', 'src/app/**/*.tpl.html' ],
                dest: 'tmp/templates.js'
            }
        },

        copy: {
            buildAppJs: {
                files: [
                    { cwd: '.', src: ['src/**/*.js', 'src/**/*.html'] ,  dest: 'build/' }
                ]
            },
            buildAppAssets: {
                files: [
                    { cwd: '.', src: 'src/assets/**/*', dest: 'build/' }
                ]
            },
            buildAppCommon: {
                files: [
                    { cwd: '.', src: 'src/common/**/*', dest: 'build/'}
                ]
            },
            buildAppLess: {
                files: [
                    { cwd: '.', src: 'src/less/**/*', dest: 'build/'}
                ]
            }
        },

        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8000
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-mkdir');

    grunt.registerTask('debug', [ 'clean:all', 'mkdir', 'jshint', 'html2js', 'copy' ]);
};