import { browser } from '@wdio/globals';
import { $ } from '@wdio/globals';
/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class BasePage {
    cookiesElements = {
        get cookieModal() {
            return $('#onetrust-banner-sdk');
        },
        get cookieReadMoreLink() {
            return $('#onetrust-policy-text > a');
        },
        get cookieTitleReadMorePage() {
            return $('[class*="c-PJLV c-fGbiyG"]');
        },
        get cookiesSettingsBtn() {
            return $('#onetrust-pc-btn-handler');
        },
        get cookiesSettingsModal() {
            return $('#onetrust-pc-sdk > div');
        },
        get cookiesSettingsCloseBtn() {
            return $('#close-pc-btn-handler');
        },
        get cookiesAllowAllBtn() {
            return $('#accept-recommended-btn-handler');
        },
        get performanceCookies() {
            return $('[for="ot-group-id-C0002"]');
        },
        get functionalCookies() {
            return $('[for="ot-group-id-C0003"]');
        },
        get targettingCookies() {
            return $('[for="ot-group-id-C0004"]');
        },
        get cookiesConfirmMyChoiceBtn() {
            return $('.save-preference-btn-handler');
        },
        get cookiesAcceptAllBtn() {
            return $('#onetrust-accept-btn-handler');
        },
        get cookieCloseBtn() {
            return $('.onetrust-close-btn-handler');
        },
    };
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    public open(path = '') {
        return browser.url(`${path}`);
    }
}
