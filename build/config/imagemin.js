module.exports = {
  dynamic: {
    files: [ {
      expand: true,
      cwd: 'src/assets/img',
      src: [ '**/*.{png,jpg,gif,ico}' ],
      dest: 'www/assets/img/'
    } ]
  }
};
