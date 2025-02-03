import { Locator, Page, expect } from '@playwright/test';
import { CartVerification } from './CartVerification';

export class HomePage {

    readonly page: Page;
    readonly homePageTitle: Locator;
    readonly addToCart: Locator;
    readonly remove: Locator;
    readonly shoppingcart: Locator


    constructor(page: Page) {
        this.page = page;
        this.homePageTitle = page.locator("data-test=title");
        this.addToCart = page.getByRole('button', { name: "Add to cart" });
        this.remove = page.locator("data-test=remove-sauce-labs-backpack");
        this.shoppingcart = page.locator("data-test=shopping-cart-link");

    }


    async assertTitle() {

        await expect(this.page).toHaveTitle("Products");
    }

    async addingProducttoCart() {

        await this.addToCart.click();
    }

    async assertRemoveButton() {

        await expect(this.remove).toHaveText("Remove");
    }

    async clickOnshoppingCartButton() {

        await this.shoppingcart.click();
        return new CartVerification(this.page);
    }





}