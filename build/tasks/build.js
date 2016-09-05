module.exports = function( grunt ) {

  grunt.registerTask( 'build:compile', [
    'sass',
    'cssmin'
  ] );
  grunt.registerTask( 'build:images', [
    'imagemin'
  ] );

  grunt.registerTask( 'build', [
    'sass',
    'cssmin',
    'imagemin',
    'copy:main'
  ] );

};
