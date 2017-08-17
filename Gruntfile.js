/*jslint node: true */
"use strict";


module.exports = function(grunt) {

    var dir = {
        src: 'src',
        build: 'build',
        compile: 'bin',
        dist: 'dist',
        vendor: 'bower_components',
        grunt: 'grunt'
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
                    { cwd: '.', src: ['src/**/*.js', 'src/**/*.html'],  dest: 'build/' }
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
            },
            buildVendorFiles: {
                files: [
                    { cwd: '.',
                      src: [
                          dir.vendor + '/angular/angular.js',
                          dir.vendor + '/angular-ui-router/release/angular-ui-router.js',
                          dir.vendor + '/jquery/dist/jquery.js',
                          dir.vendor + '/bootstrap/dist/css/bootstrap.css'
                      ],
                      dest: 'build/'
                    }
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