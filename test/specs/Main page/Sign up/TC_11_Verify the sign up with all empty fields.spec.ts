import { expect } from '@wdio/globals';
import { step } from '@wdio/allure-reporter';
import { addFeature } from '@wdio/allure-reporter';
import MainPage from '../../../pageobjects/main.page.ts';
import CreateTelnyxAccount from '../../../pageobjects/createTelnyxAccount.ts';
import endpoints from '../../../../resourcers/endpoints.json' assert { type: 'json' };
import constants from '../../../../resourcers/constants.json' assert { type: 'json' };

async function checkElement(elementPromise: Promise<WebdriverIO.Element>) {
    const element = await elementPromise;
    const elementCSSProperty = await element.getCSSProperty('border-color');
    await expect(elementCSSProperty.value).toEqual(constants.styleFiels.borderColor);
    await expect(element).toBeDisplayed();
}

it('TC_11_Verify the sign up with all empty fields', async () => {
    addFeature('Sign up');

    await step('I visit main page', async () => {
        await MainPage.open();
    });
    await step('I click on sign up', async () => {
        await MainPage.header.signUpBtn.click();
    });
    await step('The Create a Telnyx account modal is present', async () => {
        await expect(browser).toHaveUrl(endpoints.baseUrl + endpoints.createTelnyxAccount);
        await expect(await CreateTelnyxAccount.modal.title).toBeDisplayed();
    });
    await step('I click on sign up button', async () => {
        await CreateTelnyxAccount.modal.signUpBtn.click();
    });
    await step('All neccessary fields are in the error state', async () => {
        await checkElement(CreateTelnyxAccount.modal.companyEmail);
        await checkElement(CreateTelnyxAccount.modal.firstName);
        await checkElement(CreateTelnyxAccount.modal.lastName);
        await checkElement(CreateTelnyxAccount.modal.password);
        await checkElement(CreateTelnyxAccount.modal.termsAndConditional);
    });
});
