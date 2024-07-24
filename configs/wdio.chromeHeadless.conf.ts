import type { Options } from '@wdio/types';
import { config as baseConf } from '../wdio.conf.ts';

export const config: Options.Testrunner = {
    ...baseConf,

    specs: ['../test/specs/**/*.spec.ts'],
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--no-sandbox', '--disable-infobars', '--headless', '--disable-gpu', '--disable-dev-shm-usage'],
            },
        },
    ],
};
