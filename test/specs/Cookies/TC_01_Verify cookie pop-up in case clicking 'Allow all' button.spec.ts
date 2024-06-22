import { expect } from '@wdio/globals';
import { step } from '@wdio/allure-reporter';
import { addFeature } from '@wdio/allure-reporter';
import MainPage from '../../pageobjects/main.page.ts';
import constants from '../../../resourcers/constants.json' assert { type: 'json' };

it("TC_01_Verify cookie pop-up in case clicking 'Allow all' button", async () => {
    addFeature('Cookies');

    await step('I visit main page', async () => {
        await MainPage.open();
    });
    await step('Cookie modal is visible', async () => {
        await MainPage.cookiesElements.cookieModal.click();
    });
    await step('I click on read more link', async () => {
        await MainPage.cookiesElements.cookieReadMoreLink.click();
    });
    await step('Title is visible', async () => {
        expect(await MainPage.cookiesElements.cookieTitleReadMorePage).toHaveText(constants.cookies.cookieTitleReadMorePage);
    });
    await step('I come back to main page', async () => {
        await browser.back();
        await browser.refresh();
    });
    await step('Cookies Settings button is visible', async () => {
        await expect(MainPage.cookiesElements.cookiesSettingsBtn).toBeDisplayed();
    });
    await step('I click on cookies settings button', async () => {
        await MainPage.cookiesElements.cookiesSettingsBtn.click();
    });
    await step('Cookies Settings modal is visible', async () => {
        await expect(MainPage.cookiesElements.cookiesSettingsModal).toBeDisplayed();
    });
    await step('I click on close button', async () => {
        await MainPage.cookiesElements.cookiesSettingsCloseBtn.click();
    });
    await step('Cookies Settings modal is close', async () => {
        await expect(MainPage.cookiesElements.cookiesSettingsModal).not.toBeDisplayed();
    });
    await step('Cookies Settings button is present', async () => {
        await expect(MainPage.cookiesElements.cookiesSettingsBtn).toBeDisplayed();
    });
    await step('I click on cookies settings button again', async () => {
        await MainPage.cookiesElements.cookiesSettingsBtn.click();
    });
    await step('Cookies Settings modal is present', async () => {
        await expect(MainPage.cookiesElements.cookiesSettingsModal).toBeDisplayed();
        await expect(MainPage.cookiesElements.cookiesConfirmMyChoiceBtn).toBeDisplayed();
    });
    await step('I click on confirm my choice button', async () => {
        await MainPage.cookiesElements.cookiesConfirmMyChoiceBtn.click();
    });
    await step('Cookies modal is visible', async () => {
        await expect(MainPage.cookiesElements.cookieModal).not.toBeDisplayed();
    });
});
