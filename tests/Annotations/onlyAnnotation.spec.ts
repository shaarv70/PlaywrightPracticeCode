import { test, expect } from '@playwright/test'


/* with test.only annotation only this test will be executed out of all the test present in the test directory mentioned in config.ts when executing
all the test in that directory, if a singe file consists of multiple tests and we are running test from that file then in that case only the 
test with only annotation will be executed.

Note: If we have describe annotation alogwith only annotation then describe testcase alongwith the testcases having only annotation will only be
executed*/

test.only("only annotation example", async ({ page }) => {

    console.log("This is  an example of only annotation");

})

test.describe.only('Saucelabs positive scenarios', async () => {      //test.describe is a kind of grouping annotation like testng in which can group mutiple test with same name

    test('title verification', async ({ page }) => {


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
    test('Adding item to cart verification', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.getByText('Sauce Labs Backpack').click();
        await page.getByRole("button", { name: 'Add to cart' }).click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
        await page.getByRole('button', { name: 'Remove' }).click();
        await page.locator('[data-test="shopping-cart-link"]').click();
    })

})


test('Unsuccessful login', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauc');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();

})

test("example testcase", async ({ page }) => {

    console.log("This is  an example of only annotation");

})
