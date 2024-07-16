import BasePage from './base.page.ts';
import endpoints from '../../resourcers/endpoints.json' assert { type: 'json' };

class CreateTelnyxAccount extends BasePage {
    modal = {
        get title() {
            return $('[class="c-PJLV c-rMlRu c-bNMkKE"]');
        },
        get signUpBtn() {
            return $('.c-gJSRkV > .c-kDQqQr');
        },
        get companyEmail() {
            return $('#email');
        },
        get companyEmailError() {
            return $('#email_message');
        },
        get firstName() {
            return $('#first_name');
        },
        get firstNameError() {
            return $('#first_name_message');
        },
        get lastName() {
            return $('#last_name');
        },
        get lastNameError() {
            return $('#last_name_message');
        },
        get password() {
            return $('#password');
        },
        get passwordRequired() {
            return $('#required');
        },
        get termsAndConditional() {
            return $('#terms_and_conditions');
        },
        get termsAndConditionalError() {
            return $('#terms_and_conditions_message');
        },
        get googleBtn() {
            return $('//*[@id="__next"]/div/main/section/div[2]/div/div[1]/div/div[1]/div/div');
        },
        get microsoftBtn() {
            return $('.c-fGHEql > .c-kDQqQr');
        },
        get promoCodeLink() {
            return $('button.c-ewUecD > .c-khZXrc > .c-PJLV');
        },
        get promoCode() {
            return $('#promo_code');
        },
    };

    public open() {
        return super.open(endpoints.createTelnyxAccount);
    }
}

export default new CreateTelnyxAccount();
