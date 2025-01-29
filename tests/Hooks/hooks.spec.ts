import { test, expect } from '@playwright/test'



/*  beforeEach,afterEach: test.beforeEach(hookFunction),test.beforeEach(title,hookFunction)test.afterEach(hookFunction),
test.afterEach(title,hookFunction)   
1) executes before,after each test
2) in describe group, runs before each test in group, and it will be applied to only those tests, not to the tests outside the desribe block
3) if multiple beforeEach, afterEach hooks are added then the order of execution is based on the registration 
4) page fixture can be used inside beforeEach and afterEach, if we want new page to be used for each test


beforeAll, afterAll:test.beforeAll(hookFunction),test.beforeAll(title,hookFunction)test.afterAll(hookFunction),
test.afterAll(title,hookFunction)   
1) executes before,after all test once per worker
2) in describe group, runs before each test in group, and it will be applied to only those tests, not to the tests outside the desribe block
3) if multiple beforeALL, afterAll hooks are added then the order of execution is based on the registration 
4) page fixture cannot be used for beforeAll and afterAll, if we want only single page to be used then we have to create the page
manually, with browser context

if we have multiple test with same hook is present then order of executon is according to the roder in which they have writtten  

*/

test.beforeAll('Before all block', async () => {

    console.log("hi this from before all block !!");
})
test.afterAll('After all block', async () => {

    console.log("hi this from after all block !!");
})

test.beforeEach('Before each block', async () => {

    console.log("hi this frok before each block !!");
})
test.afterEach('After each block', async () => {

    console.log("hi this from after each block !!");
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

    test.beforeAll('Before all block in describe block', async () => {   //-- applied to only this block test

        console.log("hi this from before all block belongs to describe !!");
    })

    test.afterAll('After all block in describe block', async () => {   //-- applied to only this block test

        console.log("hi this from after all block belongs to describe !!");
    })
    test.beforeEach('Before each block in describe block', async () => {   //-- applied to only this block test

        console.log("hi this from before each block belongs to describe !!");
    })

    test.afterEach('After each block in describe block', async () => {   //-- applied to only this block test

        console.log("hi this from after each block belongs to describe !!");
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




