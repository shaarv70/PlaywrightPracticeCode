import { test } from '@playwright/test';


//page.locator(selector,options)

test("locators used in playwright with locator method with options, part-2", async ({ page }) => {


    await page.goto("https://www.saucedemo.com/");

    //has : matching the element which contains inner locator  
    await page.locator('div.form_group', { has: page.locator('input#user-name') }).click();  //since it is div thats why we are clicking first
    await page.locator('div.form_group', { has: page.locator('input#user-name') }).pressSequentially("standard_user");

    //hasNot: matching the element which doesnt contain inner locator

    await page.locator('div.form_group', { hasNot: page.locator('input#user-name') }).click();
    await page.locator('div.form_group', { hasNot: page.locator('input#user-name') }).pressSequentially("secret_sauce");


    await page.locator('id=login-button').click();


    //hasText: same as has it just matches the element containing inner text maybe in child or descendant

    // await page.locator('//a',{hasText:"Sauce Labs Backpack"}).click();

    //hasNotText: it is viceversa of hasText which means matching an element that not containing the text in child or in desecenants


    await page.locator('.inventory_item_name ', { hasNotText: /Sauce.*/ }).click()  //using regular expression in text










})