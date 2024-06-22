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
                args: process.env.CI ? ['headless', 'disable-gpu'] : [],
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
                saveAllVideos: false, // If true, also saves videos for successful test cases
                videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
            },
        ],
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    afterTest: async function ({ error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },
};
