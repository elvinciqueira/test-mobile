const { join } = require('path');

exports.config = {
  hostname: 'localhost',
  port: 4723,
  path: '/wd/hub',
  spec: ['./test/specs/**/*.js'],
  framework: 'mocha',
  capabilities: [
    {
      platformName: 'Android',
      platformVersion: '10',
      deviceName: 'Redmi Note 8',
      automationName: 'UiAutomator2',
      app: join(process.cwd(), './app/android/loja-ebac.apk'),
      appPackage: 'com.woocommerce.android',
      appActivity: 'com.woocommerce.android.ui.main.MainActivity',
    },
  ],
};
