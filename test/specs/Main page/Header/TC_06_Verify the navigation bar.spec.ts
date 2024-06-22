import { expect } from '@wdio/globals';
import { step } from '@wdio/allure-reporter';
import { addFeature } from '@wdio/allure-reporter';
import MainPage from '../../../pageobjects/main.page.ts';

it('TC_06_Verify the navigation bar', async () => {
    addFeature('Header');

    await step('I visit main page', async () => {
        await MainPage.open();
    });
    await step('All elements of navbar are present', async () => {
        for (const element in MainPage.navigationBar) {
            await expect(MainPage.navigationBar[element as keyof typeof MainPage.navigationBar]).toBeDisplayed();
        }
    });
});
