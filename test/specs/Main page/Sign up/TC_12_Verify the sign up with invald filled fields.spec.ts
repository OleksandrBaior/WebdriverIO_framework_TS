import { expect } from '@wdio/globals';
import { step } from '@wdio/allure-reporter';
import { addFeature } from '@wdio/allure-reporter';
import { randomValue } from '../../../../utils/random.utils.ts';
import CreateTelnyxAccount from '../../../pageobjects/createTelnyxAccount.ts';
import endpoints from '../../../../resourcers/endpoints.json' assert { type: 'json' };
import constants from '../../../../resourcers/constants.json' assert { type: 'json' };

it('TC_12_Verify the sign up with invald filled fields', async () => {
    addFeature('Sign up');

    await step('I visit sign up page', async () => {
        await CreateTelnyxAccount.open();
    });
    await step('I input an invalid conpany email', async () => {
        await CreateTelnyxAccount.modal.companyEmail.setValue(randomValue('text'));
    });
    await step('I input an invalid first name', async () => {
        await CreateTelnyxAccount.modal.firstName.setValue(randomValue('text'));
    });
    await step('I input an invalid lastName name', async () => {
        await CreateTelnyxAccount.modal.lastName.setValue(randomValue('text'));
    });
    await step('I input an invalid password name', async () => {
        await CreateTelnyxAccount.modal.password.setValue(randomValue('text'));
    });
    await step('I click on sign up button', async () => {
        await CreateTelnyxAccount.modal.signUpBtn.click();
    });
    await step('I stay on the sign up page', async () => {
        await expect(browser).toHaveUrl(browser.options.baseUrl + endpoints.createTelnyxAccount);
        await expect(CreateTelnyxAccount.modal.title).toBeDisplayed();
    });
    await step('Company name field is in the error state', async () => {
        const companyEmail = await CreateTelnyxAccount.modal.companyEmail.getCSSProperty('border-color');
        await expect(companyEmail.value === constants.styleFiels.borderColor[0] || companyEmail.value === constants.styleFiels.borderColor[1]).toBe(true);
    });
    await step('Password field is in the error state', async () => {
        const password = await CreateTelnyxAccount.modal.password.getCSSProperty('border-color');
        await expect(password.value === constants.styleFiels.borderColor[0] || password.value === constants.styleFiels.borderColor[1]).toBe(true);
    });
    await step('Terms And Conditional checkbox is in the error state', async () => {
        const termsAndConditional = await CreateTelnyxAccount.modal.termsAndConditional.getCSSProperty('border-color');
        await expect(termsAndConditional.value === constants.styleFiels.borderColor[0] || termsAndConditional.value === constants.styleFiels.borderColor[1]).toBe(true);
    });
});
