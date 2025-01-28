import { test, expect } from '@playwright/test';//for using assertions we have to write expect


test("Autoretrying assertions", async ({ page }) => {

    /* These assertions will retry until the assertion gets passed or the assertion timeout is reached.
      These assertions are async so we must use await with them.
      We have so many auto retrying assertions but here we will see some of them */

    await page.goto("https://www.saucedemo.com/");
    await expect(page.locator('[data-test="login-button"]')).toHaveCount(1);
    await expect(page.locator('[data-test="login-button"]')).toBeEnabled();
    // await expect(page.locator('[data-test="login-button"]')).toBeDisabled();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    // await expect(page.locator('[data-test="login-button"]')).toBeHidden();
    await expect(page.locator('[data-test="login-button"]')).toHaveText("Login");
    await expect(page.locator('[data-test="login-button"]')).toHaveAttribute("name", "login-button");
    await expect(page.locator('[data-test="login-button"]')).toHaveId("login-button"); // here id attribute value to be given
    await expect(page.locator('[data-test="login-button"]')).toHaveClass('submit-button btn_action'); //class attribbute value
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
})





test('Non retrying assertions', async ({ page }) => {

    /*  Since the webpages show the data asyncronously and using non retry assertions can lead to flaky test. These assertions do not autoretry. 
        Hence they are not suggested to user much.
        These assertions are not asynchronous so no need of using await with them 
        We have so many non retrying assertions but here we will see some of them
     */

    expect(5).toBe(4);
})


test('negative assertion', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");
    await expect(page).not.toHaveTitle("Google");
    await expect(page).not.toHaveURL("www.google.com");
})


test('custom error message', async ({ page }) => {

    //if assertions gets failed then to show the custom message 

    await page.goto("https://www.saucedemo.com/");
    await expect(page,"Title is not correct").toHaveTitle("google");
})

