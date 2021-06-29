module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['tests'],

  webdriver: {
    start_process: true,
    "server_path": "node_modules/.bin/chromedriver",
    port: 4444,
  },

  test_settings: {
    default: {
      launch_url: 'https://ya.ru',
      desiredCapabilities : {
        browserName : 'chrome'
      },
    }
  }
};

/*
* https://stackoverflow.com/questions/36883009/nightwatch-chromedriver
* 
* */
