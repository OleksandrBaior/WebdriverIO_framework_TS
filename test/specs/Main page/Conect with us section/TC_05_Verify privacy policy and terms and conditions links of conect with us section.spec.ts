import { expect } from '@wdio/globals';
import { step } from '@wdio/allure-reporter';
import { addFeature } from '@wdio/allure-reporter';
import MainPage from '../../../pageobjects/main.page.ts';
import endpoints from '../../../../resourcers/endpoints.json' assert { type: 'json' };

it('TC_05_Verify privacy policy and terms and conditions links of conect with us section', async () => {
    addFeature('Coonect with us section');

    await step('I visit main page', async () => {
        await MainPage.open();
    });
    await step('I sroll page down', async () => {
        await MainPage.contactWithUsElements.titleSection.scrollIntoView();
    });
    await step('I click on privacy policy link', async () => {
        await MainPage.contactWithUsElements.privacyPolicyLink.click();
    });
    await step('Privacy policy page opens', async () => {
        await expect(browser).toHaveUrl(endpoints.privacyPolicy);
    });
    await step('I come back to main page', async () => {
        await browser.back();
    });
    await step('I click on terms and conditional link', async () => {
        await MainPage.contactWithUsElements.termsAndCondition.click();
    });
    await step('Terms and conditional page opens', async () => {
        await expect(browser).toHaveUrl(endpoints.termsAndConditions);
    });
});
