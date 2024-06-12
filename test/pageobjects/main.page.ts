import { $ } from '@wdio/globals';
import basePage from './base.page.js';

class MainPage extends basePage {
    public get cookieModal() {
        return $('#onetrust-banner-sdk');
    }
    public get cookieReadMoreLink() {
        return $('#onetrust-policy-text > a');
    }
    public get cookieTitleReadMorePage() {
        return $('[class*="c-PJLV c-fGbiyG"]');
    }
    public get cookiesSettingsBtn() {
        return $('#onetrust-pc-btn-handler');
    }
    public get cookiesSettingsModal() {
        return $('#onetrust-pc-sdk > div');
    }
    public get cookiesSettingsCloseBtn() {
        return $('#close-pc-btn-handler');
    }
    public get cookiesAllowAllBtn() {
        return $('#accept-recommended-btn-handler');
    }
    public get performanceCookies() {
        return $('#ot-group-id-C0002');
    }
    public get functionalCookies() {
        return $('#ot-group-id-C0003');
    }
    public get targettingCookies() {
        return $('#ot-group-id-C0004');
    }
    public get cookiesConfirmMyChoiceBtn() {
        return $('.save-preference-btn-handler');
    }
    public get cookiesAcceptAllBtn() {
        return $('#onetrust-accept-btn-handler');
    }
    public get cookieCloseBtn() {
        return $('.onetrust-close-btn-handler');
    }

    // public async login(username: string, password: string) {
    // await this.inputUsername.setValue(username);
    // await this.inputPassword.setValue(password);
    // await this.btnSubmit.click();
    // }

    public open() {
        return super.open('');
    }
}

export default new MainPage();
