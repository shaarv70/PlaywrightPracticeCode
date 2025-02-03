import { test, expect, Page } from '@playwright/test'

let page: Page;


test.beforeAll('Successful Login-1', async ({ browser }) => {
    page = await browser.newPage();

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
})
test('Adding item to cart verification', async ({ }) => {

    await page.getByText('Sauce Labs Backpack').click();
    await page.getByRole("button", { name: 'Add to cart' }).click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    await page.getByRole('button', { name: 'Remove' }).click();
    await page.locator('[data-test="shopping-cart-link"]').click();
})

test.afterAll('Closing browser', async ({ }) => {

    await page.getByRole("button", { name: 'Open Menu' }).click();
    await page.getByText('Logout').click();
})
