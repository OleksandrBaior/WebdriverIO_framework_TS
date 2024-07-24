import { expect } from '@wdio/globals';
import { step } from '@wdio/allure-reporter';
import { addFeature } from '@wdio/allure-reporter';
import MainPage from '../../../pageobjects/main.page.ts';
import endpoints from '../../../../resourcers/endpoints.json' assert { type: 'json' };
import constants from '../../../../resourcers/constants.json' assert { type: 'json' };

it('TC_04_Verify conect with us section with valid and invalid email', async () => {
    addFeature('Coonect with us section');

    await step('I visit main page', async () => {
        await MainPage.open();
    });
    await step('I sroll page down', async () => {
        await MainPage.contactWithUsElements.titleSection.scrollIntoView();
    });
    await step('Title Section and title and description are visible', async () => {
        await expect(MainPage.contactWithUsElements.titleSection).toHaveText(constants.mainPage.contactSection.tiltleSection);
        await expect(MainPage.contactWithUsElements.title).toHaveText(constants.mainPage.contactSection.tiltle);
        await expect((await MainPage.contactWithUsElements.description.getText()).replace(/\s+/g, ' ').trim()).toEqual(constants.mainPage.contactSection.description);
    });
    await step('I input invalid email', async () => {
        await MainPage.contactWithUsElements.emailInput.setValue(constants.emails.invalidEmail);
    });
    await step('Border becomes red', async () => {
        const email = await MainPage.contactWithUsElements.emailInput.getCSSProperty('border');
        await expect(email.value).toEqual(constants.styleFiels.redBorder);
    });
    await step('I input valid email', async () => {
        await MainPage.contactWithUsElements.emailInput.setValue(constants.emails.validEmail);
    });
    await step('Border becomes green', async () => {
        await MainPage.contactWithUsElements.emailInput.click();
        const email = await MainPage.contactWithUsElements.emailInput.getCSSProperty('border');
        await expect(email.value).toEqual(constants.styleFiels.greenBorder);
    });
    await step('I click submit button', async () => {
        await MainPage.contactWithUsElements.submitBtn.click();
    });
    await step('Create account page opens', async () => {
        await expect(browser).toHaveUrl(browser.options.baseUrl + endpoints.createAccount);
    });
});
