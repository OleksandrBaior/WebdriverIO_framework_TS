import ShopPage from './../../pageobjects/shop.page.ts';
import constants from '../../../resourcers/constants.json' assert { type: 'json' };
import { expect } from '@wdio/globals';
import { step } from '@wdio/allure-reporter';
import { addFeature } from '@wdio/allure-reporter';

it('TC_07_Verify adding and deleting item from the shoppoing card', async () => {
    addFeature('Shop page');

    await step('I visit shop page', async () => {
        await ShopPage.open();
    });
    await step('Products list is visible', async () => {
        await expect(ShopPage.homeTab.featuredProducts).toBeDisplayed();
    });
    await step('I click on first item', async () => {
        await ShopPage.homeTab.firstItem.click();
    });
    await step('Shopping cart is open', async () => {
        await expect(ShopPage.yourCart.shoppingCart).toBeDisplayed();
    });
    await step('Added item is present', async () => {
        await expect(ShopPage.yourCart.addedItem).toBeDisplayed();
    });
    await step('I click delete icon', async () => {
        await ShopPage.yourCart.deleteItemIcon.click();
    });
    await step('Shopping cart is empty', async () => {
        await expect(ShopPage.yourCart.emptyText).toHaveText(constants.shopPage.shoppingCart.emptyText);
    });
    await step('I click countiue button', async () => {
        ShopPage.yourCart.continueShoppingBtn.click();
    });
    await step('Shopping cart is close', async () => {
        await expect(ShopPage.yourCart.shoppingCart).toBeDisplayed();
    });
});
