module.exports = {
  src_folders: [
    'tests/e2e', // Where you are storing your Nightwatch e2e/UAT tests
  ],
  output_folder: './reports', // reports (test outcome) output by nightwatch
  selenium: { // downloaded by selenium-download module (see readme)
    start_process: true, // tells nightwatch to start/stop the selenium process
    server_path: './.selenium/selenium.jar',
    host: '127.0.0.1',
    port: 4444, // standard selenium port
    cli_args: { // chromedriver is downloaded by selenium-download (see readme)
      'webdriver.chrome.driver': './.selenium/chromedriver',
    },
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:3000',
      screenshots: {
        enabled: true, // if you want to keep screenshots
        path: './screenshots', // save screenshots here
      },
      // globals: {},
      desiredCapabilities: { // use Chrome as the default browser for tests
        browserName: 'chrome',
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        webStorageEnabled: true,
        javascriptEnabled: true,
      },
    },
  },
}
