module.exports = function( grunt ) {

  grunt.registerTask( 'build:compile', [
    'clean',
    'sass',
    'cssmin',
    'copy:main'
  ] );
  grunt.registerTask( 'build:images', [
    'clean',
    'imagemin'
  ] );

  grunt.registerTask( 'build', [
    'clean',
    'sass',
    'cssmin',
    'imagemin',
    'copy:main'
  ] );

};
