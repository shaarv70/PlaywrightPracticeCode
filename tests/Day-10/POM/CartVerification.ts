import { Locator, Page, expect } from '@playwright/test';


export class CartVerification {

    readonly page: Page
    readonly itemName: Locator;

    constructor(page: Page) {

        this.page = page;
        this.itemName = page.locator("data-test=inventory-item-name");
    }


    async assertItem() {

        await expect(this.itemName).toHaveText("Sauce Labs Backpack");
    }





}
