import test, { expect } from "@playwright/test";
import * as CryptoJS from "crypto-js";






test('Successful Login', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    CryptoJS.AES.encrypt('standard_user','shaarv70')
    await page.locator('[data-test="username"]').fill('');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
})