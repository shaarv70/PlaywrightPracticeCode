import { test, expect } from '@playwright/test'


/*slow annotation marks the test as slow and triples the test timeout, if that test is taking time to get executed
Note: can be used in the same way as skip but not at method signature level
Note: test.slow() cannot be used for beforeAll and afterAll hooks
*/

test('Successful Login', async ({ page }) => {

    test.slow()
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
})

test('Successful Login', async ({ page, browserName }) => {

    test.slow(browserName === 'chromium');    //--can be used in this way
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
})

