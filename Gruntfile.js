module.exports = function( grunt ) {

  grunt.initConfig( {
    // read package.json
    pkg: grunt.file.readJSON( 'package.json' ),
    // sass config
    sass: require( './build/config/sass' ),
    // cssmin config
    cssmin: require( './build/config/cssmin' ),
    // image optimizing config
    imagemin: require( './build/config/imagemin' ),
    // watch files and rebuild
    watch: require('./build/config/watch'),
    // insert scripts
    insert: require('./build/config/insert'),
    // copy static files
    copy: require('./build/config/copy'),
  } );

  // load npm plugins (all dependencies that match /^grunt/)
  require( 'load-grunt-tasks' )( grunt );

  // load custom tasks
  grunt.loadTasks( './build/tasks' );

  grunt.event.on('watch', function(action, filepath, target) {
  grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
});

};
