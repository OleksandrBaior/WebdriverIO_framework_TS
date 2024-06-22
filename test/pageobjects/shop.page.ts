import BasePage from './base.page.ts';
import endpoints from '../../resourcers/endpoints.json' assert { type: 'json' };

class ShopPage extends BasePage {
    homeTab = {
        get featuredProducts() {
            return $('[class*="color-background"]');
        },
        get firstItem() {
            return $$('[class*="color-background"] button')[0];
        },
    };

    yourCart = {
        get shoppingCart() {
            return $('#CartDrawer');
        },
        get addedItem() {
            return $('#CartDrawer-Form');
        },
        get deleteItemIcon() {
            return $('#CartDrawer-Remove-1 button');
        },
        get emptyText() {
            return $('[class="cart__empty-text"]');
        },
        get continueShoppingBtn() {
            return $('#CartDrawer a');
        },
    };

    public open() {
        return super.open(endpoints.shop);
    }
}

export default new ShopPage();
