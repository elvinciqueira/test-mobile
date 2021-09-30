const { join } = require('path');

exports.config = {
  hostname: 'localhost',
  port: 4723,
  path: '/wd/hub',
  specs: ['./test/specs/**/*.js'],
  framework: 'mocha',
  services: ['appium'],
  capabilities: [
    {
      platformName: 'Android',
      platformVersion: '10',
      deviceName: 'Redmi Note 8',
      automationName: 'UiAutomator2',
      app: join(process.cwd(), './app/android/NativeDemo.apk'),
      appPackage: 'com.wdiodemoapp',
      appActivity: 'com.wdiodemoapp.MainActivity',
      appWaitActivity: 'com.wdiodemoapp.MainActivity',
    },
  ],
};
