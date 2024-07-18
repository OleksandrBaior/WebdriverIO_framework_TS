import { expect } from '@wdio/globals';
import { step } from '@wdio/allure-reporter';
import { addFeature } from '@wdio/allure-reporter';
import { randomValue } from '../../../../utils/random.utils.ts';
import ContactUs from '../../../pageobjects/contactUs.page.ts';

it('TC_08_Verify the contact us form with valid data', async () => {
    addFeature('Coonect with us section');

    await step('I visit contact us page', async () => {
        await ContactUs.open();
    });
    await step('Title is visible', async () => {
        await expect(ContactUs.form.title).toBeDisplayed();
    });
    await step('I select Sales-Inquiry option', async () => {
        await ContactUs.form.howCanWeHelp.selectByAttribute('value', 'Sales-Inquiry');
    });
    await step('I input random first name', async () => {
        await ContactUs.form.firstName.setValue(randomValue('firstName'));
    });
    await step('I input random last name', async () => {
        await ContactUs.form.lastName.setValue(randomValue('middleName'));
    });
    await step('I input random email', async () => {
        await ContactUs.form.email.setValue(randomValue('email'));
    });
    await step('I select +380 option', async () => {
        await ContactUs.form.country.selectByAttribute('value', '+380');
    });
    await step('I input random phone number', async () => {
        await ContactUs.form.phoneNumber.setValue(randomValue('phoneNumber'));
    });
    await step('I input random website', async () => {
        await ContactUs.form.companyWebsite.setValue(randomValue('text'));
    });
    await step('I select AI Inference option', async () => {
        await ContactUs.form.primaryInterest.selectByAttribute('value', 'AI / Inference');
    });
    await step('I select $500 - $1000 option', async () => {
        await ContactUs.form.budget.selectByAttribute('value', '$500 - $1000');
    });
    await step('I input random how Do You Plan', async () => {
        await ContactUs.form.howDoYouPlan.setValue(randomValue('text'));
    });
    await step('I input random how Did You Hear About Telnyx', async () => {
        await ContactUs.setValue(await ContactUs.form.howDidYouHearAboutTelnyx, randomValue('text'));
    });
    await step('I check subscription', async () => {
        await ContactUs.clickElement(await ContactUs.form.subscriptionCheckbox);
    });
    await step('I click on submit button', async () => {
        await ContactUs.clickElement(await ContactUs.form.submitBtn);
    });
    await step('Success title is visible', async () => {
        await expect(ContactUs.form.successTitle).toBeDisplayed();
    });
});
