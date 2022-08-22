module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    files: [{ pattern: 'assets/modestoOptions.js', watched: false }],
    exclude: [],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      'karma-mocha-reporter',
      'karma-coverage',
    ],
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './../coverage/xm360-app'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {
          type: 'json',
          dir: 'coverage',
          subdir: 'json',
          file: 'coverage-final.json',
        },
      ],
    },

    remapCoverageReporter: {
      'text-summary': null,
      json: './coverage/coverage-final.json',
      html: './coverage/html',
    },
    preprocessors: {},
    webpackServer: {
      noInfo: true, // please don't spam the console when running in karma!
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      stats: 'errors-only',
      noInfo: true,
    },
    reporters: ['mocha', 'coverage', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    browserNoActivityTimeout: 150000,
  });
};
