module.exports = {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1,
    sourceMap: true
  },
  target: {
    files: [ {
      expand: true,
      cwd: 'temp',
      src: [ '*.css', '!*.min.css' ],
      dest: 'www/assets/css',
      ext: '.min.css'
    } ]
  }
};
