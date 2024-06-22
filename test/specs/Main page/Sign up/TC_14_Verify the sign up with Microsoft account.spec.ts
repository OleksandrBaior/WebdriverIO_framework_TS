import { expect } from '@wdio/globals';
import { step } from '@wdio/allure-reporter';
import { addFeature } from '@wdio/allure-reporter';
import CreateTelnyxAccount from '../../../pageobjects/createTelnyxAccount.ts';

it('TC_14_Verify the sign up with Microsoft account', async () => {
    addFeature('Sign up');

    await step('I visit sign up page', async () => {
        await CreateTelnyxAccount.open();
    });
    await step('Google button is visible and clickable', async () => {
        await expect(CreateTelnyxAccount.modal.microsoftBtn).toBeDisplayed();
        await expect(CreateTelnyxAccount.modal.microsoftBtn).not.toHaveAttr('disabled');
    });
});
