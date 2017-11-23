module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //To minify javaScript files
		uglify: {
			options: {
				manage: false
			},
			my_target: {
				files: {
					'js/perfmatters.min.js'   : ['js/perfmatters.js'],
					'views/js/main.min.js' : ['views/js/main.js']
				}
			}
		},

	// To minify css files.
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'views/css/',
		      src: ['*.css', '!*.min.css'],
		      dest: 'views/css/',
		      ext: '.min.css'
		    }]
		  }
		}
	});


  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};