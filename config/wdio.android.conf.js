const path = require('path');
const { config } = require('./wdio.shared.conf')

// ====================
// Runner Configuration
// ====================

config.port = 4723;

// ============
// Specs
// ============

config.specs = [
    path.join(process.cwd(), './tests/specs/android/*.spec.js')
];
   
// ============
// Capabilities
// ============

config.capabilities = [
    {
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UIAutomator2',
        'appium:app': path.join(process.cwd(), '/apps/android/app-general-store.apk'),
        "appium:autoGrantPermissions": true
    }
];

exports.config = config;
