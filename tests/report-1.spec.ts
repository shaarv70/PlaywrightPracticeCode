import { test, expect } from '@playwright/test'


test('Title Verification', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
})


test('Successful Login', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
})

test('Unsuccessful login', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauc');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();

})

test('Adding item to cart verification', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauc');
    await page.locator('[data-test="login-button"]').click();
    await page.getByText('Sauce Labs Backpack').click();
    await page.getByRole("button", { name: 'Add to cart' }).click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    await page.getByRole('button', { name: 'Remove' }).click();
    await page.locator('[data-test="shopping-cart-link"]').click();



})