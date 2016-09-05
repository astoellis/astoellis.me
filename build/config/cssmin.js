module.exports = {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: [ {
      expand: true,
      cwd: 'temp',
      src: [ '*.css', '!*.min.css' ],
      dest: 'www/css',
      ext: '.min.css'
    } ]
  }
};
