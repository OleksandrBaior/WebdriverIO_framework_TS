import { expect } from '@wdio/globals';
import { step } from '@wdio/allure-reporter';
import { addFeature } from '@wdio/allure-reporter';
import MainPage from '../../pageobjects/main.page.ts';

it('TC_02_Verify cookie pop-up in case allowing every option separately', async () => {
    addFeature('Cookies');

    await step('I visit main page', async () => {
        await MainPage.open();
    });
    await step('I click on settings button', async () => {
        await MainPage.cookiesElements.cookiesSettingsBtn.click();
    });
    await step('I check performance checkbox', async () => {
        await (await MainPage.cookiesElements.performanceCookies).click();
        await expect(MainPage.cookiesElements.performanceCookies).toBeEnabled();
    });
    await step('I check functional checkbox', async () => {
        await MainPage.cookiesElements.functionalCookies.click();
        await expect(MainPage.cookiesElements.functionalCookies).toBeEnabled();
    });
    await step('I check targetting checkbox', async () => {
        await MainPage.cookiesElements.targettingCookies.click();
        await expect(MainPage.cookiesElements.targettingCookies).toBeEnabled();
    });
    await step('I click on confirm my choice', async () => {
        await MainPage.cookiesElements.cookiesConfirmMyChoiceBtn.click();
    });
    await step('Cookie modal is close', async () => {
        await expect(MainPage.cookiesElements.cookieModal).not.toBeDisplayed();
    });
});
