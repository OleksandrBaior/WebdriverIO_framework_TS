import { $ } from '@wdio/globals';
import BasePage from './base.page.ts';

class MainPage extends BasePage {
    header = {
        get signUpBtn() {
            return $('#header-sign-up');
        },
    };
    navigationBar = {
        get productsBtn() {
            return $('[id*="radix-:Rkljm:"]');
        },
        get solutionBtn() {
            return $$('nav > a[href="/solutions"]')[0];
        },
        get pricingBtn() {
            return $('[id*="radix-:Rlljm:"]');
        },
        get whyTelnuxBtn() {
            return $('[id*="radix-:Rm5jm:"]');
        },
        get resourcesBtn() {
            return $('[id*="radix-:Rmljm:"]');
        },
        get developersBtn() {
            return $('[id*="radix-:Rn5jm:"]');
        },
    };
    contactWithUsElements = {
        get titleSection() {
            return $('//*[@id="__next"]/div/main/section[6]/div/div[1]/div/div/strong');
        },
        get title() {
            return $('//*[@id="__next"]/div/main/section[6]/div/div[1]/div/div/h2');
        },
        get subTitle() {
            return $('//*[@id="__next"]/div/main/section[6]/div/div[1]/div/div/p');
        },
        get emailInput() {
            return $('#email');
        },
        get submitBtn() {
            return $('.c-eXJNdE-cZntuR-desktop-true > .c-kDQqQr');
        },
        get description() {
            return $('//*[@id="__next"]/div/main/section[6]/div/div[2]/form/div[3]');
        },
        get privacyPolicyLink() {
            return $('[href="/privacy-policy"] > .c-khZXrc > .c-PJLV');
        },
        get termsAndCondition() {
            return $('[href="/terms-and-conditions"] > .c-khZXrc > .c-PJLV');
        },
    };

    footerSection = {
        get footer() {
            return $('#__next footer');
        },
        get imageFooter() {
            return $('footer > div > div > a > svg');
        },
        get linkedIn() {
            return $$('[class="c-ejcPbY"] a')[0];
        },
        get twitter() {
            return $$('[class="c-ejcPbY"] a')[1];
        },
        get facebook() {
            return $$('[class="c-ejcPbY"] a')[2];
        },
    };

    public open() {
        return super.open('');
    }
}

export default new MainPage();
