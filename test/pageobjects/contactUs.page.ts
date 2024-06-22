import BasePage from './base.page.js';
import endpoints from '../../resourcers/endpoints.json' assert { type: 'json' };

class ContactUs extends BasePage {
    errorMsg = '#ValidMsgReason_for_Contact__c';
    form = {
        get title() {
            return $('[id="5tQmV9hsOULxIh30SYcWn2"] h1');
        },
        get firstName() {
            return $('#FirstName');
        },
        get lastName() {
            return $('#LastName');
        },
        get email() {
            return $('#Email');
        },
        get howCanWeHelp() {
            return $('#Reason_for_Contact__c');
        },
        get country() {
            return $('#Phone_Number_Extension__c');
        },
        get phoneNumber() {
            return $('#Phone_Number_Base__c');
        },
        get companyWebsite() {
            return $('#Website');
        },
        get howDidYouHearAboutTelnyx() {
            return $('#How_did_you_hear_about_Telnyx_Open__c');
        },
        get subscriptionCheckbox() {
            return $('#mktoCheckbox_14991_0');
        },
        get submitBtn() {
            return $('#mktoForm_1987 button');
        },
        get primaryInterest() {
            return $('#Use_Case_Form__c');
        },
        get budget() {
            return $('#Form_Budget__c');
        },
        get howDoYouPlan() {
            return $('#Form_Additional_Information__c');
        },
        get successTitle() {
            return $('//*[@id="25uRvrsAoP8BHZ6VoXcLXg"]/div/div[1]/h1/span');
        },
    };

    public open() {
        return super.open(endpoints.contactUs);
    }
}

export default new ContactUs();
