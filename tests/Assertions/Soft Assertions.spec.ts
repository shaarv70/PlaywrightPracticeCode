import { test, expect } from '@playwright/test';//for using assertions we have to write expect

//these assertions will not break our execution unlike hard assertions


test("Autoretrying assertions", async ({ page }) => {


    await page.goto("https://www.saucedemo.com/");
    await expect.soft(page.locator('[data-test="login-button"]')).toHaveCount(1);
    await expect.soft(page.locator('[data-test="login-button"]')).toBeEnabled();
    // await expect.soft(page.locator('[data-test="login-button"]')).toBeDisabled();
    await expect.soft(page.locator('[data-test="login-button"]')).toBeVisible();
    // await expect.soft(page.locator('[data-test="login-button"]')).toBeHidden();
    await expect.soft(page.locator('[data-test="login-button"]')).toHaveText("Login");
    await expect.soft(page.locator('[data-test="login-button"]')).toHaveAttribute("name", "login-button");
    await expect.soft(page.locator('[data-test="login-button"]')).toHaveId("login-button"); // here id attribute value to be given
    await expect.soft(page.locator('[data-test="login-button"]')).toHaveClass('submit-button btn_action'); //class attribbute value
    await expect.soft(page).toHaveURL('https://www.saucedemo.com/');
    await expect.soft(page).toHaveTitle('Swag Labs');
})





test('Non retrying assertions', async ({ page }) => {



    expect(5).toBe(4);
})


test('negative assertion', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");
    await expect.soft(page).not.toHaveTitle("Google");
    await expect.soft(page).not.toHaveURL("www.google.com");
})


test('custom error message', async ({ page }) => {



    await page.goto("https://www.saucedemo.com/");
    await expect.soft(page, "Title is not correct").toHaveTitle("google");
})

