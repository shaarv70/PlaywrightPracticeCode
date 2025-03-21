import { test, expect } from '@playwright/test'



/*Reporters: npx playwright test Reporter.spec.ts --reporter=<reporter_name>
1) npx playwright test Reporter.spec.ts --reporter=list: it is a default reporter of playwright except for CI
   and shows all test execution results
2) npx playwright test Reporter.spec.ts --reporter=line: it shows the only the result how many passed and failed
3) npx playwright test Reporter.spec.ts --reporter=dot: it shows the result in dots(it it is passed otherwise F)
   and it is a default reporter for CI. There are also other character other than . or F for other kind of tests like flaky etc. 
4) npx playwright test Reporter.spec.ts --reporter=html: it produces the report for test run that can be served as webpage.
5) npx playwright test Reporter.spec.ts --reporter=blob: when we run test onto multiple machines then all the  reports generated from each of the execution must be merged
   so in that case BLOB reporter comes into picture.
6) npx playwright test Reporter.spec.ts --reporter=json:to generate the outputs in JSON format we use this reporter
   Whenever we use this kind of reporter we have to use one environment variable where we want to store the json o/p,
   othwrise we can also configure the output file in playwright.config.ts
   set PLAYWRIGHT_JSON_OUTPUT_NAME=reporter.json
   npx playwright test Reporter.spec.ts --reporter=json (like we use to do in multiple environment)
7) npx playwright test Reporter.spec.ts --reporter=junit:to generate the outputs in XML format we use this reporter
   Whenever we use this kind of reporter we have to use one environment variable where we want to store the XML o/p,
   othwrise we can also configure the output file in playwright.config.ts
   set PLAYWRIGHT_JUNIT_OUTPUT_NAME=reporter.xml
   npx playwright test Reporter.spec.ts --reporter=junit (like we use to do in multiple environment) 
8)      

*/


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