import { chromium, test } from "@playwright/test";


//{page}: this is one of an an isolated playwright fixture which creates the browser page on its own, but if we dont want to use the fixture
// then we have to create the browser page on our own
// we have many predefined fixtures like browser, context, page, browserName, request(APIrequest) and we can also create custom fixtures
//Example:with fixture
test("async,await with fixture concept", async ({ page }) => {   // if we have asynchronous steps present in the mthod body then we have to use sync

    await page.goto("https://www.google.com/");       //since these methods will return promise so we have to wait for the promise to return  
    await page.getByLabel('Google apps').click();       //some value ,that's why using await.

    // console.log("My first test");
})

//Example:without fixture

test("async await without fixture concept", async() => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com/");
    await page.getByLabel('Google apps').click();


})



