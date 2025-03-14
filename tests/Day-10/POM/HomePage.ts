import { Locator, Page, expect } from '@playwright/test';
import { CartVerification } from './CartVerification';

export class HomePage {

    readonly page: Page;
    readonly homePageTitle: Locator;
    readonly addToCart: Locator;
    readonly remove: Locator;
    readonly shoppingcart: Locator
    readonly cart: Locator


    constructor(page: Page) {
        this.page = page;
        this.homePageTitle = page.locator("data-test=title");
        this.addToCart = page.locator("[data-test=add-to-cart-sauce-labs-backpack]");
        this.remove = page.locator("data-test=remove-sauce-labs-backpack");
        this.shoppingcart = page.locator("data-test=shopping-cart-link");
        this.cart = page.locator("data-test=shopping-cart-badge");

    }


    async assertTitle() {

        await expect(this.page).toHaveTitle("Products");
    }

    async addingProducttoCart() {

        await this.addToCart.first().click();
    }

    async assertRemoveButton() {

        await expect(this.remove).toHaveText("Remove");
    }
    async assertaddToCartButton() {

        
        await expect(this.cart).toHaveText("2");
    }

    async clickOnshoppingCartButton() {

        await this.shoppingcart.click();
        return new CartVerification(this.page);
    }





}