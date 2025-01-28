import { test, expect } from '@playwright/test'



/* 1) skip annotation is used in that case when we do want any particular test to run in a particular configuration. we can also skip with describe 
same as only
Example: test.describe.skip()
2) We can also skip any test by using test.skip(), we just have to use this in whichever test we want to skip. we can also use this in describe block
in starting, which in turn will skip all the testcases present in describe block.
3) test.skip(), can aso take condition in skip method like on this condition please skip this test case
4) test.skip(({browserName})=>browserName==='chromium')
*/



//test.skip(({browserName})=>browserName==='chromium')   -- if we want to skip all the tests for chromium then we can do in this way, write in first line

test("skip annotation example", async ({ page }) => {

    console.log("This is  an example of skip annotation");

})
test.describe('Saucelabs positive scenarios', async () => {      //test.describe is a kind of grouping annotation like testng in which can group mutiple test with same name

    //test.skip();  -- in this way we can skip all the tests present in describe block
   // test.skip(({browserName})=>browserName==='chromium') -- we can also skip in this way
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

test.skip('Unsuccessful login', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauc');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();

})

test("example testcase", async ({ page, browserName }) => {

    test.skip(browserName === 'firefox')    // in this way we can give the condition, if the browser is firefox it will skip this test, browsername is fixture
    console.log("This is  an example of skip annotation");

})




