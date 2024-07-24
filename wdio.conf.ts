import { Options } from '@wdio/types';
import video from 'wdio-video-reporter';
import * as os from 'os';
import endpoints from './resourcers/endpoints.json' assert { type: 'json' };

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
                args: process.env.CI ? ['--headless', '--disable-gpu', '--no-sandbox'] : [],
            },
        },
    ],
    logLevel: 'info',
    baseUrl: endpoints.baseUrl,
    waitforTimeout: 10000,
    connectionRetryTimeout: 60000,
    connectionRetryCount: 3,
    services: ['visual'],
    framework: 'mocha',
    reporters: [
        [
            'spec',
            {
                showPreface: false,
            },
        ],
        [
            'allure',
            {
                outputDir: 'reports/allure-result',
                disableWebdriverStepsReporting: true,
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
                videoSlowdownMultiplier: 30,
                outputDir: 'reports/_result_',
            },
        ],
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000,
    },
    beforeSession: function () {},
    before: function () {
        browser.setWindowSize(1920, 1080);
    },
    afterTest: function ({ error }) {
        if (error) {
            browser.takeScreenshot();
        }
    },
};
