/* jshint node: true */

module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/**\n' +
              '* <%= pkg.name %>.js v<%= pkg.version %> by @fat and @mdo\n' +
              '* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              '* <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
              '*/\n',
    jqueryCheck: 'if (!jQuery) { throw new Error(\"Bootstrap requires jQuery\") }\n\n',

    // Task configuration.
    clean: {
      dist: ['dist']
    },

    jshint: {
      options: {
        jshintrc: 'js/.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: ['js/*.js']
      },
      test: {
        src: ['js/tests/unit/*.js']
      }
    },

    concat: {
      options: {
        banner: '<%= banner %><%= jqueryCheck %>',
        stripBanners: false
      },
      bootstrap: {
        src: [
          'js/bootstrap/transition.js',
          'js/bootstrap/alert.js',
          'js/bootstrap/button.js',
          'js/bootstrap/carousel.js',
          'js/bootstrap/collapse.js',
          'js/bootstrap/dropdown.js',
          'js/bootstrap/modal.js',
          'js/bootstrap/tooltip.js',
          'js/bootstrap/popover.js',
          'js/bootstrap/scrollspy.js',
          'js/bootstrap/tab.js',
          'js/bootstrap/affix.js'
        ],
        dest: 'dist/js/bootstrap/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      bootstrap: {
        src: ['<%= concat.bootstrap.dest %>'],
        dest: 'dist/js/bootstrap/<%= pkg.name %>.min.js'
      }
    },

    recess: {
      options: {
        compile: true
      },
      bootstrap: {
        src: ['less/bootstrap.less'],
        dest: 'dist/css/<%= pkg.name %>.css'
      },
      min: {
        options: {
          compress: true
        },
        src: ['less/bootstrap.less'],
        dest: 'dist/css/<%= pkg.name %>.min.css'
      },
      theme: {
        src: ['less/theme.less'],
        dest: 'dist/css/<%= pkg.name %>-theme.css'
      },
      theme_min: {
        options: {
          compress: true
        },
        src: ['less/theme.less'],
        dest: 'dist/css/<%= pkg.name %>-theme.min.css'
      }
    },

    copy: {
      fonts: {
        expand: true,
        src: ["fonts/*"],
        dest: 'dist/'
      }
    },

    qunit: {
      options: {
        inject: 'js/tests/unit/phantom.js'
      },
      files: ['js/tests/*.html']
    },

    connect: {
      server: {
        options: {
          port: 3000,
          base: '.'
        }
      }
    },

  


    watch: {
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
      recess: {
        files: 'less/*.less',
        tasks: ['recess']
      }
    }
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('browserstack-runner');

 

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat', 'uglify']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['recess']);

  // Fonts distribution task.
  grunt.registerTask('dist-fonts', ['copy']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-css', 'dist-fonts', 'dist-js']);

  // Default task.
  grunt.registerTask('default', [ 'dist']);


};