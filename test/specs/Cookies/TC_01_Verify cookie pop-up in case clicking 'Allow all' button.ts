import { expect } from '@wdio/globals';
import MainPage from '../../pageobjects/main.page.js';
import { step } from '@wdio/allure-reporter';

it("TC_01_Verify cookie pop-up in case clicking 'Allow all' button", async () => {
    await step('I visit main page', async () => {
        await MainPage.open();
    });
    await step('Cookie modal is visible', async () => {
        await MainPage.cookieModal.click();
    });
    await step('I click on read more link', async () => {
        await MainPage.cookieReadMoreLink.click();
    });
    await step('Title is visible', async () => {
        await expect(MainPage.cookieTitleReadMorePage).toHaveText('Telnyx Cookie Policy');
    });
    await step('I come back to main page', async () => {
        await browser.back();
        await browser.refresh();
    });
    await step('Cookies Settings button is visible', async () => {
        await expect(await MainPage.cookiesSettingsBtn).toBeDisplayed();
    });
    await step('I click on cookies settings button', async () => {
        await MainPage.cookiesSettingsBtn.click();
    });
});

// Then('Cookies Settings modal is visible', () => {
//     mainPage.cookiesElements.cookiesSettingsModal().should('be.visible');
// });

// When('I click on close button', () => {
//     mainPage.cookiesElements.cookiesSettingsCloseBtn().click({ force: true });
// });
// Then('Cookies Settings modal is close', () => {
//     mainPage.cookiesElements.cookiesSettingsModal().should('not.be.visible');
// });
// Then('Cookies Settings button is present', () => {
//     mainPage.cookiesElements.cookiesSettingsBtn().should('be.visible');
// });

// When('I click on cookies settings button again', () => {
//     mainPage.cookiesElements.cookiesSettingsBtn().click({ force: true }).click({ force: true });
// });
// Then('Cookies Settings modal is present', () => {
//     mainPage.cookiesElements.cookiesSettingsModal().should('be.visible');
//     mainPage.cookiesElements.confirmMyChoiceBtn().should('be.visible');
// });

// When('I click on confirm my choice button', () => {
//     mainPage.cookiesElements.confirmMyChoiceBtn().click({ force: true });
// });
// Then('Cookies modal is visible', () => {
//     mainPage.cookiesElements.cookieModal().should('not.be.visible');
// });
