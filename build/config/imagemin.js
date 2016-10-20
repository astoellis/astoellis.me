module.exports = {
  dynamic: {
    files: [ {
      expand: true,
      cwd: 'src/assets/img',
      src: [ '**/*.{png,jpg,gif}' ],
      dest: 'www/assets/img/'
    } ]
  }
};
