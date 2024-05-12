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
    path.join(process.cwd(), './tests/specs/ios/*.spec.js')
];
   
// ============
// Capabilities
// ============

config.capabilities = [
    {
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'ios',
        'appium:deviceName': 'iPhone 15 Pro',
        'appium:platformVersion': '17.0',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), '/apps/ios/MVCTodo.app'),
        "appium:autoGrantPermissions": true
    }
];

exports.config = config;
