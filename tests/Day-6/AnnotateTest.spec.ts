import { expect, test } from '@playwright/test';


//like if we want to attach some information with the test we can use annotation 

//single annotation
test("Annotate test-1",{annotation:{
type:"JIRA Story(test case info or something etc)",
description:"We can provide the link to the jira story here",
}},async({page})=>{

    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})


//multiple annotation
test("Annotate test-2",{annotation:[{

    type:"Google test",
    description:"This is my first multiple test"},{
    type:"Automated test",
    description:"Second information"
}],tag:"@UI"},async({page})=>{

    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})


//skipping any tets but giving the annotation to it 
test.skip("Annotate test-2 skip",{annotation:[{

    type:"Google test",
    description:"This is my first multiple test beacuse of skipping"},{
    type:"Automated test",
    description:"Second information"
}],tag:"@UI"},async({page})=>{

    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})



test.describe('Saucelabs positive scenarios',{annotation:{
    type:"Annotation",
    description:"This will be applied to all test",
    }}, async () => {     
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