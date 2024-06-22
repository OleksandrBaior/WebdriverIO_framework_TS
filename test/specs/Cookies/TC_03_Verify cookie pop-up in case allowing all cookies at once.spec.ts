import { expect } from '@wdio/globals';
import { step } from '@wdio/allure-reporter';
import { addFeature } from '@wdio/allure-reporter';
import MainPage from '../../pageobjects/main.page.ts';

it('TC_03_Verify cookie pop-up in case allowing all cookies at once', async () => {
    addFeature('Cookies');

    await step('Cookies is empty', async () => {
        const cookies = await browser.getCookies();
        await expect(cookies.length).toEqual(0);
    });
    await step('I visit main page', async () => {
        await MainPage.open();
    });
    await step('I click on accept all button', async () => {
        MainPage.cookiesElements.cookiesAcceptAllBtn.click();
    });
    await step('Cookie modal is close', async () => {
        await expect(MainPage.cookiesElements.cookieModal).not.toBeDisabled();
    });
    await step('Cookies is not empty', async () => {
        const cookies = await browser.getCookies();
        expect(cookies.length).toBeGreaterThanOrEqual(1);
    });
});
