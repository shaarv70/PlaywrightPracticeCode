import { test } from '@playwright/test'

// for using locator we have locator method which will automatically analyse whhich loactor we are using like xpath, css,id etc.

test("locators used in playwright with locator method only, part-1", async ({ page }) => {


    await page.goto("https://www.saucedemo.com/");

    //xpath-same as seleniium locators
    await page.locator("//input[@name='user-name']").fill("standard_user"); // so for entering locator we can use "", ``, '' but then the value must be changed in different quotes
    // await page.locator('//input[@name="user-name"]'); 
    // await page.locator(`//input[@name='user-name']`); 

    //css-same as selenium locators
    await page.locator('input#password').fill("secret_sauce");
    await page.locator('input[name="login-button"]').click();

    //text-- in text if we are keeping text value inside quotes then that will be case sensitive. if we dont keep it in quotes then it is case insensitive

    // await page.locator('text="Sauce Labs Backpack"').click(); //In this case it is case sensitive
    await page.locator("text=Sauce LaBS Backpack").click(); // this is case insensitive

    //id
    await page.locator('id=add-to-cart').click();

    //data-test
    await page.locator('data-test=remove').click();


})