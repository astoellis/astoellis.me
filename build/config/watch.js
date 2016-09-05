module.exports = {
  server: {
    files: [
      'src/**/*.js',
      'src/**/*.scss'
    ],
    tasks: [ 'build:compile' ]
  },
  images: {
    files: [
      'src/**/*.{png,jpg,gif}',
    ],
    tasks: [ 'build:images' ]
  },
  root: {
    files: [
      'src/*'
    ],
    tasks: ['copy:main']
  }
}
