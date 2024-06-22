import type { Options } from '@wdio/types';
import video from 'wdio-video-reporter';
import * as os from 'os';

export const config: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true,
        },
    },
    specs: ['./test/specs/**/*.spec.ts'],
    maxInstances: 1,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: process.env.CI ? ['headless'] : [],
            },
        },
    ],
    logLevel: 'info',
    bail: 3,
    baseUrl: 'https://telnyx.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 60000,
    connectionRetryCount: 3,
    services: ['visual'],
    framework: 'mocha',

    reporters: [
        [
            'spec',
            {
                color: true,
                showPreface: false,
                realtimeReporting: true,
                addConsoleLogs: true,
                symbols: {
                    passed: '[PASS]',
                    failed: '[FAIL]',
                },
            },
        ],
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
                reportedEnvironmentVars: {
                    os_platform: os.platform(),
                    os_release: os.release(),
                    os_version: os.version(),
                    node_version: process.version,
                },
            },
        ],
        [
            video,
            {
                saveAllVideos: false,
                videoSlowdownMultiplier: 10,
            },
        ],
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    before: function () {
        browser.setWindowSize(1920, 1080);
    },
    afterTest: async function ({ error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },
};
