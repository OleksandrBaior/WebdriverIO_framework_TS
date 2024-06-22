import { expect } from '@wdio/globals';
import { step } from '@wdio/allure-reporter';
import { addFeature } from '@wdio/allure-reporter';
import ContactUs from '../../../pageobjects/contactUs.page.ts';
import constants from '../../../../resourcers/constants.json' assert { type: 'json' };

it('TC_09_Verify the contact us form with empty field', async () => {
    addFeature('Coonect with us section');

    await step('I visit contact us page', async () => {
        await ContactUs.open();
    });
    await step('I click on submit button', async () => {
        await ContactUs.form.submitBtn.click();
    });
    await step('Border becomes red and error message appears', async () => {
        const howCanWeHelp = await ContactUs.form.howCanWeHelp.getCSSProperty('border-color');
        await expect(howCanWeHelp.value).toEqual(constants.styleFiels.borderColor);

        const errorMsg = await browser.$(ContactUs.errorMsg);
        await expect(errorMsg).toBeDisplayed();
        await expect(errorMsg).toHaveText(constants.styleFiels.error);
    });
});
