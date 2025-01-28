import { test, expect } from '@playwright/test'



/*  beforeEach,afterEach: test.beforeEach(hookFunction),test.beforeEach(title,hookFunction)test.afterEach(hookFunction),
test.afterEach(title,hookFunction)   
1) executes before each test
2) in describe group, runs before each test in group, and ut will be applied to only those tests, not to the tests outside the desribe block
3) if multiple beforeEach hooks are added then the order of execution is based on the registration 
*/

test.beforeEach('Before each block', async () => {

    console.log("hi this frok before each block !!");
})

test('test-1', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

})

test('test-2', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

})

test.describe('grouping', async () => {

    test.beforeEach('Before each block in describe block', async () => {   //-- applied to only this block test

        console.log("hi this from before each block belongs to describe !!");
    })

    test('test-3', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveTitle('Swag Labs');

    })


    test('test-4', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveTitle('Swag Labs');

    })

})

test('test-5', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

})

test('test-6', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

})




