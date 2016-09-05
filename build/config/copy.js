module.exports = {
  main: {
    expand: true,
    cwd: 'src/',
    src: '*',
    dest: 'www/',
    filter: 'isFile'
  }
};
