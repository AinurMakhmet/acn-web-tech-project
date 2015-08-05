module.exports = function(grunt) {

grunt.initConfig({
    compass: {
	dist: {                         //Task 
	  options: {                    //Target
	     sassDir: 'sass',           //Target options
	     cssDir: 'css', 
	     environment: 'production'
	   }
	 },
	dev: {                          //Another target
	   options: {
		sassDir: 'sass',
		cssDir: 'css'
		}

	      }
	}
});

grunt.loadNpmTasks('grunt-contrib-compass');

grunt.registerTask('default', ['compass']);

}
