module.exports = function( grunt ) {

  grunt.initConfig( {
    // read package.json
    pkg: grunt.file.readJSON( 'package.json' ),
    // sass config
    sass: require( './build/config/sass' ),
    // cssmin config
    cssmin: require( './build/config/cssmin' ),
    // image optimizing config
    imagemin: require( './build/config/imagemin' )
  } );

  // load npm plugins (all dependencies that match /^grunt/)
  require( 'load-grunt-tasks' )( grunt );

  // load custom tasks
  grunt.loadTasks( './build/tasks' );

};
