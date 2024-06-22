import { expect } from '@wdio/globals';
import { step } from '@wdio/allure-reporter';
import { addFeature } from '@wdio/allure-reporter';
import CreateTelnyxAccount from '../../../pageobjects/createTelnyxAccount.ts';

it('TC_15_Verify that Promo code field appears after clicking on button', async () => {
    addFeature('Sign up');

    await step('I visit sign up page', async () => {
        await CreateTelnyxAccount.open();
    });
    await step('I click on apply a promo code', async () => {
        await CreateTelnyxAccount.modal.promoCodeLink.click();
    });
    await step('Promo code field appears', async () => {
        await expect(CreateTelnyxAccount.modal.promoCode).toBeDisplayed();
    });
});
