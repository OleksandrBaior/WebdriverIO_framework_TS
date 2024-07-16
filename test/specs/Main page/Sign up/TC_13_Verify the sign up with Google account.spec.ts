import { expect } from '@wdio/globals';
import { step } from '@wdio/allure-reporter';
import { addFeature } from '@wdio/allure-reporter';
import CreateTelnyxAccount from '../../../pageobjects/createTelnyxAccount.ts';

it('TC_13_Verify the sign up with Google account', async () => {
    addFeature('Sign up');

    await step('I visit sign up page', async () => {
        await CreateTelnyxAccount.open();
    });
    await step('Google button is visible and clickable', async () => {
        await expect(await CreateTelnyxAccount.modal.googleBtn).toBeDisplayed();
        await expect(await CreateTelnyxAccount.modal.googleBtn).not.toHaveAttr('disabled');
    });
});
