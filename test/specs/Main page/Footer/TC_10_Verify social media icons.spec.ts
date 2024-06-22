import endpoints from '../../../../resourcers/endpoints.json' assert { type: 'json' };
import { expect } from '@wdio/globals';
import { step } from '@wdio/allure-reporter';
import { addFeature } from '@wdio/allure-reporter';
import MainPage from '../../../pageobjects/main.page.ts';

async function checkURLonAnotherTab(endpoint: string) {
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await expect(browser).toHaveUrl(endpoint);
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
}

it('TC_10_Verify social media icons', async () => {
    addFeature('Footer');

    await step('I visit main page', async () => {
        await MainPage.open();
    });
    await step('I scroll page down', async () => {
        await MainPage.footerSection.footer.scrollIntoView();
    });
    await step('Then Image footer is visible', async () => {
        await expect(MainPage.footerSection.imageFooter).toBeDisplayed();
    });
    await step('I click on LinkedIn icon', async () => {
        await MainPage.footerSection.linkedIn.click();
    });
    await step('LinkedIn page opens', async () => {
        await checkURLonAnotherTab(endpoints.linkedin);
    });
    await step('I click on Twitter icon', async () => {
        await MainPage.footerSection.twitter.click();
    });
    await step('Twitter page opens', async () => {
        await checkURLonAnotherTab(endpoints.twitter);
    });
    await step('I click on Facebook icon', async () => {
        await MainPage.footerSection.facebook.click();
    });
    await step('Then Facebook page opens', async () => {
        await checkURLonAnotherTab(endpoints.facebook);
    });
});
