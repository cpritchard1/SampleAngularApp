/**
 * This file/module contains all configuration for the build process.
 */

(function() {
    var dir = {
        src: 'src',
        build: 'build',
        compile: 'bin',
        dist: 'dist',
        vendor: 'vendor',
        grunt: 'grunt'
    };

    module.exports = {
        /**
         * The `build_dir` folder is where our projects are compiled during
         * development and the `compile_dir` folder is where our app resides once it's
         * completely built.
         */

        srcDir: dir.src,
        vendorDir: dir.vendor,
        buildDir: dir.build,
        compileDir: dir.compile,
        distDir: dir.dist,
        gruntDir: dir.grunt,

        gruntConfigDir: dir.grunt + '/config',
        gruntTaskDir: dir.grunt + '/tasks',

        /**
         * This is a collection of file patterns that refer to our app code (the
         * stuff in `src/`). These file paths are used in the configuration of
         * build tasks. `js` is all project javascript, less tests. `ctpl` contains
         * our reusable components' (`src/common`) template HTML files, while
         * `atpl` contains the same, but for our app's code. `html` is just our
         * main HTML file, `less` is our main stylesheet, and `unit` contains our
         * app's unit tests.
         */
        appFiles: {
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
        },

        /**
         * This is the same as `appFiles`, except it contains patterns that
         * reference vendor code (`vendor/`) that we need to place into the build
         * process somewhere. While the `appFiles` property ensures all
         * standardized files are collected for compilation, it is the user's job
         * to ensure non-standardized (i.e. vendor-related) files are handled
         * appropriately in `vendor_files.js`.
         *
         * The `vendor_files.js` property holds files to be automatically
         * concatenated and minified with our project source files.
         *
         * The `vendor_files.css` property holds any CSS files to be automatically
         * included in our app.
         *
         * The `vendor_files.assets` property holds any assets to be copied along
         * with our app's assets. This structure is flattened, so it is not
         * recommended that you use wildcards.
         */
        vendorFiles: {
            js: [
                dir.vendor + '/angular/angular.min.js',
                dir.vendor + '/angular/angular.js',
                dir.vendor + '/angular-ui-router/release/angular-ui-router.min.js',
                dir.vendor + '/bootstrap/dist/js/bootstrap.min.js',
                dir.vendor + '/angular-animate/angular-animate.min.js',
                dir.vendor + '/jquery/dist/jquery.min.js'
            ]
        }
    };

})();