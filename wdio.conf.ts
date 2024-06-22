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
    /**
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    /**
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {object} specs    specs to be run in the worker process
     * @param  {object} args     object that will be merged with the main configuration once worker is initialized
     * @param  {object} execArgv list of string arguments passed to the worker process
     */
    /**
     * Gets executed just after a worker process has exited.
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {number} exitCode 0 - success, 1 - fail
     * @param  {object} specs    specs to be run in the worker process
     * @param  {number} retries  number of retries used
     */
    /**
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {string} cid worker id (e.g. 0-0)
     */
    /**
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {object}         browser      instance of created browser/device session
     */
    before: function () {
        browser.setWindowSize(1920, 1080);
    },
    /**
     * @param {string} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    /**
     * @param {object} suite suite details
     * @param {object}  test             test object
     * @param {object}  context          scope object the test was executed with
     * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
     * @param {*}       result.result    return object of test function
     * @param {number}  result.duration  duration of test
     * @param {boolean} result.passed    true if test has passed, otherwise false
     * @param {object}  result.retries   information about spec related retries, e.g. `{ attempts: 0, limit: 0 }`
     */
    afterTest: function ({ error }) {
        if (error) {
            browser.takeScreenshot();
        }
    },
    /**
     * @param {object} suite
     */
    /**
     * @param {string} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {number} result 0 - command success, 1 - command error
     * @param {object} error error object if any
     */
    /**
     * @param {number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    /**
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    /**
     * @param {object} exitCode 0 - success, 1 - fail
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    /**
     * @param {string} oldSessionId session ID of the old session
     * @param {string} newSessionId session ID of the new session
     */
    /**
     * @param {object} params information about the assertion to be executed
     */
    /**
     * @param {object} params information about the assertion that was executed, including its results
     */
};
